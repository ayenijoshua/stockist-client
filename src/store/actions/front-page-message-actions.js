import api from '@/api/frontPageMessage'
import {notification} from '@/util/notification'

export default {

    async create({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.create(data)
            processResponse(res,null,null,'settings submitted successfully')
            commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getMessage({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.show()
            processResponse(res,commit,'message',null)
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    }
}

const processResponse = (res,commit=null,commitType=null,successMsg=null)=>{
    if(res && res.status != undefined){
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

const LogError = (commit,err,commitType)=>{
    if(err.response !== undefined){
        let {response} = err
        response.status==422 ? notification.error(response.data.message) : notification.error('An error occred')
    }else{
        console.log(err)
        notification.error('An error occred')
    }
    commit(commitType,null,{root:true})
}