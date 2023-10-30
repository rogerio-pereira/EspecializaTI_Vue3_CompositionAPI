<template>
    <main>
        <h1>ToDo</h1>

        <ul>
            <li v-for='todo in todos' :key='todo.id'>
                {{ todo.title }}
            </li>
        </ul>
    </main>

    <input type='text' v-model='name' />
</template>

<script>
import { onMounted, ref } from 'vue'
import TodoService from '@/services/todo.service'

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

        onMounted(() => {
            TodoService.getAll()
                .then(response => {
                    todos.value = response.data.data
                })
                .catch(error => {
                    console.log(error)
                })
        })

        return {
            todos,
        }
    }
}
</script>