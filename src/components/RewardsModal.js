import React from 'react'

const RewardsModal = ({ message, cost, icon, onClick}) =>
    <div className="modal-body">
        <span className="right close-modal" onClick={onClick}>X</span>

        <hr style={{ marginTop: 30 }} />
        
        <img className="left modal-icon" height={20} src={icon} />
        <p className="right modal-message">{message}</p>
        
        <hr style={{ marginTop: 20, marginBottom: 30 }} />
        
        <span className="right label" style={{ marginTop: -15 }}>Cost: {cost} pts</span>
    </div>

export default RewardsModal