// we use relative paths for imports
// import * as m from './maths'
// import randomThing from './maths'
import randomThing, {pi, sqrtTwo, phi} from "./maths"
// we can import types and interfaces
import {Dog, Penguin} from './util'

// we MAY be able to import JSON directly
// needs resolveJsonModule in tsconfig.json
import * as posts from './data.json'

console.log(posts)




console.log(pi, sqrtTwo, phi, randomThing)

// we can combine our custom types
type Animal = Penguin | Dog

const gromit:Dog = {
    breeds:['plastcene', 'silicone'],
    yearOfBirth:1991
}

const feathers:Animal = {
    breed:'rock hopper',
    yearOfBirth:1998
    
}

