import { defineStore } from 'pinia'

export const toast = defineStore('toast', () => {
  const type = ref('')
  const msg = ref('')
  const status = ref()

  const updateToast = (typeUpdate: string, msgUpdate: string, statusUpdate: boolean) => {
    type.value = typeUpdate
    msg.value = msgUpdate
    status.value = statusUpdate
  }
  return { type, msg, status, updateToast }
})
