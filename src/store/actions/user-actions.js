import api from '@/api/users'
import {notification} from '@/util/notification'

export default{

    async getUsers({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res.status==200){
                commit('orders',res.data)
            }else{
                notification.error(res.message)
            }
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getTotalUsers({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.total()
            processResponse(commit,res,'totalUsers')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async create({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.create(data)
            processResponse(null,res,'',null)
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async delete({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.delete(id)
            processResponse(commit,res,'submitted',"User deleted successfully")
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    }

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