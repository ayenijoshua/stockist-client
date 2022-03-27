<template>
    <div>
        <div class="card ">
            <div class="card-body">
                <div class="card-header">
                    <h3>Order Form</h3>
                </div>
                <form enctype="multipart/form-data" id="order-form" @submit.prevent="submit()">                
                    <div class="form-row">
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" id="name" name="name"  placeholder="Enter Your Name">
                            </div>
                        </div>	
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" name="idNumber" placeholder="Enter Your ID Number">
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
                                <input class="form-control form-control-lg r-0" required type="text" name="sponsorName" placeholder="Enter Your Sponsor Name">
                            </div>
                        </div>	
                        <div class="col-md-6 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" id="State" name="state" placeholder="Enter Your State">
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div class="form-group">
                                <input class="form-control form-control-lg r-0" required type="text" id="Address" name="address" placeholder="Enter Your Address">
                            </div>
                        </div>
                        <div class="col-md-12 mb-3">
                            <div class="form-group">
                                <label for="formFileMultiple" class="form-label">Upload Your Proof Of Payment For Confirmation</label>
                                <input class="form-control" required name="image" type="file" />
                            </div>
                        </div>	
                        
                        <div class="col-md-12 mb-3">
                            <select name="deliveryType" class="custom-select select2" required>
                                <option value="">Select Option</option>
                                <option value="address">Delivery To My Location</option>
                                <option value="pickup">Pickup At Store</option>
                            </select>
                        </div>
                        <button type="submit" class="btn btn-primary btn-lg float-left m-2" v-b-modal.orderForm>
                            <i class="icon icon-credit-card"></i> Submit
                        </button>
                    </div>
                </form>
            </div>	
        </div>
        
    </div>
</template>

<script>
export default {
    methods:{
        submit(){
            let formData = document.getElementById("order-form")
            let data = new FormData(formData)
            //alert(data.get('name'))
            this.$emit('order-form-submitted',data)
        }
    },

    created(){
        //this.$bvModal.hide('bankDetails')
    }
}
</script>