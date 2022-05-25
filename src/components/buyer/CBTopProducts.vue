<script setup>
import { next, prev } from '~/utils/scrollX'

const { t } = useI18n()

const onPrev = () => prev('top_products_list')
const onNext = () => next('top_products_list')

const topList = reactive([{
  img: '/img/top-products/1.jfif',
  name: 'Quần lót nam co giãn',
  quantity: 15,
},
{
  img: '/img/top-products/2.jfif',
  name: 'Ốp lưng iphone',
  quantity: 15,
},
{
  img: '/img/top-products/3.jfif',
  name: 'Ốp lưng',
  quantity: 20,
},
{
  img: '/img/top-products/4.jfif',
  name: 'Áo thun Polo nam ngắn tay',
  quantity: 15,
},
{
  img: '/img/top-products/5.jfif',
  name: 'Bút kẻ mắt chống nước',
  quantity: 15,
},
{
  img: '/img/top-products/6.jfif',
  name: 'Bông tẩy trang 3 lớp',
  quantity: 15,
},
{
  img: '/img/top-products/7.jfif',
  name: 'Kem nền trang điểm',
  quantity: 15,
},
{
  img: '/img/top-products/8.jfif',
  name: 'Quần ống rộng nữ',
  quantity: 15,
},
{
  img: '/img/top-products/9.jfif',
  name: 'Mắt kính gọng tròn',
  quantity: 38.24,
},
{
  img: '/img/top-products/10.jfif',
  name: 'Nước tẩy trang L\'Orel',
  quantity: 15,
},
{
  img: '/img/top-products/11.jfif',
  name: 'Áo thun form rộng',
  quantity: 15,
},
{
  img: '/img/top-products/12.jfif',
  name: 'Mascara',
  quantity: 15,
},
{
  img: '/img/top-products/13.jfif',
  name: 'Quần ống loe',
  quantity: 15,
},
{
  img: '/img/top-products/14.jfif',
  name: 'Huyết thanh bình thường',
  quantity: 15,
},
{
  img: '/img/top-products/15.jfif',
  name: 'Khẩu trang unicharm',
  quantity: 15,
},
{
  img: '/img/top-products/16.jfif',
  name: 'Áo sơmi nam ngắn tay',
  quantity: 15,
},
{
  img: '/img/top-products/17.jfif',
  name: 'Dây buộc tóc cho nữ',
  quantity: 16,
},
{
  img: '/img/top-products/18.jfif',
  name: 'Quần âu nam',
  quantity: 17,
},
{
  img: '/img/top-products/19.jfif',
  name: 'Quần lót nữ cotton',
  quantity: 18,
},
{
  img: '/img/top-products/20.jfif',
  name: 'Tai nghe nhét tai',
  quantity: 19,
}])

</script>

<template>
  <div class="top_products_container relative m-8 p-1 rounded-lg border-1 border-[#e9e9e9] shadow-md shadow-gray-300/50">
    <div class="text-red-500 p-5 border-b-1 border-b-[#e9e9e9] flex justify-between bg-[#F5F5F5] rounded-lg">
      <h1 class="uppercase font-medium text-lg">
        {{ t('cpopular.label') }}
      </h1>
      <p>
        {{ t('cpopular.see-all') }} >
      </p>
    </div>
    <div id="top_products_list" class="flex overflow-x-scroll gap-3 p-2">
      <div v-for="(top, i) in topList" :key="i" class="max-w-50 min-w-50 w-50 rounded-md bg-[#31C48D] text-white">
        <div class="relative">
          <img src="/img/top-products/top_label.png" alt="top_label_img" class="absolute top-0 left-0 max-w-8 max-h-10">
          <img :src="top.img" :alt="`${top.img}_img`">
          <p class="p-1 rounded-t-xl bg-[#E74694] absolute bottom-0 left-0 w-full text-center text-xs">
            {{ t('cpopular.solded') }} {{ top.quantity }}k+ / {{ t('cpopular.month') }}
          </p>
        </div>
        <div class="text-sm text-center p-1.5 rounded-b-xl font-medium">
          <h6>{{ top.name }}</h6>
        </div>
      </div>
    </div>
    <div class="prev absolute flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 top-1/2 -left-3 cursor-pointer w-7 h-7 p-1 hover:(w-10 h-10 text-3xl -left-4) text-gray-500" @click="onPrev">
      &#10094;
    </div>
    <div class="next absolute flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 top-1/2 -right-3 cursor-pointer w-7 h-7 p-1 hover:(w-10 h-10 text-3xl -right-4) text-gray-500" @click="onNext">
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
