import axios from 'axios'

const service = axios.create({
    baseURL: 'http://localhost:5001/api/v1',
    timeout: 5000 // request timeout
})

service.interceptors.response.use(
    response => {
        const res = response.data;
        return res
    },
    error => {
        console.log(error);
        return Promise.reject(error)
    }
)

export default service