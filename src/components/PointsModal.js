import React from 'react'
import coffeeIcon from '../images/coffee-icon.png'
import diningIcon from '../images/food-icon.png'
import travelIcon from '../images/plane-icon.png'
import clothingIcon from '../images/shirt-icon.png'

const PointsModal = ({ amount, brand, date, type, onClick}) =>
    <div className="modal-body">
        <span className="right close-modal" onClick={onClick}>X</span>

        <hr style={{ marginTop: 30 }} />
        
        <p style={{ textAlign: "center", marginTop: 30 }}>You earned <b>{amount}</b> pts</p>
        
        <p style={{ height: 40 }}>
            <img className={type == 'Coffee' ? 'show reward-icon' : 'hide'} height={40} src={coffeeIcon} />
            <img className={type == 'Dining' ? 'show reward-icon' : 'hide'} height={40} src={diningIcon} />
            <img className={type == 'Travel' ? 'show reward-icon' : 'hide'} height={40} src={travelIcon} />
            <img className={type == 'Misc' ? 'show reward-icon' : 'hide'} height={40} src={clothingIcon} />
        </p>
        
        <p style={{ textAlign: "center" }} >from <b>{brand}</b></p>

        <hr style={{ marginTop: 20, marginBottom: 30 }} />

        <span className="right label" style={{ marginTop: -15 }}>{new Date(date).toDateString()}</span>
    </div>

export default PointsModal