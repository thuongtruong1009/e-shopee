<route lang="yaml">
meta:
  layout: buyer/LBOrder
</route>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useOrder } from '~/stores/order'
import { useLoading } from '~/stores/loading'
import { handleDate } from '~/utils/date'
import { toast } from '~/stores/toast'
import { useProduct } from '~/stores/product'
import { getResources } from '~/utils/resources'
import OrderRequest from '~/services/order-request'

const router = useRouter()
const order = useOrder()
const product = useProduct()
const loading = useLoading()
const userToast = toast()
const { t } = useI18n()
useHead({
  title: `order | ID = ${order.savedOrder}`,
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
// ------------------------------------------------
const isComment = ref<Boolean>(false)
const payload = reactive({
  order_id: order.savedOrder,
  rating: 5,
  comment: '',
})
const handleComment = async() => {
  await OrderRequest.createOrdersReviews(payload)
  isComment.value = false
  userToast.updateToast('success', 'Thanks for your review!', true)
}
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
              <img :src="orderImg" alt="product_order_img" class="max-w-45 max-h-45 rounded-xl cursor-pointer" @click="onVisitProduct(payget.product_id, payget.shop_id)">
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-5 grid grid-cols-5">
        <div class="flex justify-center items-start col-span-2">
          <button v-if="statusPercent(payget.status_id)>= 75" type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:(ring-2 ring-pink-300) dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 gap-1 flex items-center" @click="isComment = !isComment">
            <IComment /> Comment
          </button>
          <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:(ring-2 ring-purple-300) dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2 text-center mr-2 flex items-center gap-1" @click="onVisitProduct(payget.product_id, payget.shop_id)">
            <IBOrderArrowRight /> See product
          </button>
        </div>
        <div class="col-span-3">
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
      </div>

      <Transition name="slide-fade">
        <div v-if="isComment" class="col-span-5">
          <div class="flex items-center py-2 px-3 bg-gray-50 rounded-lg dark:bg-gray-700">
            <button class="p-2 text-gray-500 rounded-lg cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clip-rule="evenodd" /></svg>
            </button>
            <textarea id="chat" v-model="payload.comment" rows="1" class="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:(ring-blue-500 border-blue-500) dark:(bg-gray-800 border-gray-600 placeholder-gray-400 text-white) dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message have more 25 characters..." />
            <button class="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-blue-100 dark:text-blue-500 dark:hover:bg-gray-600" :class="{'pointer-events-none opacity-50':payload.comment.length < 25}" @click="handleComment">
              <svg class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
            </button>
          </div>
        </div>
      </Transition>
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
/* ***************************** */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
