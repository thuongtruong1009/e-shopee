import AxiosInstance from './axios-instance'

class ProductRequest {
  searchProducts(data) {
    const url = '/products/search'
    return AxiosInstance.get(url, data)
  }

  getReviewsProductsById(id, data) {
    const url = `/products/${id}/reviews`
    return AxiosInstance.get(url, data)
  }

  getProductsById(id) {
    const url = `/products/${id}`
    return AxiosInstance.get(url)
  }

  updateProductsById(id, data) {
    const url = `/shop/products/${id}`
    return AxiosInstance.put(url, data)
  }

  deleteProductsById(id) {
    const url = `/shop/products/${id}`
    return AxiosInstance.delete(url)
  }

  createProducts(data) {
    const url = '/shop/products'
    return AxiosInstance.post(url, data)
  }

  getProductsFeature(data) {
    const url = '/products/feature'
    return AxiosInstance.get(url, data)
  }

  getPrices(data) {
    const url = '/products/prices'
    return AxiosInstance.get(url, data)
  }

  getCategoriesById(id) {
    const url = `/products/categories/${id}`
    return AxiosInstance.get(url)
  }

  getCategoriesChildrenById() {
    const url = '/products/categories/tree'
    return AxiosInstance.get(url)
  }

  createCategoriesAttributesById(id, data) {
    const url = `/products/categories/${id}/attributes`
    return AxiosInstance.post(url, data)
  }

  getAllCategoriesAttributesSeller(data) {
    const url = '/shop/products/categories/attributes'
    return AxiosInstance.get(url, data)
  }

  // -----------admin---------------
  recoveryProductsByIdAdmin(id) {
    const url = `/admin/products/${id}/recovery`
    return AxiosInstance.post(url)
  }

  createCategoriesAdmin(data) {
    const url = '/admin/products/categories'
    return AxiosInstance.post(url, data)
  }

  updateCategoriesAdmin(data) {
    const url = '/admin/products/categories'
    return AxiosInstance.post(url, data)
  }

  deleteCategoriesAdmin(data) {
    const url = '/admin/products/categories'
    return AxiosInstance.post(url, data)
  }

  bindAttributesToCategoriesAdmin(id, data) {
    const url = `/admin/products/categories/${id}/attributes`
    return AxiosInstance.get(url, data)
  }

  getAllCategoriesAttributesAdmin(data) {
    const url = '/admin/products/categories/attributes'
    return AxiosInstance.get(url, data)
  }

  createCategoriesAttributesAdmin(data) {
    const url = '/admin/products/categories/attributes'
    return AxiosInstance.post(url, data)
  }

  updateCategoriesAttributesAdmin(id, data) {
    const url = `/admin/products/categories/attributes${id}`
    return AxiosInstance.put(url, data)
  }

  deleteCategoriesAttributesAdmin(id, data) {
    const url = `/admin/products/categories/attributes${id}`
    return AxiosInstance.post(url, data)
  }

  searchCategoriesAttributesAdmin(input) {
    const url = `/admin/products/categories/attributes/${input}`
    return AxiosInstance.get(url)
  }
}

export default new ProductRequest()
