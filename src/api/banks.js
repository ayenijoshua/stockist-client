import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(endPoints.banks)
    },

    create(data){
        return http().post(endPoints.banks,data)
    },

    update(id,data){
        return http().put(`${endPoints.banks}/${id}`,data)
    },

    show(id){
        return http().get(`${endPoints.banks}/${id}`)
    },

    delete(id){
        return http().delete(`${endPoints.banks}/${id}`)
    },

}