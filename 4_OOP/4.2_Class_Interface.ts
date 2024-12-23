// Interfaces don't actually define any functionality or implementation, they just define the structure of an object.
// Abstract classes can define some concrete and abstract methods and properties
// Cannot use private/public modifiers in interfaces

interface Animal2 {
    speak(): void
}

class Bear implements Animal2 {
    private name: string
    private color: string

    constructor(name: string, color: string) {
        this.name = name
        this.color = color
    }

    speak(): void {
        console.log(`I am ${this.name} and I am ${this.color}`)
    }

    test(): void{
        console.log("test")
    }
}

// can type the variable as the interface, but Animal2 methods and fields are not accessible
const bear1: Animal2 = new Bear("joe", "brown") 
bear1.speak()
// bear1.test() // error

const bear2: Bear = new Bear("polarbro", "white")
const bearAsAnimal: Animal2 = bear2
// or const bearAsAnimal = bear2 as Animal2
// polymorphism
const bearAsAnimals: Animal2[] = [bear1, bear2]

// universal function that can take any object that implements the Animal2 interface, makes it speak
function makeSound(animal: Animal2){
    animal.speak()
}

// Interfaces increases the abstraction of the code, making it easier to understand and maintain

// Summary: interface used when no functionality you want to define concretely
// Abstract class used when you want to define some functionality concretely