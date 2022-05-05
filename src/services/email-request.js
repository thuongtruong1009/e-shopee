import AxiosInstance from './axios-instance'

class EmailRequest {
  createVerifyEmail() {
    const url = '/email/verify'
    return AxiosInstance.post(url)
  }

  getVerifyEmailById(id, hash, data) {
    const url = `/email/verify/${id}/${hash}`
    return AxiosInstance.get(url, { hash }, data)
  }
}

export default new EmailRequest()
