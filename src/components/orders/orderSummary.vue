<template>
    <div>
        <div class="card-body" style="overflow-x:auto;">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Product Unit Price</th>
                        <th scope="col">Product Quantity</th>
                        <th scope="col">Total Price</th>
                        
                    </tr>
                </thead>
                <tbody>
                <tr v-for="product,i in order.products" :key="i">
                    <td>{{product.name}}</td>
                    <td>₦{{product.price}}</td>
                    <td>{{product.qty}}</td>
                    <td>₦{{product.totalPrice}}</td>
                </tr>
                <tr>
                    <th colspan="10">Total Qty</th>
                    <td>{{order.totalQty}}</td>
                </tr>
                <tr>
                    <th colspan="10">Total Price</th>
                    <td>₦{{order.totalPrice}}</td>
                </tr>
                <tr v-if="isAdmin">
                    <th colspan="10">Order Status</th>
                    <td>
                        <span :class="['btn btn-sm', order.status=='approved' ?
                        'btn-success' :order.status=='pending' ? 'btn-warning' :'btn-danger']">{{order.status}}</span>
                    </td>
                </tr>
                <tr v-if="isAdmin">
                    <th colspan="10">Customer</th>
                    <td>{{order.user.name}}</td>
                </tr>
                <tr v-if="isAdmin">
                    <th colspan="10">Phone</th>
                    <td>{{order.user.phone}}</td>
                </tr>
                <tr v-if="isAdmin">
                    <th colspan="10">Delivery Method</th>
                    <td>{{order.deliveryType}}</td>
                </tr>
                <tr v-if="isAdmin">
                    <th colspan="10">Address</th>
                    <td>{{order.user.address}}</td>
                </tr>
                <tr v-if="isAdmin">
                    <th colspan="10">Order Date</th>
                    <td>{{new Date(order.created_at).toDateString()}}</td>
                </tr>
                
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        order:{
            type:Object,
            required:true
        },
        isAdmin:{
            type:Boolean,
            default:false
        }
    },

    computed:{
        apiImageUrl(){
            return process.env.VUE_APP_POP_UPLOAD+'/'
        }
    }
}
</script>