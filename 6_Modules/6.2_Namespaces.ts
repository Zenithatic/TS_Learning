namespace Utils {
    export function log(msg: string) {
        console.log(msg);
    }

    export function error(msg: string) {
        console.error(msg);
    }

    export const NAME = "Hello"

    export interface NewType {
        name: string,
    }
}

const result = Utils.log("Hello")
const newtype1: Utils.NewType = { name: "John" }

// namespaces can also be exported for organization purposes
// types can also be exported