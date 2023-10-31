<template>
    <div>
        {{ todo.title }} - {{ todo.body }}
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
