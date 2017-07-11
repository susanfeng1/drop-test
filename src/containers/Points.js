import React, { Component } from 'react'
import { connect } from 'react-redux'
import PointItem from '../components/PointItem'

@connect(state => ({
  points: state.points,
}))
export default class Points extends Component {
  render() {
    return (
      <div className="container">
        <ul>
          {this.props.points.map((point, index) =>
            <PointItem
              key={`point-${index}`}
              amount={point.amount}
              brand={point.brand}
              date={point.date}
            />
          )}
        </ul>
      </div>
    )
  }
}
