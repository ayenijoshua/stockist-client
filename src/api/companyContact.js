import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(endPoints.companyContact)
    },

    create(data){
        return http().post(endPoints.companyContact,data)
    },

    update(id,data){
        return http().put(`${endPoints.companyContact}/${id}`,data)
    },

    show(id){
        return http().get(`${endPoints.companyContact}/${id}`)
    },

}