import axios from "axios"


export const api = axios.create({
    baseURL: "http://localhost:3001"  // impor.env.VITE_BASE_URL,
})


api.interceptors.request.use((config) => {
    const userData = localStorage.getItem('devburguer:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`

    return config;
});