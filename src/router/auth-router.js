import login from '@/views/auth/login'

export default [
    {
        name:'login',
        path:'/login',
        component:login,
        isAdmin:false,
        requiresAuth:false,
    }
]