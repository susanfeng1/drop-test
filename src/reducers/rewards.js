const initialState = [
  {
    brand: 'Amazon',
    cost: 2500,
    type: 'Misc',
    amount: 10,
    id: 0,
  },
  {
    brand: 'Tim Hortons',
    cost: 5000,
    type: 'Coffee',
    amount: 15,
    id: 1,
  },
  {
    brand: 'Starbucks',
    cost: 10000,
    type: 'Coffee',
    amount: 20,
    id: 2,
  },
    {
    brand: 'Air Canada',
    cost: 25000,
    type: 'Travel',
    amount: 50,
    id: 3,
  },
  {
    brand: 'Freshii',
    cost: 10000,
    type: 'Dining',
    amount: 20,
    id: 4,
  },
]

export default function rewards(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
