// Array: collection of elements

// We can explicitly type the elements of an array
let numbers: number[] = [1, 2, 3, 4, 5];

// strings and numbers in the same array using union
let stringsAndNumbers: (string | number)[] = ["hello", 1, "world", 2];

// matrix
let matrix: number[][] = [[1, 2], [3, 4]];

// tuples: fixed number of elements whose types are known
// for example, we want to store a coordinate pair (x, y)
let coordinateArray: number[] = [1, 2];
let coordinateTuple: [number, number] = [1, 2];
// coordinateTuple = [1, 2, 3]; yields an error

let coords: [number, number][] = [[1, 2], [3, 4]];
