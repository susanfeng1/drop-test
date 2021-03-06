import React, { Component } from 'react'
import { connect } from 'react-redux'
import RewardItem from '../components/RewardItem'
import RewardsModal from '../components/RewardsModal'
import Modal from 'react-bootstrap/lib/Modal'
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger'
import checkmarkIcon from '../images/checkmark-icon.png'
import warningIcon from '../images/warning-icon.png'
import * as redeem from '../actions'

const mapStateToProps = state => ({
    points: state.points,
    rewards: state.rewards,
    pointbalance: state.pointbalance
})

let redeemHandler = function(dispatch) {
  let redeemReward = function(cost) {
    dispatch(redeem.redeem(cost))
  }
  return {
    redeemReward,
  };
}

class Rewards extends Component {
  constructor(props) {
    super(props);
    this.redeemHandler = redeemHandler(this.props.dispatch);
 }

  state = {
    open: false,
    redeemMessage: "Your {0} reward has been redeemed. Enjoy!",
    insufficientMessage: "Oops! You don't have enough points to redeem your {0} reward yet.",
    modalMessage: "",
    modalCost: 0,
    modalIcon: warningIcon
  };

  redeemReward(event) {
    cost = event.currentTarget.getAttribute("data-cost");
    brand = event.currentTarget.getAttribute("data-brand");
    
    if (cost > this.props.pointbalance) {
      this.setState({modalMessage: this.state.insufficientMessage.replace("{0}", brand),
                        modalIcon: warningIcon});
    } else {
      this.setState({modalMessage: this.state.redeemMessage.replace("{0}", brand),
                        modalIcon: checkmarkIcon});
      this.redeemHandler.redeemReward(cost);
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

export default connect(
  mapStateToProps
)(Rewards)