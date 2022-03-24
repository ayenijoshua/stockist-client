

export default {
    
    authUser(state,data){
        state.authUser = data
        localStorage.setItem('stockist-token',data.token)
    },

    loggedOut(state){
        state.authUser = {}
        localStorage.removeItem('stockist-token')
    }
}