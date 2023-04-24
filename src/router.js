import { createWebHashHistory, createRouter } from "vue-router";
import Home from './components/Home.vue'
import About from './components/About.vue'

const routes = [
    {path:'/', name:'Home', component: Home},
    {path:'/About', name:'About', component: About}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;