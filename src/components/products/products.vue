<template>
    <div class="card-body" style="overflow-x:auto;">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Product Name</th>
                    <th scope="col">Available Quantity</th>
                    <th scope="col">Product Price</th>
                    <th scope="col">Product Quantity</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product,i in products" :key="i">
                    <td>{{product.name}}</td>
                    <td>{{product.quantity}}</td>
                    <td>₦{{product.price}}</td>
                    <td>
                        <input class="form-control form-control-lg r-0" min="1" max="50" type="number" :id="i+'-qty'" name="quantity" placeholder="Enter Quantity">
                    </td>
                    <td>
                        <div class="dropdown">
                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Add/Remove
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                <a data-id="2" class="dropdown-item btn" @click="add(product,i)" >Add</a>
                                <a data-id="2" class="dropdown-item btn" @click="remove(product)">Remove</a>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import {notification} from '@/util/notification'
export default {
    props:{
        products:{
            type:Array,
            required:true
        },
        
    },

    methods:{
        add(product,i){
            let qty = document.getElementById(i+'-qty').value
            if(!qty || qty < 1){
                qty=1
            }
            if(qty > product.quantity){
                notification.error("Your request is above the available quantity")
                return
            }
            this.$emit('add-to-cart',{product,qty})
        },
        remove(product){
            this.$emit('remove-from-cart',product)
        }
    }
}
</script>