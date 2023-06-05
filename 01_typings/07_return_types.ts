{
    // certain architectures commonly use void as a return type
    const fn = (x?:number, y?:number):void=>{
        // we usually have no return statement        
    }

    // much less common is return type 'never'
    const foo = ():never=>{
        throw new Error('oh no')
    }

    const dontDoThis = ():never=>{
        while(true){
            // never ending loop
        }
    }
}