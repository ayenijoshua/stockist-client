import actions from '../store/actions/sms-actions'
import getters from '../store/getters/sms-getters'
import mutations from '../store/mutations/sms-mutations'

export default{
    namespaced:true,
    state(){
        return{
           sms:null,
           balance:0
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