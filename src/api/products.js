import endPoints from "./endpoints"
import {api as http} from './axios-config'

export default {

    all(){
        return http().get(endPoints.products)
    },

    create(data){
        return http().post(endPoints.products,data)
    },

    update(id){
        return http().put(`${endPoints.products}/${id}`)
    },

    show(id){
        return http().get(`${endPoints.products}/${id}`)
    },

    delete(id){
        return http().delete(`${endPoints.products}/${id}`)
    }

}