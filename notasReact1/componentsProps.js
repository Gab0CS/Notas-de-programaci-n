// Information that gets passed from one component to another is known as “props.”

// Every component has something called props.

// A component’s props is an object. It holds information about that component.

//This holds just a stringifyed version of the props
class PropsDisplayer extends React.Component {
    render() {
        const stringProps = JSON.stringify(this.props);
  
      return (
        <div>
          <h1>CHECK OUT MY PROPS OBJECT</h1>
          <h2>{stringProps}</h2>
        </div>
      );
    }
  }

//To pass information to a component i have to give that component an attribute

<MyComponent foo="bar" />

ReactDOM.render(<PropsDisplayer myProp = "Hello"/>,
document.getElementById('app'));

// information that isn’t a string, then wrap that information in curly braces.

    // <Greeting myInfo={["top", "secret", "lol"]} />


// Often i want a component to display the information that i pass, to do that:
  //Find the component class that is going to receive that information.
  //Include this.props.name-of-information in that component class’s render method’s return statement.
  
  class Greeting extends React.Component {
    render() {
      return <h1>Hi there, {this.props.firstName}!</h1>;
    }
  }
  
  ReactDOM.render(
    <Greeting firstName='Canseco' />, 
    document.getElementById('app')
  );


//PASSING PROPS FROM COMPONENT TO COMPONENT
// props is the name of the object that stores passed-in information. this.props refers to that storage object.
  //this is one file
  import React from 'react';
    export class Greeting extends React.Component {
      render() {
        return <h1>Hi there, {this.props.name}!</h1>;
      }
  }

  //And this is in another file, this file has the work of render the Greeting component
  //In the render method of App i will put an instance of Greeting with a property 'name', that
  //Matches with the name of the prop returned by the render method in the Greeting component.
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Greeting } from './Greeting.js'
  class App extends React.Component {
    render() {
      return (
        <div>
          <h1>
            Hullo and, "Welcome to The Newzz," "On Line!"
          </h1>
          <Greeting name='My Name'/>
          <article>
            Latest newzz:  where is my phone?
          </article>
        </div>
      );
    }
  }

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

//To render diferent UI based on props

//just a conditional that returns a diferent expression based on the prop
export class Welcome extends React.Component {
  render() {
    if (this.props.name === 'Wolfgang Amadeus Mozart') {
      return (
      	<h2>
      	  hello sir it is truly great to meet you here on the web
      	</h2>
      );
    } else {
      return (
      	<h2>
      	  WELCOME "2" MY WEB SITE BABYYY!!!!!
      	</h2>
      );
    }
  }
}

//Event handlers as props
//Pass a method is the exact same way that you pass any other information.
//prop attributes will work with just about any name, so long as the name follows the JavaScript variable name rules.

//The button file
//The component of Button needs to hold the event listener who calls the event handler to
import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.onClick}> 
        Click me!
      </button>
    );
  }
}

//And the App file who has the event handler and renders the instance of button

import { Button } from './Button';

class Talker extends React.Component {
  handleClick() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
  }
  
  render() {
    return <Button onClick={this.handleClick}/>; //this attribute will be passed to the render method JSX expression in line 118
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);

//Children of the props
// this.props.children will return everything in between a component’s opening and closing JSX tags.

<BigButton>
  I am a child of BigButton.
</BigButton>

//List file, checks if a list has more than two childrens to pluralize the title
export class List extends React.Component {
  render() {
    let titleText = `Favorite ${this.props.type}`;
    if (this.props.children instanceof Array) {
    	titleText += 's';
    }
    return (
      <div>
        <h1>{titleText}</h1>
        <ul>{this.props.children}</ul>
      </div>
    );
  }
}

//And the App file, were we put and instance of List for each list that we have
//if we put more than one element in the list it automatically renders the pluralized title
import { List } from './List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
          <li>Purri the Piano purri</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);

//Default props
//If nobody passes any text to Button, then Button‘s display will be blank.
//If an <Example /> doesn’t get passed any text, then it will display “yo.”

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
 
Example.defaultProps = { text: 'yo' }; 