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
                                        <form class="form-horizontal form-materia" id="add-bank-details-form" method="POST" @submit.prevent="submit()">
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Email</label>
                                                    <div class="col-md-12">
                                                        <input v-model="form.email"  type="email" class="form-control form-control-line">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Phone Number</label>
                                                    <div class="col-md-12">
                                                        <input v-model="form.phone"   type="number" class="form-control form-control-line">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Address</label>
                                                    <div class="col-md-12">
                                                    <textarea v-model="form.address" class="form-control form-control-line"></textarea>
                                                    </div>
                                                </div>
                                                
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <span v-if="submitting" class="btn btn-primary">...</span>
                                                        <button v-else class="btn btn-primary" id="add-bank-details">Update Company Details</button>
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
import {mapState,mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return{
            form:{
                email:null,
                phone:null,
                address:null
            }
        }
    },

    computed:{
        ...mapState({
            loading:state=>state.loading,
            submitting:state=>state.submitting
        }),
        ...mapGetters('companyContactStore',['companyContact'])
    },

    created(){
        if(Object.entries(this.companyContact).length == 0 || this.form.email==null){
            this.getContact().then(res=>{
                if(res.status==200){
                    this.form = res.data
                }
            })
        }
    },

    methods:{
        ...mapActions('companyContactStore',['getContact','create']),

        submit(){
            this.create(this.form)
        }
    }
}
</script>