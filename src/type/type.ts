interface ITodo{
    id:number
    content:string
    status:TODO_STATUS
}
enum TODO_STATUS{
    TODO = 'todo',
    DOING = 'doing',
    DONE = 'done'
}
interface Istate{
    list:ITodo[]
}
export {
    ITodo,
    TODO_STATUS,
    Istate
}