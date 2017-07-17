export default function rewards (state = 0, action) {
  switch (action.type) {
    case 'REDEEM':
      return state - action.cost
    case 'SETBALANCE':
      return action.balance
    default:
      return state
  }
}
