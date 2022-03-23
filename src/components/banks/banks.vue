<template>
    <div class="card-body" style="overflow-x:auto;">
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th scope="col">Bank Name</th>
                    <th scope="col">Account Name</th>
                    <th scope="col">Account Number</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bank,i in banks" :key="i">
                    <td>{{bank.bankName}}</td>
                    <td>{{bank.accountName}}</td>
                    <td>{{bank.accountNumber}}</td>
                    <td>
                        <div class="dropdown">
                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Add/Remove
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                <a data-id="2" class="dropdown-item btn" @click="add(bank,i)" >Add</a>
                                <a data-id="2" class="dropdown-item btn" @click="remove(bank)">Remove</a>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props:{
        banks:{
            type:Array,
            required:true
        },
        
    },

    methods:{
        add(bank,i){
            this.$emit('add-bank',bank)
        },
        remove(bank){
            this.$emit('remove-bank',bank)
        }
    }
}
</script>