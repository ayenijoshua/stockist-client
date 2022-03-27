import layout from '@/views/layout'
import productList from '@/views/product-list'

export default [
    {
        path:'/',
        component:layout,
        isAdmin:false,
        requiresAuth:false,
        children:[
            {
                path:'',
                name:'products',
                component:productList
            },
            {
                path:'products',
                name:'products',
                component:productList
            },
        ]
    }
]