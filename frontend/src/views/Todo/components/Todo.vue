<template>
    <div>
        {{ todo.title }} - {{ todo.body }}
        <router-link :to="{ name: 'todo.update', params: {id: todo.identify }}">Edit</router-link>
        <a href='#' @click.prevent='deleteTodo'>Delete</a>
    </div>
</template>

<script>
import TodoService from '@/services/todo.service'

export default {
    name: 'Todo',

    props: {
        todo: {
            required: true,
            type: Object,
        }
    },

    setup(props, {emit}) {
        const deleteTodo = () => {
            TodoService.deleteTodo(props.todo.identify)
                .then(response => {
                    emit('deletedTodo', props.todo)
                })
        }

        return {
            deleteTodo
        }
    }
}
</script>
