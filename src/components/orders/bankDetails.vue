<template>
    <div class="card ">
        <div class="card-body">
            <!-- <div class="card-header">
                 <h3>Bank List</h3> --
                 <strong>Please pay to one of these banks and Upload the proof of payment in the order form</strong>
            </div> -->
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Bank Name</th>
                        <th scope="col">Account name</th>
                        <th scope="col">Account Number</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="banks.length == 0">
                        <td colspan="3" class="alert alert-info text-center">
                            There are no bank details
                        </td>
                    </tr>
                    <tr v-else v-for="bank,i in banks" :key="i">
                        <td>{{bank.bankName}}</td>
                        <td>{{bank.accountName}}</td>
                        <td>{{bank.accountNumber}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    components:{
    },

    props:{
        banks:{
            type:Array,
            required:true
        }
    },

    methods:{
        submit(data){
            //alert(data.get('name'))
            this.$emit('order-form-submitted',data)
        }
    }
}
</script>