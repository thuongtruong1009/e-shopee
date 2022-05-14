import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSeller = defineStore('seller', () => {
  const payget = ref<any>([])
  const statics = ref<any>([])
  return { payget, statics }
})
