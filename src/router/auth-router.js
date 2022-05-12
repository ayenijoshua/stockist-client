import login from '@/views/auth/login'
import register from '@/views/auth/register'

export default [
    {
        name:'login',
        path:'/login',
        component:login,
        isAdmin:false,
        requiresAuth:false,
    },
    {
        name:'register',
        path:'/register',
        component:register,
        isAdmin:false,
        requiresAuth:false,
    }
]