import { acceptHMRUpdate, defineStore } from 'pinia'

export const keyword = defineStore('keyword', () => {
  /**
   * Current named of the keyword.
   */
  const savedKeyword = ref('')
  const previousKeyword = ref(new Set<string>())

  const usedKeyword = computed(() => Array.from(previousKeyword.value))
  const otherKeyword = computed(() => usedKeyword.value.filter(name => name !== savedKeyword.value))

  /**
   * Changes the current name of the keyword and saves the one that was used
   * before.
   *
   * @param name - new name to set
   */
  function setNewKeyword(name: string) {
    if (savedKeyword.value)
      previousKeyword.value.add(savedKeyword.value)

    savedKeyword.value = name
  }

  return {
    setNewKeyword,
    otherKeyword,
    savedKeyword,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(keyword, import.meta.hot))
