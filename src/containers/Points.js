import React, { Component } from 'react'
import { connect } from 'react-redux'
import PointItem from '../components/PointItem'
import Modal from 'react-bootstrap/lib/Modal'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import coffeeIcon from '../images/coffee-icon.png'
import diningIcon from '../images/food-icon.png'
import travelIcon from '../images/plane-icon.png'
import clothingIcon from '../images/shirt-icon.png'

@connect(state => ({
  points: state.points,
}))
export default class Points extends Component {
  state = {
    open: false,
    modalAmount: 0,
    modalBrand: "",
    modalType: "",
    modalDate: "2017-06-25"
  }

  activateOffer(event) {
    amount = event.currentTarget.getAttribute("data-amount");
    brand = event.currentTarget.getAttribute("data-brand");
    type = event.currentTarget.getAttribute("data-type");
    date = event.currentTarget.getAttribute("data-date");
    
    this.setState({open: true, modalAmount: amount, modalBrand: brand, modalType: type, modalDate: date});    
  }

  closeDialog() {
    this.setState({open: false});
  };

  render() {
    return (
      <div className="container modal-container">
        <ul>
          {this.props.points.map((point, index) =>
            <PointItem
              key={`point-${index}`}
              amount={point.amount}
              brand={point.brand}
              date={point.date}
              type={point.type}
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
            
            <p style={{ textAlign: "center", marginTop: 30 }}>You earned <b>{this.state.modalAmount}</b> pts</p>
            
            <p style={{ height: 40 }}>
              <img className={this.state.modalType == 'Coffee' ? 'show reward-icon' : 'hide'} height={40} src={coffeeIcon} />
              <img className={this.state.modalType == 'Dining' ? 'show reward-icon' : 'hide'} height={40} src={diningIcon} />
              <img className={this.state.modalType == 'Travel' ? 'show reward-icon' : 'hide'} height={40} src={travelIcon} />
              <img className={this.state.modalType == 'Misc' ? 'show reward-icon' : 'hide'} height={40} src={clothingIcon} />
            </p>
            
            <p style={{ textAlign: "center" }} >from <b>{this.state.modalBrand}</b></p>

            <hr style={{ marginTop: 20, marginBottom: 30 }} />

            <span className="right label" style={{ marginTop: -15 }}>{new Date(this.state.modalDate).toDateString()}</span>
            
          </Modal.Body>
        
        </Modal>        
      </div>
    )
  }
}
