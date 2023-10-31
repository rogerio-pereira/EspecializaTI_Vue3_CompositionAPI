<template>
    <main>
        <h1>
            ToDo
            <router-link :to="{ name: 'todo.create' }">+</router-link>
        </h1>

        <span v-if='loading'>
            Loading
        </span>
        <ul v-else>
            <li v-for='todo in todos' :key='todo.id'>
                <todo :todo='todo' @deletedTodo='deleteTodoFromList'/>
            </li>
        </ul>
    </main>
</template>

<script>
import { onMounted, ref } from 'vue'
import TodoService from '@/services/todo.service'
import Todo from './components/Todo.vue'

export default {
    name: 'Todos',

    setup() {
        // const todos = [
        //     {id: 1, name: 'tarefa 1', completed: true },
        //     {id: 2, name: 'tarefa 2', completed: true },
        //     {id: 3, name: 'tarefa 3', completed: true },
        // ]
        // const name = ref('test') // Variavel precisa ser definida com ref para funcionar o two-way data-bind

        // change name value
        // name.value = 'test ref'

        // return {
        //     todos,
        //     name
        // }

        const todos = ref([])
        const loading = ref(false)

        onMounted(() => {
            loading.value = true

            TodoService.getAll()
                .then(response => {
                    todos.value = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
                .finally(() => {
                    loading.value = false
                })
        })

        const deleteTodoFromList = (todo) => {
            const index = todos.value.indexOf(todo)
            todos.value.splice(index, 1)
        }

        return {
            todos,
            loading,
            deleteTodoFromList,
        }
    },

    components: {
        Todo
    }
}
</script>