"use strict";
// Primitive Types: number, string, boolean, undefined, null
// Explicitly type a variable
let x = 2;
// Implicitly type a variable
let y = 2;
// Both x and y are of type number and have strict typing, but x is explicitly typed and y is implicitly typed
x = 3;
// y = "hello" yields an error
// Strings
let s = "hello";
s = "world";
let result1 = null; // Empty or Non-existent value, null is still defined, explicitly set to null
let result2 = undefined; // Placeholder that means a variable has been declared but has not yet been assigned a value
// result1 is implicitly typed to any. It is null, but it can be reassigned to any type 
result1 = 5;
// union
let result3 = undefined;
result3 = 10;
// void type: used when returning nothing from a function
function log(message) {
    console.log(message);
}
// never type: explicity define that a function never returns
function error(message) {
    throw new Error(message);
}
