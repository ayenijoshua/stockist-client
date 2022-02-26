import Vue from 'vue'
import VueRouter from 'vue-router'
import userRouter from './user-router'
import authRouter from './auth-router'
import adminRouter from './admin-router'

Vue.use(VueRouter)

const routes = [
    ...userRouter,
    ...authRouter,
    ...adminRouter
]

const router = new VueRouter({
    mode:'history',
    routes:routes
})

export default router