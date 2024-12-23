
// this function takes a string and a number of numbers and returns the sum of the numbers
function sum(str: string, ...numbers: number[]): number{
    let total = 0;
    for (let num of numbers){
        total += num;
    }
    return total;
}

sum("hello", 1, 2 ,3)
sum("bye", 1, 2)
sum("ok")

// overloading: defining multiple function signatures for a single function
// in TypeScript, we can define the function signature and the function implementation separately
function getItemLength(name: string): number;
function getItemLength(names: string[]): number;
function getItemLength(nameOrNames: unknown): number {
    if (typeof nameOrNames === "string"){
        return nameOrNames.length;
    }
    else if (Array.isArray(nameOrNames)){
        return nameOrNames.length;
    }
    return 0;
}
