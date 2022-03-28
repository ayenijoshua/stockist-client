import api from '../../api/products'
import toastr from 'toastr'
//import {commit} from 'vuex'

export default {

    async getProducts({commit}){
        try {
            commit('loading',null,{root:true})
            const res = await api.all()
            if(res && res.status==200){
                commit('products',res.data)
            }else{
                toastr.error(res.data.message)
            }
        commit('loaded',null,{root:true})
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
                toastr.success("Product created successfully")
                commit('storeProduct',data)
                location.reload()
            }else{
                toastr.error(res.data.message)
            }
            commit('submitted',null,{root:true})
        } catch (err) {
            LogError(commit,err,'submitted')
        }
    },

    async update({commit},data){
        try {
            commit('submitting',null,{root:true})
            const res = await api.update(data.id,data.data)
            if(res.status == 200){
                toastr.success('Product updated successfully') 
                commit('updateProduct',res.data)
                location.reload()
            }else{
                toastr.error(res.data.message)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    },

    async delete({commit},id){
        try {
            commit('submitting',null,{root:true})
            const res = await api.delete(id)
            if(res.status==200){
                toastr.success('Product delete successfully')
                commit('deleteProduct',id)
            }else{
                toastr.error(res.data)
            }
            commit('submitted',null,{root:true})
            return res
        } catch (error) {
            LogError(commit,error,'submitted')
        }
    }
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