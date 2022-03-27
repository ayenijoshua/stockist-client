
export default {

    orders(state){
        return state.orders
    },

    order(state){
        return (id)=>{
            return state.orders.find(ele=>ele.id==id)
        }
    },

    totalOrders(state){
        return state.totalOrders
    },

    totalSales(state){
        return state.totalSales
    },

    pendingOrders(state){
        return state.pendingOrders
    },

    approvedOrders(state){
        return state.approvedOrders
    },

    disapprovedOrders(state){
        return state.disapprovedOrders
    },

    ordersGraph(state){
        return state.ordersGraph
    }
}