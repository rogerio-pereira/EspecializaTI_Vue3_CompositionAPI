<template>
    <div>
        <h1>Add ToDo</h1>
        <form action='#' method='post' @submit.prevent='addTodo'>
            <input type='text' name='title' placeholder="Title" v-model='todo.name' />

            <input type='text' name='description' placeholder="Description" v-model='todo.description' />

            <button type="submit" v-if='todo.loading' :disabled='todo.loading'>
                Saving...
            </button>
            <button type="submit" v-else>
                Save
            </button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import router from '@/router'
import TodoService from '@/services/todo.service'

export default {
    name: 'AddTodoView',

    setup() {
        // const title = ref('')
        // const description = ref('')
        const todo = reactive({
            'name': '',
            'description': '',
            'completed': false,
            loading: false
        })

        const addTodo = () => {
            // const params = {
            //     name: title.value,
            //     description: description.value,
            //     completed: false,
            // }

            todo.loading = true

            // TodoService.addTodo(params)
            TodoService.addTodo({...todo})
                .then(() => {
                    router.push({ name: 'todo.index'})
                })
                .finally(() => {
                    todo.loading = false
                })
        }

        return {
            // title,
            // description,
            todo,
            addTodo
        }
    }
}
</script>