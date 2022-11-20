import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        userInput: ''
        };
        this.handleUserInput = this.handleUserInput.bind(this);
    }
    handleUserInput(e){
        this.setState({
            userInput: e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleUserInput} value={this.state.userInput}/>
                <h1>{this.state.userInput}</h1>
            </div>
        );
    }
}

ReactDOM.render(
	<Input />,
	document.getElementById('app')
);

//Controlled and uncontrolled components
//An uncontrolled component is a component that maintains its own internal state. 
//A controlled component is a component that does not maintain any internal state. 
//Since a controlled component has no state, it must be controlled by someone else.

//If you need to know what text is currently in the box
let input = document.querySelector('input[type="text"]');
let typedText = input.value;

//when you give an <input /> a value attribute, the <input /> 
//becomes controlled. It stops using its internal storage. This is a more ‘React’ way of doing things.
