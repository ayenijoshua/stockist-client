import Vue from "vue";
import Vuex from "vuex";
import productStore from "./products-store";
import orderStore from "./order-store";
import userStore from "./user-store";
import frontPageMessageStore from "./front-page-message-store"
import bankStore from "./banks-store";

Vue.use(Vuex);

export default new Vuex.Store({
    state(){
        return{
            submitting:false,
            loading:false,
            user:null
        }
    },

    mutations:{
        loading(state){
            state.loading =true
        },
        loaded(state){
            state.loading = false
        },
        submitting(state){
            state.submitting = true
        },
        submitted(state){
            state.submitting = false
        }
    },

    modules:{
        productStore,
        orderStore,
        userStore,
        frontPageMessageStore,
        bankStore
    }
})