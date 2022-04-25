import dashboard from '@/views/user/dashboard'

export default [
    {
        path:'/user',
        name:'user-dashboard',
        component:dashboard,
        meta:{
            isAdmin:false,
            requiresAuth:false,
        }
    },
]