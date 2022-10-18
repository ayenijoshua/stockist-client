<template>
    <form method="post" id="searchForm" @submit.prevent="submit()">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-3">
                        <input type="date" id="start" v-model="form.from_date" class="form-control " style="" name="trip-start" placeholder="To Date ">
                    </div>

                    <div class="col-md-3">
                        <input type="date" id="start" v-model="form.to_date" class="form-control " style="" name="trip-start" placeholder="To Date ">
                    </div>
                    <div class="col-md-3">
                        <input type="text" id="start" v-model="form.username" class="form-control " style="" name="trip-start"  placeholder="Enter username ">
                    </div>

                    <div class="col-md-3">
                        <button type="submit" id="submit" class="btn btn-primary">View Order History&nbsp;&nbsp;<i class="icon-search"></i></button>
                    </div>
                </div>

                <br>
                <div class="row">    
                    <div class="col-md-3 mr-0">
                        <div class="dropdown">
                            <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter Purchase history
                            </button>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                <a class="dropdown-item" href="#" @click="getAllOrders()">All Orders</a>
                                <a class="dropdown-item" href="#" @click="getApprovedOrders()">Approved Orders</a>
                                <a class="dropdown-item" href="#" @click="getPendingOrders()">Pending Orders</a>
                                <a class="dropdown-item" href="#" @click="getDisapprovedOrders()">Disapproved Orders </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>      
        </div><br>
    </form>
</template>

<script>
export default {

    data(){
        return{
            form:{
                from_date:null,
                to_date:null,
                username:null
            },
            orderType:'all'
        }
    },

    methods:{
        getPendingOrders(){
            this.orderType = 'pending'
            this.$emit('get-specific-orders',this.orderType)
        },
        getApprovedOrders(){
            this.orderType = 'approved'
            this.$emit('get-specific-orders',this.orderType)
        },
        getDisapprovedOrders(){
            this.orderType = 'disapproved'
            this.$emit('get-specific-orders',this.orderType)
        },
        getDeliveredOrders(){
            this.orderType = 'delivered'
            this.$emit('get-specific-orders',this.orderType)
        },
        getAllOrders(){
            this.orderType = 'all'
            this.$emit('get-specific-orders',this.orderType)
        },

        submit(){
            this.form.orderType = this.orderType
            this.$emit('search',Object.assign({},this.form))
        }
    }
    
}
</script>