import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(endPoints.phoneNumbers)
    },

    create(data){
        return http().post(`${endPoints.phoneNumbers}`,data)
    },

    update(id,data){
        return http().put(`${endPoints.phoneNumbers}/${id}`,data)
    },

    show(id){
        return http().get(`${endPoints.phoneNumbers}/${id}`)
    },

    delete(id){
        return http().delete(`${endPoints.phoneNumbers}/${id}`)
    },

}