var React = require('react');

var AuthorWrapper = React.createClass({
    render: function () {
        if (this.props.data)
            return <div>{this.props.data[0].name}</div>
        else
            return <div></div>
    }
});

var BookItem = React.createClass({
    render: function() {
        var imageSrc = 'https://archive.org/services/img/' + this.props.records.identifier;
        var pdfUrl = 'https://archive.org/download/' + this.props.records.identifier + '/' + this.props.records.identifier + '.pdf';
        var itemUrl = 'https://archive.org/details/' + this.props.records.identifier;
        return (
            <li>
                <a target="_blank" href={pdfUrl}>
                    <img src={imageSrc} className="cover"/>
                </a>
                <p>
                    <a target="_blank" href={itemUrl}>
                        {this.props.records.title}
                    </a>
                    {this.props.records.creator}
                </p>
            </li>
        );
  }
});

var BookGrid = React.createClass({
    // getInitialState: function () {
    // },
    // componentWillReceiveProps: function(nextProps) {
    // },
    // componentDidMount: function () {
    // },
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
            <ul className="grid">
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
