export const redeem = cost => {
  return {
    type: 'REDEEM',
    cost
  };
}

export const setBalance = balance => {
  return {
    type: 'SETBALANCE',
    balance
  };
}