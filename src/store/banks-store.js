import actions from '../store/actions/bank-actions'
import getters from '../store/getters/bank-getters'
import mutations from '../store/mutations/bank-mutations'

export default{
    namespaced:true,
    state(){
        return{
            banks:[],
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