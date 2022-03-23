import actions from '../store/actions/front-page-message-actions'
import getters from '../store/getters/front-page-message-getters'
import mutations from '../store/mutations/front-page-message-mutations'

export default{
    namespaced:true,
    state(){
        return{
            message:{}
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
    },
    
}