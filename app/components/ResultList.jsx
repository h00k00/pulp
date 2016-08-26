var React = require('react');

import { Button, Modal } from 'react-bootstrap';

var AuthorWrapper = React.createClass({
    render: function () {
        if (this.props.data)
            return <div>{this.props.data[0].name}</div>
        else
            return <div></div>
    }
});

var BookItem = React.createClass({
    getInitialState() {
        return { showModal: false };
    },
    close() {
        this.setState({ showModal: false });
    },
    handleClick: function() {
        this.setState({ showModal: true });
    },
    render: function() {

        var imageSrc = 'https://archive.org/services/img/' + this.props.records.identifier;
        var pdfUrl = 'https://archive.org/download/' + this.props.records.identifier + '/' + this.props.records.identifier + '.pdf';
        var itemUrl = 'https://archive.org/details/' + this.props.records.identifier;
        return (
            <li>
                <img src={imageSrc} onClick={this.handleClick}/>
                <p>
                    <a target="_blank" href={itemUrl}>
                        {this.props.records.title}
                    </a>
                </p>
                <p>
                    {this.props.records.creator}
                </p>

                <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>{this.props.records.title}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <img src={imageSrc}/>
                    <hr />
                    <h4>Description</h4>
                    <p>{this.props.records.description}</p>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button target="_blank" href={itemUrl}>Visit website</Button>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
                </Modal>

            </li>
        );
  }
});

var BookGrid = React.createClass({
    render: function() {
        var itemList = [];
        var lastCategory = null;
    
        function checkCategory(category, value) {
            if (value.subjects != undefined) {
                return value.subjects.indexOf(category) != -1
            }
            else {
                return false;
            }
        }
    
        var that = this;
        this.props.records.forEach(function(records) {
            itemList.push(<BookItem records = {records} key = {records.identifier}/>);
        });
    
        return (
            <ul className="grid" id="grid">
                {itemList}
            </ul>
        );
    }
});
    
var ResultList = React.createClass({

    getInitialState: function () {
        return {
        };
    },
    componentWillReceiveProps: function(nextProps) {
    },
    componentDidMount: function () {
    },
    render: function() {
        return (
            <div id="results">
                <BookGrid records = {this.props.records}/>
            </div>
        );
    }
});


module.exports = ResultList;
