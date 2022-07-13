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
                                        <form class="form-horizontal form-materia" id="add-contact-form" method="POST" @submit.prevent="submit()">
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Email</label>
                                                    <div class="col-md-12">
                                                        <input v-model="form.email" name="email"  type="email" class="form-control form-control-line">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Phone Number</label>
                                                    <div class="col-md-12">
                                                        <input v-model="form.phone" name="phone"   type="number" class="form-control form-control-line">
                                                    </div>
                                                </div>
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Address</label>
                                                    <div class="col-md-12">
                                                    <textarea v-model="form.address" name="address" class="form-control form-control-line"></textarea>
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

                            <div class="col-md-6">
                                <div class="card" id="bank">
                                    <div class="card-header">
                                       SMS settings
                                    </div>
                                    <div class="card-body">
                                        <form class="form-horizontal form-materia" id="sms-form" @submit.prevent="setSmsMessage()">
                                            <template v-if="loading">
                                                <b-card >
                                                    <b-skeleton animation="throb" width="85%"></b-skeleton>
                                                    <b-skeleton animation="throb" width="55%"></b-skeleton>
                                                    <b-skeleton animation="throb" width="70%"></b-skeleton>
                                                </b-card>
                                            </template>
                                            <template v-else>
                                                <div class="form-group">
                                                    <label for="example-email" class="col-md-12">Text message</label>
                                                    <div class="col-md-12">
                                                    <textarea :value="sms.message" required
                                                        placeholder="Welcome to www.lilonghero.com. We will be glad to have you as a leader in our program, To register: lilonghero.com/philip12345 For More Info: 08073448773" name="text" class="form-control form-control-line"></textarea>
                                                    </div>
                                                </div>
                                            
                                                <div class="form-group">
                                                    <div class="col-sm-12">
                                                        <span v-if="submitting" class="btn btn-primary">...</span>
                                                        <button v-else class="btn btn-primary" id="">Update</button>
                                                    </div>
                                                </div>
                                            </template>
                                        </form>    
                                    </div>
                                </div>

                                <div class="card mt-3" id="bank">
                                    <div class="card-header">
                                       SMS balance
                                    </div>
                                    <div class="card-body">
                                        Balance : {{balance}}
                                    </div>
                                </div>
                            </div>
                        </div>	
                        <div class="row mt-3">
                            <div class="col-md-6">
                                <div class="card" id="bank">
                                    <div class="card-header">
                                        Change Admin Password
                                    </div>
                                    <div class="card-body">
                                        <div v-if="!authUser">Please wait</div>
                                        <reset-user-password :user="authUser" />
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
import resetUserPassword from '@/components/admin/resetUserPassword'
export default {
    components: {
        resetUserPassword
    },
    data() {
        return {
            form: {
                email: null,
                phone: null,
                address: null
            }
        };
    },
    computed: {
        ...mapState({
            loading: state => state.loading,
            submitting: state => state.submitting
        }),
        ...mapGetters("companyContactStore", ["companyContact"]),
        ...mapGetters("smsStore", ["sms", "balance"]),
        ...mapGetters("authStore", ["authUser"])
    },
    created() {
        if (Object.entries(this.companyContact).length == 0 || this.form.email == null) {
            this.getContact().then(res => {
                if (res.status == 200) {
                    this.form = res.data;
                }
            });
        }
        if (!this.sms) {
            this.getSMS();
            this.getBalance();
        }
        if (Object.entries(this.authUser).length == 0) {
            this.getUser();
        }
    },
    methods: {
        ...mapActions("companyContactStore", ["getContact", "create"]),
        ...mapActions("smsStore", ["setSMS", "getSMS", "getBalance"]),
        ...mapActions("authStore", ["getUser"]),
        submit() {
            let form = document.getElementById("add-contact-form");
            let data = new FormData(form);
            let contact = {
                email: data.get("email"),
                phone: data.get("phone"),
                address: data.get("address")
            };
            this.create(contact);
        },
        setSmsMessage() {
            let form = document.getElementById("sms-form");
            let data = new FormData(form);
            let sms = {
                message: data.get("text"),
            };
            this.setSMS(sms);
        }
    },
    
}
</script>