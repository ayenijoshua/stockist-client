import api from '../../api/sms'
import toastr from 'toastr'
//import {commit} from 'vuex'

export default {

    async setSMS({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.set(data)
            if(res && res.status==200){
                commit('sms',res.data)
                toastr.success('SMS message set successfully')
            }else{
                toastr.error(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getSMS({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.get()
            if(res && res.status==200){
                commit('sms',res.data)
            }else{
                toastr.error(res.data.message)
            }
        commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getBalance({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.balace()
            if(res && res.status==200){
                commit('balance',res.data)
            }else{
                toastr.error(res.data.message)
            }
        commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },
}

const LogError = (commit,err,commitType)=>{
    if(err.response !== undefined){
        let {response} = err
        //console.log(err.response)
        response.status==422 || response.status==400 ? toastr.error(response.data.message) : toastr.error('An error occred')
    }else{
        console.log(err)
        toastr.error("Response not found")
    }
    commit(commitType,null,{root:true})
}