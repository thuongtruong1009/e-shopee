import AxiosInstance from './axios-instance'

class AccountRequest {
  getProfile() {
    const url = '/user/account/profile'
    return AxiosInstance.get(url)
  }

  updateProfile(data) {
    const url = '/user/account/profile'
    return AxiosInstance.put(url, data)
  }

  getAddress() {
    const url = '/user/account/addresses'
    return AxiosInstance.get(url)
  }

  createAddress(data) {
    const url = '/user/account/addresses'
    return AxiosInstance.post(url, data)
  }

  updateAddressById(id, data) {
    const url = `/user/account/addresses/${id}`
    return AxiosInstance.put(url, data)
  }

  deleteAddressById(id) {
    const url = `/user/account/addresses/${id}`
    return AxiosInstance.delete(url)
  }

  getBankAccount() {
    const url = '/user/account/bank-accounts'
    return AxiosInstance.get(url)
  }

  createBankAccount(data) {
    const url = '/user/account/bank-accounts'
    return AxiosInstance.post(url, data)
  }

  updateBankAccountById(id, data) {
    const url = `/user/account/bank-accounts/${id}`
    return AxiosInstance.put(url, data)
  }

  deleteBankAccountById(id) {
    const url = `/user/account/bank-accounts/${id}`
    return AxiosInstance.delete(url)
  }

  getCreditCard() {
    const url = 'user/account/credit-cards'
    return AxiosInstance.get(url)
  }

  createCreditCard(data) {
    const url = '/user/account/credit-cards'
    return AxiosInstance.post(url, data)
  }

  updateCreditCardById(id, data) {
    const url = `/user/account/credit-cards/${id}`
    return AxiosInstance.put(url, data)
  }

  deleteCreditCardById(id) {
    const url = `/user/account/credit-cards/${id}`
    return AxiosInstance.delete(url)
  }
}
export default new AccountRequest()
