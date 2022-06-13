import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    login(data){
        return http().post(`${endPoints.auth}/login`,data)
    },

    register(data){
        return http().post(`${endPoints.auth}/register`,data)
    },

    logOut(){
        return http().post(`${endPoints.auth}/logout`)
    },

    user(){
        return http().get(`${endPoints.auth}/user`)
    },

    resetPasswordLink(data){
        return http().post(`${endPoints.auth}/reset-password-link`,data)
    },
    
    resetPassword(data){
        return http().post(`${endPoints.auth}/reset-password/${data.token}`,data)
    }


}