Hi Drop team!

Below are some of my thoughts and clarifications for the assignment, 
as well as areas of improvement I would implement if not for time constraints.

Completion

- All three portions of the assignment are complete
- I've also taken a stab at each of the bonus tasks

Considerations

- Offers
    - Functionality that made sense to me is the ability to activate one-time offers
    - And to see that ongoing offers are already active
- Aesthetics
    - I tried to keep the look and feel of the modals, items, nav tabs consistent
    - Same major structure, slightly rounded corners
    - For modals, kept the same structure and similar info display structure
        - Empty header, body with main info and icons, footer with small right justified piece of information 
    - I utilized the provided icons and added two of my own - made sure the green checkmark was in Drop green ;)
- Refactoring
    - Each modal's body was refactored into its own component for modularity and to keep the code clean
    - Logic summing total # of points was refactored into a helper as it could be used across containers and compoments
- "Fun" Action
    - For the click / tap action on the Point Balance, I did a little CSS3 transition to zoom & then shrink the text
    - As well as adding some text shadow for emphasis as the numbers zoom in size

Improvements

- The current modal is from react-bootstrap
    - I've noticed the closing animations are a bit slow / stiff
    - Investigations would need to be done to see if this is due to:
        - CSS transitions
        - Delay in state refreshing
        - Performance issue
    - Or, in retrospect, I wouldn't have chosen the flow of an overlay modal for mobile
        - It would make more sense to have a fresh screen with back button functionality
        - Gives a lot more real estate for functionality and information display
        - Also it helps avoid a lot of the potential positioning / scrolling issues that always comes up with overlays
- MOARE redux actions
    - Cases to mark offers as Active / Inactive, Expired / Valid, etc
        - And corresponding visual indicators for these various states
    - Same goes for rewards
- Visuals / Info
    - Company brand logos instead of generic category logos
    - Introduce more properties to reducer objects for extra display info
- Language support / resource strings
    - Currently, all of the language and phrasing used in the app are hardcoded
    - If and when Drop goes international, language support will become crutial
    - Resource strings based on language codes will be necessary
- "Goals" feature
    - Allow users to set weekly / monthly earning goals
    - Show users their progress in the time cycle


I'll stop writing before this turns into a novel. 

Thanks for the opportunity, this was super fun and also a great way to learn some React.

Susan