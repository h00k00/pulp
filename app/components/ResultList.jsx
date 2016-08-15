var React = require('react');

var AuthorWrapper = React.createClass({
    render: function () {
        if (this.props.data)
            return <div>{this.props.data[0].name}</div>
        else
            return <div></div>
    }
});

var BookRow = React.createClass({
    render: function() {
        var imageSrc = 'https://archive.org/services/img/' + this.props.records.identifier;
        var pdfUrl = 'https://archive.org/download/' + this.props.records.identifier + '/' + this.props.records.identifier + '.pdf';
        var itemUrl = 'https://archive.org/details/' + this.props.records.identifier;
        return (
          <tr>
                <td>
                    <a target="_blank" href={pdfUrl}>
                        <img src={imageSrc} className="cover"/>
                    </a>
                </td>
                <td className="book-title">
                    <a target="_blank" href={itemUrl}>
                        {this.props.records.title}
                    </a>
                </td>
                <td className="book-author">
                    {this.props.records.creator}
                </td>
          </tr>
        );
  }
});

var BookTable = React.createClass({
    // getInitialState: function () {
    // },
    // componentWillReceiveProps: function(nextProps) {
    // },
    // componentDidMount: function () {
    // },
    render: function() {
        var rows = [];
        var lastCategory = null;

        function checkCategory(category, value) {
            if (value.subjects != undefined) {
                return value.subjects.indexOf(category) != -1
            } else
            {
                return false;
            }
        }
    
        var that = this;
        this.props.records.forEach(function(records) {
            rows.push(<BookRow records={records} key={records.identifier} />);
        });
        return (
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th><h3>Nimike</h3></th>
                        <th><h3>Tekijä</h3></th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
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
                <BookTable
                    records = {this.props.records}/>
            </div>
        );
    }
});

module.exports = ResultList;
