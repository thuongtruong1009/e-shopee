import AxiosInstance from './axios-instance.js'

/**
 * Request to register user.
 * @param {*} user a user object
 * @returns a response of the request
 */

class AuthRequest {
  registerUser(user) {
    const url = '/auth/register'
    return AxiosInstance.post(url, user)
  }

  loginUser(user) {
    const url = '/auth/login'
    return AxiosInstance.post(url, user)
  }

  loginAdmin(admin) {
    const url = '/auth/admin/sign-in'
    return AxiosInstance.post(url, admin)
  }
}

export default new AuthRequest()
