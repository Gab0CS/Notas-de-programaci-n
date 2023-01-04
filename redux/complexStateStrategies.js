// SLICES

state = {
    todos: [
        {
            id: 0, 
            text: 'Complete the Learn Redux course', 
            isCompleted: false
        },
        {
            id: 1, 
            text: 'Build a counter app', 
            isCompleted: true
        },
        ],
        visibilityFilter: 'SHOW_INCOMPLETE'
};

// state.todos and state.visibilityFilter, are known as slices.
// Each slice typically represents a different feature of the entire application.

// most Redux applications begin with an initialState that allows the programmer to do two key things:
    // Plan out the general structure of the state
    // Provide an initial state value to the reducer function

// This may look like this
const initialState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
};
const todossReducer = (state = initialState, action) => {
  // rest of todosReducer logic omitted
};


//REDUCER COMPOSITION

// In this pattern, individual slice reducers are responsible for updating only one slice of the 
// application’s state, and their results are recombined by a rootReducer to form a single state object.


// Handles only `state.todos`.
const initialTodos = [
    { id: 0, text: 'learn redux', completed: false },
    { id: 1, text: 'build a redux app', completed: true },
    { id: 2, text: 'do a dance', completed: false },
];
const todosReducer = (todos = initialTodos, action) => {
    switch (action.type) {
        case 'todos/addTodo': 
            return [...todos, action.payload]
        case 'todos/toggleTodo':
            return todos.map(todo => {
            return (todo.id === action.payload.id) ? 
                { ...todo, completed: !todo.completed } : 
                {...todo};
            });
        default:
            return todos;
        }
};   
  // Handles only `state.filter`
const initialFilter = 'SHOW_INCOMPLETE';
const filterReducer = (filter = initialFilter, action) => {
        switch (action.type) {
            case 'filter/setFilter':
                return action.payload;
            default:
                return filter;
        };
}
const rootReducer = (state = {}, action) => {
    const nextState = {
    todos: todosReducer(state.todos, action),
    filter: filterReducer(state.filter, action)
    };
    return nextState;
};

// when an action is dispatched to the store
    //The rootReducer calls each slice reducer, 
    //regardless of the action.type, with the incoming action and the appropriate slice of the state as arguments

    // The slice reducers each determine if they need to update their slice of state, or simply return their slice 
    // of state unchanged.

    // The rootReducer reassembles the updated slice values in a new state object

// Combine reducers pattern
    //The Redux package helps to make the root reducer by providing a utility function called combineReducers() 
    //which handles this boilerplate for us:


import { createStore, combineReducers } from 'redux' 
// todosReducer and filterReducer omitted.
const reducers = {
    todos: todosReducer,
    filter: filterReducer
};
const rootReducer2 = combineReducers(reducers);
const store = createStore(rootReducer2);

// The last 6 lines of this example can be rewritten inline:

const store2 = createStore(combineReducers({
    todos: todosReducer,
    filter: filterReducer
}));