var React = require('react');
var ErrorModal = require('ErrorModal');
var apiArchiveOrg = require('apiArchiveOrg');

var Aloitus = React.createClass({
  render: function () {

    function renderMessage (){
        return <p>Magazines from Internet Archive</p>;
    }
    
    return (
      <div>
        <h1 className="text-center page-title">PULP</h1>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Aloitus;
