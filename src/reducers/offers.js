const initialState = [
  {
    brand: 'Amazon',
    amount: 10,
    date: '2017-07-01',
    id: 0,
  },
  {
    brand: 'Tim Hortons',
    amount: 5,
    date: '2017-06-02',
    id: 1,
  },
  {
    brand: 'Starbucks',
    amount: 8,
    date: '2017-06-01',
    id: 2,
  },
  {
    brand: 'Metro',
    amount: 9,
    date: '2017-07-01',
    id: 0,
  },
  {
    brand: 'Safeway',
    amount: 3,
    date: '2017-06-03',
    id: 1,
  },
]

export default function offers(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
