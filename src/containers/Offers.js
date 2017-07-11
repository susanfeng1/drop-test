import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
  offers: state.offers,
}))
export default class Offers extends Component {
  render() {
    return (
      <div className="container">
        <ul>
          {this.props.offers.map((offer, index) =>
            <div
              key={`offer-${index}`}
              className="line-item">

              <p style={{ marginTop: 0 }}>
                Offer
              </p>

              <hr style={{ marginBottom: 30 }} />

              <p>
                <b>{offer.brand}</b>
              </p>

              <hr style={{ marginTop: 30 }} />

              <p style={{ marginBottom: 0 }}>
                Drop Offer
              </p>
            </div>
          )}
        </ul>
      </div>
    )
  }
}
