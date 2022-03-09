import actions from '../store/actions/product-actions'
import getters from '../store/getters/product-getters'
import mutations from '../store/mutations/product-mutations'

export default{
    namespaced:true,
    state(){
        return{
            products:[],
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