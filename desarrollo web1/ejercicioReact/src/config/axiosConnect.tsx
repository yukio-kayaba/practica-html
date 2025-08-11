import axios from "axios";

//const URL_SERVER = import.meta.env.SERVIDOR;
export const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true,
    headers:{
        "Content-Type":"application/json"
    }
})