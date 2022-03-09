import adminLayout from '@/views/adminLayout'
import dashboard from '@/views/admin/dashboard'
import security from '@/views/admin/security'
import transactions from '@/views/admin/transactions'
import settings from '@/views/admin/settings'
import products from '@/views/admin/products'

export default [
    
      {
          path:'/admin',
          component:adminLayout,
          children:[
            {
                path:'dashboard',
                name:'dashboard',
                component:dashboard
            },
            {
                path:'transactions',
                name:'transactions',
                component:transactions
            },
            {
                path:'settings',
                name:'settings',
                component:settings
            },
            {
                path:'security',
                name:'security',
                component:security
            },
            {
                path:'products',
                name:'admin-products',
                component:products
            },
          ]
      }
            
        
]