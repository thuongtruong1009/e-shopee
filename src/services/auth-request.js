import AxiosInstance from './axios-instance'

class AuthRequest {
  registerUser(user) {
    const url = '/auth/sign-up'
    return AxiosInstance.post(url, user)
  }

  loginUser(user) {
    const url = '/auth/sign-in'
    return AxiosInstance.post(url, user)
  }

  logoutUser() {
    const url = '/auth/sign-out'
    return AxiosInstance.post(url)
  }

  loginAdmin(admin) {
    const url = '/auth/admin/sign-in'
    return AxiosInstance.post(url, admin)
  }

  logoutAdmin() {
    const url = '/auth/admin/sign-out'
    return AxiosInstance.post(url)
  }
}

export default new AuthRequest()
