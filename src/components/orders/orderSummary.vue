<template>
    <div class="card-body" style="overflow-x:auto;">
        <div class="row">
            <div class="col-md-6">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Product Unit Price</th>
                            <th scope="col">Product Quantity</th>
                            <th scope="col">Total Quantity Price</th>
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
                        <td>₦{{order.totalQty}}</td>
                    </tr>
                    <tr>
                        <th colspan="10">Total Price</th>
                        <td>₦{{order.totalPrice}}</td>
                    </tr>
                    
                    </tbody>
                </table>
            </div>
            <div class="col-md-6">
                <img :src="apiImageUrl+order.pop" class="img-responsive" width="100%" />
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        order:{
            type:Object,
            required:true
        }
    },

    computed:{
        apiImageUrl(){
            return process.env.VUE_APP_POP_UPLOAD+'/'
        }
    }
}
</script>