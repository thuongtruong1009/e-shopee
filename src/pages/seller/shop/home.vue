<route lang="yaml">
meta:
  layout: seller/shop/LSShopHome
</route>

<script setup>
import { next, prev } from '~/utils/scrollX'

const onPrev = () => prev('shop_demo_product')
const onNext = () => next('shop_demo_product')

const demoShopProducts = reactive([{
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
}])
</script>

<template>
  <div class="shop_view_container grid justify-center w-full px-2 gap-5">
    <div class="max-w-250 h-min bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-300 p-3 grid grid-cols-2 justify-between mt-5">
      <div class="p-3">
        <div class="flex justify-evenly gap-3 bg-[#644B4A] rounded-md p-3 text-gray-200 w-4/5">
          <img src="https://cf.shopee.vn/file/56dd7c9788031f9b16fd990b11ccc62c_tn" alt="shop_avatar" class="rounded-full border-4 border-[#A29392] w-25 h-25">
          <div class="grid place-content-between">
            <div>
              <h2 class="text-xl text-white font-medium">
                Shopcuayen.depxinh
              </h2>
              <p class="text-xs opacity-80 font-light">
                Online 39 minutes ago
              </p>
            </div>
            <div class="flex justify-between gap-2 text-sm uppercase h-min">
              <button class="border-1 border-white rounded-md py-0.5 px-5 flex items-center gap-1">
                <ISPlus />Follow
              </button>
              <button class="border-1 border-white rounded-md py-0.5 px-5 flex items-center gap-1">
                <ISChat />Chat
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="shop_view_summary flex flex-wrap text-sm h-min m-auto font-medium">
        <div>
          <ISShop />
          <p>Products: <span>57</span></p>
        </div>
        <div>
          <ISNote />
          <p>Cancel ratio: <span>11%</span></p>
        </div>
        <div>
          <ISFollowing />
          <p>Following: <span>108</span></p>
        </div>
        <div>
          <ISFollower />
          <p>Follower: <span>474</span></p>
        </div>
        <div>
          <ISParticipant />
          <p>Participant: <span>31 months ago</span></p>
        </div>
        <div>
          <ISEvaluate />
          <p>Rating: <span>5.0 (8 votes)</span></p>
        </div>
      </div>
    </div>
    <div class="max-w-250 h-min bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-300 py-3 px-5">
      <div class="text-lg uppercase font-medium text-gray-500">
        <h2>SHOP INFORMATION</h2>
      </div>
      <div class="grid grid-cols-2 text-sm gap-5">
        <div class="flex items-center">
          <div class="prev flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 cursor-pointer w-7 h-7 p-1 text-gray-500" @click="onPrev">
            &#10094;
          </div>
          <div id="shop_demo_product" class="flex overflow-x-scroll gap-3 p-2 w-full">
            <div v-for="(demo, i) in demoShopProducts" :key="i" class="min-w-full max-h-72">
              <img :src="demo.img" alt="demo_img" class="min-w-full">
            </div>
          </div>
          <div class="next flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 cursor-pointer w-7 h-7 p-1 text-gray-500" @click="onNext">
            &#10095;
          </div>
        </div>
        <div class="grid justify-center place-content-start gap-2">
          <p>
            Lớn lên mới biết cuộc sống không màu hồng, bên cạnh màu hồng còn có nhiều màu khác nữa. Nhưng vì mình mê màu hồng quá nên mình đặt tên shop là A Pink, và mẫu nào mình bán cũng có màu hồng :) Cùng mình săn lùng những item màu hồng xinh xỉu giá hạt dẻ mà chất lượng sẽ không làm bạn thất vọng nha.
          </p>
          <p>Nếu hôm nào bạn cảm thấy cuộc đời không màu hồng...thì cũng không sao cả, A Pink vẫn luôn có sẵn cả những màu khác nha :)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shop_view_summary > div{
  width: 50%;
  display: flex;
  align-items: start;
  gap: 0.5rem;
  padding: 0.5rem;
}
.shop_view_summary span{
  color: #ea580c;
}
::-webkit-scrollbar-thumb {
  background: transparent;
}
</style>
