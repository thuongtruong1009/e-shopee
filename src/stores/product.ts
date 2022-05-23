import { acceptHMRUpdate, defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useProduct = defineStore('product', () => {
  const category = ref<any>([])
  const level1 = ref<any>([])
  const level2 = ref<any>([])
  const level3 = ref<any>([])
  const choicedList = reactive({
    0: '',
    1: '',
    2: '',
  })
  const productRequestID = ref('')
  return { category, level1, level2, level3, choicedList, productRequestID }
})
