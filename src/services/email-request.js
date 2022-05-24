import AxiosInstance from './axios-instance'

class EmailRequest {
  createVerifyEmail() {
    const url = '/user/email/verify'
    return AxiosInstance.post(url)
  }

  getVerifyEmailById(id, hash, signature) {
    const url = `/user/email/verify/${id}/${hash}`
    return AxiosInstance.get(url, signature)
  }
}

export default new EmailRequest()
