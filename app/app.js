import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import Main from 'Main';
import About from 'About';
import Items from 'Items';

// App css
require('style-loader!css-loader!applicationStyles');

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
