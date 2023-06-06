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
}
{
    // tuple destructuring
}