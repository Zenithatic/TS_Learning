// Interfaces are programming structures/syntax that allows the computer to enforce certain properties on an object (class).

interface User {
    email: string;
    firstName: string;
    lastName: string;
    age: number;
    height?: number; // optional property
    hello?: () => void // method
}

const user1: User = {
    email: "user1@gmail.com",
    firstName: "John",
    lastName: "Doe",
    age: 25
}

const user2: User = {
    email: "user2@gmail.com",
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    height: 5.5,
    hello: function () {
        console.log(this.firstName + " says hello");
    }
}

// normal functions have object scope
// arrow functions do not, this keyword doesn't work properly

const defaults = {
    email: "default@gmail.com"
}

// You can set default values for interfaces using the spread operator
const user3: User = {
    ...defaults,
    firstName: "John",
    lastName: "Doe",
    age: 25,
    height: 5.5
}

// Extending interfaces
interface Admin extends User {
    adminSince: number
}

const user4: Admin = {
    email: "admin@gmail.com",
    firstName: "Admin",
    lastName: "Doe",
    age: 25,
    adminSince: 2020
}

// Extending multiple interfaces
// Technically CEO does not have to extend User, because Admin already extends User
interface CEO extends User, Admin {
    employees: User[]
}

// Function to manage interface
function getUserInfo(user: User): string {
    return `${user.firstName} ${user.lastName} is ${user.age} years old`;
}

const ceo: CEO = {
    email: "ceo@gmail,com",
    firstName: "CEO",
    lastName: "Doe",
    age: 25,
    adminSince: 2020,
    employees: []
}