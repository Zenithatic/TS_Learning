"use strict";
// Literal: 23, "hello", true, false, null, undefined, are all literals (instance of a primitive type)
// Enum: a way to organize a collection of related values
// Direction literal
let direction;
direction = "north";
// myDirection = "up"; yields an error
// Response code literal
let response;
response = "200";
// Enums enable developers to establish a set of named constants, which can be numeric or string values
var Size;
(function (Size) {
    Size[Size["Small"] = 0] = "Small";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
let smallSize = Size.Small; // 0
let mediumSize = Size.Medium; // 1
let largeSize = Size.Large; // 2
console.log(`Is it true that large > small: ${largeSize > mediumSize}`); // true
console.log(`It is true the smallSize = Size.Small: ${smallSize === Size.Small}`); // true
// Enums can be string values
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
let redColor = Color.Red; // "red"
let greenColor = Color.Green; // "green"
let blueColor = Color.Blue; // "blue"
// You can also assign numbers to enums
var Direction;
(function (Direction) {
    Direction[Direction["LightWeight"] = 5] = "LightWeight";
    Direction[Direction["MediumWeight"] = 10] = "MediumWeight";
    Direction[Direction["HeavyWeight"] = 15] = "HeavyWeight";
})(Direction || (Direction = {}));
console.log(Direction.LightWeight); // 5
