import { Istate, ITodo, TODO_STATUS } from "@/type/type";
import { DELETE_TODO, SET_DOING, SET_STATUS, SET_TODO, SET_TODOLIST } from "./actionTypes";

export default {
    [SET_TODO](state: Istate, todo: ITodo): void {
        state.list=[todo,...state.list]
    },
    [SET_TODOLIST](state: Istate, todoList: ITodo[]): void {
        state.list = todoList
    },
    [SET_STATUS](state: Istate, id: number) {
        state.list = state.list.map((item: ITodo) => {
            if (item.id === id) {
                switch (item.status) {
                    case TODO_STATUS.DONE:
                        item.status = TODO_STATUS.TODO
                        break
                    case TODO_STATUS.TODO:
                        item.status = TODO_STATUS.DONE
                        break
                    case TODO_STATUS.DOING:
                        item.status = TODO_STATUS.DONE
                    default:
                        break
                }
            }
            return item
        })
    },
    [DELETE_TODO](state: Istate, id: number) {
        state.list = state.list.filter((item: ITodo) => item.id !== id)
    },
    [SET_DOING](state: Istate, id: number) {
        state.list = state.list.map((item:ITodo) => {
            // if (item.id === id) {
            //     switch (item.status) {
            //         case TODO_STATUS.DOING:
            //             item.status = TODO_STATUS.TODO
            //             break
            //         case TODO_STATUS.TODO:
            //             item.status = TODO_STATUS.DOING
            //             break
            //         default:
            //             break
            //     }
            // }
            item.id !== id
            ?(item.status === TODO_STATUS.DOING
                ?item.status = TODO_STATUS.TODO
                :'')
            :(item.status = item.status === TODO_STATUS.TODO
                ?TODO_STATUS.DOING
                :TODO_STATUS.TODO)
            return item
        })
    }

}