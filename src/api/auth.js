import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    login(data){
        return http().post(`${endPoints.auth}/login`,data)
    },

    register(id,data){
        return http().put(`${endPoints.auth}/register`,data)
    },

    logOut(){
        return http().post(`${endPoints.auth}/logout`)
    },

    user(){
        return http().get(`${endPoints.auth}/user`)
    }
}