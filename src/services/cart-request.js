import AxiosInstance from './axios-instance'

class CartRequest {
  getCart(data) {
    const url = '/user/cart'
    return AxiosInstance.get(url, data)
  }

  updateCart(data) {
    const url = '/user/cart'
    return AxiosInstance.post(url, data)
  }

  addCart(data) {
    const url = '/user/cart'
    return AxiosInstance.post(url, data)
  }

  deleteCart(product_model_id) {
    const url = `/user/cart/${product_model_id}`
    return AxiosInstance.delete(url)
  }
}
export default new CartRequest()
