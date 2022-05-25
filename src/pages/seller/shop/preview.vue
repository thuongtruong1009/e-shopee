<route lang="yaml">
meta:
  layout: seller/LSDashBoard
</route>

<script setup>
import { useRouter } from 'vue-router'
import { useLoading } from '~/stores/loading'
import { useSeller } from '~/stores/seller'
import { handleError } from '~/helpers/error'
import ShopRequest from '~/services/shop-request'
import { next, prev } from '~/utils/scrollX'
import { handleDate } from '~/utils/date'

const router = useRouter()
const seller = useSeller()
const loading = useLoading()

useHead({
  title: 'seller | shop',
})

const { t } = useI18n()

const onPrev = () => prev('shop_demo_product')
const onNext = () => next('shop_demo_product')

watchOnce(async() => {
  loading.isLoading = true
  const { data: shopData } = await ShopRequest.getShops()
  seller.payget = shopData
  seller.statics = shopData.statistic
  loading.isLoading = false
})
const activeTime = ref('minutes')

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
}])

const openProduct = () => {
  router.push('/buyer/product')
}

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

const hintListInit = ref(15)
const stepVisible = ref(5)
const hintListComputed = computed(() => hintList.slice(0, hintListInit.value))
</script>

<template>
  <div class="shop_view_container grid justify-center max-w-250 px-2 gap-5">
    <div class="h-min bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-300 p-3 grid grid-cols-2 justify-between mt-5 border-t-1 border-t-[#e9e9e9]">
      <div class="p-3">
        <div class="flex justify-evenly gap-3 bg-[#644B4A] rounded-md p-3 text-gray-200 w-4/5">
          <img src="https://cf.shopee.vn/file/56dd7c9788031f9b16fd990b11ccc62c_tn" alt="shop_avatar" class="rounded-full border-4 border-[#A29392] w-25 h-25">
          <div class="grid place-content-between">
            <div>
              <h2 class="text-xl text-white font-medium">
                {{ seller.payget.name }}
              </h2>
              <p class="text-xs opacity-80 font-light">
                {{ t('shop.online') }} 39 <span v-if="activeTime === 'days'">{{ t('shop.days') }}</span><span v-if="activeTime === 'hours'">{{ t('shop.hours') }}</span><span v-if="activeTime === 'minutes'">{{ t('shop.minutes') }}</span> {{ t('shop.ago') }}
              </p>
            </div>
            <div class="flex justify-between gap-2 text-sm uppercase h-min capitalize">
              <button class="border-1 border-white rounded-md py-0.5 px-5 flex items-center gap-1">
                <ISPlus />{{ t('shop.follow') }}
              </button>
              <button class="border-1 border-white rounded-md py-0.5 px-5 flex items-center gap-1">
                <ISChat />{{ t('shop.chat') }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="shop_view_summary flex flex-wrap text-sm h-min m-auto font-medium">
        <div>
          <ISShop />
          <p>{{ t('shop.products') }}: <span>{{ seller.statics.all_product_count }}</span></p>
        </div>
        <div>
          <ISNote />
          <p>{{ t('shop.cancel-ratio') }}: <span>{{ seller.statics.nonfulfilment_rate }}%</span></p>
        </div>
        <div>
          <ISFollowing />
          <p>{{ t('shop.following') }}: <span>108</span></p>
        </div>
        <div>
          <ISFollower />
          <p>{{ t('shop.follower') }}: <span>474</span></p>
        </div>
        <div>
          <ISJoined />
          <p>{{ t('shop.joined') }}: <span>{{ handleDate(seller.payget.created_at) }}</span></p>
        </div>
        <div>
          <ISEvaluate />
          <p>{{ t('shop.rating') }}: <span>4.5 ({{ seller.statics.average_raiting }} votes)</span></p>
        </div>
      </div>
    </div>
    <div class="h-min bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-300 py-3 px-5">
      <div class="text-lg uppercase font-medium text-gray-500">
        <h2>{{ t('shop.shop-information') }}</h2>
      </div>
      <div class="grid grid-cols-2 text-sm gap-5">
        <div class="flex items-center">
          <div class="prev flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 cursor-pointer w-7 h-7 p-1 text-gray-500" @click="onPrev">
            &#10094;
          </div>
          <div id="shop_demo_product" class="flex overflow-x-scroll gap-3 p-2 w-full">
            <div v-for="(demo, i) in demoShopProducts" :key="i" class="min-w-full max-h-72">
              <img :src="demo.img" alt="demo_img" class="min-w-full rounded-md">
            </div>
          </div>
          <div class="next flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 cursor-pointer w-7 h-7 p-1 text-gray-500" @click="onNext">
            &#10095;
          </div>
        </div>
        <div class="grid justify-center place-content-start gap-2">
          <p>{{ seller.payget.description }}</p>
        </div>
      </div>
    </div>
    <div class="h-min bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-300 p-3">
      <div class="shop_view_action bg-[#EDEDED] flex items-center gap-3 p-2 text-md rounded-lg">
        <div>
          <p>{{ t('shop.sort-by') }}</p>
        </div>
        <div class="bg-white cursor-pointer rounded-md py-1 px-3 capitalize">
          <p>{{ t('shop.popular') }}</p>
        </div>
        <div class="bg-white cursor-pointer rounded-md py-1 px-3 capitalize">
          <p>{{ t('shop.latest') }}</p>
        </div>
        <select class="rounded-md py-1 px-3 cursor-pointer">
          <option>{{ t('shop.price') }}: {{ t('shop.default') }}</option>
          <option>{{ t('shop.price') }}: {{ t('shop.low-to-high') }}</option>
          <option>{{ t('shop.price') }}: {{ t('shop.high-to-low') }}</option>
        </select>
      </div>
      <div class="shop_view_content flex justify-center flex-wrap gap-3 py-3">
        <div v-for="(hint, i) in hintListComputed" :key="i" class="max-w-45 rounded-md bg-light-100 shadow-sm shadow-gray-400/50 border-1 border-solid border-transparent hover:border-red-500 cursor-pointer relative" @click="openProduct">
          <img v-if="hint.extra === true" src="/img/today/extra.png" alt="extra" class="absolute top-0 left-0 w-full">
          <img src="/img/today/discount.svg" alt="discount" class="absolute -top-2 -right-6 w-21">
          <div class="absolute top-1 right-4 w-20 text-xs">
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
        <p v-if="hintListInit < hintList.length" class="bg-white border-1 border-solid border-gray-200 py-2 px-10 rounded-md cursor-pointer hover:bg-[#F5F5F5] hover:border-gray-300" @click="hintListInit += stepVisible">
          {{ t('ctoday.see-more') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shop_view_summary > div{
  width: 50%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
}
.shop_view_summary span{
  color: #ea580c;
}
.shop_view_content > div{
  color: #000000;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  line-height: 16.8px;
  padding: 10px;
}
::-webkit-scrollbar-thumb {
  background: transparent;
}
</style>
