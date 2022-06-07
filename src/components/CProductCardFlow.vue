<script setup>
import { useRouter } from 'vue-router'
import { useLoading } from '~/stores/loading'
import { toast } from '~/stores/toast'
import { useSeller } from '~/stores/seller'
import { useProduct } from '~/stores/product'
import { handleError } from '~/helpers/error'
import { handleDate } from '~/utils/date'
import { productStatus } from '~/utils/status'
import { sliceText } from '~/utils/textHandle'
import { getResources } from '~/utils/resources'

import ShopRequest from '~/services/shop-request'
import ProductRequest from '~/services/product-request'
import AccountRequest from '~/services/account-request'
import CartRequest from '~/services/cart-request'
import OrderRequest from '~/services/order-request'

const { t } = useI18n()
const router = useRouter()
const useToast = toast()
const product = useProduct()

const props = defineProps({
  card: Object,
})

const productPrice = ref()
const productStock = ref()

// ------------------------------------------
watchEffect(async() => {
  // get price min-max
  const valuesPrice = props.card.models.map(i => i.price)
  const maxPrice = Math.max(...valuesPrice)
  const minPrice = Math.min(...valuesPrice)
  if (maxPrice === minPrice)
    productPrice.value = `$${maxPrice}`
  else
    productPrice.value = `$${minPrice} - $${maxPrice}`

  // get stock min-max
  const valuesStock = props.card.models.map(i => i.stock)
  const maxStock = Math.max(...valuesStock)
  const minStock = Math.min(...valuesStock)
  if (minStock === maxStock)
    productStock.value = `${maxStock}`
  else
    productStock.value = `${minStock} - ${maxStock}`
})

// ------------------- VISIST PRODUCT DETAIL --------------
const onVisitProduct = (prod_id, shop_id) => {
  product.productRequestID = prod_id
  product.shopRequestID = shop_id
  router.push(`/product/${encodeURIComponent(prod_id)}`)
}
// -----------------------------------------
const isPopup = ref(false)
const onOpenPopup = () => {
  const body = document.body
  body.style.overflowY = 'hidden'
  isPopup.value = true
}
const onClosePopup = () => {
  const body = document.body
  body.style.overflowY = ''
  isPopup.value = false
}

</script>

