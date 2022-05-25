<route lang="yaml">
meta:
  layout: seller/LSDashBoard
</route>

<script setup>
import ProductRequest from '~/services/product-request'
import { useProduct } from '~/stores/product'

useHead({
  title: 'seller | add product category',
})
const { t } = useI18n()
const product = useProduct()
// const productName = ref('')

watch(async() => {
  const { data } = await ProductRequest.getCategoriesChildrenById(0)
  product.category = data
})

const getLevel1 = async(id) => {
  const { data } = await ProductRequest.getCategoriesChildrenById(id)
  product.level1 = data
  product.choicedList[0] = product.level1.parent
}

const getLevel2 = async(id) => {
  const { data } = await ProductRequest.getCategoriesChildrenById(id)
  product.level2 = data
  product.choicedList[1] = product.level2.parent
}

const getLevel3 = async(id) => {
  const { data } = await ProductRequest.getCategoriesChildrenById(id)
  product.level3 = data
  product.choicedList[2] = product.level3.parent
}

</script>

<template>
  <div class="seller-prod-add-container max-w-300 w-300 p-7 bg-white dark:bg-blue-gray-900 dark:text-gray-200 shadow-sm shadow-gray-500/50 rounded-2xl divide-y divide-solid divide-1 divide-light-800">
    <div class="pb-7">
      <h4 class="text-xl font-medium my-1 dark:text-white">
        {{ t('category.title') }}
      </h4>
      <p class="text-gray-400 text-sm">
        {{ t('category.desc') }}.
      </p>
    </div>
    <div>
      <div class="pt-8 mb-4 flex items-center">
        <label for="add-product-name">{{ t('category.product-name') }}: </label>
        <div class="w-[85%] ml-5 border-1 border-red-500 border-solid flex items-center py-1 rounded-md divide-x divide-solid divide-3 divide-gray-300">
          <input id="add-product-name" v-model="product.productName" type="text" name="add-product-name" class="dark:bg-blue-gray-800 w-full outline-none px-2" placeholder="Input..." pattern="[A-Za-z0-9]{120}" required>
          <p class="flex justify-around opacity-60 text-xs px-2">
            {{ product.productName.length }}/80
          </p>
        </div>
      </div>
      <div class="bg-[#FAFAFA] dark:bg-blue-gray-800 p-5 rounded-md">
        <div class="grid grid-cols-3 gap-2 justify-start items-center mb-2">
          <div class="flex items-center border-1 border-solid border-gray-400 rounded-2xl py-1 px-2 bg-[#FAFAFA] dark:bg-blue-gray-700">
            <ISearch />
            <input id="" type="text" name="add-product-search" class="dark:bg-blue-gray-700 ml-2 w-[85%]" placeholder="Product type name...">
          </div>
          <p class="text-gray-400 text-sm">
            {{ t('category.tutorial1') }}, <a href="" class="text-blue-500">{{ t('category.tutorial2') }}</a>
          </p>
        </div>
        <CSChooseCategory :level0="product.category.children" :level1="product.level1.children" :level2="product.level2.children" :level3="product.level3.children" @get-level1="getLevel1" @get-level2="getLevel2" @get-level3="getLevel3" />
      </div>
      <div class="flex my-3 font-medium">
        <p>👉 {{ t('category.selected') }}: </p>
        <p class="text-red-500 ml-5">
          {{ product.choicedList[0].name }} <span v-if="product.choicedList[1].name ">></span> {{ product.choicedList[1].name }} <span v-if="product.choicedList[2].name ">></span> {{ product.choicedList[2].name }}
        </p>
      </div>
      <router-link to="/seller/product/new">
        <button class="bg-[#E54A2B] text-white rounded-md px-10 py-1.5 my-5 shadow-md shadow-gray-300 dark:shadow-gray-600">
          {{ t('category.next') }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
label{
    font-family: 'Helvetica Neue', sans-serif;
}
/* https://stackoverflow.com/questions/45152839/horizontally-scroll-hidden-overflow-x-with-buttons-and-js */
</style>
