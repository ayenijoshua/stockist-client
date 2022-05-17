import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    set(data){
        return http().post(`${endPoints.sms}`,data)
    },

    get(){
        return http().get(`${endPoints.sms}`)
    },

    balace(){
        return http().get(`${endPoints.sms}/balance`)
    }


}