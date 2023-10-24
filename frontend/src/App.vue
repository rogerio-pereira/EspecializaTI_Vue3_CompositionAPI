<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/to-do">ToDo</RouterLink>
            </nav>
        </div>
    </header>

    <RouterView />
</template>