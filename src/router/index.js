import {createRouter, createWebHistory } from 'vue-router';
import PostList from '../components/PostList.vue';
import PostCreate from '../views/PostCreate.vue';
import PostEdit from '../views/PostEdit.vue'

const routes = [
    { path: '/', name: 'PostList', component: PostList},
    { path: '/create', name: 'PostCreate', component: PostCreate},
    { path: '/edit/:id', name: 'PostEdit', component: PostEdit}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router