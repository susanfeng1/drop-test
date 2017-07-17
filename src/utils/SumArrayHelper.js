const sumArrayHelper = {
  getAmount(point){
    return point.amount;
  },

  getSum(prev, next){
    return prev + next;
  }
}

export default sumArrayHelper;