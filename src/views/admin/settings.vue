<template>
    <div class="row">
        <div class="col-md-12">
            <div class="card no-b">
                <div class="card-header white">
                    <h4 class="card-title"><strong class="font-weight-bold">Settings</strong></h4>
                    <small class="card-subtitle mb-2 text-muted">System Settings</small>
                </div>
                <div class="collapse show" id="invoiceCard">
                    <div class="card-body p-">                                  
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card" id="bank">
                                    <div class="card-header">
                                        Bank Settings
                                    </div>
                                    <div class="card-body">
                                        <form class="form-horizontal form-materia" id="add-bank-details-form" method="POST" action="/admin/addBankDetails">
                                            <input type="hidden" name="_token" value="yKOJ6VLPGcVBL5A0Lvl5MAKrWsTSvmSJRYk89DP3">
                                                <div class="form-group">
                                                    <label class="col-md-12">Bank Name</label>
                                                    <div class="col-md-12">
                                                        <select name="bank_name" class="form-control form-control-line">
                                                            <option value="">Select Bank</option>
                                                            <option value="First Bank">First Bank </option>
                                                            <option value="Guaranty Trust Bank">Guaranty Trust Bank </option>
                                                            <option value="Zenith Bank">Zenith Bank </option>
                                                            <option value="Stanbic IBTC Bank">Stanbic IBTC Bank </option>
                                                            <option value="Access Bank">Access Bank (Diamond)</option>
                                                            <option value="Ecobank Bank">Ecobank Bank </option>
                                                            <option value="Fidelity Bank">Fidelity Bank </option>
                                                            <option value="Access Bank">Access Bank </option>
                                                            <option value="Unity Bank Plc">Unity Bank Plc</option>
                                                            <option value="Skye Bank">Skye Bank </option>
                                                            <option value="Keystone Bank Limited "> Keystone Bank Limited  </option>
                                                            <option value="First City Monument Bank">First City Monument Bank </option>
                                                            <option value="Wema Bank"> Wema Bank  </option>
                                                            <option value="Citibank">Citibank</option>
                                                            <option value="Standard Chartered Bank">Standard Chartered Bank </option>
                                                            <option value="Heritage Bank Plc"> Heritage Bank Plc  </option>
                                                            <option value="BNI"> BNI  </option>
                                                            <option value="United Bank for Africa"> United Bank for Africa </option>
                                                            <option value="Savanna Bank">Savanna Bank  </option>
                                                            <option value="Sterling Bank">Sterling Bank  </option>
                                                            <option value="Societe Generale"> Societe Generale  </option>
                                                            <option value="NSIA Banque agnence"> NSIA Banque agnence </option>
                                                            <option value="Union Bank"> Union Bank </option>
                                                            <option value="Polaris Bank"> Polaris Bank </option>
                                                            <option value="Union Bank"> Union Bank </option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Bank Account Name</label>
                                                    <div class="col-md-12">
                                                        <input name="bank_account_name"  type="text" class="form-control form-control-line">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Bank Account Number</label>
                                                    <div class="col-md-12">
                                                        <input name="bank_account_number"   type="number" class="form-control form-control-line">
                                                    </div>
                                                </div>
                                                
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <button class="btn btn-primary" id="add-bank-details">Add Company Bank Details</button>
                                                    </div>
                                                </div>
                                        </form>
                                            
                                    </div>
                                </div>
                            </div>
                            
                                                            <div class="col-md-6">
                                <div class="card" id="bank">
                                    <div class="card-header">
                                        Lilong Contact Details
                                    </div>
                                    <div class="card-body">
                                        <form class="form-horizontal form-materia" id="add-bank-details-form" method="POST" action="/admin/addBankDetails">
                                            <input type="hidden" name="_token" value="yKOJ6VLPGcVBL5A0Lvl5MAKrWsTSvmSJRYk89DP3">
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Email</label>
                                                    <div class="col-md-12">
                                                        <input name="email"  type="email" class="form-control form-control-line">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Phone Number</label>
                                                    <div class="col-md-12">
                                                        <input name="bank_account_number"   type="number" class="form-control form-control-line">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Address</label>
                                                    <div class="col-md-12">
                                                    <textarea name="description" class="form-control form-control-line"></textarea>
                                                    </div>
                                                </div>
                                                
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <button class="btn btn-primary" id="add-bank-details">Add Company Details</button>
                                                    </div>
                                                </div>
                                        </form>
                                            
                                    </div>
                                </div>
                            </div>
                        </div>	
                        <hr>
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card" id="incentive">
                                    <div class="card-header">
                                        Products Settings
                                    </div>
                                    <div class="card-body">
                                        <form class="form-horizontal form-materia" id="add-incentives-form" method="POST" action="/admin/addIncentives" enctype="multipart/form-data">
                                            <input type="hidden" name="_token" value="yKOJ6VLPGcVBL5A0Lvl5MAKrWsTSvmSJRYk89DP3">
                                                <div class="form-group">
                                                    <label class="col-md-12">Product Name</label>
                                                    <div class="col-md-12">
                                                    <input type="text" name="title" value="" class="form-control form-control-line">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="formFileMultiple" class="form-label">Upload Product Image</label>
                                                    <input class="form-control" type="file" id="formFile" />
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-md-12">Product Price</label>
                                                    <div class="col-md-12">
                                                    <input type="text" name="title" value="" class="form-control form-control-line">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label class="col-md-12">Product Description Tittle</label>
                                                    <div class="col-md-12">
                                                    <input type="text" name="title" value="" class="form-control form-control-line">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Description</label>
                                                    <div class="col-md-12">
                                                    <textarea name="description" class="form-control form-control-line"></textarea>
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <button class="btn btn-primary" id="add-incentives">Add Product Details</button>
                                                    </div>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                            
                    </div>
                        <hr>
                    <div class="row">
                        <div class="col-md-12 ">
                            <div class="card">
                                <div class="card-header">
                                    General Details
                                </div>
                                <div class="card-body">
                                    <ul class="nav nav-tabs profile-tab" role="tablist">
                                        <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#home" role="tab">Bank Details</a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#profile" role="tab">Product Details</a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#email" role="tab">Company Email</a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#phone" role="tab">Company Phone No.</a> </li>
                                        <li class="nav-item"> <a class="nav-link" data-toggle="tab" href="#address" role="tab">Company Address</a> </li>
                                    </ul>
                    
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="home" role="tabpanel">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-bordered">
                                                        <tr>
                                                            <th>Bank Name</th>
                                                            <th>Bank Account Name</th>
                                                            <th>Bank Account Number</th>
                                                            <th>Action</th>
                                                        </tr>
                                                                                                                                                                                                                                                            <tr>
                                                                    <td>Zenith Bank</td>
                                                                    <td>OCTAVON TIENS ELITE&#039;L</td>
                                                                    <td>1014817989</td>
                                                                    <td>
                                                                        <div class="dropdown">
                                                                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            Edit/Delete
                                                                            </button>
                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                            <a data-id="6" class="dropdown-item approve" href="#">Edit</a>
                                                                            <a data-id="6" class="dropdown-item" href="#">Delete</a>
                                                                        </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                                                                                                                                                    
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                    
                                        <div class="tab-pane" id="profile" role="tabpanel">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-bordered">
                                                        <tr>
                                                            <td><strong>S/N</strong></td>
                                                            <td>Product Name</td>
                                                            <td>Product image</td>
                                                            <td>Product Price (₦)</td>
                                                            <td>Description Title</td>
                                                            <td>Description</td>
                                                            
                                                            <td><strong>Action</strong></td>
                                                        </tr>
                    
                                                                                                                                
                                                            <tr>
                                                                    <td>1</td>
                                                                    <td>Lilong Noni Juice</td>
                                                                    <td><img class="img-responsive" src="assets/img/noni.png" width="100%"></td>
                                                                    <td>₦13,500</td>
                                                                    <td>Health Benefits of Lilong Noni Juice</td>
                                                                    <td>It replenishes the body, improve brain power and resistance to mental illness | Eye nutrition | Rich nutrient to supplement the deficiency of daily food intake | It contain varity of enzyme which are helpful for digestion | Anti-bacterial/anti-fungal,anti-viral | It promotes sleep and regulate bllod pressure | It help to flush dirt out of the body | Analgesic | Imune system booster | Ant-depresant/sedatives | Skin/hair care | Anti-turmoil/Anti-cancer.</td>
                                                                    
                                                                    <td>
                                                                        <div class="dropdown">
                                                                                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            Edit/Delete
                                                                            </button>
                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                            <a data-id="2" class="dropdown-item approve" href="#">Edit</a>
                                                                            <a data-id="2" class="dropdown-item" href="#">Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                                                                                                                                                                                                                            
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="tab-pane" id="email" role="tabpanel">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-bordered">
                                                        <tr>
                                                            <td>S/N</td>
                                                            <td>Email</td>
                                                            <td>Action</td>
                                                        </tr>
                                                                                                                                                                                                                                                            <tr>
                                                                                                                                                                                                                                                            <td>1</td>
                                                            <td>Support@lilong.com</td>
                                                            <td>
                                                                <div class="dropdown">
                                                                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Edit/Delete
                                                                    </button>
                                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                        <a data-id="6" class="dropdown-item approve" href="#">Edit</a>
                                                                        <a data-id="6" class="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            </tr>
                                                            <tr>
                                                            <td>2</td>
                                                            <td>info@lilong.com</td>
                                                            <td>
                                                                <div class="dropdown">
                                                                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Edit/Delete
                                                                    </button>
                                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                        <a data-id="6" class="dropdown-item approve" href="#">Edit</a>
                                                                        <a data-id="6" class="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                                                                                                                                                                    
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="tab-pane" id="phone" role="tabpanel">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-bordered">
                                                        <tr>
                                                            <td>S/N</td>
                                                            <td>Phone No</td>
                                                            <td>Action</td>
                                                        </tr>
                                                                                                                                                                                                                                                            <tr>
                                                                                                                                                                                                                                                            <td>1</td>
                                                            <td>08182491776</td>
                                                            <td>
                                                                <div class="dropdown">
                                                                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Edit/Delete
                                                                    </button>
                                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                        <a data-id="6" class="dropdown-item approve" href="#">Edit</a>
                                                                        <a data-id="6" class="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>2</td>
                                                            <td>08073448773</td>
                                                            <td>
                                                                <div class="dropdown">
                                                                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Edit/Delete
                                                                    </button>
                                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                        <a data-id="6" class="dropdown-item approve" href="#">Edit</a>
                                                                        <a data-id="6" class="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="tab-pane" id="address" role="tabpanel">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-bordered">
                                                        <tr>
                                                            <td>S/N</td>
                                                            <td>Address</td>
                                                            <td>Action</td>
                                                        </tr>
                                                                                                                                                                                                                                                            <tr>
                                                                                                                                                                                                                                                            <td>1</td>
                                                            <td>38A, Ajanaku Street, Opebi, Ikeja, Lagos.</td>
                                                            <td>
                                                                <div class="dropdown">
                                                                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    Edit/Delete
                                                                    </button>
                                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                        <a data-id="6" class="dropdown-item approve" href="#">Edit</a>
                                                                        <a data-id="6" class="dropdown-item" href="#">Delete</a>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="tab-pane" id="reg" role="tabpanel">
                                            <div class="card-body">
                                                Registration - ₦20,000
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="withdraw" role="tabpanel">
                                            <div class="card-body">
                                                Withdrawal Limit  - ₦1,000
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="welcome" role="tabpanel">
                                            <div class="card-body">
                                                Welcome Bonus  - ₦1,000
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="food" role="tabpanel">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-bordered">
                                                        <tr>
                                                            <td><strong>S/N</strong></td>
                                                            <td>Stage</td>
                                                            <td>Food Voucher Amount(₦)</td>
                                                            <td>Action</td>
                                                        </tr>
                    
                                                                                                                                
                                                            <tr>
                                                                    <td>1</td>
                                                                    <td>Stage 6</td>
                                                                    <td>20,000</td>
                                                                    
                                                                    <td>
                                                                        <div class="dropdown">
                                                                                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            Edit/Delete
                                                                            </button>
                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                            <a data-id="2" class="dropdown-item approve" href="#">Edit</a>
                                                                            <a data-id="2" class="dropdown-item" href="#">Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                                                                                                                                                                                                                            
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="tab-pane" id="stage" role="tabpanel">
                                            <div class="card-body">
                                                <div class="table-responsive">
                                                    <table class="table table-hover table-bordered">
                                                        <tr>
                                                            <td><strong>S/N</strong></td>
                                                            <td>Stage</td>
                                                            <td>Stage Entry Bonus(₦)</td>
                                                            <td>Action</td>
                                                        </tr>
                    
                                                                                                                                
                                                            <tr>
                                                                    <td>1</td>
                                                                    <td>Stage 6</td>
                                                                    <td>3,000</td>
                                                                    <td>
                                                                        <div class="dropdown">
                                                                                <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            Edit/Delete
                                                                            </button>
                                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                                                            <a data-id="2" class="dropdown-item approve" href="#">Edit</a>
                                                                            <a data-id="2" class="dropdown-item" href="#">Delete</a>
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
</template>

<script>
export default {
    
}
</script>