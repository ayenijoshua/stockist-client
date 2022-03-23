<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card" id="incentive">
                    <div class="card-header">
                        Add bank
                    </div>
                    <div class="card-body">
                        <form class="form-horizontal form-materia" id="create-bank-form" enctype="multipart/form-data" @submit.prevent="submit()">
                            
                            <div class="form-group">
                                <label class="col-md-12">bank Name</label>
                                <div class="col-md-12">
                                    <select name="bankName" required class="form-control form-control-line">
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
                                <label class="col-md-12">Account name</label>
                                <div class="col-md-12">
                                <input type="text" name="accountName" required class="form-control form-control-line">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Account Number</label>
                                <div class="col-md-12">
                                <input type="text" name="accountNumber" required class="form-control form-control-line">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <button class="btn btn-primary" id="add-incentives">Add bank Details</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        submit(){
            let form = document.getElementById('create-bank-form')
            let data = new FormData(form)
            this.$emit('bank-created',data)
        }
    }
}
</script>