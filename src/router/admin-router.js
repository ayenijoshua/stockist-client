import adminLayout from '@/views/adminLayout'
import dashboard from '@/views/admin/dashboard'
import security from '@/views/admin/security'
import transactions from '@/views/admin/transactions'
import settings from '@/views/admin/settings'
import products from '@/views/admin/products'
import banks from '@/views/admin/banks'

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
                component:dashboard
            },
            {
                path:'dashboard',
                name:'admin-dashboard',
                component:dashboard
            },
            {
                path:'transactions',
                name:'admin-transactions',
                component:transactions
            },
            {
                path:'settings',
                name:'admin-settings',
                component:settings
            },
            {
                path:'security',
                name:'admin-security',
                component:security
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
                component:banks
            },
            {
                path:'*',
                name:'admin-dashboard',
                component:dashboard
            },
          ]
      }
            
        
]