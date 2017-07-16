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
            amount={this.props.points.map(this.getAmount).reduce(this.getSum)} 
          />
        }
      </div>
    )
  }

  setTab (event) {
    var tabs = event.target.parentElement.children
    
    Array.from(tabs).forEach(function(tab) {
      tab.className = "";
    });

    event.currentTarget.className = "active-tab";
  }

  render() {
    return (
      <div>
        <div className="top-bar">

          <img height={40} src={logo} />

          {this.sumAmount(this.props.points)}

          <nav className="nav-tabs">
            <a href="#/" onClick={event => this.setTab(event)} className="active-tab">
              Points
            </a>
            <a href="#/offers" onClick={event => this.setTab(event)}>
              Offers
            </a>
            <a href="#/rewards" onClick={event => this.setTab(event)}>
              Rewards
            </a>
          </nav>

        </div>

        {this.props.children}
      </div>
    )
  }
}


