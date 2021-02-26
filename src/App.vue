<template>
  <todo-input/>
  <todo-list
  :todolist="todolist"/>
</template>
<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { Store,useStore } from 'vuex'
import TodoInput from './components/TodoInput/TodoInput.vue'
import TodoList from './components/TodoList/TodoList.vue'
import { IUseTodo, useTodo } from './composables/useTodo'
export default defineComponent({
  components:{
    TodoInput,
    TodoList
  },
  setup:()=>{
    const {setTodoList}:IUseTodo=useTodo()
    const store:Store<any>=useStore()
    const todolist = computed(() => store.state.list)
    onMounted(() => {
      setTodoList()
    })
    return{todolist}
  }
})
</script>
<style lang="stylus" scoped>

</style>