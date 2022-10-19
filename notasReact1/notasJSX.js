import React from 'react';
import ReactDOM from 'react-dom';


/*JSX multiline expression needs to be wraped in parentheses and always need an outhermost element. */
const theExample = (
    <div>
        <a href="https://www.example.com">
            <h1>
                Click me!
            </h1>
        </a>
    </div>
  );

/* ReactDOM.render()‘s first argument should evaluate to a JSX expression*/
/* */
ReactDOM.render(<h1>Rendering..</h1>, document.getElementById('app'));

