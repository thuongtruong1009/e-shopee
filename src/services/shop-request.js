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
    const url = '/shop'
    return AxiosInstance.get(url)
  }

  createShops(data) {
    const url = '/shop'
    return AxiosInstance.post(url, data)
  }

  updateShops(data) {
    const url = '/shop'
    return AxiosInstance.put(url, data)
  }

  getShopsProducts() {
    const url = '/shop/products'
    return AxiosInstance.get(url)
  }
}
export default new ShopRequest()
