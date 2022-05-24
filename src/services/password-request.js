import AxiosInstance from './axios-instance'

class PasswordRequest {
  updatePasswordUser(data) {
    const url = '/user/password'
    return AxiosInstance.put(url, data)
  }

  fogotPasswordUser(data) {
    const url = '/user/password/forgot'
    return AxiosInstance.post(url, data)
  }

  resetPasswordUser(data) {
    const url = '/user/password/reset'
    return AxiosInstance.post(url, data)
  }

  updatePasswordAdmin(data) {
    const url = '/admin/password'
    return AxiosInstance.put(url, data)
  }

  forgotPasswordAdmin(data) {
    const url = '/admin/password/forgot'
    return AxiosInstance.post(url, data)
  }

  resetPasswordAdmin(data) {
    const url = '/admin/password/reset'
    return AxiosInstance.post(url, data)
  }
}
export default new PasswordRequest()