<template>
  <div>
    <div class="relative z-1">
      <div class="card-type flex justify-between absolute w-full p-5">
        <span class="bg-green-600 text-white font-bold capitalize text-xs rounded p-0.75">-10%</span>
        <span class="bg-orange-400 text-white font-bold capitalize text-xs rounded p-0.75">{{ t('search.new') }}</span>
      </div>
      <div class="split third rounded-lg shadow-md card-img max-w-80 min-w-80 max-h-80 p-1" @click="onVisitProduct(props.card.id, props.card.shop_id)">
        <div class="cover">
          <img class="first-img rounded-xl w-full" :src="`${getResources(props.card.images[0])}_tn`" alt="product_img">
        </div>
        <!-- <img class="first-img rounded-xl w-full" :src="`${getResources(props.card.images[0])}_tn`" alt="product_img"> -->
      </div>
      <!-- <div class="split third rounded-lg shadow-md" @click="onVisitProduct(props.card.id, props.card.shop_id)">
    <div class="cover">
      <img class="first-img rounded-t-lg w-full max-h-80" :src="`${getResources(props.card.images[0])}_tn`" alt="product_img">
    </div>
  </div> -->
    </div>
    <div class="product-description text-left p-2 w-full">
      <div class="px-2">
        <p class="card-title cursor-pointer duration-200 ease-linear hover:text-[#FF6600]" @click="onVisitProduct(props.card.id, props.card.shop_id)">
          {{ props.card.name }}
        </p>
        <div class="flex justify-between">
          <div class="flex items-center justify-start">
            <h6 class="card-price font-bold tracking-tighter mr-2 black text[#9B9B9B] text-decoration line-through">
              $999
            </h6>
            <h6 class="font-bold tracking-tighter text-red-500">
              {{ productPrice }}
            </h6>
          </div>
          <div class="star-rating flex justify-start py-2">
            <img v-for="i in 5" :key="i" src="https://img.icons8.com/fluency/48/ffffff/star.png" class="max-w-4 max-h-4">
          </div>
        </div>
      </div>

      <div class="product-infor py-5 text-sm leading-6">
        <p v-for="(line, i) in sliceText(props.card.description)?.split('\\n')" :key="i">
          {{ line }}
        </p>
      </div>

      <div class="product-quantity">
        <p>{{ t('search.availability') }}: <span class="text-[#10A391]">{{ productStock }} In Stock</span></p>
      </div>

      <div class="py-5 flex justify-start">
        <h3 class="uppercase py-2.5 px-10 rounded-md bg-black text-white font-medium text-sm cursor-pointer hover:bg-[#F33535] dark:bg-[#F33535] duration-200" @click="onOpenPopup">
          {{ t('search.add-to-cart') }}
        </h3>
      </div>

      <div v-if="isPopup === true" class="popup-modal z-3 fixed w-screen h-screen top-0 left-0 flex justify-center items-center ease-linear">
        <div class="bg-white dark:bg-gray-800 w-284 z-20 rounded-lg" @click="onClosePopup">
          <div class="text-white flex justify-center items-center bg-black rounded-t-lg gap-2 relative py-2">
            <ICheck />
            <h5 class="text-lg" style="font-family: 'Gilroy-Medium'">
              {{ t('search.add-success-message') }}
            </h5>
            <span class="cursor-pointer text-4xl absolute right-3 -top-1" @click="onClosePopup">&times;</span>
          </div>
          <div class="grid grid-cols-7 px-10 pt-10 pb-5 divide-1 divide-solid divide-gray-200 divide-x">
            <div class="flex col-span-3 gap-2">
              <img src="/img/product/shoes/3.webp" alt="new_product" class="max-w-50 max-h-50">
              <div class="text-md font-semibold">
                <h6 class="pb-3">
                  New Balance Running Arishi trainers in triple
                </h6>
                <p>$29.00</p>
                <p>{{ t('search.dimension') }}: <span class="text-sm font-normal">40x60cm</span></p>
                <p>{{ t('search.quantity') }}: 1</p>
              </div>
            </div>
            <div class="col-span-4 px-10 text-sm font-semibold">
              <p class="py-0.5 font-normal">
                {{ t('search.there-is') }} 1 {{ t('search.item-in-your-cart') }}.
              </p>
              <p class="py-0.5">
                {{ t('search.total-products') }}: <span class="font-normal">$123.72</span>
              </p>
              <p class="py-0.5">
                {{ t('search.total-shipping') }}: <span class="font-normal">$7.00</span>
              </p>
              <p class="py-0.5">
                {{ t('search.taxes') }} <span class="font-normal">$0.00</span>
              </p>
              <p class="py-0.5">
                {{ t('search.total') }}: <span class="font-normal">$130.72 (tax excl.)</span>
              </p>
              <div class="uppercase flex text-white font-medium text-sm py-5">
                <h6 class="bg-black rounded-md py-2 px-6 mr-2 hover:bg-red-500 cursor-pointer duration-200">
                  {{ t('search.continue-shopping') }}
                </h6>
                <h6 class="bg-black rounded-md py-2 px-6 hover:bg-red-500 cursor-pointer duration-200 flex gap-2 items-center">
                  <ICheck />{{ t('search.proceed-checkout') }}
                </h6>
              </div>
            </div>
          </div>
        </div>
        <div v-if="isPopup === true" class="fixed w-screen h-screen bg-black opacity-50 top-0 left-0" @click="onClosePopup" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.split.third {
    display: block;
    overflow: hidden;
    cursor: pointer;
}
.split.third img {
    width: 100%;
    height: 100%;
    -webkit-transition: -webkit-transform 0.8s ease;
            transition: -webkit-transform 0.8s ease;
            transition: transform 0.8s ease;
            transition: transform 0.8s ease, -webkit-transform 1s ease;
}
.split.third:hover img {
    -webkit-transform: scale(1.15);
            transform: scale(1.15);
}
/* ************************ POPUP MODAL **************************** */
.popup-modal{
  animation: popup-animate 0.1s linear;
}
</style>
