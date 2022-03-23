import { notification } from "../util/notification";

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
                cart.products[i].qty += Number(product.qty)
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
                alert()
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
            totalPrice = totalPrice + (product.price * product.qty)
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
            totalQty += (product.qty)
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
    }


}
