<template>
    <div>
        <div class="card ">
            <div class="card-body">
                <!-- <div class="card-header">
                    <h3>Order Form</h3>
                </div> -->
                <form enctype="multipart/form-data" id="order-form" @submit.prevent="submit()">                
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" id="name" name="name"  placeholder="Enter Your Name">
                            </div>
                        </div>	
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" name="username" placeholder="Suggested Username">
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="tel"  name="phone" pattern="[0-9]{11}" placeholder="Enter Phone Number">
                            </div>
                        </div>	
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="email" name="email" placeholder="Enter Your Email">
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" name="bankName" placeholder="Enter Your Bank name">
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" name="accountNumber" placeholder="Enter Your Bank account number">
                            </div>
                        </div>
                        
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" id="State" name="state" placeholder="Enter Your State">
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" id="Address" name="address" placeholder="Enter Your Address">
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <label for="formFileMultiple" class="form-label">Upload Your Proof Of Payment For Confirmation</label>
                                <input class="form-control" accept="image/*" id="pop" required name="image" type="file" />
                            </div>
                        </div>	
                        
                        <div class="col-md-6 mb-3">
                            <label for="formFileMultiple" class="form-label">Select delivery type</label>
                            <select name="deliveryType" class="custom-select select2" required>
                                <option value="">Select Option</option>
                                <option value="deliver to my location">Delivery To My Location</option>
                                <option value="pickup from store">Pickup At Store</option>
                            </select>
                        </div>
                    </div>

                    <h5 class="text-center">Sponsor and Upline</h5>
                    <hr/>
                    <div class="form-row">
                        
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" name="uplineUsername" placeholder="Upline Username">
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" name="sponsorName" placeholder="Sponsor Name">
                            </div>
                        </div>
                        
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" name="sponsorUsername" placeholder="Sponsor username">
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" name="sponsorBankName" placeholder="Sponsor Bank Name">
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" name="sponsorAccountNumber" placeholder="Sponsor Bank Account Number">
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" id="State" name="sponsorState" placeholder="Sponsor State">
                            </div>
                        </div>
                    
                        <span v-if="submitting" class="btn btn-primary">...</span>
                        <button v-else type="submit" class="btn btn-primary btn-lg float-left m-2">
                            <i class="icon icon-credit-card"></i> Submit
                        </button>
                    </div>
                </form>
            </div>	
        </div>
        
    </div>
</template>

<script>
import {notification} from '@/util/notification'
import {mapState} from 'vuex'
export default {
    data(){
        return{
            maxFileSize:4048576 
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting,
        }),
    },

    methods:{
        submit(){
            let formData = document.getElementById("order-form")
            if(this.checkFileSize()){
                let data = new FormData(formData)
                this.$emit('order-form-submitted',data)
            }
        },

        checkFileSize(){
            var fileUpload = document.getElementById("pop");
            if (typeof (fileUpload.files) != "undefined") {
                var size = parseFloat(fileUpload.files[0].size ).toFixed(2);
                //alert(size + " KB.");
                if(Number(size) > this.maxFileSize){
                    notification.error("Maximuum file size should be 4mb");
                    return false
                }
                return true
            } else {
                notification.info("Please use an updated browser for better user experience");
                return false
            }
        }
    },

    created(){
        //this.$bvModal.hide('bankDetails')
    },

}
</script>