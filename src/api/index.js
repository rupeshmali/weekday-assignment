import axios from "axios";
const BASE_URL = 'https://api.weekday.technology/adhoc'
export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})