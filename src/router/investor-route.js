import investorLayout from '@/views/investorLayout'
import dashboard from '@/views/investor/dashboard'
import transactions from '@/views/investor/transactions'
import products from '@/views/investor/products'
import members from '@/views/investor/registeredMembers'
import profits from '@/views/investor/profit'

export default [
    
      {
          path:'/investor',
          component:investorLayout,
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
                    isInvestor:true,
                    requiresAuth:true
                },
            },
            {
                path:'dashboard',
                name:'investor-dashboard',
                component:dashboard,
                meta:{
                    isInvestor:true,
                    requiresAuth:true
                },
            },
            {
                path:'transactions',
                name:'investor-transactions',
                component:transactions,
                meta:{
                    isInvestor:true,
                    requiresAuth:true
                },
            },
            {
                path:'products',
                name:'investor-products',
                component:products,
                meta:{
                    isInvestor:true,
                    requiresAuth:true
                  },
            },
            {
                path:'members',
                name:'investor-members',
                component:members,
                meta:{
                    isInvestor:true,
                    requiresAuth:true
                },
            },
            {
                path:'profits',
                name:'investor-profits',
                component:profits,
                meta:{
                    isInvestor:true,
                    requiresAuth:true
                },
            },
            {
                path:'*',
                name:'investor-dashboard',
                component:dashboard,
                meta:{
                    isInvestor:true,
                    requiresAuth:true
                },
            },
          ]
      }
            
        
]