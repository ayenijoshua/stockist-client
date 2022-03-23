<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div class="card mb-3">
                    <div class="card-header white">
                        <h6> Banks </h6>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-3">
                    <button class="btn btn-primary" v-b-modal.createBank>Add</button>
                </div>
            </div>
        </div>
        

        <div class="card" id="profile" role="tabpanel">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered">
                        <tr>
                            <th><strong>S/N</strong></th>
                            <th>Bank Name</th>
                            <th>Bank Account Name</th>
                            <th>Bank Account Number</th>
                            <th><strong>Action</strong></th>
                        </tr> 
                         
                        <tr v-if="loading">
                            <td colspan="5">
                                <b-skeleton-table
                                    :rows="5"
                                    :columns="5"
                                    :table-props="{ bordered: true, striped: true }"
                                ></b-skeleton-table>
                            </td>
                        </tr>
                        <template v-else>
                            <tr v-if="banks.length == 0">
                                <td colspan="7">There are no banks</td>
                            </tr>
                            <tr v-else v-for="bank,i in banks" :key="i">
                            <td>{{++i}}</td>
                            <td>{{bank.bankName}}</td>
                            <td>{{bank.accountName}}</td>
                            <td>{{bank.accountNumber}}</td>
                            <td>
                                <div class="dropdown">
                                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Edit/Delete
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                        <a data-id="2" class="dropdown-item btn" @click="setBank(bank)" v-b-modal.editBank>Edit</a>
                                        <a data-id="2" class="dropdown-item btn" @click="setBank(bank)" v-b-modal.deleteBank>Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </template>                                                       
                                                                                                                                                                                                                                          
                    </table>
                </div>
            </div>
        </div>

        <modal :modalId="'createBank'" :modalTitle="'Add bank'" :modalSize="'lg'">
            <create-bank @bank-created="createBank"/>
        </modal>

        <modal :modalId="'editBank'" :modalTitle="'Edit bank'" :modalSize="'lg'">
            <b-card v-if="!bank">
                <b-skeleton animation="throb" width="85%"></b-skeleton>
                <b-skeleton animation="throb" width="55%"></b-skeleton>
                <b-skeleton animation="throb" width="70%"></b-skeleton>
            </b-card>
            <edit-bank v-else :bank="bank" @bank-edited="updateBank"/>
        </modal>

        <modal :modalId="'deleteBank'" :modalTitle="'Delete bank'">
            <delete-bank :bank="bank" @bank-delete-confirmed="deleteBank"/>
        </modal>
        
    </div>
</template>

<script>
import modal from '@/components/Modal'
import createBank from '@/components/banks/createBank'
import editBank from '@/components/banks/editBank'
import deleteBank from '@/components/banks/deleteBank'
import {notification} from '@/util/notification'
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
    components:{
        modal,
        editBank,
        deleteBank,
        createBank
    },

    data(){
        return{
            bank:null
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting,
            loading:state=>state.loading
        }),

        ...mapGetters('bankStore',['banks']),
    },

    created(){
        if(this.banks.length == 0){
            this.getBanks()
        }
    },

    methods:{
        ...mapActions('bankStore',['create','getBanks','update','delete']),
        createBank(data){
            //console.log(data.get('bankName'))
            let bank = {
                bankName:data.get('bankName'),
                accountName:data.get('accountName'),
                accountNumber:data.get('accountNumber')
            }
            this.create(bank)
        },

        setBank(bank){
            this.bank = bank
        },

        updateBank(formData){
            if(!this.bank){
                notification.error("bank not initialized")
            }
            let bank = {
                bankName:formData.get('bankName'),
                accountName:formData.get('accountName'),
                accountNumber:formData.get('accountNumber')
            }
            this.update({id:this.bank._id,data:bank})
            this.$forceUpdate()
        },

        deleteBank(){
            this.delete({id:this.bank._id, cb:()=>{
                this.$bvModal.hide('deleteBank')
            }})
        }
    }
    
}
</script>