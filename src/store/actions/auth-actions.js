import api from '../../api/auth'
import toastr from 'toastr'
import vm from '../../main'

export default {

    async login({commit}){
        try {
            commit('submitting',null,{root:true})
            const res = await api.login()
            if(res && res.status==200){
                commit('authUser',res.data)
                if(res.data.isAdmin){
                    vm.$router.push({name:'admin-dashboard'})
                }else{
                    vm.$router.push({name:'products'})
                }
            }else{
                toastr.error(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async register({commit},data){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.create(data)
            if(res.status==200){
                toastr.success("Account created successfully")
            }else{
                toastr.error(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async logOut({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.logOut(id)
            if(res.status==200){
                toastr.success('Logged out successfully')
                vm.$router.push({name:'login'})
                commit('loggedOut')
            }else{
                toastr.error(res.data)
            }
            commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    }
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