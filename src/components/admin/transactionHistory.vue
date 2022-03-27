<template>
    <div>
        <table class="table table-bordered table-hover">
            <tr>
                <th style="border:1px !important;">S/N</th>
                <th>Name</th>
                <th>ID No.</th>
                <th>Phone No.</th>
                <th>Email</th>
                <th>Sponsor Name</th>
                <th>State</th>
                <th>Order Status</th>                                                        
                <th>Date Of Order</th>
                <th>View Order</th>
            </tr> 
            <tr v-if="orders.length == 0">
                <td colspan="10">
                    <p class="text-center">Orders not found</p>
                </td>
            </tr>                                                                                                         
            <tr v-else v-for="order,i in orders" :key="i">
                <td>{{++i}}</td>
                <td>{{order.user.name}}</td>
                <td>{{order.user.IdNumber}}</td>
                <td>{{order.user.phone}}</td>
                <td>{{order.user.email}}</td>
                <td>{{order.user.sponsorName}}</td>
                <td>{{order.user.state}}</td>
                <td> 
                    <span :class="['btn btn-sm', order.status=='approved' ?
                    'btn-success' :order.status=='pending' ? 'btn-warning' :'btn-danger']">{{order.status}}</span>
                </td>
                <td>{{order.created_at}}</td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-sm btn-info" @click="setOrder(order)" v-b-modal.order type="button">
                            <i class="">View Order</i>
                        </button>
                    </div>
                </td>
            </tr> 
        </table> 

        <modal modalId="order" modalTitle="Order Details" modalSize="lg">
            <order-summary :order="order"/>
        </modal>
    </div>
</template>

<script>
import Modal from '@/components/Modal'
import orderSummary from '@/components/orders/orderSummary'
    export default {
        props:{
            orders:{
                type:Array,
                required:true
            }
        },
        data(){
            return{
                order:null
            }
        },
        components:{
            Modal,
            orderSummary
        },
    

        created(){
            
        },

        methods:{

            setOrder(data){
                this.order = data
            },

        }
    }
</script>