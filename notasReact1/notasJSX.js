//This note includes JSX conditionals, .map


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

/* The first argument could also be a variable, so long as that variable evaluates to a JSX expression.*/

const toDoList = (
    <ol>
      <li>Learn React</li>
      <li>Become a Developer</li>
    </ol>
  );
   
  ReactDOM.render(
    toDoList, 
    document.getElementById('app')
  );

/*class vs className */
//Can’t use the word class! You have to use className
// JSX gets translated into JavaScript, and class is a reserved word in JavaScript.
    <h1 className="big">Hey</h1>

// JavaScript in JSX in JavaScript

// this code will print as "2 + 3"
ReactDOM.render(
    <h1>2 + 3</h1>,
    document.getElementById('app')
  );

//   This happened because 2 + 3 is located in between <h1> and </h1> tags.

// To make apper the three we must put the expression betwen curly braces

ReactDOM.render(
    <h1>{2 + 3}</h1>,
    document.getElementById('app')
  );
//   JSX Conditionals: If Statements


    // First way
    if (user.age >= drinkingAge) {
        message = (
            <h1>
                Hey, check out this alcoholic beverage!
            </h1>
        );
    } else {
        message = (
            <h1>
                Hey, check out these earrings I got at Claire's!
            </h1>
        );
    }


    // Ternary operator x ? y : z
    //, x, y, and z are all JavaScript expressions.
    // x is evaluated as either “truthy” or “falsy.” If x is truthy, 
    // then the entire ternary operator returns y. If x is falsy, then 
    // the entire ternary operator returns z
    const headline = (
        <h1>
          { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
        </h1>
      );
    

    //JSX Conditionals: &&
    // && works best in conditionals that will sometimes do an action, but other times do nothing at all.
    const tasty = (
        <ul>
          <li>Applesauce</li>
          { !baby && <li>Pizza</li> }
          { age > 15 && <li>Brussels Sprouts</li> }
          { age > 20 && <li>Oysters</li> }
          { age > 25 && <li>Grappa</li> }
        </ul>
      );
    //If the expression on the left of the && evaluates as true, then the JSX on the right of the && will be rendered.
    //If the first expression is false, however, then the JSX to the right of the && will be ignored and not rendered.


//The .map method
//We call .map() on this array of strings, and the .map() call returns a new array of <li>s.
const strings = ['Home', 'Shop', 'About Me'];
 
const listItems = strings.map(string => <li>{string}</li>);
 
<ul>{listItems}</ul>


//Keys
//When you make a list in JSX, sometimes your list will need to include a JSX property called keys:
const peopleLis = people.map((person, i) =>
  <li key={'person_' + i}>{person}</li>
);


//React.createElement 