/*
  This file serves as the entry point of the app.
  You can setup your router here if you use react's router.
  Otherwise you use ReactDOM to 'render' a specific component to the desired DOM
  element.
*/

// import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './config/routes'

// Here we tell react to setup the routes and populate the output in the
// element with the id 'app'
ReactDOM.render(Routes, document.getElementById('app'))
