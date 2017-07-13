import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/logo-green.png'
import PointBalance from '../components/PointBalance'

@connect(state => ({
  points: state.points,
}))
export default class Application extends Component {

  getAmount(point){
    return point.amount;
  }

  getSum(prev, next){
    return prev + next;
  }
  
  sumAmount (points) {
    return (
      <div>
        {
          <PointBalance 
            amount={points.map(this.getAmount).reduce(this.getSum)} 
          />
        }
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="top-bar">

          <img height={40} src={logo} />

          {this.sumAmount(this.props.points)}

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
