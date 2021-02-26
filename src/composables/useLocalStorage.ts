import { ITodo } from "@/type/type";
export interface IUseLocalStorage {
    getLocalList:()=>ITodo[];
    setLoaclList:(todoList:ITodo[])=>void;
}

function useLocalStorage():IUseLocalStorage{
    function  getLocalList():ITodo[] {
        return JSON.parse(localStorage.getItem('todoList')||'[]')
    }
    function  setLoaclList(todoList:ITodo[]):void {
        localStorage.setItem('todoList',JSON.stringify(todoList))
        console.log('1')
    }
    return {
        getLocalList,
        setLoaclList
    }
}
export{
    useLocalStorage
}