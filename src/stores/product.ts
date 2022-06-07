import { acceptHMRUpdate, defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'

export const useProduct = defineStore('product', () => {
  // create new product in seller page
  const productName = ref<string>('')
  const category = ref<any>([])
  const level = reactive<any>({
    level1: '',
    level2: '',
    level3: '',
  })

  // search public product
  const productRequestID = ref()
  const shopRequestID = ref()

  return { productName, category, level, productRequestID, shopRequestID }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useProduct, import.meta.hot))
