import actions from '../store/actions/order-actions'
import getters from '../store/getters/order-getters'
import mutations from '../store/mutations/order-mutations'

export default{
    namespaced:true,
    state(){
        return{
            orders:[],
            totalOrders:null,
            totalSales:null,
            pendingOrders:[],
            approvedOrders:[],
            disapprovedOrders:[]
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