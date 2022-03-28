<template>
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
                <th colspan="10">Customer</th>
                <td>{{order.user.name}}</td>
            </tr>
            <tr v-if="isAdmin">
                <th colspan="10">Phone</th>
                <td>{{order.user.phone}}</td>
            </tr>
            <tr v-if="isAdmin">
                <th colspan="10">Delivery Method 
                    <span v-if="order.deliveryType=='address'">({{order.deliveryType}})</span>
                </th>
                <td>
                    <div v-if="order.deliveryType=='address'">
                        {{order.user.address}}
                    </div>
                    <div v-else>
                        {{order.deliveryType}}
                    </div>
                </td>
            </tr>
            <tr v-if="isAdmin">
                <th colspan="10">Order Date</th>
                <td>{{new Date(order.created_at).toDateString()}}</td>
            </tr>
            
            </tbody>
        </table>
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
            default:true
        }
    },

    computed:{
        apiImageUrl(){
            return process.env.VUE_APP_POP_UPLOAD+'/'
        }
    }
}
</script>