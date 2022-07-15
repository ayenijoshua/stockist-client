<template>
    <div>
        <div class="page has-sidebar-left">
            
            <div class="navbar navbar-expand d-flex navbar-dark justify-content-between bd-navbar blue accent-3 shadow">
                <div class="relative">
                    <div class="d-flex">
                        <div class="d-md-block"><br>
                            <img src="assets/img/basic/logo1a.png" class="img-responsive" alt="">
                        </div>
                    </div>
                </div>
                <!--Top Menu Start -->
                <div class="navbar-custom-menu">
                    <ul class="nav navbar-nav">
                        <!-- Messages-->
                        <li class="dropdown custom-dropdown messages-menu">
                            <a class="nav-link ml-2" data-toggle="control-sidebar">
                                <i class="icon icon-sign-out" style="color:#03a9f4;" v-b-modal.logOut></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="container-fluid  animateOnce my-3">
                <div class="animated ">
                    <div class="card">
                        <div class="card-header white">
                            <h6> {{authUser.name}} </h6>
                        </div>
                    </div>
                    <br>
                    <!--Style Start 3-->
                    <div class="row text-white no-gutters no-m shadow">
                        <div class="col-lg-6">
                            <div class="blue  p-40">
                                <div class="float-up text-center">
                                    <span class="icon icon-verified_user s-48"></span>
                                </div>
                                <div class="s-36 text-center">Online</div>
                                <h6 class="counter-title text-center">Member Status</h6>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="blue counter-box p-40">
                                <div class="float-up text-center">
                                    <span class="icon icon-male s-48"></span>
                                </div>
                                <div class="sc-counter s-36 text-center" v-if="!loading">{{total}}</div>
                                <h6 class="counter-title text-center">Total Referral Registrations</h6>
                            </div>
                        </div>
                    </div>
                    <!--Style End 3-->
                    <br/>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card mb-3">
                                <div class="card-header white text-blue">Total Monthly Team Turnover</div>
                                <div class="card-body ">
                                    <div class="table-responsive">
                                        <table id="example2" class="table table-bordered table-hover" data-options='{ "paging": true; "searching":true}'>
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
                                                        <td>{{months[profit.month-1]}},{{new Date().getFullYear()}}</td>
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

                    <div class="d-flex row row-eq-height my-3">
                        <div class="col-md-6">
                            <referral-link :user="authUser"/>
                        </div>
                        <br><br><br>
                        <div class="col-md-6">
                            <phone-number />
                        </div>
                    </div>
                    <template v-if="loading">
                        <b-card>
                            <b-skeleton animation="throb" width="85%"></b-skeleton>
                            <b-skeleton animation="throb" width="55%"></b-skeleton>
                            <b-skeleton animation="throb" width="70%"></b-skeleton>
                        </b-card>
                    </template>
                    <downline v-else :downlines="downlines"/>

                </div>
            </div>
        </div>

        <modal :modalId="'logOut'" :modalSize="'lg'" :modalTitle="'Log out.Change password'">
            <div class="row">
                <div class="col-md-6">
                     <div class="alert alert-danger">
                        Are you sure you want to log out?
                        <button class="btn btn-danger" @click="logOut()">Yes</button>
                    </div>
                </div>
                <div>
                    <div class="card" id="bank">
                        <div class="card-header">
                            Change Password
                        </div>
                        <div class="card-body">
                            <div v-if="!authUser">Please wait</div>
                            <reset-user-password :user="authUser" />
                        </div>
                    </div>
                </div>
            </div>
           
        </modal>

    </div>
</template>

<script>
import modal from '@/components/Modal'
import downline from '@/components/user/downlines'
import referralLink from '@/components/user/referralLink'
import phoneNumber from '@/components/user/phoneNumber'
import resetUserPassword from '@/components/admin/resetUserPassword'
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
    components:{
        modal,
        downline,
        referralLink,
        phoneNumber,
        resetUserPassword
    },

    computed:{
        ...mapState({
            loading:state=>state.loading
        }),

        ...mapGetters('registeredUserStore',['downlines','totalDownlines']),
        ...mapGetters('authStore',['authUser']),
        ...mapGetters('orderStore',['monthlyProfit']),

        total(){
            return this.downlines.length
        },

        months(){
            return ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        }
    },

    mounted(){
        //location.reload()
    },

    created(){
        let bdClass = document.getElementById('bdy').classList
        bdClass.add('sidebar-collapse')

        

        var that = this
        if(Object.entries(this.authUser).length == 0){
            this.getUser().then(function(res){
                if(res.status == 200){
                    that.getDownlines(that.authUser.username)
                }
            })
        }else{
             //alert(that.authUser.username)
            this.getDownlines(that.authUser.username)
        }

        if(this.monthlyProfit.length == 0){
            this.getMonthlyProfit()
        }
       
    },

    methods:{
        ...mapActions('authStore',['getUser','logOut']),
        //...mapActions('authStore',['logOut']),
        ...mapActions('registeredUserStore',['getDownlines','getTotalDownlines']),
         ...mapActions('orderStore',['getMonthlyProfit']),
    }
}
</script>