import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(endPoints.users)
    },

    create(data){
        return http().post(endPoints.users,data)
    },

    update(id){
        return http().put(`${endPoints.users}/${id}`)
    },

    show(id){
        return http().get(`${endPoints.users}/${id}`)
    },

    delete(id){
        return http().delete(`${endPoints.users}/${id}`)
    },

    total(){
        return http().get(`${endPoints.users}/total`)
    }

}