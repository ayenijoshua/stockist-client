<template>
    <div>
        <form @submit.prevent="submit()" id="front-message">
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <input type="text" class="form-control" name="subject" v-model="form.subject"  placeholder="Subject" required>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <textarea type="text" v-model="form.message" name="message" class="form-control" placeholder="Message" required></textarea>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-12 mb-3">
                    <div class="form-row">
                        <div class="col-md-12 mb-3">
                            <select name="option" class="form-control" v-model="form.option" required>
                                <option :value="null">Message Option</option>
                                <option v-for="option in options" :value="option" :key="option">{{option}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <span  v-if="submitting" class="btn btn-primary">...</span>
            <button v-else type="submit" class="btn btn-primary" >Submit</button>
        </form>
    </div>
</template>

<script>
import {mapState,mapActions, mapGetters} from 'vuex'
export default {
    data(){
        return{
            form:{
                subject:null,
                option: null,
                message: null
            },

            options:['enable','disable']
           
        }
    },
    computed:{
        ...mapState({
            submitting:state=>state.submitting
        }),

        ...mapGetters('frontPageMessageStore',['message'])
    },

    created(){
        if(Object.entries(this.message).length==0 || this.form.subject == null){
            this.getMessage().then(res=>{
                if(res.status==200){
                    this.form = this.message
                    delete this.form._id, 
                    delete this.form.__v
                }
            })
        }
    },

    methods:{
        ...mapActions('frontPageMessageStore',['create','getMessage']),
        submit(){
            let from = document.getElementById('front-message')
            let data = new FormData(from)
            let message = {
                subject: data.get('subject'),
                option:data.get('option'),
                message: data.get('message')
            }
            this.create(message).then(res=>{
                if(res.status==200){
                    this.form = this.message
                }
            })
        }
    }



}
</script>