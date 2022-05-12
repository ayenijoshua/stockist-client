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
                            <h6> YOUR BACK-OFFICE </h6>
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
                                <div class="sc-counter s-36 text-center">{{total}}</div>
                                <h6 class="counter-title text-center">Total Referral Registrations</h6>
                            </div>
                        </div>
                    </div>
                    <!--Style End 3-->

                    <div class="d-flex row row-eq-height my-3">
                        <div class="col-md-6">
                            <referral-link />
                        </div>
                        <br><br><br>
                        <div class="col-md-6">
                            <phone-number />
                        </div>
                    </div>
                    <template v-if="loading">
                        ...loading
                    </template>
                    <downline v-else :downlines="downlines"/>

                </div>
            </div>
        </div>

        <modal :modalId="'logOut'" :modalSize="'sm'" :modalTitle="'Log out'">
            <div class="alert alert-danger">
                Are you sure you want to log out?
                <button class="btn btn-danger" @click="logOut()">Yes</button>
            </div>
        </modal>

    </div>
</template>

<script>
import modal from '@/components/Modal'
import downline from '@/components/user/downlines'
import referralLink from '@/components/user/referralLink'
import phoneNumber from '@/components/user/phoneNumber'
import {mapActions, mapGetters, mapState} from 'vuex'
export default {
    components:{
        modal,
        downline,
        referralLink,
        phoneNumber
    },

    computed:{
        ...mapState({
            loading:state=>state.loading
        }),

        ...mapGetters('registeredUserStore',['downlines','totalDownlines']),
        ...mapGetters('authStore',['authUser']),

        total(){
            return this.downlines.length
        },


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
        }
    },

    methods:{
        ...mapActions('authStore',['getUser']),
        ...mapActions('registeredUserStore',['getDownlines','getTotalDownlines']),
    }
}
</script>