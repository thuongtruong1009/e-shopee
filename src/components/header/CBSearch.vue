<script setup>
import { useUserStore } from '~/stores/user'
const { t } = useI18n()

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/buyer/categories/${encodeURIComponent(name.value)}`)
}
</script>

<template>
  <div class="flex rounded-3xl shadow-lg shadow-gray-500/50 h-10">
    <div class="bg-[#fbeee6] hover:bg-[#ddddda] flex justify-center items-center rounded-l-3xl">
      <CBMenuCategories />
    </div>
    <div class="search-container w-md <lg:w-xl flex justify-center items-center overflow-hidden">
      <input v-model="name" type="text" :placeholder="t('header.placeholder search')" :aria-label="t('header.placeholder search')" class="outline-none w-full h-full text-md px-5" @keydown.enter="go">
      <button class="text-white flex items-center bg-black hover:bg-opacity-70 rounded-r-3xl h-full px-4" :disabled="!name" @click="go">
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
