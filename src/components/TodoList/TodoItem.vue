<template>
  <div>
    <input 
    type="checkbox"
    :checked="item.status===DONE"
    @click="setStatus(item.id)"
    />
    <span
    :class="item.status === DONE ? 'line-through':''"> {{item.content}}</span>
    <span></span>
    <button @click="deleteTodo(item.id)">删除</button>
    <button
    v-if="item.status!==DONE" 
    @click="setDoing(item.id)"
    :class="item.status===DOING?'button-doning':'button-todo'">
    {{item.status===DOING?'正在做':'开始做'}}
    </button>
  </div>
</template>
<script lang="ts">
import { ITodo, TODO_STATUS } from "@/type/type";
import { defineComponent, PropType } from "vue";
interface IStatusState {
  TODO:TODO_STATUS.TODO
  DOING:TODO_STATUS.DOING
  DONE:TODO_STATUS.DONE
}
export default defineComponent({
  name:"TodoItem",
  props:{
    item:Object as PropType<ITodo>
  },
  setup: (props,{emit}) => {
    const statusState:IStatusState = { 
      TODO: TODO_STATUS.TODO,
      DOING: TODO_STATUS.DOING,
      DONE: TODO_STATUS.DONE
    }
    const deleteTodo = (id:number):void =>{emit('deleteTodo',id)}
    const setDoing = (id:number):void =>{emit('setDoing',id)}
    const setStatus = (id:number):void =>{emit('setStatus',id)}
    return{
      ...statusState,
      deleteTodo,
      setDoing,
      setStatus
    }
  },
});
</script>
<style lang="stylus" scoped>
.line-through
 text-decoration line-through
.button-doning
 background-color green
 color #000
.button-todo
 background-color #ccc
 color #eee
</style>