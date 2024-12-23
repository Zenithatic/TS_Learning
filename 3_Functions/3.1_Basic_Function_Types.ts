
// Define parameter types as number and define return type as number
function add1(x: number, y: number): number{
    return x + y;
}

function add2(x: number, y: number): number | string {
    if (x == 0){
        return "x is zero";
    }
    else{
        return x + y;
    }
}

const result: number = add1(1, 2)

// the middle parameter is optional, it is either undefined or a string
function makeName(first: string, last: string,  middle?: string): string{
    if (middle){
        return `${first} ${middle} ${last}`;
    }
    return `${first} ${last}`;
}

// the middle parameter is default to an empty string
function makeNameDefault(first: string, last: string,  middle: string = ""): string{
    return `${first} ${middle} ${last}`;
}
makeNameDefault("John", "Doe");
makeNameDefault("John", "Doe", "Smith");

// Callbacks
function callFunc(
    func: (f: string, l: string, m?: string) => string, 
    param1: string, 
    param2: string
) {
    return func(param1, param2);
}

callFunc(makeName, "John", "Doe");


function mul(x: number, y: number): number {
    return x * y
}

function div(x: number, y: number): number {
    if (y == 0){
        throw new Error("Divide by zero")
    }
    else{
        return x / y
    }
}

function applyFunc(funcs: ((a: number, b: number) => number)[] , values: [number, number][]): number[] {
    const results: number[] = []

    for (let i = 0; i < funcs.length; i++){
        results.push(funcs[i](values[i][0], values[i][1]))
    }

    return results
}

applyFunc([mul, div], [[1, 2], [4, 5]])