import AxiosInstance from './axios-instance.js'

class OrderRequest {
  getOrders(params) {
    const url = '/orders/'
    return AxiosInstance.get(url, { params })
  }

  updateOrder(id, status) {
    const url = `/orders/${id}`
    AxiosInstance.put(url, { status })
  }
}

export default new OrderRequest()
