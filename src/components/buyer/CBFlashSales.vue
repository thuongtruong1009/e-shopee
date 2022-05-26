<script setup>
import progressRatio from '~/utils/progress'
import { next, prev } from '~/utils/scrollX'

const { t } = useI18n()

const onPrev = () => prev('flash_sales_list')
const onNext = () => next('flash_sales_list')

const topList = reactive([{
  img: '/img/top-products/1.jfif',
  name: 'Quần lót nam co giãn',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/2.jfif',
  name: 'Ốp lưng iphone',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/3.jfif',
  name: 'Ốp lưng',
  price: 1000,
  solded: 5,
  quantity: 20,
},
{
  img: '/img/top-products/4.jfif',
  name: 'Áo thun Polo nam ngắn tay',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/5.jfif',
  name: 'Bút kẻ mắt chống nước',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/6.jfif',
  name: 'Bông tẩy trang 3 lớp',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/7.jfif',
  name: 'Kem nền trang điểm',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/8.jfif',
  name: 'Quần ống rộng nữ',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/9.jfif',
  name: 'Mắt kính gọng tròn',
  price: 1000,
  solded: 5,
  quantity: 38.24,
},
{
  img: '/img/top-products/10.jfif',
  name: 'Nước tẩy trang L\'Orel',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/11.jfif',
  name: 'Áo thun form rộng',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/12.jfif',
  name: 'Mascara',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/13.jfif',
  name: 'Quần ống loe',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/14.jfif',
  name: 'Huyết thanh bình thường',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/15.jfif',
  name: 'Khẩu trang unicharm',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/16.jfif',
  name: 'Áo sơmi nam ngắn tay',
  price: 1000,
  solded: 5,
  quantity: 15,
},
{
  img: '/img/top-products/17.jfif',
  name: 'Dây buộc tóc cho nữ',
  price: 1000,
  solded: 5,
  quantity: 16,
},
{
  img: '/img/top-products/18.jfif',
  name: 'Quần âu nam',
  price: 1000,
  solded: 5,
  quantity: 17,
},
{
  img: '/img/top-products/19.jfif',
  name: 'Quần lót nữ cotton',
  price: 1000,
  solded: 5,
  quantity: 18,
},
{
  img: '/img/top-products/20.jfif',
  name: 'Tai nghe nhét tai',
  price: 1000,
  solded: 5,
  quantity: 6,
}])

const saleRatio = computed(() => progressRatio)

</script>

<template>
  <div class="top_products_container relative m-8 p-1 rounded-lg border-1 border-[#e9e9e9] shadow-md shadow-gray-300/50">
    <div class="text-red-500 p-5 border-b-1 border-b-[#e9e9e9] flex justify-between bg-[#F5F5F5] dark:(bg-blue-gray-800 border-b-[#888]) rounded-lg">
      <h1 class="uppercase font-semibold text-xl flex items-center gaáp">
        <IBFlash />{{ t('cflashsale.label') }}
      </h1>
      <p>
        {{ t('cflashsale.see-all') }} >
      </p>
    </div>
    <div id="flash_sales_list" class="flex overflow-x-scroll gap-3 p-2">
      <div v-for="(top, i) in topList" :key="i" class="max-w-50 min-w-50 w-50">
        <div class="relative">
          <img src="/img/today/discount.svg" alt="discount" class="absolute -top-5 -right-11 w-30">
          <div class="absolute top-1 -right-4 w-20 text-sm">
            <p class="text-red-500">
              30%
            </p>
            <p class="text-white uppercase" style="font-size:0.6em;">
              {{ t('cflashsale.decrease') }}
            </p>
          </div>

          <img :src="top.img" :alt="`${top.img}_img`">
        </div>
        <div class="flex justify-center items-center pt-2 text-red-500">
          <span class="text-xs">$</span>
          <h6 class="text-xl font-semibold">
            {{ top.price }}
          </h6>
        </div>

        <div>
          <div class="w-full bg-[#FFBDA6] rounded-full dark:(bg-gray-500 shadow-gray-600) relative shadow-md shadow-gray-300">
            <div class="bg-[#F6442E] shadow-sm dark:(shadow-gray-600) text-xs font-medium text-white text-center pb-0.5 leading-none rounded-l-full" :style="`width: ${saleRatio(top.solded, top.quantity)}%`">
              &nbsp;
            </div>
            <p class="absolute top-0 left-1/3 w-auto h-full text-xs text-white capitalize">
              {{ t('cflashsale.solded') }} {{ top.solded }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="prev absolute flex justify-center items-center rounded-full bg-white dark:(bg-blue-gray-600 text-white shadow-gray-500) shadow-md shadow-gray-300 duration-300 top-1/2 -left-3 cursor-pointer w-7 h-7 p-1 hover:(w-10 h-10 text-3xl -left-4) text-gray-500" @click="onPrev">
      &#10094;
    </div>
    <div class="next absolute flex justify-center items-center rounded-full bg-white dark:(bg-blue-gray-600 text-white shadow-gray-500) shadow-md shadow-gray-300 duration-300 top-1/2 -right-3 cursor-pointer w-7 h-7 p-1 hover:(w-10 h-10 text-3xl -right-4) text-gray-500" @click="onNext">
      &#10095;
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar-thumb {
  background: transparent;
  scroll-behavior: smooth;
}
</style>
