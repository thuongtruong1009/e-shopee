import AxiosInstance from './axios-instance.js'

class ProductRequest {
  getAllProducts(params) {
    const url = '/products'
    return AxiosInstance.get(url, { params })
  }

  getProductById(id) {
    const url = `/products/product/${id}`
    return AxiosInstance.get(url)
  }

  updateProduct(id, data) {
    const url = `/products/${id}`
    return AxiosInstance.put(url, data)
  }

  createProduct(data) {
    const url = '/products'
    return AxiosInstance.post(url, data)
  }
}

export default new ProductRequest()
