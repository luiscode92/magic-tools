import { createRouter, createWebHistory } from 'vue-router'
import RLogin from '../components/Login.vue';


const routes = [
        {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

  export default router