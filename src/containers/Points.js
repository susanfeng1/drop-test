import React, { Component } from 'react'
import { connect } from 'react-redux'
import PointItem from '../components/PointItem'
import PointsModal from '../components/PointsModal'
import Modal from 'react-bootstrap/lib/Modal'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'

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

          <PointsModal 
            amount={this.state.modalAmount}
            brand={this.state.modalBrand}
            date={this.state.modalDate}
            type={this.state.modalType}
            onClick={() => this.closeDialog()}
          />

        </Modal>        
      </div>
    )
  }
}
