import endPoints from "./endpoints"
import {api as http} from './axios-config'

export default {

    all(){
        return http().get(endPoints.orders)
    },

    create(data){
        return http().post(endPoints.orders,data)
    },

    update(id){
        return http().put(`${endPoints.orders}/${id}`)
    },

    show(id){
        return http().get(`${endPoints.orders}/${id}`)
    },

    delete(id){
        return http().delete(`${endPoints.orders}/${id}`)
    }

}