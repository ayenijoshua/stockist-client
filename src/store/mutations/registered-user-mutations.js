export default {
    
    downlines(state,data){
        state.downlines = data
    },

    totalDownlines(state,data){
        state.totalDownlines = data.total
    },

    users(state,data){
        state.users = data
    },

    deleteUser(state,data){
        let users = state.users
        let index = users.findIndex(ele=>ele.id==data.id)
        users.splice(index,1)
    },

    totalUsers(state,data){
        state.totalUsers = data.total
    }
}