<template>
    <main>
        <div id="primary" class="blue4 p-t-b-100 height-full ">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 mx-md-auto">
                        <div class="text-center">
                            <img class="img-responsive" src="assets/img/fronter1.png" style= "max-width: 100%;" alt="">
                            <p class="p-t-b-20 text-white">Let the Journey Begin...</p>
                        </div>
                        <form @submit.prevent="submit()" id="regForm">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-user"></i>
                                        <input type="text" class="form-control form-control-lg no-b"
                                            placeholder="Full Name" name="name">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-verified_user"></i>
                                        <input type="text" class="form-control form-control-lg no-b"
                                            placeholder="username" name="username">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-envelope-o"></i>
                                        <input type="text" class="form-control form-control-lg no-b"
                                            placeholder="Email" name="email">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-phone"></i>
                                        <input type="text" class="form-control form-control-lg no-b"
                                            placeholder="phone" name="phone">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-user-plus"></i>
                                        <input type="text" class="form-control form-control-lg no-b"
                                            placeholder="Referral Username" name="referrer">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group has-icon"><i class="icon-key4"></i>
                                        <input type="password" class="form-control form-control-lg no-b"
                                            placeholder="password" name="password">
                                    </div>
                                </div>
                                <div class="col-lg-12">
                                    <span v-if="submitting" class="btn btn-success btn-lg btn-block">...</span>
                                    <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Register">
                                    <p class="forget-pass text-white text-center">Do You have an account already? 
                                        <router-link :to="{name:'login'}"><b>Click Here to Login</b></router-link>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!-- #primary -->
    </main>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },

    methods:{
        ...mapActions('authStore',['register']),

        submit(){
            let form = document.getElementById('regForm')
            let formData = new FormData(form)
            let data = {
                name: formData.get('name'),
                email: formData.get('email'),
                username: formData.get('username'),
                password: formData.get('password'),
                phone: formData.get('phone'),
                referrer: formData.get('referrer')
            }
            this.register(data)
        }
    }
};
</script>