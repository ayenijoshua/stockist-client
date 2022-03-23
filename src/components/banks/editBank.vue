<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card" id="incentive">
                    <div class="card-header">
                        Update bank
                    </div>
                    <div class="card-body">
                        <form class="form-horizontal form-materia" id="edit-bank-form" enctype="multipart/form-data" @submit.prevent="submit()">
                            
                            <div class="form-group">
                                <label class="col-md-12">bank Name</label>
                                <div class="col-md-12">
                                <input type="text" name="bankName" :value="bank.bankName" class="form-control form-control-line">
                                </div>
                            </div>
                            
                            <div class="form-group">
                                <label class="col-md-12">Account Name</label>
                                <div class="col-md-12">
                                <input type="text" name="accountName" :value="bank.accountName" class="form-control form-control-line">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Account Number</label>
                                <div class="col-md-12">
                                <input type="text" name="accountNumber" :value="bank.accountNumber" class="form-control form-control-line">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <button class="btn btn-primary" id="add-incentives">Update bank Details</button>
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
    components:{
        
    },
    props:{
        bank:{
            type:Object,
            required:true
        }
    },

    methods:{
        submit(){
            let form = document.getElementById('edit-bank-form')
            let data = new FormData(form)
            this.$emit('bank-edited',data)
        }
    }
}
</script>