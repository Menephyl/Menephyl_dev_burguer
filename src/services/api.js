import axios from "axios"


export const api = axios.create({
    baseURL: "http://localhost:3001"  // impor.env.VITE_BAE_URL,
})
''