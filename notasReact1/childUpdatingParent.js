
//The parent Component
import { Child } from './Child';

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
      <Child name={this.state.name} 
      onChange={this.changeName}/>
    );
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);

//The child component
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
          <h1>
            Hey my name is {this.props.name}!
          </h1>
          <select id="great-names" onChange={this.handleChange}>
            <option value="Frarthur">
              Frarthur
            </option>
  
            <option value="Gromulus">
              Gromulus
            </option>
  
            <option value="Thinkpiece">
              Thinkpiece
            </option>
          </select>
        </div>
      );
    }
  }

//this is how it works

// The parent component class defines a method that calls this.setState() line 12 to 15

//Once the parent has defined a method that updates its state and bound to it, 
//the parent then passes that method down to a child. Line 21

//The child receives the passed-down function, and uses it as an event handler. line 36 and 46
//The child needs a way to receive the event handler
//function that can take an event object, and use it to correctly update the parent’s state.

//the function of line 36 This new function should take an event object as an argument, extract the name 
//that you want from that event object, and then call the event handler, passing in the extracted name!
//it takes the value of every option of the 'select' list.
