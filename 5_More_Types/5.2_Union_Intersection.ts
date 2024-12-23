type StringOrNumber = string | number // Union type

interface BusinessPartner{
    name: string;
    age: number
}

interface ContactDetails{
    email: string;
    phone: string
}

type BusinessContact = BusinessPartner & ContactDetails // Intersection type
// intersection type is a combination of two types, only works if both types have the same base datatype

const businessContact1: BusinessContact = {
    name: "John Doe",
    age: 30,
    email: "johndoe@gmail.com",
    phone: "123456789"
}

// intersection is kind of like extends in interfaces, but it's more flexible

// if "field" in object can help with type checking when using union types