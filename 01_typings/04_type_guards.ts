// sometimes we need to ensure we have a particular type before trying to use it
{
    // a function: return the length of a string OR a number to 2dp
    const eg = (sn:number|string)=>{
        if (typeof sn == 'number'){
            // return sn.length
            return sn.toFixed(2) // TS will code-hint number options
        } else {
            return sn.length // TS will code-hint string options
        }
    }

    // exercise the code
    let s = 'this is a string'
    let n = 3.45677
    console.log( eg(s) )
    console.log( eg(n) )
}