<route lang="yaml">
meta:
  layout: seller/shop/LSShopPublic
</route>

<script setup>
import { useRouter } from 'vue-router'
import { next, prev } from '~/utils/scrollX'
import { shop } from '~/stores/shop'
import { useSeller } from '~/stores/seller'
import { useLoading } from '~/stores/loading'
import { handleDate } from '~/utils/date'
import { getResources } from '~/utils/resources'
import ShopRequest from '~/services/shop-request'

const props = defineProps({ shop: String })
const router = useRouter()
const useShop = shop()
const loading = useLoading()
const seller = useSeller()
useHead({
  title: `shop | ${props.shop}`,
})
onMounted(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/buyer/login' })
})
// get shop id after search
watchEffect(() => {
  useShop.setNewShop(props.shop)
})
const { t } = useI18n()
watchOnce(async() => {
  loading.isLoading = true
  const { data: shopdata } = await ShopRequest.getShopsById(props.shop)
  seller.payget = shopdata
  seller.statics = shopdata.statistic
  loading.isLoading = false

  const { data: productData } = await ShopRequest.getProductsOfShopId(props.shop, { params: { limit: 15, page: 1 } })
  useShop.publicProducts = productData.data
})
const onPrev = () => prev('shop_demo_product')
const onNext = () => next('shop_demo_product')
const activeTime = ref('minutes')
</script>

<template>
  <div class="shop_view_container grid justify-center max-w-250 px-2 gap-5">
    <div class="h-min bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300 p-3 grid grid-cols-2 justify-between mt-5 border-t-1 border-t-[#e9e9e9]">
      <div class="p-3">
        <div class="flex justify-evenly gap-3 rounded-lg p-3 text-gray-200 w-4/5" :style="`background-image: url(${getResources(seller.payget.cover_image)})`" :class="{'bg-[#644B4A]': !seller.payget.cover_image}">
          <img v-if="seller.payget.avatar_image" :src="getResources(seller.payget.avatar_image)" alt="shop_avatar" class="rounded-full border-4 border-[#A29392] w-25 h-25 object-cover">
          <img v-else src="https://cf.shopee.vn/file/56dd7c9788031f9b16fd990b11ccc62c_tn" alt="shop_avatar" class="rounded-full border-4 border-[#A29392] w-25 h-25">
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
          <p>{{ t('shop.products') }}: <span>{{ seller.statics.product_count }}</span></p>
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
          <p>{{ t('shop.rating') }}: <span>{{ seller.statics.average_raiting }}% (8 votes)</span></p>
        </div>
      </div>
      <div v-if="seller.payget.description" class="col-span-2">
        <p class="flex items-center gap-2">
          <ISDescription /> Descriptions:
        </p>
        <p>{{ seller.payget.description }}</p>
      </div>
    </div>

    <div class="h-min bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-300 p-3">
      <div class="shop_view_action bg-[#EDEDED] dark:bg-gray-700 flex items-center gap-3 p-2 text-md rounded-lg">
        <div>
          <p>{{ t('shop.sort-by') }}</p>
        </div>
        <div class="bg-white dark:bg-gray-600 cursor-pointer rounded-md py-1 px-3 capitalize">
          <p>{{ t('shop.popular') }}</p>
        </div>
        <div class="bg-white dark:bg-gray-600 cursor-pointer rounded-md py-1 px-3 capitalize">
          <p>{{ t('shop.latest') }}</p>
        </div>
        <select class="rounded-md py-1 px-3 cursor-pointer dark:bg-gray-600">
          <option>{{ t('shop.price') }}: {{ t('shop.default') }}</option>
          <option>{{ t('shop.price') }}: {{ t('shop.low-to-high') }}</option>
          <option>{{ t('shop.price') }}: {{ t('shop.high-to-low') }}</option>
        </select>
      </div>
      <div>
        <div v-if="loading.isLoading" class="shop_view_content flex justify-center flex-wrap gap-3 py-3">
          <RProductCard v-for="i in 6" :key="i" />
        </div>
        <div v-else class="shop_view_content flex justify-center flex-wrap gap-3 py-3">
          <div v-for="(prod, index) in useShop.publicProducts" :key="index" class="card duration-200 ease-linear relative rounded-lg w-60  shadow-md dark:(bg-gray-700) hover:shadow-gray-400/50 pb-0">
            <CProductCardGrid :card="prod" />
          </div>
        </div>
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
