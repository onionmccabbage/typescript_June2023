// classes are part of modern ES
// the interface keyowrd is part of TS

// we often use interface to declare non-trivial data type
// the TS documentation prefers 'interface' over 'type'
interface Photo {
    albumId:number
    id:number
    title:string
    url:string
    thumbnailUrl:string
    prettyPrint?: ()=>{} // no implementation in the interface
}

// we can use our interface to make a class
class Snap implements Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
    ooblwoobly?:object // ? makes it optional
    // we can optionally declare a constructor
    constructor(snap:Photo){ // NB ES permits only ONE constructor
        this.albumId = snap.albumId
        this.id = snap.id
        this.title = snap.title
        this.url = snap.url
        this.thumbnailUrl = snap.thumbnailUrl
    }
    prettyPrint ():string{
        return `${this.title} ${this.url}`
    }
}

// we can manually populate an instance
let s1 = new Snap({'id':346, 'albumId':3, 'title':'cat', 'thumbnailUrl':'http://nonsuch.ie', 'url':'bbc.co.uk/nope'})

// here is some data. We can make this collection data-type safe
// we use exolicit data-typing for the structure
// let photos:Photo[] = [{ // both syntaxes are identical
let photos:Array<Photo> = [{
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
},
{
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
},
{
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
}]

// we can use our 'photos' structure to populate 'snap' instances
let s2 = new Snap(photos[1])
console.log(s2.prettyPrint())
