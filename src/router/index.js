import Vue from 'vue'
import VueRouter from 'vue-router'
import userRouter from './user-router'

Vue.use(VueRouter)

const routes = [
    ...userRouter
]

const router = new VueRouter({
    mode:'history',
    routes:routes
})

export default router