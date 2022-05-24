import { acceptHMRUpdate, defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useProduct = defineStore('product', () => {
  // create new product in seller page
  const productName = ref<string>('')
  const category = ref<any>([])
  const level1 = ref<any>([])
  const level2 = ref<any>([])
  const level3 = ref<any>([])
  const choicedList = reactive({
    0: '',
    1: '',
    2: '',
  })
  // search public product
  const productRequestID = ref(1)
  const shopRequestID = ref(1)

  return { productName, category, level1, level2, level3, choicedList, productRequestID, shopRequestID }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProduct, import.meta.hot))
