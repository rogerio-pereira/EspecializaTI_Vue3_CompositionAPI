<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink :to="{name: 'home'}">
                    Home
                </RouterLink>
                <RouterLink :to="{name: 'todo.index'}">
                    ToDo
                </RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>