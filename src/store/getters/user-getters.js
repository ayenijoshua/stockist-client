
export default {

    users(state){
        return state.products
    },

    user(state){
        return (id)=>{
            return state.products.find(ele=>ele.id==id)
        }
    },

    totalUsers(state){
        return state.totalUsers
    }
}