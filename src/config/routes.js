/*
  routes.js

  This file is where you define all the 'routes' in your react application.
  For instance, if you want something fancy rendered when the user navigates to
  '/' then you can add in a route to match that path, and specify a component
  to be rendered for that page.

  Each 'path' should be ascribed a component to display.  This component may be
  composit of many other nested components.
*/


import React from 'react'
import { Route, Router, IndexRoute, browserHistory } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import Example from '../components/Example'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="example" component={Example} />
    </Route>
  </Router>
)
