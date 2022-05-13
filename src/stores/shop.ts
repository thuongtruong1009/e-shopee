import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useShop = defineStore('shop', () => {
  const payget = reactive<any>([])
  return { payget }
})
