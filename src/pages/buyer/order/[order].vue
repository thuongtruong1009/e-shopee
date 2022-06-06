<route lang="yaml">
meta:
  layout: buyer/LBOrder
</route>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useOrder } from '~/stores/order'
import { useLoading} from '~/stores/loading'
import { handleDate } from '~/utils/date'
import { useProduct } from '~/stores/product'
import { getResources } from '~/utils/resources'
import OrderRequest from '~/services/order-request'

const router = useRouter()
const order = useOrder()
const product = useProduct()
const loading = useLoading()
const { t } = useI18n()
useHead({
  title: `order | ${order.savedOrder}`,
})

const statusPercent = (status_id: number) => {
  switch (status_id) {
    case 1:
      return 10
    case 2:
      return 29
    case 3:
      return 51
    case 4:
      return 75
    case 5:
      return 99
    default:
      return 10
  }
}
const payget = ref([])
const orderImg = ref('')
onMounted(async() => {
  loading.isLoading = true
  const { data: orderData } = await OrderRequest.getOrdersById(order.savedOrder)
  payget.value = orderData
  order.orderVariation = orderData.product.variations[0]
  order.orderAddress = orderData.received_address
  orderImg.value = getResources(orderData.product.images[0])
  loading.isLoading = false
})
watchEffect(() => {
  order.setNewOrder(order.savedOrder)
})
// ------------------- VISIST PRODUCT DETAIL --------------
const onVisitProduct = (prod_id: number, shop_id: number) => {
  product.productRequestID = prod_id
  product.shopRequestID = shop_id
  router.push(`/product/${encodeURIComponent(prod_id)}`)
}

</script>

<template>
  <div class="order_detail_view flex p-10 bg-[#CFDBEA] dark:bg-gray-900">
    <div class="container bg-white dark:bg-gray-800 rounded-2xl shadow-md shadow-gray-300 dark:shadow-gray-600 w-300 max-w-300 grid grid-cols-5 m-auto p-10 h-max">
      <div class="col-span-2">
        <div class="text-2xl text-red-400 font-medium text-center">
          <h1>Order check detail</h1>
        </div>
        <div class="hero-img-container flex justify-center items-center relative py-5">
          <div class="triangle1" />
          <div class="arc inline-block border-1 border-solid border-[#000] rounded-full border-t-transparent border-r-transparent border-b-transparent opacity-40 absolute min-w-50 min-h-50 left-0 top-7" style="transform: rotate(-15deg);" />
          <div class="pattern" />
          <img src="https://drive.google.com/uc?id=15iXUI6DkRr5Zcp0yH5uF2U47ycr-WzUY" class="hero-img w-2/3">
        </div>
      </div>

      <div class="col-span-3 grid">
        <div class="order-status-container flex justify-between items-start relative text-sm font-medium">
          <div class="status-item first before:(content-\00a0 h-1 bg-[#5858EF] absolute top-3 left-0 rounded-lg)" :class="`before:w-[${statusPercent(payget.status_id)}%]`" :style="[statusPercent(payget.status_id)>= 10 ? {'opacity':'1'} : {'opacity': '0.6'}]">
            <div class="status-circle" />
            <p>Processing</p>
          </div>
          <div class="status-item second before:(content-\00a0 h-1 w-full top-3 left-0 opacity-20 absolute bg-[#5858EF] rounded-lg)" :style="[statusPercent(payget.status_id)>= 29 ? {'opacity':'1'} : {'opacity': '0.7'}]">
            <div class="status-circle" />
            <p>Ready</p>
          </div>
          <div class="status-item" :style="[statusPercent(payget.status_id)>= 51 ? {'opacity':'1'} : {'opacity': '0.6'}]">
            <div class="status-circle" />
            <p>Shipping</p>
          </div>
          <div class="status-item" :style="[statusPercent(payget.status_id)>= 75 ? {'opacity':'1'} : {'opacity': '0.6'}]">
            <div class="status-circle" />
            <p>Delivered</p>
          </div>
          <div class="status-item" :style="[statusPercent(payget.status_id)>= 99 ? {'opacity':'1'} : {'opacity': '0.6'}]">
            <div class="status-circle" />
            <p>Cancelled</p>
          </div>
        </div>

        <div class="mt-10">
          <div class="flex justify-between gap-2">
            <div class="grid">
              <div class="flex justify-between">
                <div>
                  <p class="text-green-500 text-sm">
                    {{ t('account.order-date') }}: {{ handleDate(payget.created_at) }}
                  </p>
                  <p class="text-gray-400 text-xs">
                    Order ID: {{ payget.id }}
                  </p>
                  <p class="text-gray-400 text-xs">
                    Product ID: {{ payget.product_id }}
                  </p>
                </div>
                <div class="text-right">
                  <p class="text-red-500 font-medium">
                    {{ t('account.order-total') }}: ${{ payget.total }}
                  </p>
                  <p class="text-xs">
                    Quantity: {{ payget.quantity }}
                  </p>
                  <p class="text-xs">
                    {{ order.orderVariation.name }}: {{ order.orderVariation.options }}
                  </p>
                </div>
              </div>
              <div class="font-medium text-base">
                <h5>{{ payget.name }}</h5>
              </div>
            </div>
            <div>
              <img :src="orderImg" alt="product_order_img" class="max-w-45 max-h-45 rounded-xl cursor-pointer border-1" @click="onVisitProduct(payget.product_id, payget.shop_id)">
            </div>
          </div>
          <div class="flex justify-between">
            <div>
              <p class="text-xs text-red-300">
                Address
              </p>
              <div class="text-sm text-gray-500">
                <p>
                  Name: {{ order.orderAddress.full_name }}
                </p>
                <p>Phone: {{ order.orderAddress.phone }}</p>
                <p>Address: {{ order.orderAddress.address }}, {{ order.orderAddress.town }}, {{ order.orderAddress.city }}, {{ order.orderAddress.state }}</p>
              </div>
            </div>
            <div class="flex justify-center items-end">
              <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:(ring-2 ring-purple-300) dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 flex items-center gap-1" @click="onVisitProduct(payget.product_id, payget.shop_id)">
                <IBOrderArrowRight /> See product
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
.order_detail_view {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.hero-img-container::before {
    height: 1.5rem;
    width: 1.5rem;
    background-color: #0268EE;
    position: absolute;
    top: 5%;
    right: 35%;
    content: '';
    border-radius: 50%;
}

.pattern {
  width: 50px;
  height: 50px;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8Y2lyY2xlIGN4PSc0JyBjeT0nNCcgcj0nNCcgZmlsbD0nYmxhY2snLz4KPC9zdmc+");
  opacity: 0.1;
  position: absolute;
  right: 2rem;
  top: 2rem;
}

.triangle1 {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 20px 10px;
  border-color: transparent transparent #767EEF transparent;
  position: absolute;
  top: 3.8rem;
  left: 0.7rem;
  transform: rotate(36deg);
}
.status-item {
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: end;
  height: fit-content;
}

.status-circle {
  height: 1.5rem;
  width: 1.5rem;
  background-color: #665CF5;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  z-index: 2;
  transition: all 0.2s;
  cursor: pointer;
  margin-bottom: 0.5rem;
}

.status-circle:hover {
  transform: scale(1.2);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

</style>
