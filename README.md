## Welcome to the Drop React Test!

If you haven't already, you will need to run:

  `npm install`
  `npm start`

from the terminal in this directory in order to spin up the server.

It should be running at `localhost:3008`, so navigate there in your browser (preferably *Chrome*)

*Take a look around.*

There are 3 tabs:
  - The default `Points` tab
  - The `Offers` tab
  - And the `Rewards` tab

Everything is populated with mock data from the `reducers` folder



#####  For your first task, I would like you to add the PointBalance component to the app

  - The PointBalance component should be rendered below the logo, but above the nav bar

  - The PointBalance component takes one prop, `amount`, where `amount` is the amount of points the user has earned

  - The Points container receives a prop, `points`, which is an array of all the point objects the user has earned

  - Use the points array to compute the users point balance and pass it to the PointBalance component



##### For your next task, I would like you to improve the Offers tab

  - Currently, the OfferItem component is hard coded within the render function

  - Pull the rendering logic for the OfferItem out of the render function and in a new component in its own file

  - Right now the user cannot tell much about the offer from the OfferItem, but:
    - we have `amount` on the offer, which represents the amount of points they earn per dollar spent
    - we have `type` on the offer, which represents whether it can earn once, or many times

  - Make better use of the information available in the offer to tell the user more about it (Feel free to add as much or as little as you like)

  - Ensure you make good use of props to make the OfferItem component easy to understand



##### For your final task, I would like you to add functionality to the Rewards tab

  - Currently, there is no way to redeem a reward in the app

  - When a user clicks on a reward, we should bring up an alert:

    - If they have enough points, the alert should let them know the reward was redeemed

    - If they do not have enough points, the alert should let them know they are short points

  - In addition, update the styling of the RewardItem component to be distinct from PointItem (How it should look is up to you!)



##### Some bonus tasks:

  - Add a reducer case and appropriate redux actions such that when a user redeems a reward, their point balance is updated to reflect their new balance

  - Highlight the active tab with Drop green (#0de47f)

  - Make offers visually distinctive from points and rewards

  - Add click handlers to points and offers as well, with whatever functionality seems right

  - Make something *fun* happen when the user taps their point balance


*Thanks for being a Drop member* ;)
