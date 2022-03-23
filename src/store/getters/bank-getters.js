
export default {

    banks(state){
        return state.banks
    },

    single(state){
        return (id)=>{
            return state.banks.find(ele=>ele.id==id)
        }
    }
}