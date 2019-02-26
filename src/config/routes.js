import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Login from '../containers/login'
import HomePage from '../containers/homePage'
import HouseCharacters from '../containers/houseCharacters'
import Ranking from '../containers/ranking'
import Options from '../containers/options'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={HomePage} />
          <Route path="/house/:houseName" component={HouseCharacters} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/options" component={Options} />
        </Switch>
      </Router>
    )
  }
}
