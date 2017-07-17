import React from 'react'
import accounting from 'accounting'

function glowText(event) {
  var element = event.currentTarget;
  event.currentTarget.className = "point-text glow-up glow";
  setTimeout(function () {
    this.className = "point-text glow-up";
  }.bind(element), 1000);
}

const PointBalance = ({ amount }) => (

  <div style={{ marginTop: 30, marginBottom: 45 }}>
    <p>
      <span className="point-text glow-up" 
        onClick={event => glowText(event)}>
        {accounting.formatNumber(amount)}
      </span>
    </p>
    <span
      className="label"
      style={{
        position: 'relative',
        top: -8,
        color: '#0de47f',
      }}>
      PTS
    </span>
  </div>
)

export default PointBalance
