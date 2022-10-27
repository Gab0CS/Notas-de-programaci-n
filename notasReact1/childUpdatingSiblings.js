// Child displayed a name.
// Child offered a way to change that name.
// Child should be divided in two: one component for displaying the name, 
// and a different component for allowing a user to change the name.

// This pattern resumed is one stateless component display information, 
// and a different stateless component offer the ability to change that information.

//Parent component
import { Child } from './Child';
import { Sibling } from './Sibling';

class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: 'Frarthur' };

    this.changeName = this.changeName.bind(this);
  }

  changeName(newName) {
    this.setState({
      name: newName
    });
  }

  render() {
    return (
      <div>
        <Child onChange={this.changeName} />
        <Sibling name={this.state.name} />
      </div>
    );
  }
};

ReactDOM.render(
  <Parent />,
  document.getElementById('app')
);

//Child component
export class Child extends React.Component {
    constructor(props) {
      super(props);
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      const name = e.target.value;
      this.props.onChange(name);
    }
  
    render() {
      return (
        <div>
          <select
            id="great-names"
            onChange={this.handleChange}>
  
            <option value="Frarthur">Frarthur</option>
            <option value="Gromulus">Gromulus</option>
            <option value="Thinkpiece">Thinkpiece</option>
          </select>
        </div>
      );
    }
  }

//Sibling component

export class Sibling extends React.Component {
  render() {
    const name = this.props.name;
    return (
      <div>
        <h1>Hey, my name is {name}!</h1>
        <h2>Don't you think {name} is the prettiest name ever?</h2>
        <h2>Sure am glad that my parents picked {name}!</h2>
      </div>
    );
  }
}

// A stateful component class defines a function that calls this.setState. (Parent.js, lines 22-26)

// The stateful component passes that function down to a stateless component as a prop. (Parent.js, line 31)

// That stateless component class defines a function that calls the passed-down function, and that can take an 
    //event object as an argument. (Child.js, lines 51-54)

// The stateless component class uses this new function as an event handler. (Child.js, line 61)
    //When an event is detected, the parent’s state updates. (A user selects a new dropdown menu item)

//The stateful component class passes down its state, distinct from the ability to change its state, 
    //to a different stateless component. (Parent.js, line 32)

    //That stateless component class receives the state and displays it. (Sibling.js, lines 76-81)

// An instance of the stateful component class is rendered. One stateless child component displays the state, 
// and a different stateless child component displays a way to change the state. (Parent.js, lines 30-33)