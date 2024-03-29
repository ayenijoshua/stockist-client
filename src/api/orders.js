import endPoints from "./endpoints"
import {http} from './axios-config'

export default {

    all(){
        return http().get(endPoints.orders)
    },

    create(data){
        return http().post(endPoints.orders,data)
    },

    approve(id){
        return http().patch(`${endPoints.orders}/${id}/approve`)
    },

    disapprove(id){
        return http().patch(`${endPoints.orders}/${id}/disapprove`)
    },

    update(id){
        return http().put(`${endPoints.orders}/${id}`)
    },

    show(id){
        return http().get(`${endPoints.orders}/${id}`)
    },

    delete(id){
        return http().delete(`${endPoints.orders}/${id}`)
    },

    total(){
        return http().get(`${endPoints.orders}/total`)
    },

    ordersByStatus(status){
        return http().get(`${endPoints.orders}/status/${status}`)
    },

    totalSales(){
        return http().get(`${endPoints.orders}/totalSales`)
    },

    search(data){
        return http().get(`${endPoints.orders}/search?from_date=${data.from_date}&to_date=${data.to_date}&username=${data.username}`)
    },

    graph(){
        return http().get(`${endPoints.orders}/graph`)
    },

    monthlyProfit(){
        return http().get(`${endPoints.orders}/monthly-profit`)
    },


}