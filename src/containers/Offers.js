import React, { Component } from 'react'
import { connect } from 'react-redux'
import OfferItem from '../components/OfferItem'

@connect(state => ({
  offers: state.offers,
}))
export default class Offers extends Component {
  render() {
    return (
      <div className="container">
        <ul>
          {this.props.offers.map((offer, index) =>
            <OfferItem 
              key={`offer-${index}`}
              amount={offer.amount}
              brand={offer.brand}
              date={offer.date}
              type={offer.type}
            />
          )}
        </ul>
      </div>
    )
  }
}
