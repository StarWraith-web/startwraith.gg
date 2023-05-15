import axios from "axios"

const axiosClient = axios.create({
    baseURL: `${process.env.BACKEND_PRO_URL}`
})

export default axiosClient