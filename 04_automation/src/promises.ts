// we can use implicit Typescript wherever possible
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
// export const fetchPhotos = async ():Promise<Array<Photo> | string>=>{
export const fetchPhotos = async <T>():Promise<Array<T>>=>{
    const API = `https://jsonplaceholder.typicode.com/photos`
    // we will expect to receive a Promise (containing the data we want)
    // fetch will always return a response object
    // which might include json, text, html, xml ...
    try {
        // CAREFUL 'fetch' ONLY works in a browser
        const response = await fetch(API) // by default this is a 'get' request
        // the response object contains lots of info about the response as well as the actual data
        // this .json() call will return a Promise
        console.log(response)
        // check the status of the rsponse
        if (response['status'] == 200){
            return response.json() // Javascript automaticaly converts the json to a structure
        }
        else{
            // we can handle successful but problematic server response...
        }
    }
    catch (err) {
        // this will return a Promise containing a string
        // return err.message // simple solution
        throw(err)
    }
    finally {
        // this block wll ALWAYS run (even if there is an exception)
    }
}