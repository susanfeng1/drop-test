import React, { Component } from 'react'
import { connect } from 'react-redux'
import RewardItem from '../components/RewardItem'
import Modal from 'react-bootstrap/lib/Modal'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import checkmarkIcon from '../images/checkmark-icon.png'
import warningIcon from '../images/warning-icon.png'

@connect(state => ({
  points: state.points,
  rewards: state.rewards
}))

export default class Rewards extends Component {
  state = {
    open: false,
    redeemMessage: "Your {0} reward has been redeemed. Enjoy!",
    insufficientMessage: "Oops! You don't have enough points to redeem your {0} reward yet.",
    modalMessage: "",
    modalCost: 0,
    modalIcon: warningIcon
  };
  
  getAmount(point){
    return point.amount;
  }

  getSum(prev, next){
    return prev + next;
  }

  redeemReward(event) {
    cost = event.currentTarget.getAttribute("data-cost");
    brand = event.currentTarget.getAttribute("data-brand");
    if (cost > this.props.points.map(this.getAmount).reduce(this.getSum)) {
      this.setState({modalMessage: this.state.insufficientMessage.replace("{0}", brand),
                        modalIcon: warningIcon});
    } else {
      this.setState({modalMessage: this.state.redeemMessage.replace("{0}", brand),
                        modalIcon: checkmarkIcon});
    }
    this.setState({open: true, modalCost: cost});
  };

  closeDialog() {
    this.setState({open: false});
  };

  render() {
    return (
      <div className="container modal-container">
        <ul>
          {this.props.rewards.map((reward, index) =>
            <RewardItem
              key={`reward-${index}`}
              cost={reward.cost}
              brand={reward.brand}
              onClick={event => this.redeemReward(event)}
            />
          )}
        <Modal 
          show={this.state.open} 
          bsSize="sm" 
          container={this}
          onHide={() => this.closeDialog()}>
          <Modal.Body> 
            <span className="right closeModal" onClick={event => this.closeDialog()}>X</span>
            <hr style={{ marginTop: 30 }} />
            <img className="left modalIcon" height={20} src={this.state.modalIcon} />
            <p className="right modalMessage">{this.state.modalMessage}</p>
            <hr style={{ marginTop: 20, marginBottom: 30 }} />
            <span className="right" style={{ marginTop: -15 }}>Cost: {this.state.modalCost} pts</span>
          </Modal.Body>
        </Modal>
        </ul>
      </div>
    )
  }
}
