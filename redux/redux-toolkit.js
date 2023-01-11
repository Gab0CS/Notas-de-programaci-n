// npm install @reduxjs/toolkit

// createSlice()
// createSlice() has one parameter, options, which is an object with the following properties
// name: a string that is used as the prefix for generated action types
// initialState: the initial state value for the reducer
// reducers: an object of methods, where the keys determine the action type strings that can update the state

const options = {
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => { 
            return [
            ...state,
            {
                id: action.payload.id,
                text: action.payload.text,
                completed: false
            }
            ]
        },
        toggleTodo: (state, action) => {
            return state.map(todo =>
            (todo.id === action.payload.id) ? { ...todo, completed: !todo.completed } : todo
            )
        }
    }
}    
const todosSlice = createSlice(options);

// IMMER 
// Immer uses a special JS object called a Proxy to wrap the data you provide and 
// lets you write code that “mutates” that wrapped data.
// So instead of the above slice you can write slices like this:

const todosSlice2 = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            state.push({ 
            ...action.payload, 
            completed: false 
            })
        },
        toggleTodo: (state, action) => {
            const todo = state.find(todo => todo.id === action.payload.id)
            if (todo) {
            todo.completed = !todo.completed
            }
        }
    }
})

/* Object returned by todosSlice */
const objectRetuned = {
    name: 'todos',
    reducer: (state, action) => newState,
    actions: {
        addTodo: (payload) => ({type: 'todos/addTodo', payload}),
        toggleTodo: (payload) => ({type: 'todos/toggleTodo', payload})
    },
    // case reducers field omitted
}

console.log(todosSlice.actions.addTodo('walk dog'))
// {type: 'todos/addTodo', payload: 'walk dog'}

// we’ll use a Redux community code convention called the “ducks” pattern, which suggests 
// that we use named exports for the action creators and export them separately from the reducer.
export const { addTodo, toggleTodo } = todosSlice.actions;

// While the todosSlice.actions are exported as named exports, the todosSlice.reducer 
// value is used as the default export.

export default todosSlice.reducer

// Converting the Store to Use configureStore()
// configureStore() wraps around the Redux library’s createStore() method and the combineReducers() method, 
// and handles most of the store setup for us automatically.

import { configureStore } from '@reduxjs/toolkit'

import todosReducer from './features/todos/todosSlice'
import filtersReducer from './features/filters/filtersSlice'

const store = configureStore({
    reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    todos: todosReducer,
    filters: filtersReducer
    }
})

// export default store