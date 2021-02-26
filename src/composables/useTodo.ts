import { DELETE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODOLIST } from "@/store/actionTypes"
import { ITodo, TODO_STATUS } from "@/type/type"
import { watch } from "vue";
import { Store, useStore } from "vuex"
import { IUseLocalStorage, useLocalStorage } from "./useLocalStorage";

export interface IUseTodo {
    addTodo: (todoContent: string) => void;
    setTodoList: () => void;
    deleteTodo: (id: number) => void;
    setStatus: (id: number) => void;
    setDoing: (id: number) => void;
}

function useTodo(): IUseTodo {
    const store: Store<any> = useStore();
    const { getLocalList, setLoaclList }: IUseLocalStorage = useLocalStorage()
    function addTodo(todoContent: string) {
        const todo: ITodo = {
            id: new Date().getTime(),
            content: todoContent,
            status: TODO_STATUS.TODO
        }
        store.dispatch(SET_TODO, todo)
        // setLoaclList(store.state.list)
    }
    function setTodoList(): void {
        const todolist: ITodo[] = getLocalList()
        store.dispatch(SET_TODOLIST, todolist)
    }
    function deleteTodo(id: number): void {
        store.dispatch(DELETE_TODO, id)
    }
    function setStatus(id: number): void {
        store.dispatch(SET_STATUS, id)
    }
    function setDoing(id: number): void {
        store.dispatch(SET_DOING, id)
    }
    watch(
        ()=>{
            return store.state.list
        },
        (todoList)=>{
            setLoaclList(todoList)
        }
    )
    return {
        addTodo,
        setTodoList,
        deleteTodo,
        setStatus,
        setDoing
    }
}



export {
    useTodo
}