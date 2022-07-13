<template>
    <div class="row text-white no-gutters no-m shadow">
        <div class="col-lg-3">
            <div class="green  p-40">
                <div class="float-right">
                    <span class="icon icon-male s-48"></span>
                </div>
                <template v-if="loading">...</template>
                <div v-else class="sc-counter s-36">{{totalUsers}}</div>
                <h6 class="counter-title">Total Member's ID No.</h6>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="sunfollower counter-box p-40">
                <div class="float-right">
                    <span class="icon icon-wallet s-48"></span>
                </div>
                <template v-if="loading">...</template>
                <div v-else class="sc-counter s-36">{{totalSales}}</div>
                <h6 class="counter-title">Annual Sales Amount (&#8358;)</h6>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="strawberry counter-box p-40">
                <div class="float-right">
                    <span class="icon icon-add_shopping_cart s-48"></span>
                </div>
                <template v-if="loading">...</template>
                <div v-else class="sc-counter s-36">{{totalOrders}}</div>
                <h6 class="counter-title">Total Orders</h6>
            </div>
        </div>
        <div class="col-lg-3">
            <div class="green counter-box p-40">
                <div class="float-right">
                    <span class="icon icon-male s-48"></span>
                </div>
                <template v-if="loading">...</template>
                <div v-else class="sc-counter s-36">{{totalMembers}}</div>
                <h6 class="counter-title">Total Members</h6>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapGetters,mapState} from 'vuex'
export default {
    // props:{
    //     activity:{
    //         type:Object,
    //         required:true
    //     }
    // },

    computed:{
        ...mapState({
            loading:state=>state.loading
        }),
        ...mapGetters('userStore',['totalUsers']),
        ...mapGetters('orderStore',['totalOrders','totalSales']),
        ...mapGetters('registeredUserStore',['totalMembers'])
    },

    created(){
        if(this.totalUsers==null){
            this.getTotalUsers()
        }

        if(this.totalOrders==null){
            this.getTotalOrders()
        }

        if(this.totalSales==null){
            this.getTotalSales()
        }

        if(this.totalMembers==null){
            this.getTotalMembers()
        }
    },

    methods:{
        ...mapActions('userStore',['getTotalUsers']),
        ...mapActions('orderStore',['getTotalOrders','getTotalSales']),
        ...mapActions('registeredUserStore',['getTotalMembers'])
    }
}
</script>