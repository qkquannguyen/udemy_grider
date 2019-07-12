// --- NOTE: Rules of Reducers
// ---  1. Must return any value other than 'undefined'
// ---  2. Produces 'state', or data to be used inside of your app using only previous state and
// ------- the action (reducers are pure)
// ---  3. Must not return 'out of itself' to decide what value to return
// ---  4. Must not mutate its input 'state' argument
// ------- However, the truth hurts. You can do this all, day every day.
// ------- The one corner case s
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};