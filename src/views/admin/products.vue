<template>
    <div>
        <div class="row">
            <div class="col-md-8">
                <div class="card mb-3">
                    <div class="card-header white">
                        <h6> Products </h6>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="card mb-3">
                    <button class="btn btn-primary" v-b-modal.createProduct>Add</button>
                </div>
            </div>
        </div>
        

        <div class="card" id="profile" role="tabpanel">
            <div class="card-body">
                <div class="table-responsive">
                    <table class="table table-hover table-bordered">
                        <tr>
                            <th><strong>S/N</strong></th>
                            <th>Product Name</th>
                            <th>Available Quantity</th>
                            <th>Product image</th>
                            <th>Product Price (₦)</th>
                            <th>Description Title</th>
                            <th>Description</th>
                            <th><strong>Action</strong></th>
                        </tr> 
                         
                        <tr v-if="loading">
                            <td colspan="7">
                                <b-skeleton-table
                                    :rows="5"
                                    :columns="7"
                                    :table-props="{ bordered: true, striped: true }"
                                ></b-skeleton-table>
                            </td>
                        </tr>
                        <template v-else>
                            <tr v-if="products.length == 0">
                                <td colspan="7">There are no products</td>
                            </tr>
                            <tr v-else v-for="product,i in products" :key="i">
                            <td>{{++i}}</td>
                            <td>{{product.name}}</td>
                            <td>{{product.quantity}}</td>
                            <td><img class="img-responsive" :src="apiImageUrl + product.imageName" width="50%"></td>
                            <td>₦{{product.price}}</td>
                            <td>{{product.title}}</td>
                            <td>{{product.description}}</td>
                            <td>
                                <div class="dropdown">
                                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Edit/Delete
                                    </button>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style="position:relative">
                                        <a data-id="2" class="dropdown-item btn" @click="setProduct(product)" v-b-modal.editProduct>Edit</a>
                                        <a data-id="2" class="dropdown-item btn" @click="setProduct(product)" v-b-modal.deleteProduct>Delete</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        </template>                                                       
                                                                                                                                                                                                                                          
                    </table>
                </div>
            </div>
        </div>

        <modal :modalId="'createProduct'" :modalTitle="'Add Product'" :modalSize="'lg'">
            <create-product @product-created="createProduct"/>
        </modal>

        <modal :modalId="'editProduct'" :modalTitle="'Edit Product'" :modalSize="'lg'">
            <b-card v-if="!product">
                <b-skeleton animation="throb" width="85%"></b-skeleton>
                <b-skeleton animation="throb" width="55%"></b-skeleton>
                <b-skeleton animation="throb" width="70%"></b-skeleton>
            </b-card>
            <edit-product v-else :product="product" :uploadUrl="apiImageUrl" @product-edited="updateProduct"/>
        </modal>

        <modal :modalId="'deleteProduct'" :modalTitle="'deleteProduct'">
            <delete-product :product="product" @product-delete-confirmed="deleteProduct"/>
        </modal>
        
    </div>
</template>

<script>
import modal from '@/components/Modal'
import createProduct from '@/components/products/createProduct'
import editProduct from '@/components/products/editProduct'
import deleteProduct from '@/components/products/deleteProduct'
import {notification} from '@/util/notification'
import {mapActions,mapState,mapGetters} from 'vuex'
export default {
    components:{
        modal,
        editProduct,
        deleteProduct,
        createProduct
    },

    data(){
        return{
            form:{
                name:null,
                price:null,
                quantity:null,
                description:null,
                title:null,
                image:null
            },
            product:null
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting,
            loading:state=>state.loading
        }),

        ...mapGetters('productStore',['products']),

        apiImageUrl(){
            return process.env.VUE_APP_PRODUCTS_UPLOAD+'/'
        }
    },

    created(){
        if(this.products.length == 0){
            this.getProducts()
        }
    },

    methods:{
        ...mapActions('productStore',['create','getProducts','update','delete']),
        createProduct(data){
            this.create(data)
        },

        setProduct(product){
            this.product = product
        },

        updateProduct(formData){
            if(!this.product){
                notification.error("product not initialized")
            }
            this.update({id:this.product._id,data:formData}).then(res=>{
                if(res.status == 200){
                    this.$bvModal.hide('editProduct')
                    this.product = null
                }
            })
        },

        deleteProduct(id){
            this.delete(id).then(res=>{
                if(res.status == 200){
                    this.$bvModal.hide('deleteProduct')
                    this.product = null
                }
            })
        }
    }
    
}
</script>