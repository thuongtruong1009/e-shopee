import AxiosInstance from './axios-instance.js'

class UserRequest {
  getUsers(params) {
    const url = '/users/'
    return AxiosInstance.get(url, { params })
  }
}
export default new UserRequest()
