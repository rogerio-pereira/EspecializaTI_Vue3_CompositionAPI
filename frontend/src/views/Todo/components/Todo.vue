<template>
    <div>
        <input type="checkbox" :checked="completed" @change='toggleStatus'>
        {{ todo.title }} - {{ todo.body }}
        <router-link :to="{ name: 'todo.update', params: {id: todo.identify }}">Edit</router-link>
        <a href='#' @click.prevent='deleteTodo'>Delete</a>
    </div>
</template>

<script>
import TodoService from '@/services/todo.service'
import { computed } from 'vue'

export default {
    name: 'Todo',

    props: {
        todo: {
            required: true,
            type: Object,
        }
    },

    setup(props, {emit}) {
        const completed = computed(() => props.todo.completed == 'S')

        const deleteTodo = () => {
            TodoService.deleteTodo(props.todo.identify)
                .then(response => {
                    emit('deletedTodo', props.todo)
                })
        }

        const toggleStatus = () => {
            const todo = props.todo
            const data = {
                name: todo.title,
                description: todo.body,
                completed: !completed
            }
            console.log(completed, !completed)

            TodoService.updateTodo(props.todo.identify, data)
                .then(response => {
                    emit('updatedTodo', data)
                })
        }

        return {
            completed,
            deleteTodo,
            toggleStatus,
        }
    }
}
</script>
