// how to write a function - let me count the ways
function fnA(x){
    return x*x
}

// TS likes to know t he type of incoming parameters
const fnB = x=>x*x // TS doesn't like this
const fnC = x=>{return x*x} // if we have braces we MUST use return (to return)
const fnD = (x, y)=>x*y // zero or more than one argument, MUST use brackets
const fnE = ()=> 'zero params'
const fnF = (x)=>{return x*x}

// functions inside classes
class Demo {
    someMethod (){

    }
    otherMethod = ()=>{}
}