// Emitter
let events = require('events');
// Create an instance of the EventEmitter class
let myEmitter = new events.EventEmitter();

// Each event emitter instance has an .on() method which assigns a 
// listener callback function to a named event. The .on() method takes
// as its first argument the name of the event as a string and, as its 
// second argument, the listener callback function.

// .emit() method which announces a named event has occurred. The .emit() 
// method takes as its first argument the name of the event as a string and, 
// as its second argument, the data that should be passed into the listener callback function.

let newUserListener = (data) => {
    console.log(`We have a new user: ${data}.`);
};

  // Assign the newUserListener function as the listener callback for 'new user' events
myEmitter.on('new user', newUserListener)

  // Emit a 'new user' event
myEmitter.emit('new user', 'Lily Pad') //newUserListener will be invoked with 'Lily Pad'

// User input/output In Node, we can also receive input from a user through the terminal using the stdin.on()

process.stdin.on('data', (userInput) => {
  let input = userInput.toString()
  console.log(input)
});

// we were able to use .on() because under the hood process.stdin is an instance of EventEmitter.
// When a user enters text into the terminal and hits enter, a 'data' event will be fired and
//  our anonymous listener callback will be invoked.

// Error module
// Within our own code, we can generate errors and throw them, and, with synchronous code in Node, 
// we can use error handling techniques such as try...catch statements.

// error-first callback functions—callback functions which have an error 
// as the first expected argument and the data as the second argument.
const errorFirstCallback = (err, data)  => {
  if (err) {
    console.log(`There WAS an error: ${err}`);
  } else {
    // error was falsy
    console.log(`There was NO error. Event data: ${data}`);
  }
}


// Buffer module
// Buffer module is used to handle binary data.
// Buffer object represents a fixed amount of memory that can’t be resized. 
// Buffer objects are similar to an array of integers where each element in the array represents a byte of data.

// provides a variety of methods to handle the binary data such as .alloc(), .toString(), .from(), and .concat().

// alloc() method creates a new Buffer object with the size specified as the first parameter. .alloc() accepts three arguments:
  //Size: Required. The size of the buffer
  // Fill: Optional. A value to fill the buffer with. Default is 0.
  // Encoding: Optional. Default is UTF-8

const buffer = Buffer.alloc(5);
console.log(buffer); // Ouput: [0, 0, 0, 0, 0]

//The .toString() method translates the Buffer object into a human-readable string.
  //  Encoding: Default is UTF-8.

  //  Start: The byte offset to begin translating in the Buffer object. Default is 0.

  //  End: The byte offset to end translating in the Buffer object. Default is the length 
  //  of the buffer. The start and end of the buffer are similar to the start and end of an array, 
  //  where the first element is 0 and increments upwards.

const buffer2 = Buffer.alloc(5, 'a');
console.log(buffer2.toString()); // Output: aaaaa

// The .from() method is provided to create a new Buffer object from the specified string, 
// array, or buffer. The method accepts two arguments:

  // Object: Required. An object to fill the buffer with.
  // Encoding: Optional. Default is UTF-8.

const buffer3 = Buffer.from('hello');
console.log(buffer3); // Output: [104, 101, 108, 108, 111]


//  The .concat() method joins all buffer objects passed in an array into one Buffer object. 
// .concat() comes in handy because a Buffer object can’t be resized. This method accepts two arguments:

// Array: Required. An array containing Buffer objects.
// Length: Optional. Specifies the length of the concatenated buffer.

const buffer11 = Buffer.from('hello'); // Output: [104, 101, 108, 108, 111]
const buffer22 = Buffer.from('world'); // Output:[119, 111, 114, 108, 100]
const array = [buffer11, buffer22];
const bufferConcat = Buffer.concat(array);
console.log(bufferConcat); // Output: [104, 101, 108, 108, 111, 119, 111, 114, 108, 100]


// FS module

// it’s important for a script to have only limited access to a user’s filesystem.
// This technique of isolating some applications from others is known as sandboxing.
// Sandboxing protects users from malicious programs and invasions of privacy.

//  The Node fs core module is an API for interacting with the file system.

const fs = require('fs');

let readDataCallback = (err, data) => {
    if (err) {
      console.log(`Something went wrong: ${err}`);
    } else {
      console.log(`Provided file contained: ${data}`);
    }
};

fs.readFile('./file.txt', 'utf-8', readDataCallback);

//  The first argument is a string that contains a path to the file file.txt.

//  The second argument is a string specifying the file’s character encoding (usually ‘utf-8’ for text files).

//  The third argument is the callback function to be invoked when the asynchronous task of reading from the 
//  file system is complete. Node will pass the contents of file.txt into the provided callback as its second argument.


// Readable Streams
// is reading and writing to files line-by-line. To read files line-by-line, we can use the .createInterface()
// method from the readline core module. .createInterface() returns an EventEmitter set up to emit 'line' events:
const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({
  input: fs.createReadStream('text.txt')
});

myInterface.on('line', (fileLine) => {
  console.log(`The line read: ${fileLine}`);
});

// We assign to myInterface the returned value from invoking readline.createInterface() with an object containing our designated input.
// We set our input to fs.createReadStream('text.txt') which will create a stream from the text.txt file.
// Next we assign a listener callback to execute when line events are emitted. A 'line' event will be emitted after each line from the file is read.
// Our listener callback will log to the console 'The line read: [fileLine]', where [fileLine] is the line just read.


// Writeable streams
//  We can create a writeable stream to a file using the fs.createWriteStream() method:

const fileStream = fs.createWriteStream('output.txt');
fileStream.write('This is the first line!'); 
fileStream.write('This is the second line!');
fileStream.end();

// writable stream could remain open indefinitely. We can indicate the end of a writable stream with the .end() method.



// Timers module
// timer module are global
// timer functions are scheduled and put into a queue. This queue is processed at every iteration of the event loop. 
// If a timer function is executed outside of a module, the behavior will be random

// setImmediate() is called, it executes the specified callback function after the current (poll phase) is completed. 
// The method accepts two parameters: the callback function (required) and arguments for the callback function (optional). 
// If you instantiate multiple setImmediate() functions, they will be queued for execution in the order that they were created.

setImmediate(() => {
  console.log('Hello! My name is Codey.')
});