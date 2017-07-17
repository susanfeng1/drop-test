export function redeem(cost) {
  return {
    type: 'REDEEM',
    value: cost
  };
}