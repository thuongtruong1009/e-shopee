import AxiosInstance from './axios-instance'

class ResourceRequest {
  createResourcesImages(data) {
    const url = '/resource/images'
    return AxiosInstance.post(url, data)
  }
}
export default new ResourceRequest()
