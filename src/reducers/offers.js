const initialState = [
  {
    brand: 'Amazon',
    amount: 10,
    date: '2017-07-01',
    id: 0,
    type: 'One-time'
  },
  {
    brand: 'Tim Hortons',
    amount: 5,
    date: '2017-06-02',
    id: 1,
    type: 'Ongoing'
  },
  {
    brand: 'Starbucks',
    amount: 8,
    date: '2017-06-01',
    id: 2,
    type: 'Ongoing'
  },
  {
    brand: 'Metro',
    amount: 9,
    date: '2017-07-01',
    id: 0,
    type: 'One-time'
  },
  {
    brand: 'Safeway',
    amount: 3,
    date: '2017-06-03',
    id: 1,
    type: 'One-time'
  },
]

export default function offers(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
