import React from 'react'
import accounting from 'accounting'
import coffeeIcon from '../images/coffee-icon.png'
import diningIcon from '../images/food-icon.png'
import travelIcon from '../images/plane-icon.png'
import clothingIcon from '../images/shirt-icon.png'
import offerIcon from '../images/offer-icon.png'

const OfferItem = ({ amount, brand, date, type }) =>
  <div className="line-item">
    <p className="icon-row">
      <img className="left" height={20} src={offerIcon} />          
      <span className="left" style={{ marginLeft: 5 }}>{brand}</span>    
      <span className="right">{type}</span>
    </p>

    <hr style={{ marginBottom: 30 }} />

    <p className="label">
      EARN
    </p>
    <p className="point-text">
      {accounting.formatNumber(amount)}
    </p>
    <p className="label">
      POINTS
    </p>

    <hr style={{ marginTop: 30 }} />

    <p style={{ marginBottom: 0 }}>
      Expires on {new Date(date).toDateString()}
    </p>
  </div>

export default OfferItem
