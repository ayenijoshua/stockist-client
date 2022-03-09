

export default {
    
    products(state,data){
        state.products = data
    },

    storeProduct(state,data){
        state.products.push(data)
    },
    
    updateProduct(state,data){
        let prods = state.products
        let index = prods.findIndex(ele=>ele._id==data._id)
        if(index == -1){
            throw new Error("product not found on client")
        }
        prods.splice(index,1,data)
    },

    deleteProduct(state,data){
        let prods = state.products
        let index = prods.findIndex(ele=>ele.id==data.id)
        prods.splice(index,1)
    }
}