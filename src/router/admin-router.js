import adminLayout from '@/views/adminLayout'
import dashboard from '@/views/admin/dashboard'
import security from '@/views/admin/security'
import transactions from '@/views/admin/transactions'
import settings from '@/views/admin/settings'
import products from '@/views/admin/products'
import banks from '@/views/admin/banks'
import members from '@/views/admin/registeredMembers'
import profits from '@/views/admin/profit'
import investors from '@/views/admin/investors'

export default [
    
      {
          path:'/admin',
          component:adminLayout,
          meta:{
            isAdmin:true,
            requiresAuth:true
          },
          children:[
            {
                path:'',
                name:'dashboard',
                component:dashboard,
                meta:{
                    isAdmin:true,
                    requiresAuth:true
                },
            },
            {
                path:'dashboard',
                name:'admin-dashboard',
                component:dashboard,
                meta:{
                    isAdmin:true,
                    requiresAuth:true
                },
            },
            {
                path:'transactions',
                name:'admin-transactions',
                component:transactions,
                meta:{
                    isAdmin:true,
                    requiresAuth:true
                },
            },
            {
                path:'settings',
                name:'admin-settings',
                component:settings,
                meta:{
                    isAdmin:true,
                    requiresAuth:true
                },
            },
            {
                path:'security',
                name:'admin-security',
                component:security,
                meta:{
                    isAdmin:true,
                    requiresAuth:true
                },
            },
            {
                path:'products',
                name:'admin-products',
                component:products,
                meta:{
                    isAdmin:true,
                    requiresAuth:true
                  },
            },
            {
                path:'banks',
                name:'admin-banks',
                component:banks,
                meta:{
                    isAdmin:true,
                    requiresAuth:true
                },
            },
            {
                path:'members',
                name:'admin-members',
                component:members,
                meta:{
                    isAdmin:true,
                    requiresAuth:true
                },
            },
            {
                path:'profits',
                name:'admin-profits',
                component:profits,
                meta:{
                    isAdmin:true,
                    requiresAuth:true
                },
            },
            {
                path:'investors',
                name:'admin-investors',
                component:investors,
                meta:{
                    isAdmin:true,
                    requiresAuth:true
                },
            },
            {
                path:'*',
                name:'admin-dashboard',
                component:dashboard,
                meta:{
                    isAdmin:true,
                    requiresAuth:true
                },
            },
          ]
      }
            
        
]