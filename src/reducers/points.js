const initialState = [
  {
    brand: 'Amazon',
    amount: 1643,
    date: '2017-07-01',
    id: 0,
  },
  {
    brand: 'Tim Hortons',
    amount: 120,
    date: '2017-06-25',
    id: 1,
  },
  {
    brand: 'Starbucks',
    amount: 235,
    date: '2017-06-21',
    id: 2,
  },
  {
    brand: 'Metro',
    amount: 785,
    date: '2017-07-01',
    id: 0,
  },
  {
    brand: 'Safeway',
    amount: 163,
    date: '2017-06-25',
    id: 1,
  },
  {
    brand: 'Tim Hortons',
    amount: 53,
    date: '2017-06-21',
    id: 2,
  },
]

export default function points(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
