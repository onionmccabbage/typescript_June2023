// TS adds the dictionary type

interface Channel {
    broadcast:boolean
    ident:string
    audience:number
}
// enum gives us an emuerable collection of useful values
enum channels {bbc4='BBC 4', bbc3='BBC 3', bbc1='BBC 1'}

// here is a dictionary - a mutable non-numeric-indexed collection
interface ChannelDict {
    [market:string] : Channel
}

let c:ChannelDict={} // we have an empty TS dictionary (also a JS object)

// here we populate themembers of our dict
// c['bbc4'] = {broadcast:true, ident:'BBC 4', audience:432}
c[channels.bbc4] = {broadcast:true, ident:'BBC 4', audience:432} // we can use an enum
