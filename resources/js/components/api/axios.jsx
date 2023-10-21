import axios from "axios";

export default axios.create({
    //baseURL: "http://localhost:8000",
    //withCredentials: true,

    baseURL: "http://localhost:8000",
    withCredentials: true,
    headers: {
        common: { "Accept": "application/json",},
       // 'X-Requested-With': 'XMLHttpRequest',
    }
})
