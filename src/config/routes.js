import React from 'react'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import App from '../components/App'
import Home from '../components/Home'
import Example from '../components/Example'

export default (
<Router history={hashHistory}>
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="example" component={Example} />
  </Route>
</Router>
)
