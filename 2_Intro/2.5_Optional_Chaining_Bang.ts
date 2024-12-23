// Question mark and exlamation mark are used to handle undefined values in typescript.
const arr = [{name: "tim"}, {name: "jim"}, {name: "kim"}];

// const arr_element = arr.pop().name gives an error because pop() might return undefined
const el = arr.pop()?.name; 
// the code above first checks if arr.pop() is undefined. If it is, el is set to undefined.
// If it is not, el is set to arr.pop().name

const arr2 = [[{name: "pim"}], [{name: "rim"}], [{name: "sim"}]];
const el2 = arr2.pop()?.pop()?.name // checks if arr2.pop() is undefined, then checks if arr2.pop().pop() is undefined

// Exclamation (bang) mark is used to tell typescript that a value is not undefined
const el3 = arr2.pop()!.pop()!.name; // tells typescript that arr2.pop() and arr2.pop().pop() are not undefined
// yields an error if arr2.pop() or arr2.pop().pop() is undefined

// Summary: 
// ? checks if a value is undefined and then moves on
// ! tells typescript that a value is not undefined, forces us to move forward
const el4 = arr2.pop()! // assume arr2.pop() is not undefined