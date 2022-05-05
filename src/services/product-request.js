import AxiosInstance from './axios-instance.js'

class ProductRequest {
  getProductsById(id) {
    const url = `/products/product/${id}`
    return AxiosInstance.get(url)
  }

  updateProducts(id, data) {
    const url = `/products/${id}`
    return AxiosInstance.put(url, data)
  }

  deleteProductsById(id) {
    const url = `/products/${id}`
    return AxiosInstance.delete(url)
  }

  recoveryProductsById(id) {
    const url = `/products/${id}`
    return AxiosInstance.post(url)
  }

  createProducts(data) {
    const url = '/products'
    return AxiosInstance.post(url, data)
  }

  getCategoriesById(id) {
    const url = `/products/categories/${id}`
    return AxiosInstance.get(url)
  }

  getCategoriesChildrenById(id) {
    const url = `/products/categories/${id}/children`
    return AxiosInstance.get(url)
  }

  createCategoriesAttributesById(id, data) {
    const url = `/products/categories/${id}/attributes`
    return AxiosInstance.post(url, data)
  }

  createCategories(data) {
    const url = '/products/categories'
    return AxiosInstance.post(url, data)
  }

  updateCategories(data) {
    const url = '/products/categories'
    return AxiosInstance.put(url, data)
  }

  deleteCategories(data) {
    const url = '/products/categories'
    return AxiosInstance.delete(url, data)
  }

  getAllCategoriesAttributes(data) {
    const url = '/products/categories/attributes'
    return AxiosInstance.get(url, data)
  }

  createCategoriesAttributes(data) {
    const url = '/products/categories/attributes'
    return AxiosInstance.post(url, data)
  }

  updateCategoriesAttributes(data) {
    const url = '/products/categories/attributes'
    return AxiosInstance.put(url, data)
  }

  deleteCategoriesAttributes(data) {
    const url = '/products/categories/attributes'
    return AxiosInstance.delete(url, data)
  }

  searchCategoriesAttributes(input) {
    const url = `/products/categories/attributes/${input}`
    return AxiosInstance.get(url)
  }
}

export default new ProductRequest()
