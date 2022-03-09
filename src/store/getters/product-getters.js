
export default {

    products(state){
        return state.products
    },

    single(state){
        return (id)=>{
            return state.products.find(ele=>ele.id==id)
        }
    }
}