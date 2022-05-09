import AxiosInstance from './axios-instance'

const baseUrl = 'https://127.0.0.1:444/api/v2'

class AuthRequest {
  registerUser(user) {
    const url = `${baseUrl}/auth/sign-up`
    return AxiosInstance.post(url, user)
  }

  loginUser(user) {
    const url = `${baseUrl}/auth/sign-in`
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
