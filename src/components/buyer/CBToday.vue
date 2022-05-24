<script setup>
import { useRouter } from 'vue-router'
import { useProduct } from '~/stores/product'

const router = useRouter()
const product = useProduct()
const { t } = useI18n()

const hintList = reactive([{
  img: '/img/today/1.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/2.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: true,
},
{
  img: '/img/today/3.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/4.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/5.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/6.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/7.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: true,
},
{
  img: '/img/today/8.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/9.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/10.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: true,
},
{
  img: '/img/today/11.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/12.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/13.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/14.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/15.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/16.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/17.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/18.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/19.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/20.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/21.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/22.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/23.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/24.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/25.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/26.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/27.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/28.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/29.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/30.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/31.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/32.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/33.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/34.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
},
{
  img: '/img/today/35.jfif',
  desc: 'Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...',
  price: 1.065,
  soldQuatity: '2K',
  extra: false,
}])

const hintListInit = ref(14)
const stepVisible = ref(7)
const hintListComputed = computed(() => hintList.slice(0, hintListInit.value))

// ------------------------------------
const onDetails = () => {
  // product.productRequestID = product_id
  router.push(`/product/${encodeURIComponent(product.productRequestID)}`)
}
</script>

<template>
  <div class="hint-today-container max-w-349 my-10">
    <div class="flex justify-start rounded-lg border-1 border-[#e9e9e9] bg-light-100 dark:(bg-blue-gray-800 border-transparent)">
      <h2 class="text-red-500 border-b-4 border-b-solid border-b-red-500 text-lg rounded-l-lg text-left inline-block py-2 px-10 uppercase font-medium">
        {{ t('ctoday.hint') }}
      </h2>
    </div>
    <div class="flex flex-wrap gap-3 py-3">
      <div v-for="(hint, i) in hintListComputed" :key="i" class="w-47 flex flex-col rounded-md bg-light-100 text-gray-900 dark:(bg-blue-gray-800 text-gray-300) shadow-sm shadow-gray-400/50 border-1 border-solid border-transparent hover:border-red-500 cursor-pointer relative" @click="onDetails()">
        <img v-if="hint.extra === true" src="/img/today/extra.png" alt="extra" class="absolute top-0 left-0 w-full">
        <!-- <div class="discount-label absolute top-0 right-0 w-20">
          <p>ok</p>
        </div> -->
        <img src="/img/today/discount.svg" alt="discount" class="absolute -top-2 -right-6 w-21">
        <div class="absolute top-1 -right-4 w-20 text-xs">
          <p class="text-red-500">
            30%
          </p>
          <p class="text-white" style="font-size:0.55em;">
            {{ t('ctoday.decrease') }}
          </p>
        </div>
        <img :src="hint.img" alt="" class="w-full h-47 rounded-t-md">
        <p class="text-left text-xs p-1">
          {{ hint.desc }}
        </p>
        <div class="flex justify-between items-center px-1 py-2">
          <p class="text-red-500">
            <span class="text-xs font-light">$</span>{{ hint.price }}
          </p>
          <p class="text-xs">
            {{ t('ctoday.sold') }} {{ hint.soldQuatity }}
          </p>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <p v-if="hintListInit < hintList.length" class="bg-white dark:(bg-blue-gray-800 hover:bg-blue-gray-700 text-gray-300 border-transparent) border-1 border-solid border-gray-200 py-2 px-10 rounded-md cursor-pointer hover:(bg-[#F5F5F5] border-gray-300)" @click="hintListInit += stepVisible">
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
