import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAdmin = defineStore('admin', () => {
  const payget = ref<any>([])
  const profile = ref<any>([])
  return { payget, profile }
})
