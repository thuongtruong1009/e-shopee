import Axios from 'axios'
import queryString from 'query-string'
import NProgress from 'nprogress'

// const baseUrl = 

const AxiosInstance = Axios.create({
  baseUrl: `${import.meta.env.VITE_BASE_DOMAIN}/api/v2`,
  headers: {
    'content-type': 'application/json',
    // 'Authorization': `Bearer ${this.getToken()}`,
  },
  paramsSerializer: params => queryString.stringify(params),
  responseEncoding: 'utf8',
})

AxiosInstance.interceptors.request.use(
  async(request) => {
    NProgress.start()
    if (localStorage.getItem('accessToken'))
      request.headers.token = `Bearer ${localStorage.getItem('accessToken')}`

    return request
  },
  (error) => {
    return Promise.reject(error)
  },
)
AxiosInstance.interceptors.response.use(
  (response) => {
    NProgress.done()
    if (response && response.data)
      return response.data

    return response
  },
  (error) => {
    // console.error(error.response);
    return Promise.reject(error)
  },
)

export default AxiosInstance
