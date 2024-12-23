// typeof, instanceof, in, are type guards that help you narrow down the type of a variable
// typeof is used for primitive types
// instanceof is used for class objects

// example
if (typeof 1 === "number") {
    console.log("1 is a number")
}

class Test {
    private name: string

    constructor(name: string) {
        this.name = name
    }
}

const test1 = new Test("hello")
if (test1 instanceof Test) {
    console.log("test1 is an instance of Test")
    console.log("name" in test1) // check if property exists, true
    console.log("test" in test1) // false
}

// custom type guard, we are returning whether val is number or not
function isNumber(val: any): val is number{
    return typeof val === "number"
}