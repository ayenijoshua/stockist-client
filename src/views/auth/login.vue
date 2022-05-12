<template>
    <div id="">
    <main>
        <div id="primary" class="blue4 p-t-b-100 height-full ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mx-md-auto">
                        <div class="text-center">
                            <img class="img-responsive" src="assets/img/fronter1.png" style= "max-width: 100%;" alt="">
                            <p class="p-t-b-20 text-white">Welcome back, signin...
                                </p>
                        </div>
                        <form @submit.prevent="loginUser()">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-user"></i>
                                        <input type="text" v-model="form.email" class="form-control form-control-lg no-b"
                                            placeholder="email">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-lock"></i>
                                        <input type="password" v-model="form.password" class="form-control form-control-lg no-b"
                                            placeholder="Password">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <span v-if="submitting" class="btn btn-success btn-lg btn-block">...</span>
                                    <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Login">
                                </div>
                            </div>
                        </form>
                        <div class="row">
                            <p class="forget-pass text-white text-center">Have you forgot your username or password ? 
                                <a href="" class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse1" aria-expanded="true" aria-controls="collapseOne">
                                    <b>Retrieve Here</b>
                                </a>
                                <br>Don't Have an Account?<router-link :to="{name:'register'}"> <b>Register Now!</b> </router-link>
                            </p>
                            <div id="collapse1" class="collapse hidden col-lg-12" aria-labelledby="headingOne" data-parent="#accordionExample" style="">
                                <div class="col-lg-12">
                                    <div class="form-group has-icon"><i class="icon-envelope-o"></i>
                                        <input type="text" class="form-control form-control-lg no-b"
                                            placeholder="Enter Your Email">
                                    </div>
                                </div>
                                <div class="col-lg-12 text-center">
                                    <input type="submit"  class="btn btn-success btn-lg btn-block" value="Reset Password">
                                </div>
                            </div>
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
                email:null,
                password:null
            }
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },
    
    methods:{
        ...mapActions('authStore',['login']),

        loginUser(){
            //this.$router.push({name:'dashboard'})
            this.login(this.form)
        }
    }
}
</script>