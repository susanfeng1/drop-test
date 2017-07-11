import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import { Router, Route, hashHistory, IndexRedirect } from 'react-router'

import Application from './src/containers/Application'
import Points from './src/containers/Points'
import Offers from './src/containers/Offers'
import Rewards from './src/containers/Rewards'

import points from './src/reducers/points'
import offers from './src/reducers/offers'
import rewards from './src/reducers/rewards'

import './index.css'

const store = createStore(combineReducers({ points, offers, rewards }))

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Application}>
        <IndexRedirect to="/points" />
        <Route path="points" component={Points} />
        <Route path="offers" component={Offers} />
        <Route path="rewards" component={Rewards} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
