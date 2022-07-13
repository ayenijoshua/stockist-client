<template>
    <div>
        <search-transaction @get-specific-orders="getSpecificOrder" @search="setSearchResult"/>

        <div class="row">
            <div class="col-md-9">
            </div>
            <div class="col-md-3">
                <button type="submit" id="submit" @click="print()" class="btn btn-primary">Print Transaction&nbsp;&nbsp;<i class="icon-print"></i></button>
            </div>
        </div>
                
        <div class="row">
            <!-- Column -->
            <div class="col-md-12">
                <!-- Nav tabs -->
                <ul class="nav nav-tabs profile-tab" role="tablist">
                    <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Purchase History</a> </li>
                    <!-- <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#pay" role="tab">Total Monthly Order</a> </li> -->
                </ul>
                <!-- Tab panes -->
                <div class="tab-content">
                    <div class="tab-pane active" id="home" role="tabpanel">
                        <div class="table-responsive" style="">
                            <transaction-history v-if="showAllOrders" :orders="orders" />
                            <transaction-history v-if="showPendingOrders" :orders="pendingOrders" />
                            <transaction-history v-if="showApprovedOrders" :orders="approvedOrders" />
                            <transaction-history v-if="showDisapprovedOrders" :orders="disapprovedOrders" />      
                        </div> 
                    </div>
                </div>
            </div>

            <!-- Column -->
        </div>
    </div>
</template>

<script>
import transactionHistory from '@/components/admin/transactionHistory'
import searchTransaction from '@/components/admin/searchTransaction'
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
    components:{
        transactionHistory,
        searchTransaction
    },
    data(){
            return{
                order:null,
                specificOrder:null,
                showAllOrders:true,
                showPendingOrders:false,
                showDeliveredOders:false,
                showDisapprovedOrders:false,
                showApprovedOrders:false,
            }
        },
        computed:{
            ...mapState({
                loading:state=>state.loading
            }),

            ...mapGetters('orderStore',['orders','pendingOrders','approvedOrders','disapprovedOrders'])
        },

        created(){
            if(this.orders.length==0){
                this.getOrders()
                this.showAllOrders = true
            }
        },

        methods:{
            ...mapActions('orderStore',['getOrders','getPending','getApproved','getDisapproved','searchOrder']),

            setOrder(data){
                this.order = data
            },

            setSearchResult(data){
                //this.orders = data
                this.searchOrder(data)
            },

            getSpecificOrder(orderType){
                switch (orderType) {
                    case 'pending':
                        this.getPending()
                        this.showPendingOrders = true
                        this.showAllOrders = false
                        this.showApprovedOrders = false
                        this.showDisapprovedOrders = false
                        break;
                    case 'approved':
                        this.getApproved()
                        this.showPendingOrders = false
                        this.showAllOrders = false
                        this.showApprovedOrders = true
                        this.showDisapprovedOrders = false
                        break;
                    case 'disapproved':
                        this.getDisapproved()
                        this.showPendingOrders = false
                        this.showAllOrders = false
                        this.showDisapprovedOrders = true
                        this.showApprovedOrders = false
                        break;
                    case 'all':
                        this.getOrders()
                        this.showPendingOrders = false
                        this.showAllOrders = true
                        this.showDisapprovedOrders = false
                        this.showApprovedOrders = false
                        break;
                    default:
                        break;
                }
            },

            hideOtherOrders(orderTypes){
                var that = this
                orderTypes.forEach(element => {
                    that.element = false
                    element == false
                });
            },

            print(){
                window.print()
            }


        }
}
</script>