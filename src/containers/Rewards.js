import React, { Component } from 'react'
import { connect } from 'react-redux'
import RewardItem from '../components/RewardItem'
import RewardsModal from '../components/RewardsModal'
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
              amount={reward.amount}
              type={reward.type}
              onClick={event => this.redeemReward(event)}
            />
          )}
        
        <Modal 
          show={this.state.open} 
          bsSize="sm" 
          container={this}
          onHide={() => this.closeDialog()}>

          <RewardsModal 
            message={this.state.modalMessage}
            cost={this.state.modalCost}
            icon={this.state.modalIcon}
            onClick={() => this.closeDialog()}
          />
        
        </Modal>
        </ul>
      </div>
    )
  }
}
