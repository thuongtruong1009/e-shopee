<script setup>
const { t } = useI18n()
const loadMore = () => {
  const loadButton = document.getElementById('load-more')
  document.getElementById('top-trending-loader').scrollLeft += 60 * 6 * 16 // 6 cell in pixels
}
const trendList = reactive([{
  img: '/img/product/shoes/1.webp',
  name: 'Áo phông',
  quantity: 15,
},
{
  img: '/img/product/shoes/2.webp',
  name: 'Áo phông',
  quantity: 15,
},
{
  img: '/img/product/shoes/3.webp',
  name: 'Áo phông',
  quantity: 15,
},
{
  img: '/img/product/shoes/4.webp',
  name: 'Áo phông',
  quantity: 15,
},
{
  img: '/img/product/shoes/5.webp',
  name: 'Áo phông',
  quantity: 15,
},
{
  img: '/img/product/shoes/6.webp',
  name: 'Áo phông',
  quantity: 15,
},
{
  img: '/img/product/shoes/7.webp',
  name: 'Áo phông',
  quantity: 15,
},
{
  img: '/img/product/shoes/8.webp',
  name: 'Áo phông',
  quantity: 38.24,
},
{
  img: '/img/product/shoes/9.webp',
  name: 'Áo phông',
  quantity: 15,
},
{
  img: '/img/product/shoes/12.webp',
  name: 'Áo phông',
  quantity: 15,
}])
</script>

<template>
  <div class="top-trending-container bg-white p-1 border-1 border-radius border-light-700 shadow-md shadow-gray-300/50 m-8 rounded-lg">
    <div class="border-b-1 border-b-solid border-b-light-700 text-left p-5 flex justify-between bg-[#F5F5F5] rounded-lg">
      <h1 class="uppercase text-lg text-gray-500 font-medium">
        {{ t('ctrending.search') }}
      </h1>
      <p class="flex items-center gap-1 text-red-400 cursor-pointer" @click="loadMore">
        <ILoading />{{ t('ctrending.see-more') }}
      </p>
    </div>
    <div id="top-trending-loader" class="divide-x divide-1 divide-solid divide-light-700 flex overflow-x-scroll">
      <div v-for="(trend, i) in trendList" :key="i" class="min-w-60 h-25 flex justify-between items-center cursor-pointer">
        <div class="flex flex-col justify-center items-end p-2 gap-1">
          <h6 class="text-sm font-medium">
            {{ trend.name }}
          </h6>
          <p class="text-xs text-bg-gray-500">
            {{ trend.quantity }}k+ {{ t('ctrending.products') }}
          </p>
        </div>
        <img :src="trend.img" alt="trend_products_img" class="w-25 h-25">
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar-thumb {
  background: transparent;
}
</style>
