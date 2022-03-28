import Vue from 'vue'
import VueRouter from 'vue-router'
import guestRouter from './guest-router'
import authRouter from './auth-router'
import adminRouter from './admin-router'
import store from '../store'
import api from '../api/auth'

Vue.use(VueRouter)

const routes = [
    ...guestRouter,
    ...authRouter,
    ...adminRouter
]

const router = new VueRouter({
    mode:'history',
    routes:routes
})

router.beforeEach((to,from,next)=>{
    if(to.matched.some(route=>route.meta.requiresAuth)){
        if(userIsAuthenticated()){
            if(to.meta.isAdmin){
                checkUserIsAuthorized().then(res=>
                {
                    if(res.data.isAdmin){
                        next()
                    }else{
                        localStorage.removeItem('stockist-token')
                        next({path:'/login'}) 
                    }
                }).catch(err=>{
                    console.log(err)
                    localStorage.removeItem('stockist-token')
                    next({path:'/login'}) 
                }) 
            }else{
                next()
            }
        }else{
            localStorage.removeItem('stockist-token')
            next({path:'/login'})
        }
    }else{
       next() 
    }
})
export default router

function userIsAuthenticated(){
    const user = store.getters['authStore/authUser']
    if(user.email != undefined || localStorage.getItem("stockist-token")){
        return true
    }
    return false
}

function checkUserIsAuthorized()
{
    var user = store.getters['authStore/authUser']
    if(user.isAdmin == undefined){
        return api.user()
    }
    return new Promise((res,rej)=>{
        let resp = {
            data:{isAdmin:user.isAdmin}
        }
        user.isAdmin ? res(resp) : rej(false)
    })
}