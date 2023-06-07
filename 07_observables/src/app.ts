// Observables are most easily masnaged using the RxJS library
import { fromEvent, map, tap, debounceTime } from 'RxJS'
import { container } from 'webpack'

// here are the suggesed prompts
const testdata: string[] = [
    'people',
    'planets',
    'species',
    'vehicles',
    'starships'
]

// check for a match
const suggest = (arr:string[], query:string):Array<string>=>{
    return arr.filter( (item)=>{
        return query.length > 0 && item.startsWith(query)
    } )
}

// grab a handle on our search box
const searchBox:HTMLInputElement = document.querySelector('#search') as HTMLInputElement
const output:HTMLElement = document.querySelector('#results') as HTMLElement
// clean up the suggestion output
const cleanUp = (container:HTMLElement)=>{
    container.innerHTML = ''
}
// append the suggestions to the web page
const appendResults = (container:HTMLElement, results:Array<string>)=>{
    for (const result of results){
        const li = document.createElement('li')
        const text = document.createTextNode(result)
        li.appendChild(text)
        container.appendChild(li)
    }
}

// historically jQuery introduced the idea of chaining things like this...
// $().event( ()=>{} ).then(  ()=>{} ).then( ()=>{} ).catch( ()=>{} )

// we can make an observable (aka publisher or broadcaster)
//by convention we use a trailing $ to indicate an observable
const keyStream$ = fromEvent(searchBox, 'keyup').pipe( // we tend to carry out several things on our observable
    debounceTime(500), // don't respond to anything less than 0.5 seconds
    map( (event)=>{
        // in ES the origin ofany event is the event.target
        const input = event.target as HTMLInputElement
        return input.value
    }),
    tap( (item)=>{
        console.log(`we received ${item}`)
    } ),
    map( (query)=>{
        console.log( suggest(testdata, query) )
        return suggest(testdata, query)
    } )
    // NB an observable will not react unless there is a subscriber
) // :Observable<T>
// we need our observable to actually broadcast some info
// NB the observable will not be instantiated until at least one subscriber exists
keyStream$.subscribe( (r)=>{
    cleanUp(output)
    appendResults(output, r)
} )
// ... also the observable will be marked for desctruction as soon as the last subscriber unsubscribes

// elsewhere we can subscribe to the observable
// keyStream$.subscribe( (r)=>{
//     console.log(`Something happened ${r}`)
// } )
