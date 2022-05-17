<template>
    <div class="container-fluid animatedParent animateOnce my-3 ">
        <form method="post" id="searchForm" action="/admin/searchUser">
            <br>
            <div class="row">
                <div class="col-md-5">
                </div>
                <div class="col-md-7">
                    <button type="submit" id="submit" class="btn btn-primary">Print Transaction&nbsp;&nbsp;<i class="icon-print"></i></button>
                </div>
            </div>
        </form><br>
		
		
        <div class="row">
            <div class="col-md-12">
                <div class="card mb-3">
                    <div class="card-header white text-blue">Total Monthly Product Sales</div>
                    <div class="card-body ">
                        <div class="table-responsive">
                            <table id="example2" class="table table-bordered table-hover data-tables" data-options='{ "paging": false; "searching":false}'>
                                <thead>
                                <tr>
                                    <th scope="col">S/N</th>
                                    <th scope="col">Month</th>
                                    <th scope="col">Total Sales</th>
                                </tr>
                                </thead>
                                <tbody>
                                    <template v-if="loading">
                                        ...loading
                                    </template>
                                    <template v-else>
                                        <tr v-for="profit,i in monthlyProfit" :key="i">
                                            <th>{{++i}}</th>
                                            <td>{{months[profit.month-1]}},2022</td>
                                            <td>₦{{profit.profit}}</td>
                                        </tr>
                                    </template>
                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>				
        </div>

    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    
    computed:{
        ...mapState({
            loading:state=>state.loading
        }),

        ...mapGetters('orderStore',['monthlyProfit']),

        months(){
            return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        }
    },

    methods:{
        ...mapActions('orderStore',['getMonthlyProfit'])
    },

    created(){
        if(this.monthlyProfit.length == 0){
            this.getMonthlyProfit()
        }
    }
}
</script>