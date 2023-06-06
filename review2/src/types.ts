export interface User {
    id: number
    name: string
    username: string
    email: string
    website: string
}
export interface ToDo {
    userId: number
    id: number
    title: string
    completed: boolean
}
export interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}