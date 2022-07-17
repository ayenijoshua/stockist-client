import api from '@/api/registered-users'
import {notification} from '@/util/notification'

export default{

    async getDownlines({commit},username){
        try {
            commit('loading',null,{root:true})
            const res = await api.downlines(username)
            if(res.status==200){
                commit('downlines',res.data)
            }else{
                notification.error(res.message)
            }
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalDownlines({commit},username){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalDownlines(username)
            processResponse(commit,res,'totalDownlines')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async search({commit},data){
        try {
            commit('loading',null,{root:true})
            const res = await api.search(data)
            processResponse(commit,res,'users')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async searchInvestor({commit},data){
        try {
            commit('loading',null,{root:true})
            const res = await api.searchInvestor(data)
            processResponse(commit,res,'investors')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getUsers({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res.status==200){
                commit('users',res.data)
            }else{
                notification.error(res.message)
            }
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getInvestors({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.investors()
            if(res.status==200){
                commit('investors',res.data)
            }else{
                notification.error(res.message)
            }
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalMembers({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.total()
            processResponse(commit,res,'totalMembers')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

}

const LogError = (commit,err,commitType)=>{
    if(err.response !== undefined){
        let {response} = err
        response.status==422 ?notification.error(response.data.message) : notification.error('An error occred')
    }else{
        notification.error(err)
    }
    commit(commitType,null,{root:true})
}

const processResponse = (commit,res,commitType,successMsg=null)=>{
    if(res.status !== undefined){
        let {status,message,data} = res
        if(status==200){
           if(commit) commit(commitType,data)
           if(successMsg) notification.success(successMsg)
        }else{
            notification.error(message)
        }
    }else{
        notification.error("response not found")
    }
}