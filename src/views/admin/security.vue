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
                        <li>
                            <a class="nav-link" id="v-pills-Withdrawal-History-tab" data-toggle="pill" href="#v-pills-Withdrawal-History" role="tab" aria-controls="v-pills-Withdrawal-History" aria-selected="false"><i class="icon icon-mail-add2 "></i>Change Email</a>
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
                                                    <input type="submit" class="btn btn-success btn-lg btn-block" value="Send">
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
                <div class="tab-pane fade" id="v-pills-Withdrawal-History" role="tabpanel" aria-labelledby="v-pills-Withdrawal-History-tab">
                    <div class="row">
                                <!-- bar charts group -->
                                <div class="col-md-12">
                                    <div class="card">
                                        <div class="card-header bg-white">
                                            <h6 class="blue-text"><strong class="font-weight-bold">Change Email</strong></h6>
                                        </div>
                                            <div class="col-lg-6 mx-md-auto">
                                                <br>
                                                <div class="text-center">
                                                    <small class="mt-2">To proceed with the change of your Email, enter your email.</small>

                                                </div>
                                                <br>
                                                <form action="https://xvelopers.com/demos/html/paper-panel/dashboard2.html">
                                                    <div class="form-group has-icon"><label>Enter Email</label>
                                                        <input type="text" class="form-control form-control-lg"
                                                                placeholder="">
                                                    </div>
                                                    <input type="submit" class="btn btn-success btn-lg btn-block" value="Send">
                                                </form>
                                                <br>
                                                <br>
                                            </div>
                                    </div>
                                </div>
                                <!-- /bar charts group -->
                    </div>
                </div>
                
                <div class="tab-pane fade" id="v-pills-Request-for-cash" role="tabpanel" aria-labelledby="v-pills-Request-for-cash-tab">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card no-b">
                                <div class="card-header bg-white">
                                    <h4 class="blue-text"><strong class="font-weight-bold">Request for cash</strong></h4>
                                    <small>Make a withdrawal request with the form below</small>
                                </div>
                                <div class="collapse show text-center" id="invoiceCard">
                                    <div class="col-md-4">
                                        <div class="card-body p-0">
                                            <img src="assets/img/cashout.png">
                                        </div>
                                    </div>
                                    <div class="card-body p-">
                                        <form class="form-horizontal form-materia" id="cash-req-form" method="POST" action="/user/cashRequest">
                                            <input type="hidden" name="_token" value="saGpHxjrdqo96sVX6V2kNO0n81O3kwAFgE751r3S">
                                            <div class="form-group">
                                                <div class="col-md-12">                                                                                                                                                       <input type="hidden" name="level_id" value="2">
                                                            <input type="text" name="amount" class="form-control form-control-line" placeholder="Enter amount">
                                                            <div class="form-group"><br>
                                                                <div class="col-sm-12">
                                                                    <button type="submit" class="btn btn-sm btn-primary" id="cash-req">Cash request</button>
                                                                </div>
                                                            </div>
                                                            </div>
                                            </div>
                                        </form>
                                    </div>
                                        

                                        
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card no-b">
                                <div class="card-header bg-white">
                                    <h4 class="blue-text"><strong class="font-weight-bold">Notification</strong></h4>
                                    <small>We pay out at certain periods in a month</small>
                                </div>
                                <div class="collapse show text-center" id="invoiceCard">
                                    <div class="col-md-4">
                                        <div class="card-body p-0">
                                            <img class="img-center" src="assets/img/notify2.png">
                                        </div>
                                    </div>
                                        <div class="card-body  text-center">
                                        <h6 class="font-weight-bold"><strong >We honour withdrawals 2 times in a month. Minimum Withdrawal is &#8358;1000. Thank You.</strong></h6>
                                    </div>                                            
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card no-b">
                                <div class="card-header bg-white">
                                    <h4 class="blue-text"><strong class="font-weight-bold">Wallet</strong></h4>
                                    <small>Your current wallet balance</small>
                                </div>
                                <div class="collapse show text-center" id="invoiceCard">
                                    <div class="col-md-4">
                                        <div class="card-body p-0">
                                            <img src="assets/img/wallet2.png">
                                        </div>
                                    </div>
                                    <div class="card-body text-center">
                                        <small>Wallet Account</small>
                                        <h1 class="font-weight-bold">&#8358;15,000</h1>
                                    </div>

                                        

                                        
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="tab-pane fade" id="v-pills-Claim-Food-Voucher" role="tabpanel" aria-labelledby="v-pills-Claim-Food-Voucher-tab">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="white">
                                <div class="card">
                                    <div class="card-body no-p">
                                        <div class="tab-content">
                                            <div class="tab-pane animated fadeIn show active" id="v-pills-tab1" role="tabpanel" aria-labelledby="v-pills-tab1">
                                                <div class="bg-primary text-white lighten-2">
                                                    <div class="pt-5 pb-2 pl-5 pr-5">
                                                        <h5 class="font-weight-normal s-14">Food Voucher Wallet</h5>
                                                        <span class="s-48 font-weight-lighter text-primary"><small>₦</small>960</span>
                                                        <div class="float-right">
                                                            <img class="gift" src="assets/img/giftcard.png">
                                                        </div>
                                                    </div>
                                                                                                
                                                    <canvas width="378" height="94" data-chart="spark" data-chart-type="line" data-dataset="[[28,530,200,430]]" data-labels="['a','b','c','d']"
                                                            data-dataset-options="[
                                            { borderColor:  'rgba(54, 162, 235, 1)', backgroundColor: 'rgba(54, 162, 235,1)'},
                                            ]">
                                                    </canvas>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card no-b">
                                <div class="card-header bg-white">
                                    <h4 class="blue-text"><strong class="font-weight-bold">Food Voucher for stage 2</strong></h4>
                                    <small>Your food voucher earning at this stage</small>
                                </div>
                                <div class="collapse show text-center" id="invoiceCard">
                                    <div class="col-md-4">
                                        <div class="card-body p-0">
                                            <img class="img-center" src="assets/img/buyfood.png">
                                        </div>
                                    </div>
                                    <div class="card-body text-center">
                                        <small>Voucher</small>
                                        <h1 class="font-weight-bold">&#8358;28,000</h1>
                                    </div>                                           
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card no-b">
                                <div class="card-header bg-white">
                                    <h4 class="blue-text"><strong class="font-weight-bold">Claim</strong></h4>
                                    <small>Choose an option to spend your voucher bonus</small>
                                </div>
                                <div class="collapse show" id="invoiceCard">
                                    <div class="col-md-4">
                                        <div class="card-body p-0">
                                            <img src="assets/img/choose.png">
                                        </div>
                                    </div>
                                    <div class="card-body">
                                                                
                                        <div class="form-row">
                                            <div class="col-md-12 mb-3">
                                                <select class="custom-select select2" required>
                                                    <option value="">Claim Option</option>
                                                    <option value="1">Shoprite Voucher</option>
                                                    <option value="2">Cash</option>
                                                </select><br><br>
                                                <button class="btn btn-primary" type="submit" >Claim Incentive</button>
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
export default {
    
}
</script>