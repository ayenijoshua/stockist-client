import actions from '../store/actions/user-actions'
import getters from '../store/getters/user-getters'
import mutations from '../store/mutations/user-mutations'

export default{
    namespaced:true,
    state(){
        return{
            users:[],
            totalUsers:null
        }
    },
    actions:{
        ...actions
    },
    getters:{
        ...getters
    },
    mutations:{
        ...mutations
    }
}