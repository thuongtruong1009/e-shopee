import AxiosInstance from './axios-instance'

class EmailRequest {
  createVerifyEmail() {
    const url = '/email/verify'
    return AxiosInstance.post(url)
  }

  getVerifyEmailById(id, hash, signature) {
    const url = `/email/verify/${id}/${hash}`
    return AxiosInstance.get(url, { id, hash, signature })
  }
}

export default new EmailRequest()
