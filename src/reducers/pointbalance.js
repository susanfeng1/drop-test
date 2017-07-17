const initialState = 
  {
    balance: 2999,
  }

export default function rewards (state = initialState, action) {
  switch (action.type) {
    case 'REDEEM':
      return  {
      ...state,
      balance: balance - action.value }
    default:
      return state
  }
}
