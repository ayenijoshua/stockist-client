<template>
    <div>
        <header class="blue accent-3 relative">
            <div class="container-fluid text-blue">
                <div class="row justify-content-between">
                    <ul class="nav nav-material nav-material-white responsive-tab" id="v-pills-tab" role="tablist">
                        <!-- <li>
                            <a class="nav-link active" id="v-pills-wallet-summary-tab" data-toggle="pill"  href="#v-pills-wallet-summary" role="tab" aria-controls="v-pills-wallet-sumary"><i class="icon icon-lock4" ></i>Manage Google 2Factor Authenticator</a>
                        </li> -->
                        <li>
                            <a class="nav-link" id="v-pills-Wallet-Detailed-Calculation-tab" data-toggle="pill" href="#v-pills-Wallet-Detailed-Calculation" role="tab" aria-controls="v-pills-Wallet-Detailed-Calculation" aria-selected="false"><i class="icon  icon-key6 "></i>Change Password</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <div class="animated ">
            <div class="tab-content" id="v-pills-tabContent">
                
                <div class="tab-pane fade show active" id="v-pills-Wallet-Detailed-Calculation" role="tabpanel" aria-labelledby="v-pills-Wallet-Detailed-Calculation-tab">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="row my-3">
                                <!-- bar charts group -->
                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-header bg-white">
                                            <h6 class="blue-text"><strong class="font-weight-bold">Change Password</strong></h6>
                                        </div>
                                            <div class="col-lg-6 mx-md-auto">
                                                <br>
                                                <div class="text-center">
                                                    <small class="mt-2">To proceed with the change of your password, enter your email.</small>

                                                </div>
                                                <br>
                                                <form action="https://xvelopers.com/demos/html/paper-panel/dashboard2.html">
                                                    <div class="form-group has-icon"><label>Enter Email</label>
                                                        <input type="text" class="form-control form-control-lg"
                                                                placeholder="">
                                                    </div>
                                                    <input type="submit" disabled class="btn btn-success btn-lg btn-block" value="Send">
                                                </form>
                                                <br>
                                                <br>
                                            </div>
                                    </div>
                                </div>
                                <!-- /bar charts group -->
                                
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>