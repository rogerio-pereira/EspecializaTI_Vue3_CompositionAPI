<template>
    <div>
        <h1>Edit ToDo</h1>
        <form action='#' method='post' @submit.prevent='updateTodo'>
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
import { onMounted, reactive } from 'vue'
import router from '@/router'
import TodoService from '@/services/todo.service'

export default {
    name: 'UpdateTodoView',

    props: {
        id: {
            required: true
        }
    },

    setup(props) {
        const todo = reactive({
            'name': '',
            'description': '',
            'completed': false,
            loading: false
        })

        onMounted(async() => {
            todo.loading = true
            TodoService.getTodo(props.id)
                .then(response => {
                    const todoResponse = response.data.data
                    todo.name = todoResponse.title
                    todo.description = todoResponse.body
                    todo.completed = todoResponse.completed == 'S'  //If not completed it will return 'S' as true as 'N' as false
                })
                .finally(() => {
                    todo.loading = false
                })
        })

        const updateTodo = () => {
            todo.loading = true

            TodoService.updateTodo(props.id, {...todo})
                .then(() => {
                    router.push({ name: 'todo.index'})
                })
                .finally(() => {
                    todo.loading = false
                })
        }

        return {
            todo,
            updateTodo
        }
    }
}
</script>