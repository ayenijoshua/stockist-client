import api from '../../api/companyContact'
import toastr from 'toastr'
//import {commit} from 'vuex'

export default {

    async getContact({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res && res.status==200){
                commit('companyContact',res.data)
            }else{
                toastr.error(res.data.message)
            }
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async create({commit},data){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.create(data)
            if(res.status==200){
                toastr.success("contact updated successfully")
                commit('companyContact',data)
            }else{
                toastr.error(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },
}

const LogError = (commit,err,commitType)=>{
    if(err.response !== undefined){
        let {response} = err
        //console.log(err.response)
        response.status==422 ? toastr.error(response.data.message) : toastr.error('An error occred')
    }else{
        console.log(err)
        toastr.error("Response not found")
    }
    commit(commitType,null,{root:true})
}