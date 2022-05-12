<template>
    <div class="card">
        <div class="card-header white">
            <div class="row justify-content-end">
                <div class="col">
                    <ul class="nav nav-tabs card-header-tabs nav-material">
                        <li class="nav-item">
                            <a class="nav-link text-blue" id="w1-tab1" data-toggle="tab"><i
                                    class="icon icon-message blue-text s-18"></i>Text SMS a
                                Friend</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="card-body no-p">
            <div class="tab-content">
                <div class="tab-pane animated show active" id="v-pills-w1-tab1"
                    role="tabpanel" aria-labelledby="v-pills-w1-tab1">
                    <div class="row p-3">
                        <div class="col-md-12 text-center">
                            <h3 class="font-weight-bold s-14 text-center">Enter your desired
                                phone numbers below to send out SMS </h3>
                            <form @submit.prevent="submit()" id="numForm">
                                <div class="form-row">
                                    <div class="col-md-12 mb-3">
                                        <textarea class="form-control" name="phones"
                                            id="" rows="2"
                                            placeholder="E.g 09012345612,08012345678"
                                            required>
                                        </textarea>
                                    </div>
                                    <span v-if="submitting" class="btn btn-primary">...</span>
                                    <button v-else class="btn btn-primary" type="submit">Send SMS
                                        Invite</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    
    computed:{
        ...mapState({
            submitting:state=>state.submitting
        })
    },

    methods:{
        ...mapActions('phoneNumberStore',['add']),

        submit(){
            let data = {phones: document.getElementsByName('phones')[0].value}
            this.add(data)
        }
    }
}
</script>