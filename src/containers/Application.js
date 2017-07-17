import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../images/logo-green.png'
import PointBalance from '../components/PointBalance'
import SumArrayHelper from '../utils/SumArrayHelper'
import * as redeem from '../actions'

const mapStateToProps = state => ({
  points: state.points,
  pointbalance: state.pointbalance
})

let balanceHandler = function(dispatch) {
  let setBalance = function(balance) {
    dispatch(redeem.setBalance(balance))
  }
  return {
    setBalance,
  };
}

class Application extends Component { 
  constructor(props) {
    super(props);
    this.balanceHandler = balanceHandler(this.props.dispatch);
    this.balanceHandler.setBalance(this.props.points.map(SumArrayHelper.getAmount).reduce(SumArrayHelper.getSum));
  }
  
  /* Previous version of sumAmount, which calculated the sum from the points reducer
     Depricated as a reducer and actions were implemented (Bonus #1) to keep track of of a balance of points
     as the user redeems rewards.
  
  sumAmount () {
    return (
      <div>
        {
          <PointBalance 
            amount={this.props.points.map(SumArrayHelper.getAmount).reduce(SumArrayHelper.getSum)} 
          />
        }
      </div>
    )
  }
  */

  sumAmount () {
    return (
      <div>
        {
          <PointBalance 
            amount={this.props.pointbalance} 
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

          {this.sumAmount()}

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

export default connect(
  mapStateToProps
)(Application)

