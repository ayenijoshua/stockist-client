<template>
    <div>
        <form @submit.prevent="submit()">
            <div class="row">
                <div class="col-lg-6">
                    <div class="form-group has-icon"><i class="icon-user"></i>
                        <input required type="text" v-model="form.password" class="form-control form-control-lg"
                            placeholder="Password">
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="form-group has-icon"><i class="icon-lock"></i>
                        <input required type="test" v-model="form.password_confirmation" class="form-control form-control-lg"
                            placeholder="Password confirmation">
                    </div>
                </div>
                <div class="col-lg-12">
                    <span v-if="submitting" class="btn btn-primary btn-lg btn-block">...</span>
                    <input v-else type="submit" class="btn btn-primary btn-lg btn-block" value="Change Password">
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {

    props:{
        user:{
            type:Object,
            required:true
        }
    },

    data(){
        return{
            form:{
                password_confirmation:null,
                password:null,
            }
        }
    },

    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },
    
    methods:{
        ...mapActions('authStore',['resetUserPassword']),

        submit(){
            console.log(this.form)
            this.form.userId = this.user._id
            this.resetUserPassword(this.form)
        },
    }
}
</script>