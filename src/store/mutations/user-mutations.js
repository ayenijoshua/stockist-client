export default {
    
    users(state,data){
        state.orders = data
    },

    storeUser(state,data){
        state.users.push(data)
    },

    deleteUser(state,data){
        let prods = state.users
        let index = prods.findIndex(ele=>ele.id==data.id)
        prods.splice(index,1)
    },

    totalUsers(state,data){
        state.totalUsers = data.total
    }
}