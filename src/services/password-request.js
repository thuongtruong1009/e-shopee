import AxiosInstance from './axios-instance'

class PasswordRequest {
  updatePasswordUser(data) {
    const url = '/password'
    return AxiosInstance.put(url, data)
  }

  fogotPasswordUser(data) {
    const url = '/password/forgot'
    return AxiosInstance.post(url, data)
  }

  resetPasswordUser(data) {
    const url = '/password/reset'
    return AxiosInstance.post(url, data)
  }

  updatePasswordAdmin(data) {
    const url = '/password/admin'
    return AxiosInstance.put(url, data)
  }

  forgotPasswordAdmin(data) {
    const url = '/password/admin/forgot'
    return AxiosInstance.post(url, data)
  }

  resetPasswordAdmin(data) {
    const url = '/password/admin/reset'
    return AxiosInstance.post(url, data)
  }
}
export default new PasswordRequest()
