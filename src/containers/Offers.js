import React, { Component } from 'react'
import { connect } from 'react-redux'
import OfferItem from '../components/OfferItem'
import Modal from 'react-bootstrap/lib/Modal'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import checkmarkIcon from '../images/checkmark-icon.png'

@connect(state => ({
  offers: state.offers,
}))
export default class Offers extends Component {
  state = {
    open: false,
    modalAmount: 0,
    modalBrand: "",
    modalType: ""
  }

  activateOffer(event) {
    amount = event.currentTarget.getAttribute("data-amount");
    brand = event.currentTarget.getAttribute("data-brand");
    type = event.currentTarget.getAttribute("data-type");
    
    this.setState({open: true, modalAmount: amount, modalBrand: brand, modalType: type});
  }

  closeDialog() {
    this.setState({open: false});
  };

  render() {
    return (
      <div className="container modal-container">
        <ul>
          {this.props.offers.map((offer, index) =>
            <OfferItem 
              key={`offer-${index}`}
              amount={offer.amount}
              brand={offer.brand}
              date={offer.date}
              type={offer.type}
              onClick={event => this.activateOffer(event)}
            />
          )}
        </ul>
        <Modal 
          show={this.state.open} 
          bsSize="sm" 
          container={this}
          onHide={() => this.closeDialog()}>

          <Modal.Body> 

            <span className="right close-modal" onClick={event => this.closeDialog()}>X</span>

            <hr style={{ marginTop: 30 }} />
            
            <p style={{ textAlign: "center", marginTop: 30 }}>{this.state.modalAmount} pts from <b>{this.state.modalBrand}</b></p>
            
            <p style={{ height: 28, textAlign: "center", marginBottom: 30 }}>
              <button className={this.state.modalType == 'One-time' ? 'show green-button' : 'hide'} 
                style={{marginLeft: "auto", marginRight: "auto"}} onClick={event => this.closeDialog()}>Activate Offer</button>
            
              <img className={this.state.modalType == 'Ongoing' ? 'show' : 'hide'} 
                style={{marginLeft: "auto", marginRight: "auto", marginBottom: 5 }} height={20} src={checkmarkIcon} />
            
              <span className={this.state.modalType == 'Ongoing' ? 'show label' : 'hide'} >Offer Active</span>
            </p>
            
            <hr style={{ marginTop: 20, marginBottom: 30 }} />
            
            <span className="right label" style={{ marginTop: -15 }}>{this.state.modalType}</span>

          </Modal.Body>
        
        </Modal>          
      </div>
    )
  }
}
