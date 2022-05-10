import { defineStore } from 'pinia'

export const loading = defineStore('loading', () => {
  const isLoading = ref(false)

  return { isLoading }
})
