import layout from '@/views/layout'
import productList from '@/views/product-list'

export default [
    {
        path:'/',
        component:layout,
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