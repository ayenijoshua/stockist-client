import axios from 'axios'
import vm from "../main";

const http_client = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    header: {
        accept: 'application/json',
    },
    withCredentials: false,
});

let api = function() {
    let token = localStorage.getItem("stockist-token");
    if (token) {
        http_client.defaults.headers.common["auth-token"] = `${token}`;
    }
    return http_client;
};

api().interceptors.response.use(
    response => response,
    error => {
        if (error.response.status === 401 || error.response.status === 403) {
            vm.$store.dispatch("authStore/logout");
        }
        return Promise.reject(error);
    }
);

export const http = api;

export const apiVersion = '/v1'
 