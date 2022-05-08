import { defineStore } from 'pinia'

export const toast = defineStore('toast', () => {
  const type = ref('')
  const msg = ref('')
  const status = ref()
  return { type, msg, status }
})
