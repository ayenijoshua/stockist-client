<template>
    <div>
        <table class="table table-bordered table-hover" data-options='{ "paging": false; "searching":false}'>
            <tr>
                <th style="border:1px !important;">S/N</th>
                <th>Name</th>
                <th>Phone No.</th>
                <th>Email</th>
                <th>Suggested username</th>
                <th>Bank Name</th>
                <th>Account Number</th>
                <th>State</th>
                <th>Order Status</th>
                <th>Upline username</th>
                <th>Sponsor name</th>
                <th>Sponsor username</th>
                <th>Sponsor bank name</th>
                <th>Sponsor account number</th>
                <th>Sponsor state</th>                                                      
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
                <td>{{order.user.phone}}</td>
                <td>{{order.user.email}}</td>
                <td>{{order.user.username}}</td>
                <td>{{order.user.bankName}}</td>
                <td>{{order.user.accountNumber}}</td>
                <td>{{order.user.state}}</td>
                <td> 
                    <span :class="['btn btn-sm', order.status=='approved' ?
                    'btn-success' :order.status=='pending' ? 'btn-warning' :'btn-danger']">{{order.status}}</span>
                </td>
                <td>{{order.user.uplineUsername}}</td>
                <td>{{order.user.sponsorName}}</td>
                <td>{{order.user.sponsorUsername}}</td>
                <td>{{order.user.sponsorBankName}}</td>
                <td>{{order.user.sponsorAccountNumber}}</td>
                <td>{{order.user.sponsorState}}</td>
                <td>{{new Date(order.created_at).toDateString()}}</td>
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
            <div class="row">
                <div class="col-md-3">
                    <button id="submit" @click="print()" class="btn btn-primary">Print Transaction<i class="icon-print"></i></button>
                </div>
            </div>
            <b-card v-if="!order">
                <b-skeleton animation="throb" width="85%"></b-skeleton>
                <b-skeleton animation="throb" width="55%"></b-skeleton>
                <b-skeleton animation="throb" width="70%"></b-skeleton>
            </b-card>
            <template v-else>
                <div class="row">
                    <div class="col-md-12">
                        <order-summary :isAdmin="true" :order="order"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center">Proof Of Payment</h4>
                        <div class="card" style="overflow-x:auto;">
                            <div class="card-body" style="">
                                <img :src="apiImageUrl + order.pop" class="img-responsive" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>
            </template>
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

        computed:{
            apiImageUrl(){
                return process.env.VUE_APP_POP_UPLOAD+'/'
            }
        },
    

        created(){
            
        },

        methods:{

            setOrder(data){
                this.order = data
            },

            print(){
                window.print()
            }

        }
    }
</script>