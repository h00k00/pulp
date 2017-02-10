import MobileNav from 'react-icons/lib/io/navicon-round';
import React, { Component, PropTypes } from 'react';
import {Link, IndexLink}from 'react-router';

class NavBar extends Component {
  render() {
      return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <div className="navbar-brand">
            PULP
          </div>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar" className="navbar-collapse collapse" aria-expanded="false">
          <ul className="nav navbar-nav">
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink>
            </li>
              <li><Link to="items/Galaxy"
                    activeClassName="active"
                    activeStyle={{fontWeight: 'bold'}}>
                    Galaxy</Link>
              </li>
              <li><Link to="items/Galaxy 2nd Series"
                    activeClassName="active"
                    activeStyle={{fontWeight: 'bold'}}>
                    Galaxy 2nd Series</Link>
              </li>
              <li><Link to="items/Galaxy Novels"
                    activeClassName="active"
                    activeStyle={{fontWeight: 'bold'}}>
                    Galaxy Novels</Link>
              </li>
              <li><Link to="items/Heavy Metal"
                    activeClassName="active"
                    activeStyle={{fontWeight: 'bold'}}>
                    Heavy Metal</Link>
              </li>
              <li><Link to="items/Vampirella"
                    activeClassName="active"
                    activeStyle={{fontWeight: 'bold'}}>
                    Vampirella</Link>
              </li>
              <li><Link to="items/1984"
                    activeClassName="active"
                    activeStyle={{fontWeight: 'bold'}}>
                    1984</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
        windowWidth: window.innerWidth,
        // mobileNavVisible: false
    };
    this.onChange = this.onChange.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }
    handleResize() {
        this.setState({windowWidth: window.innerWidth});
    }
    componentDidMount() {
        window.addEventListener('resize', this.handleResize);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
    }
    onChange(state) {
      this.setState(state);
    }
    onSearch(e) {
        e.preventDefault;

        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);

        if (location.length > 0) {
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    }
    render() {
      return (
        <NavBar/>
      )
    }
};

export default Nav;
