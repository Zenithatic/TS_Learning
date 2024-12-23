// Primitive Types: number, string, boolean, undefined, null

// Explicitly type a variable
let x: number = 2; 

// Implicitly type a variable
let y = 2;

// Both x and y are of type number and have strict typing, but x is explicitly typed and y is implicitly typed
x = 3;
// y = "hello" yields an error

// Strings
let s: string = "hello";
s = "world";

let result1 = null; // Empty or Non-existent value, null is still defined, explicitly set to null
let result2 = undefined; // Placeholder that means a variable has been declared but has not yet been assigned a value

// result1 is implicitly typed to any. It is null, but it can be reassigned to any type 
result1 = 5;

// union
let result3: number | undefined = undefined;
result3 = 10;

// void type: used when returning nothing from a function
function log(message: string): void {
    console.log(message);
}

// never type: explicity define that a function never returns
function error(message: string): never {
    throw new Error(message);
}