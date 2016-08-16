import MobileNav from 'react-icons/lib/io/navicon-round';
var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav = React.createClass({
    getInitialState: function () {
        return {
            windowWidth: window.innerWidth,
            mobileNavVisible: false
        };
    },
    handleResize: function () {
        this.setState({windowWidth: window.innerWidth});
    },
    componentDidMount: function () {
        window.addEventListener('resize', this.handleResize);
    },
    componentWillUnmount: function () {
        window.removeEventListener('resize', this.handleResize);
    },
    onSearch: function (e) {
        e.preventDefault;
    
        var location = this.refs.search.value;
        var encodedLocation = encodeURIComponent(location);
    
        if (location.length > 0) {
            this.refs.search.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    navigationLinks: function () {
        return (
            <ul className={this.state.mobileNavVisible ? 'mobile-menu' : 'menu'}>
                <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Aloitus</IndexLink>
                </li>
                <li><Link to="items/Galaxy"
                        activeClassName="active"
                        activeStyle={{fontWeight: 'bold'}}>
                        Galaxy Magazine</Link>
                </li>
                <li><Link to="items/Galaxy 2nd Series"
                        activeClassName="active"
                        activeStyle={{fontWeight: 'bold'}}>
                        Galaxy Magazine 2nd Series</Link>
                </li>
                <li><Link to="items/Galaxy Novels"
                        activeClassName="active"
                        activeStyle={{fontWeight: 'bold'}}>
                        Galaxy Novels</Link>
                </li>
                <li><Link to="items/Heavy Metal"
                        activeClassName="active"
                        activeStyle={{fontWeight: 'bold'}}>
                        Heavy Metal Magazine</Link>
                </li>
            </ul>
        );
    },
    renderMobileNav: function () {
        if(this.state.mobileNavVisible) {
            return this.navigationLinks();
        }
    },
    handleNavClick: function () {
        if(!this.state.mobileNavVisible) {
            this.setState({mobileNavVisible: true});
        } else {
            this.setState({mobileNavVisible: false});
        }
    },
    render: function () {
        if (this.state.windowWidth <= 1080){
            return (
                <div>
                    <div className = "top-bar" >
                        < div className = "top-bar-left menu-text">
                                    Vaski uutuudet
                        </div>
                        <p onClick={this.handleNavClick}>
                            <MobileNav className="top-bar-right"/>
                        </p>
                    </div>
                    {this.renderMobileNav()}
                </div>
            );
        } else {
            return (
                <div className = "top-bar" >
                    < div className = "top-bar-left menu-text" >
                        PULP
                    </div>
                    < div className = "top-bar-left" >
                        {this.navigationLinks()}
                    </div>
                </div>
            );
        }
    }
});

module.exports = Nav;
