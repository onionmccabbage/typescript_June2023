// Generators have been available since ES6
// they are efficient

// here we will generate the fibonacci series
function* fib(){ // the asterisk makes this function into a generator
    let first=1, second=2
    // here is an endless loop
    // for (;;){
    // for (let i=0; i<4; i++) { // a generator instance might be exhausted
    for (let i=0; i<Number.POSITIVE_INFINITY; i++) {
        let sum = first + second
        yield sum // we can yield any useful values from a generator
        first = second
        second = sum
    }
}

// it is common to use JSON-syntax to read our generated values
const prettyPrint = (item:IteratorResult<number>)=>{
    // return JSON.stringify(item)
    return item.value
}

const g = fib() // we make an instance of our generator
console.log( g.next() )// 3
console.log( g.next() )// 5
console.log( g.next() )// 8
console.log( g.next() )// 13
console.log( g.next().value )// 21
// we can use our pretty print
console.log( prettyPrint( g.next() ) ) // 34