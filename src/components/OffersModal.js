import React from 'react'
import checkmarkIcon from '../images/checkmark-icon.png'

const OffersModal = ({ amount, brand, date, type, onClick}) =>
    <div className="modal-body">
        <span className="right close-modal" onClick={onClick}>X</span>

        <hr style={{ marginTop: 30 }} />
        
        <p style={{ textAlign: "center", marginTop: 30 }}>{amount} pts from <b>{brand}</b></p>
        
        <p style={{ height: 28, textAlign: "center", marginBottom: 30 }}>
            <button className={type == 'One-time' ? 'show green-button' : 'hide'} 
            style={{marginLeft: "auto", marginRight: "auto"}} onClick={onClick}>Activate Offer</button>
        
            <img className={type == 'Ongoing' ? 'show' : 'hide'} 
            style={{marginLeft: "auto", marginRight: "auto", marginBottom: 5 }} height={20} src={checkmarkIcon} />
        
            <span className={type == 'Ongoing' ? 'show label' : 'hide'} >Offer Active</span>
        </p>
        
        <hr style={{ marginTop: 20, marginBottom: 30 }} />
        
        <span className="right label" style={{ marginTop: -15 }}>{type}</span>
    </div>

export default OffersModal