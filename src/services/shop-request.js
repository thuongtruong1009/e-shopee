import AxiosInstance from './axios-instance'

class ShopRequest {
  getShopsById(id_or_slug) {
    const url = `/shops/${id_or_slug}`
    return AxiosInstance.get(url)
  }

  getShopsProductsById(id_or_slug) {
    const url = `/shops/${id_or_slug}/products`
    return AxiosInstance.get(url)
  }

  getShops() {
    const url = '/shops'
    return AxiosInstance.get(url)
  }

  createShops(data) {
    const url = '/shops'
    return AxiosInstance.post(url, data)
  }

  updateShops(data) {
    const url = '/shops'
    return AxiosInstance.put(url, data)
  }

  getShopsProducts() {
    const url = '/shops/products'
    return AxiosInstance.get(url)
  }
}
export default new ShopRequest()
