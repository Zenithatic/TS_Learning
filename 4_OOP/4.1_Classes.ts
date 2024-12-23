class Person {
    private name: string // private means that this property can only be accessed within the class
    protected name2: string // protected means that this property can only be accessed within the class and its subclasses
    public name3: string // public means that this property can be accessed from anywhere

    constructor (name: string) {
        this.name = name
        this.name2 = name
        this.name3 = name
    }

    private secretFunct(){
        console.log("This is a secret function")
    }
    
    greet(): void{
        console.log(`Hello, I am ${this.name}`)
        this.secretFunct() // private method can be accessed within the class
    }

    // getter and setter methods
    getName(): string {
        return this.name
    }
    
    setName(newName: string) {
        if (newName.length > 2) {
            this.name = newName
        } else {
            console.log("Name is too short")
        }
    }
}

class Employee extends Person {
    constructor(name: string) {
        super(name)
        console.log(this.name2) // protected property can be accessed in subclass
    }
}

const p1 = new Person("Patrick")


// Abstract classes and methods are used to define a blueprint for other classes
abstract class Animal { // cannot be instantiated
    private name: string

    public abstract makeSound(duration: number): void // subclasses must implement this method

    public move(): void {
        console.log("Moving")
    }

    public getName(): string {
        return this.name
    }

    constructor(name: string) {
        this.name = name
    }
}

class Dog extends Animal {

    public makeSound(duration: number): void {
        console.log("Bark".repeat(duration))
    }

    constructor(name: string) {
        super(name)
    }
}

class Cat extends Animal {

    public makeSound(duration: number): void {
        console.log("Meow".repeat(duration))
    }

    constructor(name: string) {
        super(name)
    }
}