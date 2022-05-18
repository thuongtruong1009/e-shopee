import queryString from 'query-string'
import axios from 'axios'
import { toast } from '../stores/toast'

const useToast = toast()

const AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_DOMAIN}/api/v2`,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    // 'Authorization': localStorage.getItem('token'),
  },
  paramsSerializer: params => queryString.stringify(params),
  responseEncoding: 'utf8',
})
AxiosInstance.interceptors.request.use(
  async(request) => {
    const token = localStorage.getItem('token')
    request.headers.Authorization = token ? `Bearer ${token}` : ''
    return request
  },
  (error) => {
    useToast.updateToast('error', error.response.statusText, true)
    return Promise.reject(error)
  },
)
AxiosInstance.interceptors.response.use(
  (response) => {
    if (response && response.data)
      return response.data

    return response
  },
  (error) => {
    // console.error(error.response);
    useToast.updateToast('error', `Error: ${error.response.data.message}. Try again!`, true)
    return Promise.reject(error)
  },
)

export default AxiosInstance
