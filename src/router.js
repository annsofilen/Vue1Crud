import { createWebHashHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import Store from './components/Store.vue'
import About from './components/About.vue'
import MyOrders from './components/MyOrders.vue'
import Product from './components/Product.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/About', name: 'About', component: About },
    { path: '/Store', name: 'Store', component: Store },
    { path: '/MyOrders', name: 'My Orders', component: MyOrders },
    { path: '/Product', name: 'Product', component: Product },
    { path: '/Register', name: 'Register', component: Register },
    { path: '/Login', name: 'Login', component: Login },
    { path: '/Profile', name: 'Profile', component: Profile },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;