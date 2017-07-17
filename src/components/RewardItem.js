import React from 'react'
import accounting from 'accounting'
import coffeeIcon from '../images/coffee-icon.png'
import diningIcon from '../images/food-icon.png'
import travelIcon from '../images/plane-icon.png'
import clothingIcon from '../images/shirt-icon.png'

const RewardItem = ({ cost, brand, amount, type, onClick}) =>
  <div className="line-item" data-cost={cost} data-brand={brand} onClick={onClick}>
    <p style={{ marginTop: 0 }}>
      Click to Redeem
    </p>

    <hr style={{ marginBottom: 30 }} />

    <span><b>{brand}</b></span>

    <p style={{ height: 40 }}>
      <img className={type == 'Coffee' ? 'show rewardIcon' : 'hide'} height={40} src={coffeeIcon} />
      <img className={type == 'Dining' ? 'show rewardIcon' : 'hide'} height={40} src={diningIcon} />
      <img className={type == 'Travel' ? 'show rewardIcon' : 'hide'} height={40} src={travelIcon} />
      <img className={type == 'Misc' ? 'show rewardIcon' : 'hide'} height={40} src={clothingIcon} />
    </p>

    <p><b>${amount}</b> gift card</p>

    <hr style={{ marginTop: 30 }} />

    <p style={{ marginBottom: 0 }}>
      This reward costs {accounting.formatNumber(cost)} pts
    </p>
  </div>

export default RewardItem
