import api from '@/api/orders'
import {notification} from '@/util/notification'

export default{
    async getOrders({commit}){
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

    async getTotalOrders({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.total()
            processResponse(commit,res,'totalOrders')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async create({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.create(data)
            processResponse(null,res,'',"Order submitted successfully")
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async approveOrder({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.approve(id)
            processResponse(null,res,null,"Order approved successfully")
            commit('submitted',null,{root:true})
            commit('orderApproved',id)
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async disapproveOrder({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.disapprove(id)
            processResponse(null,res,null,"Order disapproved successfully")
            commit('submitted',null,{root:true})
            commit('orderDisapproved',id)
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async delete({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.delete(id)
            processResponse(commit,res,'submitted',"Order deleted successfully")
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getTotalSales({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.totalSales()
            processResponse(commit,res,'totalSales')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getPending({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.ordersByStatus('pending')
            processResponse(commit,res,'pendingOrders')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getApproved({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.ordersByStatus('approved')
            processResponse(commit,res,'approvedOrders')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getDisapproved({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.ordersByStatus('disapproved')
            processResponse(commit,res,'disapprovedOrders')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async searchOrder({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.search(data)
            if(res.status == 200){
                data.orderType=='all' ? commit('orders',res.data) : commit(data.orderType+'Orders',res.data)
            }else{
                notification.error(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async getGraphData({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.graph()
            processResponse(commit,res,'ordersGraph')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
    },

    async getMonthlyProfit({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.monthlyProfit()
            processResponse(commit,res,'monthlyProfit')
            commit('loaded',null,{root:true})
        } catch (error) {
            LogError(commit,error,'loaded')
        }
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

const processResponse = (commit,res,commitType,successMsg=null)=>{
    if(res && res.status != undefined){
        let {status,data} = res
        if(status==200){
            if(commit) commit(commitType,data)
            if(successMsg) notification.success(successMsg)
        }else{
            notification.error(data.message)
        }
    }else{
        notification.error("response not found")
    }
}