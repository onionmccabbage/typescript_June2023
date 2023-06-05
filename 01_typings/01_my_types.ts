{
    // Typescript is for DEVELOPMENT TIME ONLY
    // Typescript NEVER executes - before ANY code is run, it is transpiled to JS
    let a = 1 // this is typescript - we implicitly type it as a number
    // a = true // TS complains because 'a' must be a number
    let b:boolean = true // here we explicitly declare a data type
    let c:number | boolean = false

    // remember - in ECMAScript EVERYthing is an object
}
{ // we are now in a differnet scope
    let s = 'ok'
    s = 'another string' // we replace the original string with a new one
    // s[5] = 'T' // nope - strings are immutable in ES
    
    // we would aim to remove all 'any' types before production
    let d:any = 'ok' // typescript adds the 'any' type
    d = []
}
{
    // ES offers dynamic types for string, boolean, number, array, object, null
    // TS adds types for tuple, dictionary, any, enum, void ...
    // one advantage is we can declare our OWN data types
    type Kingdom  = 'Bacteria' | 'Protozoa' | 'Chromista'
    // later we can say
    let k:Kingdom = "Bacteria"
    // k = 'oops'
    type Arbitrary = 'literaly this' | 10 | false | Kingdom // any mix of types
    let r:Arbitrary = 10
}
{
    // using types with functions
    type Allowed = number | string
    // we DO use explicit typing for function variables
    const fn = (x:Allowed):string=>{
        // use string interpolation wherever possible - it is performant
        return `${n}` // a string
    }
    let n=4
    let o='4'
    let s = fn(n) // pass in a number
    let t = fn(o) // pass in a string
}
{
    // tuple (mainly used to data-type-safe array but can apply to any collection)
    let poem:[number, boolean, string] // the types MUST be in this order
    poem = [1, true, 'love']
    console.log(poem) // outside of a browser there is no console
    // so code runner or other techniques can emulate a console
}
