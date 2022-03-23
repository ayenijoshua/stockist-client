export default {
    
    orders(state,data){
        state.orders = data
    },

    storeOrder(state,data){
        state.orders.push(data)
    },

    deleteOrder(state,data){
        let prods = state.orders
        let index = prods.findIndex(ele=>ele.id==data.id)
        prods.splice(index,1)
    },

    totalOrders(state,data){
        state.totalOrders = data.total
    },

    totalSales(state,data){
        //console.log(data.total)
        state.totalSales = data.total
    },

    pendingOrders(state,data){
        state.pendingOrders.push(...data)
    },

    approvedOrders(state,data){
        state.approvedOrders.push(...data)
    },

    disapprovedOrders(state,data){
        state.disapprovedOrders.push(...data)
    },

    orderApproved(state,id){
        const index = state.pendingOrders.findIndex(ele=>ele._id==id)
        if(index !== -1){
            state.pendingOrders.splice(index,1)
        }else{
            console.log('order not dound')
        }
    },

    orderDisapproved(state,id){
        const index = state.pendingOrders.findIndex(ele=>ele._id==id)
        if(index !== -1){
            state.pendingOrders.splice(index,1)
        }else{
            console.log('order not found')
        }
    }
}