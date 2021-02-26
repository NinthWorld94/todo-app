<template>
  <todo-item 
  v-for="item of todolist"
  :key="item.id"
  :item="item" 
  @deleteTodo="deleteTodo"
  @setStatus="setStatus"
  @setDoing="setDoing"/>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import TodoItem from "@/components/TodoList/TodoItem.vue";
import { ITodo } from "@/type/type";
import { IUseTodo, useTodo } from "@/composables/useTodo";

export default defineComponent({
  components: {
    TodoItem,
  },
  props:{
    todolist:Array as PropType<ITodo[]>
  },
  setup: (props) => {
    const {deleteTodo,setStatus,setDoing}:IUseTodo=useTodo()
    return{
      deleteTodo,setStatus,setDoing,
    }
  },
});
</script>
<style lang="stylus" scoped></style>