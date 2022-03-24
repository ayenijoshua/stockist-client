<template>
    <div>
        <div class="row">
            <div class="col-md-12">
                <div class="card" id="incentive">
                    <div class="card-header">
                        Add product
                    </div>
                    <div class="card-body">
                        <form class="form-horizontal form-materia" id="create-product-form" enctype="multipart/form-data" @submit.prevent="submit()">
                            
                            <div class="form-group">
                                <label class="col-md-12">Product Name</label>
                                <div class="col-md-12">
                                <input type="text" name="name" required class="form-control form-control-line">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="formFileMultiple" class="form-label">Upload Product Image</label>
                                <input class="form-control" required name="image" accept="image/*" type="file" id="formFile" />
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Product Price</label>
                                <div class="col-md-12">
                                <input type="text" name="price" required class="form-control form-control-line">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Quantity</label>
                                <div class="col-md-12">
                                <input type="text" name="quantity" required class="form-control form-control-line">
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="col-md-12">Product Description Tittle</label>
                                <div class="col-md-12">
                                <input type="text" name="title" required class="form-control form-control-line">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="example-email" class="col-md-12">Description</label>
                                <div class="col-md-12">
                                <textarea name="description" required class="form-control form-control-line"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <span class="btn btn-primary" v-if="submitting">...</span>
                                    <button v-else class="btn btn-primary" id="add-incentives">Add Product Details</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        submit(){
            let form = document.getElementById('create-product-form')
            let data = new FormData(form)
            this.$emit('product-created',data)
        }
    }
}
</script>