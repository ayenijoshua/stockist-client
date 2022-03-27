<template>
    <div class="row p-5">
        <div class="col-md-12">
            <div class="row my-3">
                <!-- bar charts group -->
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h4 class="blue-text"><strong class="font-weight-bold">Product List</strong></h4>
                        </div>
                        <b-skeleton-table v-if="loading"
                            :rows="5"
                            :columns="7"
                            :table-props="{ bordered: true, striped: true }"
                        ></b-skeleton-table>
                        
                        <template v-else>
                            <div v-if="products.length == 0">
                                <div class="alert alert-info">There are no products</div>
                            </div>
                            <products v-else :products="products" @add-to-cart="addToCart" @remove-from-cart="removeFromCart"/>
                        </template>
                    </div>
                </div>
            </div>
        </div>
							
        <div class="col-md-12">
            <div class="row my-3">
                <!-- bar charts group -->
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header bg-white">
                            <h4 class="blue-text"><strong class="font-weight-bold">Order Summary</strong></h4>
                        </div>
                        <order-summary :order="orderData" />
                    </div>
                </div>
            </div>
            <button @click="checkOrder" type="button" class="btn btn-primary btn-lg  float-left">
                <i class="icon icon-credit-card"></i> Proceed To Payment
            </button>
        </div>

        <modal :modalId="'order'" :modalTitle="'Make Order'" modalSize='lg'>
            <div class="row">
                <div class="col-md-12">
                    <order-form @order-form-submitted="submitOrder"/>
                </div>
            </div>

            <div class="row">
                <div class="col-12 text-center">
                    <p><br><strong class="font-weight-bold">Copy The Account Details Below To make Your Payment.</strong></p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <template v-if="!banks">
                        ...Loading banks...
                    </template>
                    <bank-details v-else :banks="banks"/>
                </div>
            </div>

            <br>
            <div class="row">
                <div class="col-12 text-center">
                    <h4 class="font-weight-bold"> Disclaimer... </h4>
                    <p>Please ensure you pay to the bank before filling the order form as you would be required to enter your Proof of payment.</p>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
import products from '@/components/products/products'
import orderSummary from '@/components/orders/orderSummary'
import orderForm from '@/components/orders/orderForm'
import cart, {getCart} from '@/cart/index'

import {mapState,mapActions,mapGetters} from 'vuex'
import modal from '@/components/Modal'
import bankDetails from '@/components/orders/bankDetails'
import {notification} from '@/util/notification'
export default {
    components:{
        products,
        orderSummary,
        modal,
        bankDetails,
        orderForm
    },
    data(){
        return{
            orderData: {}
        }
    },
    computed:{
        ...mapState({
            loading:state=>state.loading,
            submittng:state=> state.submittng
        }),

        ...mapGetters('productStore',['products','banks']),
        ...mapGetters('bankStore',['banks']),
    },

    created(){
        if(this.products.length == 0){
            this.getProducts()
        }
         if(this.banks.length == 0){
            this.getBanks()
        }
        this.orderData = getCart()
        console.log(this.orderData)
        let bdClass = document.getElementById('bdy').classList
        bdClass.add('sidebar-collapse')
    },

    methods:{
        ...mapActions('productStore',['getProducts','getBanks']),
        ...mapActions('bankStore',['getBanks']),
        ...mapActions('orderStore',{
            createOrder:'create'
        }),
        ...mapActions('userStore',{
            createUser:'create'
        }),

        addToCart(data){
            let product = {
                id:data.product._id,
                name:data.product.name,
                price:data.product.price,
                qty:data.qty,
                totalPrice:data.qty * data.product.price,
            }
            cart.addItem(product)
            this.orderData = getCart()
        },

        removeFromCart(product){
            let prod = {
                id:product._id,
            }
            cart.removeItem(prod)
            this.orderData = getCart()
        },

        async submitOrder(userInfo){
            try {
                let user = await this.createUser(userInfo)
                if(user.status == 200){
                    this.orderData.userId = user.data._id
                    let order = await this.createOrder(this.orderData)
                    if(order.status == 200){
                        cart.clearCart()
                        this.orderData = getCart()
                        setTimeout(()=>{
                            this.$bvModal.hide('order')
                        },2000)   
                    }
                }
            } catch (error) {
                console.log(error)
                notification.error("An error occured while processing order")
            }
        },

        checkOrder(){
            if(this.orderData.products != undefined && this.orderData.products.length > 0){
                this.$bvModal.show('order')
            }else{
                notification.error("Please select items to purchase")
            }
        }
    }
    
}
</script>