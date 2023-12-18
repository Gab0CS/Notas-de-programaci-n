// type annotation for array types is fairly straightforward: we put [] after the element type.

let names: string[] = ['Danny', 'Samantha'];

// An alternative method is to use the Array<T> syntax, where T stands for the type

let names2: Array<string> = ['Danny', 'Samantha'];

// Multidimensional arrays
// We can also declare multidimensional arrays: arrays of arrays (of some type).

let arr: string[][] = [['str1', 'str2'], ['more', 'strings']];

//  (string[])[], that is, an array where every element has type string[].
//  The empty array ([]) is compatible with any array type:

//  when an array is typed with elements of specific types, it’s called a tuple.

let ourTuple: [string, number, string, boolean] = ['Is', 7 , 'our favorite number?' , false]; 

//  tuple above (ourTuple) contains the elements: 'Is', 7 , 'our favorite number?' , 
//  false and the tuple has a type of [string, number, string, boolean]

//  Tuple types specify both the lengths and the orders of compatible tuples, and will cause an error 
//  if either of these conditions are not met

// Tuple types specify both the lengths and the orders of compatible tuples, 
// and will cause an error if either of these conditions are not met

let tup: [string, string] = ['hi', 'bye'];
let arr3: string[] = ['there','there'];
tup = ['there', 'there']; // No Errors.
// tup = arr; // Type Error! An array cannot be assigned to a tuple.

let tup2: [number, number, number] = [1,2,3];
let concatResult = tup2.concat([4,5,6]); // concatResult has the value [1,2,3,4,5,6]

//TypeScript infers the variable concatResult as an array of numbers


// Spread sintax
// This is most useful for function calls that use lots of arguments
function gpsNavigate(startLatitudeDegrees:number, startLatitudeMinutes:number, startNorthOrSouth:string, startLongitudeDegrees: number, startLongitudeMinutes: number, startEastOrWest:string, endLatitudeDegrees:number, endLatitudeMinutes:number , endNorthOrSouth:string, endLongitudeDegrees: number, endLongitudeMinutes: number,  endEastOrWest:string) {
    /* navigation subroutine here */
}

// These tuple type annotations guarantee that the types of the elements will be valid function parameters for gpsNavigate()

let codecademyCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];
let bermudaTCoordinates: [number, number, string, number, number, string] = [25, 0 , 'N' , 71, 0, 'W'];

// And by the way, this makes the return trip really convenient to compute too:
gpsNavigate(...codecademyCoordinates, ...bermudaTCoordinates);

// If there is a return trip . . . 
gpsNavigate(...bermudaTCoordinates, ...codecademyCoordinates);
