<template>
    <div>
        <form @submit.prevent="submit()" id="regForm">
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group has-icon"><i class="icon-user"></i>
                        <input type="text" class="form-control form-control-lg"
                            placeholder="Full Name" name="name">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group has-icon"><i class="icon-verified_user"></i>
                        <input type="text" class="form-control form-control-lg"
                            placeholder="username" name="username">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group has-icon"><i class="icon-envelope-o"></i>
                        <input type="text" class="form-control form-control-lg"
                            placeholder="Email" name="email">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group has-icon"><i class="icon-phone"></i>
                        <input type="text" class="form-control form-control-lg"
                            placeholder="phone" name="phone">
                    </div>
                </div>
                
                <div class="col-lg-12">
                    <div class="form-group has-icon"><i class="icon-key4"></i>
                        <input type="text" class="form-control form-control-lg"
                            placeholder="password" name="password">
                    </div>
                </div>
                <div class="col-lg-12">
                    
                    <div class="form-group has-icon"><i class="icon-map-marker"></i>
                        <input type="text" class="form-control form-control-lg no" name="state" list="statename" placeholder="state">
                        <datalist id="statename">
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Osun">Osun</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                            <option value="Zamfara ">Zamfara </option>
                        </datalist>
                    </div>
            
                </div>
                <input type="hidden" class="form-control form-control-lg no-b" value="lilong" name="referrer">
                <div class="col-lg-12">
                    <span v-if="submitting" class="btn btn-primary btn-lg btn-block">...</span>
                     <input v-else type="submit" class="btn btn-success btn-lg btn-block" value="Create Investor"/>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    data(){
        return{
            referral : this.$route.params.referral || null
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },

    created(){

    },

    methods:{
        ...mapActions('authStore',['createInvestor']),

        submit(){
            let form = document.getElementById('regForm')
            let formData = new FormData(form)
            let data = {
                name: formData.get('name'),
                email: formData.get('email'),
                username: formData.get('username'),
                password: formData.get('password'),
                phone: formData.get('phone'),
                referrer: formData.get('referrer'),
                state: formData.get('state')
            }
            let that = this
            this.createInvestor(data).then(res=>{
                if(res.status == 200){
                    that.$store.state['registeredUser/investors'].push(res.data)
                }
            })
        }
    }
};
</script>