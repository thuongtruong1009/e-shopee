import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUser = defineStore('user', () => {
  const payget = ref<any>([])
  const profile = ref<any>([])
  return { payget, profile }
})
