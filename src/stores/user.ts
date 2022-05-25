import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUser = defineStore('user', () => {
  const payget = ref<any>([])
  const profile = ref<any>([])
  const credit = ref<any>([])
  const payment = ref<any>([])
  const address = ref<any>([])
  const order = ref<any>([])
  const avatarID = ref<string>()
  return { payget, profile, credit, payment, address, order, avatarID }
})
