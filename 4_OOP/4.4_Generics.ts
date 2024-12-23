// Generics are a way to make components reusable across different data types.

class DataStore<Type> {
    private data: Type[] = [];

    addItem(item: Type) {
        this.data.push(item)
    }

    getItems() {
        return this.data 
    }
}

const numberStore = new DataStore<number>();
numberStore.addItem(1);
// numberStore.addItem("hello") is error

// Type generic can be any type, including classes/interfaces

function getValue<K, V>(key: K, value1: V, value2: V): V {
    if (key){
        return value1
    }
    return value2
}

getValue("hello", 1, 2) // function getValue<string, 1 | 2>(key: string, value1: 1 | 2, value2: 1 | 2): 1 | 2