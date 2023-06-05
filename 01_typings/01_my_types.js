{
    // Typescript is for DEVELOPMENT TIME ONLY
    // Typescript NEVER executes - before ANY code is run, it is transpiled to JS
    var a = 1; // this is typescript - we implicitly type it as a number
    // a = true // TS complains because 'a' must be a number
    var b = true; // here we explicitly declare a data type
    var c = false;
    // remember - in ECMAScript EVERYthing is an object
}
{ // we are now in a differnet scope
    var s = 'ok';
    s = 'another string'; // we replace the original string with a new one
    // s[5] = 'T' // nope - strings are immutable in ES
    // we would aim to remove all 'any' types before production
    var d = 'ok'; // typescript adds the 'any' type
    d = [];
}
{
    // later we can say
    var k = "Bacteria";
    var r = 10;
}
{
    // we DO use explicit typing for function variables
    var fn = function (x) {
        // use string interpolation wherever possible - it is performant
        return "".concat(n_1); // a string
    };
    var n_1 = 4;
    var o = '4';
    var s = fn(n_1); // pass in a number
    var t = fn(o); // pass in a string
}
{
    // tuple (mainly used to data-type-safe array but can apply to any collection)
    var poem = void 0; // the types MUST be in this order
    poem = [1, true, 'love'];
    console.log(poem);
}
