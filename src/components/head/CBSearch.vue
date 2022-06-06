<script setup>
import { keyword } from '~/stores/keyword'
const { t } = useI18n()

const useKeyword = keyword()
const key = ref(useKeyword.savedKeyword)

const router = useRouter()

const go = async() => {
  if (key.value) {
    await router.push(`/search/${encodeURIComponent(key.value)}`)
    await location.reload()
    key.value = ''
  }
}

</script>

<template>
  <div class="flex rounded-3xl shadow-lg shadow-gray-500/50 h-10">
    <div class="bg-[#fbeee6] hover:bg-[#ddddda] flex justify-center items-center rounded-l-3xl">
      <CBMenuCategories />
    </div>
    <div class="search-container w-md <lg:w-xl flex justify-center items-center overflow-hidden">
      <input v-model="key" type="text" :placeholder="t('header.placeholder search')" :aria-label="t('header.placeholder search')" class="outline-none w-full h-full text-md px-5" @keydown.enter="go">
      <button class="text-white flex items-center bg-black hover:bg-opacity-70 rounded-r-3xl h-full px-4" :disabled="!key" @click="go">
        <IFind />
      </button>
    </div>
  </div>
</template>

<style scoped>
  @media (max-width: 992px){
    .search-container{
      width: 100%;
    }
  }
</style>
