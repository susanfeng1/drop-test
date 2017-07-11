import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/logo-green.png'

@connect(state => ({
  points: state.points,
}))
export default class Application extends Component {

  render() {
    return (
      <div>
        <div className="top-bar">

          <img height={40} src={logo} />

          <nav>
            <a href="#/">
              Points
            </a>
            <a href="#/offers">
              Offers
            </a>
            <a href="#/rewards">
              Rewards
            </a>
          </nav>

        </div>

        {this.props.children}
      </div>
    )
  }
}
