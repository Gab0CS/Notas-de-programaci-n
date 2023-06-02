function greet(name: string) {
    console.log(`Hello, ${name}!`);
}

  greet('Katz'); // Prints: Hello, Katz  

// greet(1337); // Error: argument '1337' is not assignable to parameter of type 'string'
// By placing : string after the name parameter, we’re declaring that name is of type string.
// Parameters that we do not provide type annotations for are assumed to be of type any

// To indicate that a parameter is intentionally optional, we add a ? after its name
function greet2(name?: string) {
    console.log(`Hello, ${name|| 'Anonymous'}!`);
}

// Default parameters

function greet3(name = 'Anonymous') {
    console.log(`Hello, ${name}!`);
}

// TypeScript can also infer the types of values returned by functions

function createGreeting(name: string) {
    return `Hello, ${name}!`;
}   
const myGreeting = createGreeting('Aisle Nevertell');
    // createGreeting()’s return statement is followed by a string variable, so createGreeting() is inferred to return string
    // createGreeting('Aisle Nevertell') therefore must result in a value of type string.
    // myGreeting is initialized to createGreeting('Aisle Nevertell'), which is a value with the type string

// Being explicit
// If we’d like to be explicit about what type a function returns, we can add an explicit type annotation after its closing parenthesis.
function createGreeting2(name?: string): string {
    if (name) {
        return `Hello, ${name}!`;
    }
    return'undefined'; //It has to be not a string but theres an error idk
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};

const createArrowGreeting = (name?: string): string => {
    if (name) {
        return `Hello, ${name}!`;
    }

    return 'undefined';//It has to be not a string but theres an error idk
    // Typescript Error: Type 'undefined' is not assignable to type 'string'.
};

function logGreeting(name:string): void{
    console.log(`Hello, ${name}!`)
}

/**
* This is a documentation comment
* This is another line of the documentation comment
*/
