<template>
    <div>
        <form method="post" id="searchForm" action="/admin/searchUser">
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3 mr-0">
                            <div class="dropdown">
                                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Filter Purchase history
                                </button>
                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                    <a class="dropdown-item" href="#">All Orders</a>
                                    <a class="dropdown-item">Deliverd Orders</a>
                                    <a class="dropdown-item">Pending Orders</a>
                                    <a class="dropdown-item">Declined Orders </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <input type="date" id="start" class="form-control " style="" name="trip-start" required placeholder="To Date ">
                        </div>

                        <div class="col-md-3">

                            <input type="date" id="start" class="form-control " style="" name="trip-start" required placeholder="To Date ">
                        </div>
                        <div class="col-md-3">
                            <button type="submit" id="submit" class="btn btn-primary">View Order History&nbsp;&nbsp;<i class="icon-search"></i></button>
                        </div>
                    </div>
                </div>      
            </div><br>

            <div class="row">
                <div class="col-md-9">
                </div>
                <div class="col-md-3">
                    <button type="submit" id="submit" class="btn btn-primary">Print Transaction&nbsp;&nbsp;<i class="icon-print"></i></button>
                </div>
            </div>
        </form>
                
        <div class="row">
            <!-- Column -->
            <div class="col-md-12">
                <div class="card">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs profile-tab" role="tablist">
                        <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Purchase History</a> </li>
                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#pay" role="tab">Total Monthly Order</a> </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content">
                        <div class="tab-pane active" id="home" role="tabpanel">
                            <div class="card-body">
                            
                                <div class="table-responsie" style="overflow:unset !important;">
                                    <table class="table table-bordered table-hover">
                                        <tr>
                                            <th style="border:1px !important;">S/N</th>
                                            <th>Name</th>
                                            <th>ID No.</th>
                                            <th>Phone No.</th>
                                            <th>Email</th>
                                            <th>Sponsor Name</th>
                                            <th>State</th>
                                            <th>Order Status</th>                                                        
                                            <th>Date Of Order</th>
                                            <th>View Order</th>
                                        </tr>                                                                                                          
                                        <tr>
                                            <td>1</td>
                                            <td>Ayanleye Olumide Joseph</td>
                                            <td>LI9735262NG</td>
                                            <td>070396478393</td>
                                            <td>Olumide@gmail.com</td>
                                            <td>Segun Ademola</td>
                                            <td>Lagos</td>
                                            <td> <span class="btn btn-sm btn-success">Delivered</span></td>
                                            <td>30,November 2021</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="caret">View Order</i></button>
                                                </div>
                                            </td>
                                        </tr> 
                                        
                                        <tr>
                                            <td>2</td>
                                            <td>Philip Eke</td>
                                            <td>LI4678262NG</td>
                                            <td>080396478777</td>
                                            <td>eke@gmail.com</td>
                                            <td>Anna Eke</td>
                                            <td>Rivers</td>
                                            <td> <span class="btn btn-sm btn-warning">Pending</span></td>
                                            <td>30,November 2021</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="caret">View Order</i></button>
                                                </div>
                                            </td>
                                        </tr> 
                                        <tr>
                                            <td>3</td>
                                            <td>Gloria eze</td>
                                            <td>LI5578200NG</td>
                                            <td>0813900008393</td>
                                            <td>eze@gmail.com</td>
                                            <td>tunde smart</td>
                                            <td>abia</td>
                                            <td> <span class="btn btn-sm btn-danger">Declined</span></td>
                                            <td>30,November 2021</td>
                                            <td>
                                                <div class="dropdown">
                                                    <button class="btn btn-sm btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="caret">View Order</i></button>
                                                </div>
                                            </td>
                                        </tr> 
                                    </table>      
                                </div>
                                
                            </div>
                        </div>

                        <div class="tab-pane" id="pay" role="tabpanel">
                            <div class="card-body">
                                <table class="table table-bordered table-hover">
                                    <tr>
                                        <th>S/N</th>
                                        <th>Month</th>
                                        <th>Total Monthly Order</th>
                                        <th>Total Order Amount</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>January</td>
                                        <td>29</td>
                                        <td>₦350,000</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Februray</td>
                                        <td>47</td>
                                        <td>₦850,000</td>
                                    </tr>
                                    <tr>
                                        <th colspan="2">Total Monthly Order and Amount</th>
                                        <td colspan="1"><strong class="font-weight-bold">76</strong></td>
                                        <td colspan="2"><strong class="font-weight-bold">₦1,200,000</strong></td>
                                    </tr>
                                </table>
                            </div>
                            
                        </div>

                    </div>

                </div>

            </div>

            <!-- Column -->
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>