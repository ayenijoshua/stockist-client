import layout from '@/views/layout'
import productList from '@/views/product-list'

export default [
    {
        path:'/',
        component:layout,
        children:[
            {
                path:'products',
                name:'products',
                component:productList
            },
        ]
    }
]