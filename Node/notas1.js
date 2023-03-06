// process.env object contains a PWD property which holds a string with the 
// directory in which the current process is located. 

// One convention is to add a property to process.env with the key NODE_ENV 
// and a value of either production or development

if (process.env.NODE_ENV === 'development'){
    console.log('Testing! Testing! Does everything work?');
}

// The process.memoryUsage() returns information on the CPU demands of the current process.

const memoryUsage = { rss: 26247168,
    heapTotal: 5767168,
    heapUsed: 3573032,
    external: 8772 
};

//  a heap can refer to a specific data structure, but it can also refer to a block of computer memory.
process.memoryUsage().heapUsed
// method will return a number representing how many bytes of memory the current process is using.


// The process.argv property holds an array of command line values provided when the current process was initiated.
// first element in the array is the absolute path to Node, which ran the process. 
// The second element in the array is the path to the file that’s running. 

// node myProgram.js testing several features  *This was in the command line
console.log(process.argv[3]); // Prints 'several'

//  OS module
//  Node.js is a JavaScript runtime, which means it can execute code outside of the browser, 
//  and we’re able to get access to much of this information through the os core module.

const os = require('os');

os.type() // to return the computer’s operating system.
os.arch() // to return the operating system CPU architecture.
os.networkInterfaces() // to return information about the network interfaces
// of the computer, such as IP and MAC address.
os.homedir() // to return the current user’s home directory.
os.hostname() // to return the hostname of the operating system.
os.uptime() // to return the system uptime, in seconds.

const local = {  
    'Home Directory': os.homedir(),    
    'Operating System': os.type(),
    'Last Reboot': os.uptime()
}


// Util module
// The Node.js util core module contains internal tools used to maintain and debug your code.
const util = require('util');


// One important object is types, which provides methods for runtime type checking in Node.

const today = new Date();
const earthDay = 'April 22, 2022';
console.log(util.types.isDate(today));
console.log(util.types.isDate(earthDay));
    
    // Returned values
    // true
    //false
    //Since today is a Date object, it returns true, and since earthDay is a string, it returns false

// Promisify
// .promisify(), which turns callback functions into promises.
// promises are often preferred over callbacks and especially nested callbacks
function getUser (id, callback) {
    return setTimeout(() => {
        if (id === 5) {
            callback(null, { nickname: 'Teddy' })
        } else {
            callback(new Error('User not found'))
        }
    }, 1000)
}

function callback (error, user) {
    if (error) {
        console.error(error.message)
        process.exit(1)
    }
    
    console.log(`User found! Their nickname is: ${user.nickname}`)
}

getUser(1, callback) // -> `User not found`
getUser(5, callback) // -> `User found! Their nickname is: Teddy`

// This functions but with promisify
const getUserPromise = util.promisify(getUser);

getUserPromise(id)
    .then((user) => {
        console.log(`User found! Their nickname is: ${user.nickname}`);
    })
    .catch((error) => {
        console.log('User not found', error);
    });

getUser(1) // -> `User not found`
getUser(5) // -> `User found! Their nickname is: Teddy`

// getUserPromise variable that stores the getUser method turned into a promise using the 
// .promisify() method. With that in place, we’re able to use getUserPromise with .then() and 
// .catch() methods (or we could also use the async...await syntax here) to resolve the promise 
// returned or catch any errors.