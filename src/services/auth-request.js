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
}

export default new AuthRequest()
