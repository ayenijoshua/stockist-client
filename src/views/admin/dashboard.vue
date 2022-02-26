<template>
    <div>
        <div class="card mb-3">
            <div class="card-header white">
                <h6> YOUR ACTIVITIES </h6>
            </div>
        </div>

        <div class="row text-white no-gutters no-m shadow">
            <div class="col-lg-4">
                <div class="green  p-40">
                    <div class="float-right">
                        <span class="icon icon-male s-48"></span>
                    </div>
                    <div class="sc-counter s-36">1200</div>
                    <h6 class="counter-title">Total Member's ID No.</h6>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="sunfollower counter-box p-40">
                    <div class="float-right">
                        <span class="icon icon-wallet s-48"></span>
                    </div>
                    <div class="sc-counter s-36">27000000</div>
                    <h6 class="counter-title">Annual Sales Amount (&#8358;)</h6>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="strawberry counter-box p-40">
                    <div class="float-right">
                        <span class="icon icon-add_shopping_cart s-48"></span>
                    </div>
                    <div class="sc-counter s-36">550</div>
                    <h6 class="counter-title">Total Orders</h6>
                </div>
            </div>
        </div>
			<!--Style End 3-->
			
        <div class="d-flex row row-eq-height my-3">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header white">
                        <div class="row justify-content-end">
                            <div class="col">
                                <ul class="nav nav-tabs card-header-tabs nav-material">
                                    <li class="nav-item">
                                        <a class="nav-link text-blue" id="w1-tab1" data-toggle="tab" >Monthly Report (2020)<li class="icon-bar-chart text-blue" style="font-size: 30px;"></li></a>
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
                                    
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
			
        <div class="d-flex row row-eq-height my-3">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header white">
                        <div class="row justify-content-end">
                            <div class="col">
                                <ul class="nav nav-tabs card-header-tabs nav-material">
                                    <li class="nav-item">
                                        <a class="nav-link text-blue" id="w1-tab1" data-toggle="tab" >Front Page Notification</a>
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
                                        <form>
                                        <div class="form-row">
                                            <div class="col-md-12 mb-3">
                                                <input type="text" class="form-control" id="validationDefault03" placeholder="Subject" required>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-md-12 mb-3">
                                                <textarea type="text" class="form-control" id="validationDefault03" placeholder="Message" required></textarea>
                                            </div>
                                        </div>
                                        <div class="form-row">
                                            <div class="col-md-12 mb-3">
                                                <div class="form-row">
                                                    <div class="col-md-12 mb-3">
                                                        <select class="custom-select select2" required>
                                                            <option value="">Message Option</option>
                                                            <option value="1">Enable</option>
                                                            <option value="2">Disable</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button class="btn btn-primary" type="submit">Submit</button>
                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	
                </div>
            </div>
        </div>
			
        <div class="d-flex row row-eq-height my-3">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header white">
                        <div class="row justify-content-end">
                            <div class="col">
                                <ul class="nav nav-tabs card-header-tabs nav-material">
                                    <li class="nav-item">
                                        <a class="nav-link text-blue" id="w1-tab1" data-toggle="tab" >Order Confirmation</a>
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
                                                    <a href="#pending" class="btn badge badge-primary badge-pill">1</a>
                                                </li>												   
                                            </ul>
                                        </div>
                                            <div id="collapse1" class="collapse hidden col-lg-12" aria-labelledby="headingOne" data-parent="#accordionExample" style="">
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
                                                                        <th>Order Status</th>                                                        
                                                                        <th>Date Of Order</th>
                                                                        <th>View Order</th>
                                                                        <th>Action</th>
                                                                    </tr>                                                                                                            
                                                                    <tr>
                                                                        <td>1</td>
                                                                        <td>Ayanleye Olumide Joseph</td>
                                                                        <td>LI9735262NG</td>
                                                                        <td>070396478393</td>
                                                                        <td>Olumide@gmail.com</td>
                                                                        <td>Segun Ademola</td>
                                                                        <td> <span class="btn btn-sm btn-warning">Pending</span></td>
                                                                        <td>30,November 2021</td>
                                                                        <td>
                                                                            <button type="submit" id="submit" class="btn btn-sm btn-primary">View Order</button>
                                                            
                                                                        </td>
                                                                        <td>
                                                                            <div class="dropdown">
                                                                                <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                Order Status
                                                                                </button>
                                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                                    <a data-id="6"  class="dropdown-item approve" href="#">Approve</a>
                                                                                    <a data-id="6"  class="dropdown-item" href="#">Decline</a>
                                                                                </div>
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
                                                                        <td> <span class="btn btn-sm btn-warning">Pending</span></td>
                                                                        <td>30,November 2021</td>
                                                                        <td>
                                                                        <button type="submit" id="submit" class="btn btn-sm btn-primary">View Order</button>
                                                                            
                                                                        </td>
                                                                        <td>
                                                                            <div class="dropdown">
                                                                                <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                Order Status
                                                                                </button>
                                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                                    <a data-id="6"  class="dropdown-item approve" href="#">Approve</a>
                                                                                    <a data-id="6"  class="dropdown-item" href="#">Decline</a>
                                                                                </div>
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
                                                                        <td> <span class="btn btn-sm btn-warning">Pending</span></td>
                                                                        <td>30,November 2021</td>
                                                                        <td>
                                                                            <button type="submit" id="submit" class="btn btn-sm btn-primary">View Order<i class="icon-arrow-left"></i></button>
                                                                            
                                                                        </td>
                                                                        <td>
                                                                            <div class="dropdown">
                                                                                <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                Order Status
                                                                                </button>
                                                                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                                    <a data-id="6"  class="dropdown-item approve" href="#">Approve</a>
                                                                                    <a data-id="6" class="dropdown-item" href="#">Decline</a>
                                                                                </div>
                                                                            </div>
                                                                        </td>
                                                                    </tr>
                                                                </table>   
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
export default {
    
}
</script>