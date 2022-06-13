import login from '@/views/auth/login'
import register from '@/views/auth/register'
import resetPassword from '@/views/auth/password-reset'
import notFound from '@/views/notFound'

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
    },
    {
        name:'register-with-referral',
        path:'/register/:referral',
        component:register,
        isAdmin:false,
        requiresAuth:false,
    },
    {
        name:'reset-password',
        path:'/reset-password/:token',
        component:resetPassword,
        isAdmin:false,
        requiresAuth:false,
    },
    {
        name:'not-found',
        path:'*',
        component:notFound,
        isAdmin:false,
        requiresAuth:false,
    }
]