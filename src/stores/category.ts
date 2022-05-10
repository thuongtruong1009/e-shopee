import { acceptHMRUpdate, defineStore } from 'pinia'

export const category = defineStore('category', () => {
  /**
   * Current named of the category.
   */
  const savedCategory = ref('')
  const previousCategories = ref(new Set<string>())

  const usedCategories = computed(() => Array.from(previousCategories.value))
  const otherCategories = computed(() => usedCategories.value.filter(name => name !== savedCategory.value))

  /**
   * Changes the current name of the category and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewName(name: string) {
    if (savedCategory.value)
      previousCategories.value.add(savedCategory.value)

    savedCategory.value = name
  }

  return {
    setNewName,
    otherCategories,
    savedCategory,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(category, import.meta.hot))
