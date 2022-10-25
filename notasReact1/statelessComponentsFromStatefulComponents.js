//“Stateful” describes any component that has a state property; “stateless” describes any component that does not.
//Let’s make a stateful component pass its state to a stateless component.
//To make that happen, we need two component classes: a stateful class, and a stateless class.
//A <Parent /> is going to pass a prop to a <Child />.
//That means that a <Parent /> is going to render a <Child />. 
//Rendering is the only way for a component to pass props to another component.


//Parent Component
import { Child } from './Child';

class Parent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      name: 'Frarthur'
    }
  }
  render() {
    return <Child name={this.state.name}/>;
  }
}
ReactDOM.render(<Parent />,
document.getElementById('app'));

//Child Component

export class Child extends React.Component{
    render() {
      return <h1>Hey, my name is {this.props.name}!</h1>;
    }
  }

//A React component should use props to store information that can be changed, 
//but can only be changed by a different component.

//A React component should use state to store information that the component itself can change.