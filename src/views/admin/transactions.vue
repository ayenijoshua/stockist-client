<template>
    <div>
        <search-transaction @search="setSearchResult"/>

        <div class="row">
            <div class="col-md-9">
            </div>
            <div class="col-md-3">
                <button type="submit" id="submit" class="btn btn-primary">Print Transaction&nbsp;&nbsp;<i class="icon-print"></i></button>
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
                            <transaction-history :orders="orders" />     
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
                order:null
            }
        },
        computed:{
            ...mapState({
                loading:state=>state.loading
            }),

            ...mapGetters('orderStore',['orders'])
        },

        created(){
            if(this.orders.length==0){
                this.getOrders()
            }
        },

        methods:{
            ...mapActions('orderStore',['getOrders']),

            setOrder(data){
                this.order = data
            },

            setSearchResult(data){
                this.orders = data
            }
        }
}
</script>