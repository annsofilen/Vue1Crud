import { createWebHashHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import Store from './components/Store.vue'
import About from './components/About.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/About', name: 'About', component: About },
    { path: '/Store', name: 'Store', component: Store },

]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;