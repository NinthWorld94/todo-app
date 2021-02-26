<template>
  <div class="wrap">
    <input type="text" 
    v-model="todoValue"
    @keyup="enterTodoValue"/>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
import {IUseTodo, useTodo} from '@/composables/useTodo.ts'
export default defineComponent({
  components: {},
  setup: () => {
    const todoValue=ref<string>('');
    const {addTodo}:IUseTodo=useTodo();
    const enterTodoValue = (e:KeyboardEvent)=>{
      if(e.code==='Enter'&&todoValue.value.trim().length){
        addTodo(todoValue.value)
        todoValue.value='';
      }
    }
    return{todoValue,enterTodoValue}
  },
});
</script>
<style lang="stylus" scoped></style>