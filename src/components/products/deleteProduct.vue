<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card" id="incentive">
                    <!-- <div class="card-header">
                        Delete product
                    </div> -->
                    <div class="card-body">
                        <div class="alert alert-info">
                            Are sure to delete this product - {{product.name}}
                        </div>
                        <button class="btn btn-danger" @click="deleteProduct()">Yes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        product:{
            type:Object,
            required:true
        }
    },

    methods:{
        deleteProduct(){
            this.$emit('product-delete-confirmed',this.product._id)
        }
    }
}
</script>