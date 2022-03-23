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
                                                        <button class="btn btn-primary" id="add-bank-details">Update Company Details</button>
                                                    </div>
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
    </div>
</template>

<script>
export default {
    
}
</script>