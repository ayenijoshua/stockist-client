import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    // addPhone(){
    //     return http().post(`${endPoints.registeredUsers}/add-phones`)
    // },

    // create(data){
    //     return http().post(`${endPoints.phoneNumbers}`,data)
    // },

    // update(id,data){
    //     return http().put(`${endPoints.phoneNumbers}/${id}`,data)
    // },

    // show(id){
    //     return http().get(`${endPoints.phoneNumbers}/${id}`)
    // },

    // delete(id){
    //     return http().delete(`${endPoints.phoneNumbers}/${id}`)
    // },

    all(){
        return http().get(endPoints.registeredUsers)
    },

    investors(){
        return http().get(`${endPoints.registeredUsers}/investors`)
    },

    downlines(username){
        return http().get(`${endPoints.registeredUsers}/${username}/downlines`)
    },

    totalDownlines(username){
        return http().get(`${endPoints.registeredUsers}/${username}/total-downlines`)
    },

    search(data){
        return http().get(`${endPoints.registeredUsers}/search?date_from=${data.date_from}&date_to=${data.date_to}&username=${data.username}`)
    },

    total(){
        return http().get(`${endPoints.registeredUsers}/total`)
    }


}