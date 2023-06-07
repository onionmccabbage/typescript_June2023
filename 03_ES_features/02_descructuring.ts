{
    // dsctructuring is ES
    // unpacking an array
    const values = [42, 37, 42 ,3, -7, 3, 99]
    const [first, second, third,, fifth, ...rest] = values

    console.log(first, second, third, fifth, rest)

    const fn = (x, y, ...rest)=>{
        // any other parameters end up inside 'rest'
    }
}
{
    // object destructuring
    const program = {name:'Play School', presenter:'Floella', started:1976, end:1984 }
    const {name:n, presenter:p, ...rest } = program
    console.log(`${n} presented by ${p} between ${rest['started']} and ${rest['end']}}`)
}
{
    // tuple destructuring
    const getMisson = ():[string, string, string]=>{
        return ['inform', 'educate', 'entertain']
    }

    const [inf, edu, ent] = getMisson()
    console.log(inf, edu, ent)
}