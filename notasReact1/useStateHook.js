//React Hooks, plainly put, are functions that let us manage the internal state of components 
//and handle post-rendering side effects directly from our function components.

//The State Hook is a named export from the React library, so we import it like this:
import React, { useState } from 'react';
//When we call this function, it returns an array with two values:
import React, { useState} from 'react';
export default function ColorPicker() {
  // call useState and assign its return values to `color` and `setColor`
    const [color, setColor] = useState();
    const divStyle = { backgroundColor: color}; 
    return (
        <div style={divStyle}>
            <p>The color is {color}</p>
            <button onClick={ () => setColor('Aquamarine')}>
                Aquamarine
            </button>
            <button onClick={ () => setColor('BlueViolet')}>
                BlueViolet
            </button>
            <button onClick={ () => setColor('Chartreuse')}>
                Chartreuse
            </button>
            <button onClick={ () => setColor('CornflowerBlue')}>
                CornflowerBlue
            </button>
        </div>
    );
}
//setToggle(), is called by our onClick event listeners. To update the value of toggle and 
//re-render this component with the new value
//No need to bind functions to class instances, work with constructors, 
//or deal with the this keyword.
//Calling the state setter signals to React that the component needs to re-render, so the whole 
//function defining the component is called again. The magic of useState() is that it allows React 
//to keep track of the current value of state from one render to the next!



//State setter outside the JSX 
const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
    // declare current state and state setter 
    const [phone, setPhone] = useState("");

    const handleChange = ({ target })=> {
        const newPhone = target.value;
        const isValid = validPhoneNumber.test(newPhone);
        if (isValid) {
            setPhone(newPhone);
        }
        // just ignore the event, when new value is invalid
        };

    return (
        <div className='phone'>
        <label for='phone-input' >Phone: </label>
        <input  value={phone} onChange={handleChange}id='phone-input'/>
        </div>
    );
}


//the next value of our state is calculated using the current state. 
//In this case, it is best practice to update state with a callback function

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(prevCount => prevCount + 1);

    return (
        <div>
            <p>Wow, you've clicked that button: {count} times</p>
            <button onClick={increment}>Click here!</button>
        </div>
    );
}
//When our state setter calls the callback function, this state setter 
//callback function takes our previous count as an argument. The value 
//returned by this state setter callback function is used as the next value of count 

export default function QuizNavBar({ questions }) {
    const [questionIndex, setQuestionIndex] = useState(0);

    const goBack = () => setQuestionIndex((prevQuestionIndex) => prevQuestionIndex - 1); 

    const goToNext = () => setQuestionIndex((prevQuestionIndex) => prevQuestionIndex + 1);
    const onLastQuestion = questionIndex === questions.length - 1;
    const onFirstQuestion = questionIndex === 0;
    return (
        <nav>
            <span>Question #{questionIndex + 1}</span>
            <div>
                <button onClick={goBack} disabled={onFirstQuestion}>
                    Go Back
                </button>
                <button disabled={onLastQuestion} onClick={goToNext}>
                    Next Question
                </button>
            </div>
        </nav>
    );
}


//Arrays in state
const options = ["Bell Pepper", "Sausage", "Pepperoni", "Pineapple"];

export default function PersonalPizza() {
    const [selected, setSelected] = useState([]);

    const toggleTopping = ({target}) => {
        const clickedTopping = target.value;
        setSelected((prev) => {
            // check if clicked topping is already selected and notice the callback function
            if (prev.includes(clickedTopping)) {
                // filter the clicked topping out of state cause prev is the previous selected array
                return prev.filter(t => t !== clickedTopping);
            } else {
                // add the clicked topping to our state
                return [clickedTopping, ...prev];
                //Spread syntax (...) allows an iterable, such as an array or string, 
                //to be expanded in places where zero or more arguments
                //any information that we want to save from the previous array needs 
                //to be explicitly copied over to our new array. That’s what this spread syntax does for us: ...prev
            }
        });
}; 

    return (
        <div>
            {options.map(option => (
                <button value={option} onClick={toggleTopping} key={option}>
                    {selected.includes(option) ? "Remove " : "Add "}
                    {option}
                </button>
            ))}
            <p>Order a {selected.join(", ")} pizza</p>
        </div>
    );
}

//When a button is clicked, the toggleTopping event handler is called.
//this event handler uses information from the event object to determine which topping was clicked.


//Objects in state

export default function EditProfile() {
    const [profile, setProfile] = useState({});

    const handleChange = ({ target }) => {
        //Object destructuring to initialize name and value
        const { name, value } = target;
        setProfile((prevProfile) =>({
            ...prevProfile,
            [name]: value
            // This Computed Property Name allows us to use the 
            //string value stored by the name variable as a property key
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(profile, '', 2));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={profile.firstName || ''}
                name="firstName"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input
                value={profile.lastName || ''}
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />
            <input
                value={profile.bday || ''}
                type="date"
                name="bday"
                onChange={handleChange}
            />
            <input
                value={profile.password || ''}
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
}
