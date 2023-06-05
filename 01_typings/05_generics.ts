{
    // a common problem - we may not know beforehand exactly what type 
    // but we still need type safety

    // here is a function to return the zeroeth element of a collection
    // const zeroethElement = (a:Array<any>):any=>{
    // the '<T>' tells TS we will be using a generic type
    const zeroethElement = <T>(a:Array<T>):T=>{
        return a[0]
    }

    let a_s:Array<string> = ['this', 'is', 'an', 'array', 'of', 'strings']
    let a_n:Array<number> = [5,4,8,3,42]
    let a_a:Array<Array<object>>  = [[{}],[{}],[{}],[]]

    console.log( zeroethElement(a_s) )
    console.log( zeroethElement(a_n) )
    console.log( zeroethElement(a_a) )

}