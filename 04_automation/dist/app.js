// we will load some data from an API then show some of it in a web page
// import stuff CAREFUL - we need .js
import { fetchPhotos } from './promises.js';
// carry out the load...
// make use of our 'fetch' function
fetchPhotos() // this method will return a Promise
    // since we have a promise, it is 'thenable'
    .then((d) => {
    console.log(d[0].thumbnailUrl); // or ['title']
    // now we can use slices of our data structure
    // to populate bits of the HTML page
    // we can grab parts of the DOM
    const c = document.getElementById('content');
    c.innerHTML = d[0]['title']; // or .title
});
// a quick fix is ...
// export {} // this makes the current file into a 'module'
