// we will load some data from an API then show some of it in a web page

// import stuff CAREFUL - we need .js
import {fetchPhotos, Photo} from './promises.js'
// carry out the load...
// make use of our 'fetch' function
fetchPhotos() // this method will return a Promise
    // since we have a promise, it is 'thenable'
    .then( (d:Array<Photo>)=>{ // here we receive the structure from inside the promise        
        console.log(d[0].thumbnailUrl) // or ['title']
        // now we can use slices of our data structure
        // to populate bits of the HTML page
        // we can grab parts of the DOM
        const c = document.getElementById('content')
        c.innerHTML = d[1]['title'] // or .title
        // we now grab the img tag
        const i = document.getElementById('thumbnail')
        // without Typescript we MUST use square-brackets
        i.setAttribute('src', d[1]['thumbnailUrl'])
    } )
    .catch( (err)=>{
        console.log(err)
    } )

// a quick fix is ...
// export {} // this makes the current file into a 'module'
