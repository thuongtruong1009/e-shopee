import AxiosInstance from './axios-instance.js'

class OrderRequest {
  getOrders(data) {
    const url = '/orders/'
    return AxiosInstance.get(url, data)
  }

  createOrders(data) {
    const url = '/orders'
    AxiosInstance.post(url, data)
  }
}

export default new OrderRequest()
