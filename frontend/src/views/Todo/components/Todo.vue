<template>
    <div>
        {{ todo.title }} - {{ todo.body }}
        <router-link :to="{ name: 'todo.update', params: {id: todo.identify }}">Edit</router-link>
    </div>
</template>

<script>
export default {
    name: 'Todo',

    props: {
        todo: {
            required: true,
            type: Object,
        }
    },
}
</script>
