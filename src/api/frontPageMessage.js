import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    create(data){
        return http().post(endPoints.frontPageMessage,data)
    },

    update(id){
        return http().put(`${endPoints.frontPageMessage}/${id}`)
    },

    show(){
        return http().get(`${endPoints.frontPageMessage}`)
    },

}