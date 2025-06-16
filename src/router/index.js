import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Form from '../views/Form.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/shop',
        name: 'Shop',
        component: Shop
    } ,
     {
        path: '/shop/form',
        name: 'Form',
        component: Form
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
