<template>
    <div>
        <div class="page has-sidebar-left">
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark pt-2 pb-2 pl-4 pr-2">
                        <div class="search-bar">
                            <input class="transparent s-24 text-white b-0 font-weight-lighter w-128 height-50"
                                type="text" placeholder="start typing...">
                        </div>
                        <a href="#" data-toggle="collapse" data-target="#navbarToggleExternalContent"
                            aria-expanded="false" aria-label="Toggle navigation"
                            class="paper-nav-toggle paper-nav-white active "><i></i>
                        </a>
                    </div>
                </div>
            </div>
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
            <div class="container-fluid animatedParent animateOnce my-3">
                <div class="animated fadeInUpShort">
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
                                <div class="sc-counter s-36 text-center">100</div>
                                <h6 class="counter-title text-center">Total Referral Registrations</h6>
                            </div>
                        </div>
                    </div>
                    <!--Style End 3-->

                    <div class="d-flex row row-eq-height my-3">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header white">
                                    <div class="row justify-content-end">
                                        <div class="col">
                                            <ul class="nav nav-tabs card-header-tabs nav-material">
                                                <li class="nav-item">
                                                    <a class="nav-link text-blue" id="w1-tab1" data-toggle="tab"><i
                                                            class="icon icon-person_add blue-text s-18"></i>Refer a
                                                        Friend
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body no-p">
                                    <div class="tab-content">
                                        <div class="tab-pane animated fadeInRightShort show active" id="v-pills-w1-tab1"
                                            role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                                            <div class="row p-3">
                                                <div class="col-md-12">
                                                    <div class="form-row text-center">
                                                        <div class="col-md-12 mb-3">
                                                            <h3 class="font-weight-bold s-14 text-center">Click to copy
                                                                your referral link</h3>
                                                        </div>
                                                        <div class="col-md-12 mb-3">
                                                            <input type="text" class="form-control"
                                                                value="https://lilonghero.com/marcus59"
                                                                id="referrallink" readonly>
                                                        </div>

                                                        <button class="btn btn-primary" onclick="myFunction()"
                                                            id="button" type=" submit">Copy Referral Link
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br><br><br>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header white">
                                    <div class="row justify-content-end">
                                        <div class="col">
                                            <ul class="nav nav-tabs card-header-tabs nav-material">
                                                <li class="nav-item">
                                                    <a class="nav-link text-blue" id="w1-tab1" data-toggle="tab"><i
                                                            class="icon icon-message blue-text s-18"></i>Text SMS a
                                                        Friend</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body no-p">
                                    <div class="tab-content">
                                        <div class="tab-pane animated fadeInRightShort show active" id="v-pills-w1-tab1"
                                            role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                                            <div class="row p-3">
                                                <div class="col-md-12 text-center">
                                                    <h3 class="font-weight-bold s-14 text-center">Enter your desired
                                                        phone numbers below to send out SMS </h3>
                                                    <form>
                                                        <div class="form-row">
                                                            <div class="col-md-12 mb-3">
                                                                <textarea type="text" class="form-control"
                                                                    id="validationDefault03" rows="2"
                                                                    placeholder="Enter Phone Numbers here..."
                                                                    required></textarea>
                                                            </div>
                                                            <button class="btn btn-primary" type="submit">Send SMS
                                                                Invite</button>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="card mb-3">
                                <div class="card-header white text-blue"><i
                                        class="icon icon-people blue-text s-18"></i>&nbsp;&nbsp;Registered Members via
                                    your Referral Link</div>
                                <div class="card-body ">
                                    <div class="table-responsive">
                                        <table id="example2" class="table table-bordered table-hover data-tables"
                                            data-options='{ "paging": true; "searching":true}'>
                                            <thead>
                                                <tr>
                                                    <th scope="col">S/N</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Username</th>
                                                    <th scope="col">Phone No.</th>
                                                    <th scope="col">Email</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Time</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Seyi Aremu</td>
                                                    <td>seyi02</td>
                                                    <td>08059764598 </td>
                                                    <td>Seyi4u@gmail.com</td>
                                                    <td>March 10,2022</td>
                                                    <td>10:30pm</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Mike lowrey</td>
                                                    <td>mikkymike</td>
                                                    <td>08029764000 </td>
                                                    <td>mikkym@gmail.com</td>
                                                    <td>March 14,2022</td>
                                                    <td>3:30pm</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
import {mapActions} from 'vuex'
export default {
    components:{
        modal
    },

    created(){
        let bdClass = document.getElementById('bdy').classList
        bdClass.add('sidebar-collapse')
    },

    methods:{
        ...mapActions('authStore',['logOut']),
    }
}
</script>