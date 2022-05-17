
import actions from '../store/actions/registered-user-actions'
import getters from '../store/getters/registered-user-getters'
import mutations from '../store/mutations/registered-user-mutations'

export default{
    namespaced:true,
    state(){
        return{
            downlines:[],
            totalDownlines:null,
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