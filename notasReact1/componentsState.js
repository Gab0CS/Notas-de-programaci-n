//Unlike props, a component’s state is not passed in from the outside. A component decides its own state.
//state property should be declared inside of a constructor method, like this:

//this.state should be equal to an object, like in the example above.
class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mood: 'decent' };
    }
   
    render() {
      return <div></div>;
    }
  }
   
  <Example />

  //Accesing a component state
  class TodayImFeeling extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mood: 'decent' };
    }
   
    render() {
      return (
        <h1>
          I'm feeling {this.state.mood}!
        </h1>
      );
    }
  }

  //Update state with this.setState
  //this.setState() takes two arguments: 
  //an object that will update the component’s state, and a callback. 
  //You basically never need the callback.
  //The most common way to call this.setState() is to call a custom function that wraps a this.setState() call.

  class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = { weather: 'sunny' };
      this.makeSomeFog = this.makeSomeFog.bind(this);
    }
   
    makeSomeFog() {
      this.setState({
        weather: 'foggy'
      });
    }
  }

  //in React, whenever you define an event handler that uses this, 
  //you need to add this.methodName = this.methodName.bind(this) to your constructor

  