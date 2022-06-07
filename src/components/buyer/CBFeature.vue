<script setup>
import { useLoading } from '~/stores/loading'
import ProductRequest from '~/services/product-request'

const loading = useLoading()
const { t } = useI18n()

const payload = reactive({
  limit: 10,
  page: 1,
})
const productList = ref([])
watch(async() => {
  loading.isLoading = true
  const { data: featureData } = await ProductRequest.getProductsFeature({ params: { ...payload } })
  productList.value = featureData.data
  loading.isLoading = false
})

</script>

<template>
  <div class="hint-today-container max-w-349 my-10">
    <div class="flex justify-start rounded-lg border-1 border-[#e9e9e9] bg-light-100 dark:(bg-blue-gray-800 border-transparent)">
      <h2 class="text-red-500 border-b-4 border-b-solid border-b-red-500 text-lg rounded-l-lg text-left inline-block py-2 px-10 uppercase font-medium">
        {{ t('ctoday.hint') }}
      </h2>
    </div>
    <div class="flex flex-wrap gap-3 py-3">
      <div v-if="loading.isLoading" class="grid-products-list flex justify-center flex-wrap gap-5 py-10">
        <RProductCardGrid v-for="index in 12" :key="index" />
      </div>
      <div v-else v-cloak class="grid-products-list flex justify-center flex-wrap gap-5 py-10">
        <div v-for="(prod, index) in productList" :key="index" class="card duration-200 ease-linear relative rounded-lg w-60 shadow-md dark:bg-gray-700 hover:shadow-gray-400/50 pb-0">
          <CProductCardGrid :card="prod" mode="feature" />
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <p class="bg-white dark:(bg-blue-gray-800 hover:bg-blue-gray-700 text-gray-300 border-transparent) border-1 border-solid border-gray-200 py-2 px-10 rounded-md cursor-pointer hover:(bg-[#F5F5F5] border-gray-300)" :class="{'hidden':payload.limit === 25}" @click="payload.limit += 5">
        {{ t('ctoday.see-more') }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.hint-today-container > div:nth-child(2) > div{
    font-size: 14px;
    line-height: 16.8px;
    padding: 10px;
}
</style>
