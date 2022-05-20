import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrder = defineStore('order', () => {
  const payget = ref<any>([])
  return { payget }
})
