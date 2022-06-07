import { acceptHMRUpdate, defineStore } from 'pinia'

export const shop = defineStore('shop', () => {
  /**
   * Current named of the keyword.
   */
  const savedShop = ref('')
  const previousShop = ref(new Set<string>())

  const usedShop = computed(() => Array.from(previousShop.value))
  const otherShop = computed(() => usedShop.value.filter(name => name !== savedShop.value))

  /**
   * Changes the current name of the keyword and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewShop(name: string) {
    if (savedShop.value)
      previousShop.value.add(savedShop.value)

    savedShop.value = name
  }

  const publicProducts = ref<any>([])

  return {
    setNewShop,
    otherShop,
    savedShop,
    publicProducts,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(shop, import.meta.hot))
