import { acceptHMRUpdate, defineStore } from 'pinia'
import { ref } from 'vue'

export const useOrder = defineStore('order', () => {
  const payget = ref<any>([])

  const savedOrder = ref('')
  const previousOrder = ref(new Set<string>())

  const usedOrder = computed(() => Array.from(previousOrder.value))
  function setNewOrder(order_id: string) {
    if (savedOrder.value)
      previousOrder.value.add(savedOrder.value)

    savedOrder.value = order_id
  }

  const orderVariation = ref([])
  const orderAddress = ref('')
  return { payget, savedOrder, previousOrder, usedOrder, setNewOrder, orderVariation, orderAddress }
})
if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useOrder, import.meta.hot))
