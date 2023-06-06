// an interface
export interface Photo { // interface is the prefered way to declare types
    id           : number
    title        : string
    url          : string
    albumId      : number
    thumbnailUrl : string
}

// a call to an API end-point
// these days we use 'fetch' and async-await to return a Promise
export const fetchPhotos = async ()=>{
    const API = `https://jsonplaceholder.typicode.com/photos`
    // we will expect to receive a Promise (containing the data we want)
    // fetch will always return a response object
    // which might include json, text, html, xml ...
    try {
        const response = await fetch(API) // by default this is a 'get' request
        // the response object contains lots of info about the response as well as the actual data
        return response.json() // Javascript automaticaly converts the json to a structure
    }
    catch (err) {
        return err.message
    }
    finally {
        // this block wll ALWAYS run (even if there is an exception)
    }
}