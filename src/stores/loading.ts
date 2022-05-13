import { defineStore } from 'pinia'

export const useLoading = defineStore('loading', () => {
  const isLoading = ref(false)

  return { isLoading }
})
