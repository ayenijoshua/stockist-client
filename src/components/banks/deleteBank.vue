<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card" id="incentive">
                    <div class="card-header">
                        Delete bank
                    </div>
                    <div class="card-body">
                        <div class="alert alert-info">
                            Are sure to delete this bank - {{bank.name}}
                        </div>
                        <button class="btn btn-danger" @click="deleteBank()">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        bank:{
            type:Object,
            required:true
        }
    },

    methods:{
        deleteBank(){
            this.$emit('bank-delete-confirmed',this.bank._id)
        }
    }
}
</script>