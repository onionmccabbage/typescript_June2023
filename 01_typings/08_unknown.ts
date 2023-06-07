// see https://mariusschulz.com/blog/the-unknown-type-in-typescript
{
    let value: any

    value = true // OK
    value = 42 // OK
    value = "Hello World" // OK
    value = [] // OK
    value = {} // OK
    value = Math.random // OK
    value = null // OK
    value = undefined // OK
    value = new TypeError() // OK
    value = Symbol("type") // OK

    // any allows for arbitrary properties and methods
    value.foo.bar // OK
    value.trim() // OK
    value() // OK
    new value() // OK
    value[0][1] // OK
}

{
    // unknown is similar to any
    let value: unknown

    value = true // OK
    value = 42 // OK
    value = "Hello World" // OK
    value = [] // OK
    value = {} // OK
    value = Math.random // OK
    value = null // OK
    value = undefined // OK
    value = new TypeError() // OK
    value = Symbol("type") // OK

    // unknown cannot be assigned to known types
    let value1: unknown = value // OK
    let value2: any = value // OK
    let value3: boolean = value // Error
    let value4: number = value // Error
    let value5: string = value // Error
    let value6: object = value // Error
    let value7: any[] = value // Error
    let value8: Function = value // Error

    // unknown does NOT allow arbitrary properties or methods
    value.foo.bar // Error
    value.trim() // Error
    value() // Error
    new value() // Error
    value[0][1] // Error
}