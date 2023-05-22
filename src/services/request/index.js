import axios from 'axios'
import { BASE_URL, TIME_OUT } from './config'

const defaultInterceptor = {
  request: [config => config, error => Promise.reject(error)],
  response: [res => res.data, error => Promise.reject(error)]
}

class Request {
  #instance
  constructor(config, interceptors = defaultInterceptor) {
    this.#instance = axios.create(config)
    this.#instance.interceptors.request.use(...interceptors.request)
    this.#instance.interceptors.response.use(...interceptors.response)
  }
  get(config) {
    return new Promise((resolve, reject) => {
      this.#instance
        .request({ ...config, method: 'get' })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  post(config) {
    return new Promise((resolve, reject) => {
      this.#instance
        .request({ ...config, method: 'post' })
        .then(res => {
          resolve(res)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
}

export const apiRequest = new Request({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default apiRequest
