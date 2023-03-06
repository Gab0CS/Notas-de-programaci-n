// Arrow functions
const helloWorld = (name) => {
    console.log(`Welcome ${name} to Codecademy, this is an arrow expression.`)
};

//Asynchronous Concepts

//Promise 
// Creating a new Promise and saving it to the testLuck variable. Two arguments are being passed, one for when the promise resolves, and one for if the promise gets rejected.
const testLuck = new Promise((resolve, reject) => {
    if (Math.random() < 0.5) { 
        resolve('Lucky winner!')
        } else {
        reject(new Error('Unlucky!'))
        }
    });
    testLuck.then(message => {
        console.log(message) // Log the resolved value of the Promise
    }).catch(error => {
        console.error(error) // Log the rejected error of the Promise
    });

// A Promise has three different outcomes: pending (the result is undefined and 
// the expression is waiting for a result), fulfilled (the promise has been completed 
// successfully and returned a value), and rejected (the promise did not successfully complete,
// the result is an error object).


// Async await
// Creating a new promise that runs the function in the setTimeout after 5 seconds. 
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("All done!"), 5000);
});   
  // Creating an asynchronous function using an arrow expression and saving it to a the variable 
  // asyncFunction. 

const asyncFunction = async () => {
    // Awaiting the promise to resolve and saving the result to the variable finalResult.
    const finalResult = await newPromise;   
    // Logging the result of the promise to the console
    console.log(finalResult); // Output: All done!
}   
asyncFunction();


// setInterval() and setTimeout();

// The setInterval() function executes a code block at a specified interval, in milliseconds. 
// requires two arguments: the name of the function (the code block that will be executed), 
// and the number of milliseconds (how often the function will be executed).

// Defining a function that instantiates setInterval
const showAlert = () => {
    // Calling setInterval() and passing a function that shows an alert every 5 seconds.
    setInterval(() => {
        alert('I show every 5 seconds!')
    }, 5000);
};   
  // Calling the newInterval() function that calls the setInterval
showAlert();

// The setTimeout() function executes a code block after a specified
// amount of time (in milliseconds) and is only executed once.

// Defining a function that calls setTimeout
const showTimeout = () => {
    // Calling setTimeout() that passes a function that shows an alert after 5 seconds.
    setTimeout(() => {
        alert('I only show once after 5 seconds!');
    }, 5000);
};   
  // Calling the showTimeout() function
showTimeout();  
