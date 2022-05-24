import AxiosInstance from './axios-instance'

class AuthRequest {
  registerUser(user) {
    const url = '/user/auth/sign-up'
    return AxiosInstance.post(url, user)
  }

  loginUser(user) {
    const url = '/user/auth/sign-in'
    return AxiosInstance.post(url, user)
  }

  oauthLoginUser(driver) {
    const url = `/user/oauth/${driver}/redirect`
    return AxiosInstance.get(url)
  }

  logoutUser() {
    const url = '/user/auth/sign-out'
    return AxiosInstance.post(url)
  }

  loginAdmin(admin) {
    const url = '/admin/auth/sign-in'
    return AxiosInstance.post(url, admin)
  }

  logoutAdmin() {
    const url = '/admin/auth/sign-out'
    return AxiosInstance.post(url)
  }
}

export default new AuthRequest()
