// Observables are most easily masnaged using the RxJS library
import { fromEvent, map } from 'RxJS'

// grab a handle on our search box
const searchBox:HTMLInputElement = document.querySelector('#search') as HTMLInputElement

// we can make an observable (aka publisher or broadcaster)
//by convention we use a trailing $ to indicate an observable
const keyStream$ = fromEvent(searchBox, 'keyup') // :Observable<T>
// we need our observable to actually broadcast some info
keyStream$.pipe( // we tend to carry out several things on our observable
    map( (event)=>{
        // in ES the origin ofany event is the event.target
        const input = event.target as HTMLInputElement
        return input.value
    })
)

// elsewhere we can subscribe to the observable
keyStream$.subscribe( ()=>{
    console.log(`Something happened`)
} )
