// <Provider> component from the react-redux library gives the components 
// of an application access to the Redux store without the need to pass 
// the store directly to the React components through props.

import { Provider } from 'react-redux'
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById("root")
);

//for each React component, you need to define which data from the store that component needs access to.
// A selector function, or selector, is a pure function that selects data from the Redux store’s state.

// Takes state as an argument.
// Returns what is needed by the component from state.
export const selectFilter = state => state.filter;

// Select the `text` from each todo in an array.
export const selectTodoText = state => state.todos.map(
    todo => todo.text);

// Select the id values of completed todos in an array.
export const selectIsCompleteIDs = state => state.todos.filter(
    todo => todo.isComplete).map(todo => todo.id)


// USE SELECTOR
// useSelector() accomplishes two things:
// It returns data from the Redux store using selectors
// It subscribes a child component of <Provider /> to changes in the store.
// These tasks are both accomplished by calling useSelector() inside a component 
// definition and assigning its returned value to a variable.

import { useSelector } from 'react-redux';
import { selectTodos } from 'todosSlice.js';

export const Todos = () => {
    const todos = useSelector(selectTodos);
    return (
    <p>{todos}</p>
    )
};

// Calling useSelector()inside the component definition also subscribes the
//  Todos component to re-render if any changes occur in the todos portion of the Redux store.

// useSelector() can also use an inline selector as an argument:
const todos = useSelector(state => state.todos);

// Inline selectors can be useful if you need to use props for data retrieval.

export const Todo = (props) => {
    const todo = useSelector(state => state.todos[props.id]);
}


// USE DISPATCH 
// useDispatch() Hook

import { useSelector, useDispatch } from 'react-redux';
import { selectTodo } from './todoSlice.js';
import { removeTodo } from './todoSlice.js';

const Todo = () => {
    const todo = useSelector(selectTodo);
    const dispatch = useDispatch();
    
    return (
        <button onClick={() => dispatch(removeTodo(todo))}>
        {todo}
        </button>
    )
}
// The useDispatch hook allows you to dispatch actions from any component that is a descendent of the 
// <Provider> component, therefore avoiding passing a reference to store.dispatch through props. 
// Both approaches accomplish the same thing but useDispatch() avoids props drilling.