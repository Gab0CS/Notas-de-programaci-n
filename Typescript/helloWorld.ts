// Types
// The type system refers to TypeScript’s understanding of how your code is meant to function: 
// mainly what data types should be stored under your variables.

// We can tell TypeScript what type something is or will be by using a type annotation.
let mustBeAString : string;
mustBeAString = 'Catdog';
//mustBeAString = 1337;
// Error: Type 'number' is not assignable to type 'string'
// We provide a type annotation by appending a variable with a colon (:) 
// and the type (e.g., number, string, or any
