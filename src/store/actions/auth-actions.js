import api from '../../api/auth'
import toastr from 'toastr'
import vm from '../../main'

export default {

    async login({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.login(data)
            if(res && res.status==200){
                commit('authUser',res.data)
                if(res.data.isAdmin){
                    vm.$router.push({name:'admin-dashboard'})
                }else if(res.data.isInvestor){
                        vm.$router.push({name:'investor-dashboard'})
                }else{
                    vm.$router.push({name:'user-dashboard'})
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
            res = await api.register(data)
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

    async createInvestor({commit},data){
        var res;
        try {
            commit('submitting',null,{root:true})
            res = await api.createInvestor(data)
            if(res.status==200){
                toastr.success("Investor created successfully")
                location.reload()
            }else{
                toastr.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async logOut({commit},id){
        try {
            commit('submitting',null,{root:true})
            console.log(id)
            //const res = await api.logOut(id)
            //if(res.status==200){
                //toastr.success('Logged out successfully')
                vm.$router.push({name:'login'})
                commit('loggedOut')
            //}else{
                //toastr.error(res.data.message)
           // }
            commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getUser({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.user()
            commit('authUser',res.data)
            commit('loaded',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async resetPasswordLink({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.resetPasswordLink(data)
            if(res && res.status==200){
                toastr.success('Reset password link has been sent to your email address')
            }else{
                toastr.error(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async resetPassword({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.resetPassword(data)
            if(res && res.status==200){
                toastr.success('password has been reset successfully, please login to continue')
                vm.$router.push({name:'login'})
            }else{
                toastr.error(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    /**
     * admin reset user password
     * @param {*} param0 
     * @param {*} data 
     */
    async resetUserPassword({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.resetUserPassword(data)
            if(res && res.status==200){
                toastr.success('password has been reset successfully')
            }else{
                toastr.error(res.data.message)
            }
        commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
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