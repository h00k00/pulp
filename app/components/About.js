import React, { Component, PropTypes }  from 'react';
import ErrorModal from 'ErrorModal';
import apiArchiveOrg from 'apiArchiveOrg';

class About extends Component {
  constructor(props) {
    super(props);
      this.state = {
        isLoading : false,
      };
  }
  componentDidMount() {
    let location = this.props.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  componentWillReceiveProps(newProps) {
    let location = newProps.location.query.location;

    if (location && location.length > 0) {
      this.handleSearch(location);
      window.location.hash = '#/';
    }
  }
  render() {
    let {location, temp, errorMessage} = this.state;
    const isLoading = this.props.isLoading;

    function renderMessage (){
        return <p>Magazines from Internet Archive</p>;
    }

    function renderError (){
      if (typeof errorMessage == 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1>PULP</h1>
        {renderMessage()}
      </div>
    )
  }
};

export default About;
