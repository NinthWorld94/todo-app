import { Istate, ITodo } from "@/type/type";
import { Commit } from "vuex";
import { DELETE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODOLIST } from "./actionTypes";
interface ICtx{
    commit:Commit,
    state:Istate
}
export default{
    [SET_TODO]({commit}:ICtx,todo:ITodo):void{
        commit(SET_TODO,todo);
    },
    [SET_TODOLIST]({commit}:ICtx,todoList:ITodo[]):void{
        commit(SET_TODOLIST,todoList);
    },
    [DELETE_TODO]({commit}:ICtx,id:number):void{
        commit(DELETE_TODO,id);
    },
    [SET_DOING]({commit}:ICtx,id:number):void{
        commit(SET_DOING,id);
    },
    [SET_STATUS]({commit}:ICtx,id:number):void{
        commit(SET_STATUS,id);
    }
}