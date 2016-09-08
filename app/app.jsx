var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var About = require('About');
var Items = require('Items');

// load foundation
require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!applicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route name="galaxy" path="items/:item" component={Items}/>
      <Route name="galaxy2nd" path="items/:item" component={Items}/>
      <Route name="galaxynovels" path="items/:item" component={Items}/>
      <Route name="heavymetal" path="items/:item" component={Items}/>
      <Route name="vampirella" path="items/:item" component={Items}/>
      <Route name="1984" path="items/:item" component={Items}/>
      <IndexRoute component={About}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
