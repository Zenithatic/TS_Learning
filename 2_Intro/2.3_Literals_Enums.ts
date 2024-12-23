// Literal: 23, "hello", true, false, null, undefined, are all literals (instance of a primitive type)
// Enum: a way to organize a collection of related values

// Direction literal
let direction: "north" | "east" | "south" | "west";

direction = "north";
// myDirection = "up"; yields an error

// Response code literal
let response: "200" | "404" | "500";
response = "200"


// Enums enable developers to establish a set of named constants, which can be numeric or string values
enum Size {
    Small,
    Medium,
    Large
}

let smallSize: Size = Size.Small; // 0
let mediumSize: Size = Size.Medium; // 1
let largeSize: Size = Size.Large; // 2

console.log(`Is it true that large > small: ${largeSize > mediumSize}`); // true
console.log(`It is true the smallSize = Size.Small: ${smallSize === Size.Small}`); // true

// Enums can be string values
enum Color {
    Red = "red",
    Green = "green",
    Blue = "blue"
}

let redColor: Color = Color.Red; // "red"
let greenColor: Color = Color.Green; // "green"
let blueColor: Color = Color.Blue; // "blue"

// You can also assign numbers to enums
enum Direction {
    LightWeight = 5,
    MediumWeight = 10,
    HeavyWeight = 15,
}

console.log(Direction.LightWeight); // 5

function processColor(color: Color) {
    console.log(`The color is ${color}`);
}

// keyof operator can be used to get the keys of an enum
// e.g. let key: keyof typeof Direction