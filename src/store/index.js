import Vue from "vue";
import Vuex from "vuex";
import productStore from "./products-store";
//import api from "../api/auth-api";

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
        productStore
    }
})