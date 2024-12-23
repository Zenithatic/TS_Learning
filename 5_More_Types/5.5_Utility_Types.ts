interface Todo {
    title: string
    description: string
}

// Partial utility type makes all properties of an object optional
const updateTodo = (todo: Partial<Todo>) => {
    todo.title = "MyTodo"

}

// Readonly utility type makes all properties of an object readonly
const myTodo: Readonly<Todo> = { title: "MyTitle", description: "MyDescription" }

// Record utility type creates an object type whose keys are of type K and values are of type T
const Todos: Record<string, Todo> = {
    "todo1": { title: "Todo1", description: "Description1" },
    "todo2": { title: "Todo2", description: "Description2" }
}

const Todos2: Record<number, Todo> = {
    1: { title: "Todo1", description: "Description1" },
    2: { title: "Todo2", description: "Description2" }
}

// Pick utility type creates an object type by picking some properties from another object type
type TodoPreview = Pick<Todo, "title" | "description"> // can remove description if not want to be picked
const todo: TodoPreview = { title: "MyTitle", description: "MyDescription" }

// Omit utility type creates an object type by omitting some properties from another object type
type TodoPreview2 = Omit<Todo, "description">
const todo2: TodoPreview2 = { title: "MyTitle" }