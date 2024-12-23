"use strict";
// any var can be assigned any type of value, if you don't know the type of the value yet
let anyVar = "Hello";
anyVar = 23;
anyVar = true;
anyVar = { name: "John" };
anyVar = [1, 2, 3];
// unknown type is a safer alternative to any
// unknown type is a type-safe counterpart of any
// unknown type is a type that is not known until runtime
let unknownVar = "Hello";
if (typeof unknownVar === "string") {
    console.log(unknownVar.toUpperCase());
}
else if (typeof unknownVar === "number") {
    console.log(unknownVar + 2);
}
else {
    console.log("unknownVar is not a string");
}
// type casting
let myVar = "Hello";
const result = myVar.toUpperCase(); // treat myVar as a string
// const resultError = (myVar as number[][])[0][1]; works at compilation but crashes at runtime
if (typeof myVar === "string") {
    console.log(myVar.toUpperCase());
}
