import { add, mul } from "./modules/module"
import Anything from "./modules/somefunc"
import { add as hello } from "./modules/module" // alias

const result1 = add(1, 2)
const result2 = mul(1, 2)

Anything() // This is a default export, can name it anything
// default exports export the module as a single value, so you can name it anything when importing it
// you can also import other things from the module, but you can only have one default export per module

hello(1, 2) // 3