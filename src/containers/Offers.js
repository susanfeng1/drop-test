import React, { Component } from 'react'
import { connect } from 'react-redux'
import OfferItem from '../components/OfferItem'
import OffersModal from '../components/OffersModal'
import Modal from 'react-bootstrap/lib/Modal'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'

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

          <OffersModal 
            amount={this.state.modalAmount}
            brand={this.state.modalBrand}
            type={this.state.modalType}
            onClick={() => this.closeDialog()}
          />
        
        </Modal>          
      </div>
    )
  }
}
