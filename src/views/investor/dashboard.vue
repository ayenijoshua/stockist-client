<template>
    <div>
        <div class="card mb-3">
            <div class="card-header white">
                <h6> YOUR ACTIVITIES </h6>
            </div>
        </div>

        <div class="">
            <activity-panel />
        </div>
			<!--Style End 3-->
			
        <!-- <div class="d-flex row row-eq-height my-3">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header white">
                        <div class="row justify-content-end">
                            <div class="col">
                                <ul class="nav nav-tabs card-header-tabs nav-material">
                                    <li class="nav-item">
                                        <a class="nav-link text-blue" id="w1-tab1" data-toggle="tab">
                                            <i class="icon-bar-chart text-blue" style="font-size: 30px;"></i>
                                            Monthly Report (2020)
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body no-p">
                        <div class="tab-content">
                            <div class="tab-pane animated fadeInRightShort show active" id="v-pills-w1-tab1" role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                                <div class="row p-3">
                                    <div class="col-md-12">
                                        <template v-if="loading">
                                            ...
                                        </template>
                                        <line-chart v-else :data="{'2017-01-01': 11, '2017-01-02': 6}"></line-chart>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
			
        <div class="d-flex row row-eq-height my-3">
            
        </div>
			
        <div class="d-flex row row-eq-height my-3">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header white">
                        <div class="row justify-content-end">
                            <div class="col">
                                <ul class="nav nav-tabs card-header-tabs nav-material">
                                    <li class="nav-item">
                                        <a class="nav-link text-blue" id="w1-tab1" data-toggle="tab" >Orders to be Confirmed by admin</a>
                                    </li>	
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body no-p">
                        <div class="tab-content">
                            <div class="tab-pane animated show active" id="v-pills-w1-tab1" role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                                <div class="row p-3">
                                    <div class="col-md-12">
                                    
                                        <div class="card-body pb-" id="pending">
                                            <ul class="list-group">
                                                <li class=" list-group-item d-flex justify-content-between align-items-center">
                                                    <a href="" class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">Pending Order Approval</a>
                                                    <template v-if="loading">...</template>
                                                    <a v-else href="#pending" class="btn badge badge-primary badge-pill">{{pendingOrders.length}}</a>
                                                </li>												   
                                            </ul>
                                        </div>
                                            <div id="collapse1" class="collapse hidden col-lg-12" aria-labelledby="headingOne" data-parent="#accordionExample" style="">
                                                <div class="tab-content">
                                                    <div class="tab-pane active" id="home" role="tabpanel">
                                                        <div class="">
                                                            <div class="table-responsive" style="overflow:hide !important;">
                                                                <b-card v-if="loading">
                                                                    <b-skeleton animation="throb" width="85%"></b-skeleton>
                                                                    <b-skeleton animation="throb" width="55%"></b-skeleton>
                                                                    <b-skeleton animation="throb" width="70%"></b-skeleton>
                                                                </b-card>
                                                            </div> 
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>	
                    </div>
                </div>
            </div>
        </div>     
    </div>
</template>

<script>
import {mapActions,mapGetters,mapState} from 'vuex'
import activityPanel from '@/components/admin/activityPanel'
//import frontPageMessage from '@/components/admin/frontPageMessage'
//import pendingOrders from '@/components/admin/pendingOrders'
export default {
    components:{
        activityPanel,
        //frontPageMessage,
        //pendingOrders
    },
    data(){
        return{
            key:''
        }
    },

    computed:{
        ...mapState({
            loading:state=>state.loading
        }),
        ...mapGetters('userStore',['totalUsers']),
        ...mapGetters('orderStore',['totalOrders','pendingOrders','ordersGraph'])
    },

    created(){
        if(this.totalUsers==null){
            this.getTotalUsers()
        }

        if(this.totalOrders==null){
            this.getTotalOrders()
        }

        if(this.pendingOrders.length==0){
            this.getPending()
        }

        if(this.ordersGraph.length==0){
            this.getGraphData()
        }
    },

    methods:{
        ...mapActions('userStore',['getTotalUsers']),
        ...mapActions('orderStore',['getTotalOrders','getPending','getGraphData'])
    }
}
</script>