import { createStore } from 'redux';

const initialState = 0;
const countReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'increment':
            return state + 1;
        default:
            return state;
    }
}

const store = createStore(countReducer);


// The most commonly used method, store.dispatch(), 
// can be used to dispatch an action to the store, indicating that you wish to update the state.
// Its only argument is an action object, which must have a type property describing the desired state change.

store.dispatch({ type: 'increment' });
store.dispatch({ type: 'increment' });
console.log(store.getState()); //logs 2

store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'decrement' });
store.dispatch({ type: 'decrement' });
console.log(store.getState()); //logs -1

//Creators

// An action creator is simply a function that returns an action object with a type property. 
//They are typically called and passed directly to the store.dispatch() method resulting in 
//fewer errors and an easier-to-read dispatch statement.

//Often, before the reducer of an application is even written, Redux programmers will write action 
//creators as a way of planning out which actions will be available to dispatch to the store.


//CREATORS MUST BE AT THE TOP OF THE FILE, UPON THE REDUCER

const increment = () =>{
    return { type: 'increment' }
}
const decrement = () =>{
    return { type: 'decrement' }
}


//Same dispatches from lines 20 to 27 but with creators...more 'simplicity'
store.dispatch(increment());
store.dispatch(increment());
console.log(store.getState());

store.dispatch(decrement());
store.dispatch(decrement());
store.dispatch(decrement());
console.log(store.getState());

//State changes responses
//actions dispatched to the store can be listened for and responded to using the store.subscribe() method.

const printCountStatus = () => {
    console.log(`The count is ${store.getState()}`);
};
store.subscribe(printCountStatus);


// Connecting a Redux store with any UI requires a few consistent steps, regardless of how the UI is implemented:
// Create a Redux store
// Render the initial state of the application.
// Subscribe to updates. Inside the subscription callback:
// Get the current store state
// Select the data needed by this piece of UI
// Update the UI with the data
// Respond to UI events by dispatching Redux actions


// In order for the UI to react to changes to the state of the store, you have to subscribe a 
// change listener to the store using store.subscribe()

