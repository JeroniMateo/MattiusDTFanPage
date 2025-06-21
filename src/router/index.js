import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Shop from '../views/Shop.vue'
import Form from '../views/Form.vue'
import UserProfile from '../views/User/UserProfile.vue'
import LogIn from '../views/User/LogIn.vue'
import SignUp from '../views/User/SignUp.vue'
import MyProfile from '../components/user/MyProfile.vue'
 import WishList from '../components/user/WishList.vue'
import MyOrders from '../components/user/MyOrders.vue'

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
    },
    {
    path: '/user',
    name: 'UserProfile',
    component: UserProfile
    },
    {
        path:'/login',
        name:'Login',
        component: LogIn
    },
    {
        path:'/signup',
        name:'Signup',
        component: SignUp
    },
    {
        path:'/user/myprofile',
        name:'MyProfile',
        component: MyProfile
    },
    {
        path:'/user/wishlist',
        name:'WishList',
        component: WishList
    },
    {
        path:'/user/orders',
        name:'MyOrders',
        component: MyOrders
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
