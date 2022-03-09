import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(endPoints.products)
    },

    create(data){
        return http().post(endPoints.products,data)
    },

    update(id,data){
        return http().put(`${endPoints.products}/${id}`,data)
    },

    show(id){
        return http().get(`${endPoints.products}/${id}`)
    },

    delete(id){
        return http().delete(`${endPoints.products}/${id}`)
    }

}