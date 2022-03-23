

export default {
    
    banks(state,data){
        state.banks = data
    },

    storeBank(state,data){
        state.banks.push(data)
    },
    
    updateBank(state,data){
        let prods = state.banks
        let index = prods.findIndex(ele=>ele._id==data._id)
        if(index == -1){
            throw new Error("Bank not found on client")
        }
        prods.splice(index,1,data)
    },

    deleteBank(state,data){
        let prods = state.banks
        let index = prods.findIndex(ele=>ele.id==data.id)
        prods.splice(index,1)
    }
}