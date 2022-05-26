<script setup>
import { useRouter } from 'vue-router'
import { useLoading } from '~/stores/loading'
import { toast } from '~/stores/toast'
import { useSeller } from '~/stores/seller'
import { handleError } from '~/helpers/error'
import { handleDate } from '~/utils/date'
import { productStatus } from '~/utils/status'
import { sliceText } from '~/utils/sliceText'

import ShopRequest from '~/services/shop-request'
import ProductRequest from '~/services/product-request'
import AccountRequest from '~/services/account-request'
import CartRequest from '~/services/cart-request'
import OrderRequest from '~/services/order-request'

const { t } = useI18n()
const router = useRouter()
const useToast = toast()

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

</script>

<template>
  <div class="card-type flex justify-between absolute w-full p-2">
    <span class="bg-green-600 text-white font-bold capitalize text-xs rounded p-0.75">-10%</span>
    <span class="bg-orange-400 text-white font-bold capitalize text-xs rounded p-0.75">{{ t('search.new') }}</span>
  </div>
  <div class="split third rounded-lg shadow-md">
    <div class="cover">
      <img class="first-img rounded-t-lg w-full max-h-80" :src="`https://tp-o.tk/resources/images/${props.card.images[0]}_tn`" alt="thumbnail">
    </div>
  </div>
  <div class="product-description text-left p-2">
    <p class="card-title cursor-pointer duration-200 ease-linear hover:text-[#FF6600] text-sm">
      {{ sliceText(props.card.name) }}...
    </p>
    <div class="flex items-center justify-between my-2">
      <h6 class="card-price font-bold tracking-tighter text-red-500">
        {{ productPrice }}
      </h6>
      <h6 class="text-xs text-green-600">
        Stock {{ productStock }}
      </h6>
    </div>
    <div class="flex justify-between">
      <div class="star-rating flex justify-start">
        <img v-for="i in 5" :key="i" src="https://img.icons8.com/fluency/48/ffffff/star.png" class="max-w-4 max-h-4">
      </div>
      <h6 class="text-xs">
        Solded {{ props.card.sold }}
      </h6>
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
    height: auto;
    -webkit-transition: -webkit-transform 0.8s ease;
            transition: -webkit-transform 0.8s ease;
            transition: transform 0.8s ease;
            transition: transform 0.8s ease, -webkit-transform 1s ease;
}
.split.third:hover img {
    -webkit-transform: scale(1.15);
            transform: scale(1.15);
}
</style>
