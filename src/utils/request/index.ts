import axios from 'axios'
import { setToken } from './setToken'
const BASE_URL = import.meta.env.VITE_API_BASE_URL
const TIMEOUT = 8000

let request = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})

// Add a request interceptor
request.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    // console.log('config', config)

    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
request.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // console.log('response', response)

    // set axios header token when its expired
    if (response.data.token) request = setToken(request, response)

    if (response.data) return response.data
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default request
