<template>
    <div id="">
    <main>
        <div id="primary" class="blue4 p-t-b-100 height-full ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mx-md-auto">
                        <div class="text-center">
                           <a href="https://lilonghero.com"><img class="img-responsive" src="assets/img/fronter1.png" style= "max-width: 100%;" alt=""/></a> 
                            <p class="p-t-b-20 text-white">Reset Password
                                </p>
                        </div>
                        <form @submit.prevent="submit()">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-user"></i>
                                        <input required type="password" v-model="form.password" class="form-control form-control-lg no-b"
                                            placeholder="Password">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-lock"></i>
                                        <input required type="password" v-model="form.password_confirmation" class="form-control form-control-lg no-b"
                                            placeholder="Password confirmation">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <span v-if="submitting" class="btn btn-success btn-lg btn-block">...</span>
                                    <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Submit">
                                </div>
                            </div>
                        </form>
                        <div class="row">
                            <p class="forget-pass text-white text-center"> Login Instead ?
                                <a href="" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">
                                    
                                </a>
                                <br><router-link :to="{name:'login'}"> <b>Login</b> </router-link>
                            </p>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {

    data(){
        return{
            form:{
                password_confirmation:null,
                password:null,
                token: this.$route.params.token
            }
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },
    
    methods:{
        ...mapActions('authStore',['resetPassword']),

        submit(){
            console.log(this.form)
            this.resetPassword(this.form)
        },
    }
}
</script>