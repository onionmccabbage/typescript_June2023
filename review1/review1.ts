type Completed = boolean | "archived" | "pending" | "deleted"

const todos:Array<ToDo> = [
    {
      "userId": 1,
      "id": 1,
      "title": "delectus aut autem",
      "completed": "archived"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    }]

interface ToDo {
    userId:number
    id:number
    title:string
    completed:Completed  // boolean | 'archived'
}

// we could just use 'ToDo' as our type, but making a class would let us implement methods
class Job implements ToDo {
  userId: number
  id: number
  title: string
  completed: Completed
}

// consume some ToDo items
const job1:Job = todos[0] // or we could let Typescript infer the type
console.log(job1)

// we could just use the interface for our type
const job2:ToDo = todos[1] // or we could let Typescript infer the type
console.log(job2)

// Optional bit

// Here is a sort function
const compareJobByDesc = (a:Job, b:Job) => { // in descending order
    if (a.userId < b.userId) {
        return 1
    }
    if (a.userId > b.userId) {
        return -1
    }
    return 0
}

// here is a filter function
const filterByUserId = (a:Job)=>{
    if (a.userId === 1) {
        return a
    }
}
// sort and filter the array
console.log(todos.sort(compareJobByDesc))
console.log(todos.filter(filterByUserId))