import { notification } from "../util/notification";
import api from "../api/products"

(function(){
    //localStorage.removeItem('stokist-cart')
    let cart = localStorage.getItem('stokist-cart')
    let cartObj = JSON.parse(cart) || {}
    if(cartObj.products == undefined){
        let cart = {
            products:[],
            totalQty:0,
            totalPrice:0
        }
        localStorage.setItem('stokist-cart',JSON.stringify(cart))
    }
    //validteCartItems()
})()

export function getCart(){
    return JSON.parse(localStorage.getItem('stokist-cart'))
}

function setCart(cart){
    localStorage.setItem('stokist-cart',JSON.stringify(cart))
}


export default {

    getItems(){
        return getCart().products
    },

    clearCart(){
        const cart = getCart()
        cart.products = []
        cart.totalPrice = 0
        cart.totalQty = 0
        setCart(cart)
    },

    getItem(product){
        const cart = getCart()
        let index = cart.products.findIndex(ele=>{ele.id==product.id})
        if(index != -1){
           return cart.products[index]
        }else{
            return null
        }
    },

    addItem(product){
        try {
            this.productHasRequiredProps(product)
        } catch (error) {
            notification.error(error)
            return
        }
        
        const cart = getCart()
        var productExists = false;
        for(let i=0; i<cart.products.length; i++){
            if(cart.products[i].id == product.id){
                cart.products[i].qty = Number(cart.products[i].qty) + Number(product.qty)
                cart.products[i].totalPrice = cart.products[i].qty * cart.products[i].price
                productExists = true
                break
            }
        }
        if(!productExists){
            cart.products.push(product)
        }
        
        setCart(cart)
        this.setTotalPrice()
        this.setTotalQty()
        notification.success("Product added successfully to cart")
        console.log(getCart())
    },

    removeItem(product){
        const cart = getCart()
        for(let i=0; i<cart.products.length; i++){
            if(cart.products[i].id == product.id){
                cart.products.splice(i,1)
                break
            }
        }
        
        setCart(cart)
        this.setTotalPrice()
        this.setTotalQty()
        notification.success("Product removed successfully from cart")
    },

    setTotalPrice(){
        const cart = getCart()
        var totalPrice = 0
        cart.products.forEach(product => {
            //alert(product.id)
            totalPrice = Number(totalPrice) + (Number(product.price) * Number(product.qty))
        });
        //alert(totalPrice)
        cart.totalPrice = totalPrice
        //alert(Object.entries(cart))
        setCart(cart)
    },

    setTotalQty(){
        const cart = getCart()
        var totalQty = 0
        cart.products.forEach(product => {
            totalQty += Number(product.qty)
        });
        cart.totalQty = totalQty
        setCart(cart)
    },

    productHasRequiredProps(product){
        let requiredProps = ['id','qty','price']
        requiredProps.forEach(ele=>{
            if(!Object.getOwnPropertyDescriptor(product,ele)){
                throw new Error("property "+ele+" not found in product")
            }
        }) 
    },

    async validteItemsQty(){
        //try {
            let products = this.getItems()
            let prods = products.map(function(product){
                return {id:product.id, qty:product.qty, name:product.name}
            })
            const res = await api.validateProductsQty({products:prods})
            if(res.status == 400){
                //alert(res.data.message)
                return false
            }
            return true
        //} catch (error) {
            //console.log(error)
            //notification.error("An error occured while validating cart items quantity")
        //}
    },

    async validteCartItems(){
        try {
            let products = this.getItems()
            let prodIds = products.map(function(product){
                return product.id
            })
            const res = await api.validateProducts({products:prodIds})
            if(res.status == 400){
                localStorage.removeItem('stockist-cart')
                notification.info("Your order contained some outdated products, hence other was cleared")
            }
        } catch (error) {
            console.log(error)
            if(error.response != undefined && error.response.status == 400){
                localStorage.removeItem('stockist-cart')
                notification.info("Your order contained some outdated products, hence other was cleared")
            }else{
                notification.error("An error occured while validating cart items")
            }
        }
       
    }

}
