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
                <th>Upline username</th>
                <th>Sponsor name</th>
                <th>Sponsor username</th>
                <th>Sponsor bank name</th>
                <th>Sponsor account number</th>
                <th>Sponsor state</th>                                                      
                <th>Date Of Order</th>
                <th>View Order</th>
                <th>Action</th>
            </tr> 
            <tr v-if="loading">
                <td colspan="10">
                    <b-skeleton-table
                        :rows="5"
                        :columns="9"
                        :table-props="{ bordered: true, striped: true }"
                    ></b-skeleton-table>
                </td>
            </tr> 
            <template v-else>
                <tr v-if="pendingOrders.length==0">
                    <td colspan="9">
                        There are no pending orders
                    </td>
                </tr>
                <tr v-else v-for="order,i in pendingOrders" :key="i">
                    <td>{{++i}}</td>
                    <td>{{order.user.name}}</td>
                    <td>{{order.user.phone}}</td>
                    <td>{{order.user.email}}</td>
                    <td>{{order.user.username}}</td>
                    <td>{{order.user.bankName}}</td>
                    <td>{{order.user.accountNumber}}</td>
                    <td>{{order.user.state}}</td>
                    <td>{{order.user.uplineUsername}}</td>
                    <td>{{order.user.sponsorName}}</td>
                    <td>{{order.user.sponsorUsername}}</td>
                    <td>{{order.user.sponsorBankName}}</td>
                    <td>{{order.user.sponsorAccountNumber}}</td>
                    <td>{{order.user.sponsorState}}</td>
                    <td>{{new Date(order.created_at).toDateString()}}</td>
                    <td>
                        <button type="submit" id="submit" class="btn btn-sm btn-primary" @click="setOrder(order)" v-b-modal.viewOrder>
                            View Order
                        </button>
                    </td>
                    <td>
                        <div class="dropdown">
                            <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Approve/disapprove
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                <a data-id="6"  class="dropdown-item approve" v-b-modal.approve @click="setOrder(order)">Approve</a>
                                <a data-id="6"  class="dropdown-item" v-b-modal.disapprove @click="setOrder(order)">Decline</a>
                            </div>
                        </div>
                    </td>
                </tr>
            
            </template>                                                                                                       
        </table>  

        <modal  modalId="viewOrder" modalTitle='Order Details' modalSize="lg">
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

        <modal  modalId="approve" modalTitle='Approve Order'>
            <b-card v-if="!order">
                <b-skeleton animation="throb" width="85%"></b-skeleton>
                <b-skeleton animation="throb" width="55%"></b-skeleton>
                <b-skeleton animation="throb" width="70%"></b-skeleton>
            </b-card>
            <template v-else>
                <div class="alert alert-info">
                    Are you sure you want to approve?
                </div>
                <button class="btn btn-success" @click="approve()">Approve</button>
            </template>
        </modal>

        <modal  modalId="disapprove" modalTitle='Disapprove Order'>
            <b-card v-if="!order">
                <b-skeleton animation="throb" width="85%"></b-skeleton>
                <b-skeleton animation="throb" width="55%"></b-skeleton>
                <b-skeleton animation="throb" width="70%"></b-skeleton>
            </b-card>
            <template v-else>
                <div class="alert alert-danger">
                    Are you sure you want to disapprove?
                </div>
                <button class="btn btn-danger" @click="disapprove()">Disapprove</button>
            </template>
        </modal>

    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import Modal from '@/components/Modal'
import orderSummary from '@/components/orders/orderSummary'
    export default {
        props:{
            pendingOrders:{
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
            ...mapState({
                loading:state=>state.loading
            }),

            apiImageUrl(){
                return process.env.VUE_APP_POP_UPLOAD+'/'
            }

            //...mapGetters('orderStore',['pendingOrders'])
        },

        created(){
            // if(this.pendingOrders.length==0){
            //     this.getPending()
            // }
        },

        methods:{
            ...mapActions('orderStore',['getPending','approveOrder','disapproveOrder']),

            setOrder(data){
                this.order = data
            },

            async approve(){
               const res = await this.approveOrder(this.order._id)
               if(res.status==200){
                   this.$bvModal.hide('approve')
               }
            },

            async disapprove(){
               const res = await this.disapproveOrder(this.order._id)
               if(res.status==200){
                   this.$bvModal.hide('disapprove')
               }
            }
        }
    }
</script>