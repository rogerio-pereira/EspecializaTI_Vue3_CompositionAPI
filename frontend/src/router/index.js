import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TodoView from '@/views/Todo/TodoView.vue'
import AddTodoView from '@/views/Todo/AddTodoView.vue'
import UpdateTodoView from '@/views/Todo/UpdateTodoView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/to-do',
            name: 'todo.index',
            component: TodoView
        },
        {
            path: '/to-do/create',
            name: 'todo.create',
            component: AddTodoView
        },
        {
            path: '/to-do/:id/update',
            name: 'todo.update',
            component: UpdateTodoView,
            props: true
        },
    ]
})

export default router
