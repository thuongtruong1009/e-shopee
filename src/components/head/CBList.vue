<script setup>
import { useRouter } from 'vue-router'
import CartRequest from '~/services/cart-request'
import { useCart } from '~/stores/cart'
import { toast } from '~/stores/toast'
import { sumPrice } from '~/utils/sumPrice'

const { t } = useI18n()
const useToast = toast()
const cart = useCart()

const isBlurBgModal = ref(false)
const openNav = () => {
  document.getElementById('mySidenav').style.width = '25rem'
  const body = document.body
  body.style.overflowY = 'hidden'
  isBlurBgModal.value = true
}
const closeNav = () => {
  document.getElementById('mySidenav').style.width = '0'
  const body = document.body
  body.style.overflowY = ''
  isBlurBgModal.value = false
}
// --------------------------------------------
const cartPayload = reactive({
  limit: 10,
  page: 1,
})
const pricePayload = reactive({
  product_model_id: 1,
  quantity: 1,
})
onMounted(async() => {
  const { data: cartData } = await CartRequest.getCart({ params: { limit: cartPayload.limit, page: cartPayload.page } })
  cart.result = cartData.data
  cart.payget = cartData.data[0]
  cart.product = cartData.data[0].product
  // const { data: priceData } = await CartRequest.getPrices({ params: { product_model_id: pricePayload.product_model_id, quantity: pricePayload.quantity } })
})
</script>

<template>
  <div class="container flex justify-center items-center lg:w-xs text-white dark:text-black">
    <div>
      <router-link to="/buyer/filter">
        <ICompare class="hover:text-[#adff2f] dark:text-[#adff2f]" />
      </router-link>
    </div>
    <div>
      <router-link to="/buyer/favourite">
        <IHeart class="hover:text-[#adff2f] dark:text-[#adff2f]" />
      </router-link>
    </div>
    <div class="flex items-end hover:text-[#adff2f] dark:text-[#adff2f] relative" @click="openNav">
      <span class="total-notifications absolute -top-2 left-5 bg-green-500 w-5 h-5 text-white rounded-full flex justify-center items-center pr-0.5 text-xs font-medium">{{ cart.result.length }}</span>
      <ICart />
      <h1 class="font-semibold ml-3">
        ${{ sumPrice(cart.result, cart.payget.price, cart.payget.quantity) }}
      </h1>
    </div>
    <div v-if="isBlurBgModal" class="blur-bg w-screen h-screen absolute top-0 -left-10 bg-black bg-opacity-30 z-1" @click="closeNav" />
    <div id="mySidenav" class="sidenav w-0 h-screen fixed top-12 right-0 bg-white duration-500 z-2 overflow-x-hidden text-left text-black dark:(text-gray-200 bg-black) divide-light-700 divide-y border-1 border-dotted border-gray-700 shadow-2xl shadow-gray-500">
      <div class="flex justify-between items-center p-5">
        <p class="font-semibold">
          {{ t('cart.cart') }}
        </p>
        <span class="cursor-pointer text-4xl" @click="closeNav">&times;</span>
      </div>
      <ul class="minicart-product-list divide-light-700 divide-y max-h-1/2 overflow-y-scroll">
        <li v-for="i in 6" :key="i" class="flex justify-between items-start p-5 inline-block">
          <div class="flex">
            <a><img
              src="/img/product/1.png" alt="Cart product Image" class="max-w-25 max-h-25 border-light-600 border-solid border-1 rounded-md mr-3"
            ></a>
            <div>
              <h5 class="title text-[#E14641] cursor-pointer">
                {{ cart.product.name }}
              </h5>
              <span class="quantity-price">{{ cart.payget.quantity }} x <span class="price">${{ cart.payget.price }}</span></span>
            </div>
          </div>
          <span class="remove hover:text-red-500 cursor-pointer ml-2">×</span>
        </li>
      </ul>
      <div class="flex flex-wrap justify-between p-5">
        <strong>{{ t('cart.subtotal') }} :</strong>
        <span class="amount font-semibold">${{ sumPrice(cart.result, cart.payget.price, cart.payget.quantity) }}</span>
      </div>
      <div class="flex justify-around items-center p-5">
        <router-link to="/buyer/cart">
          <button type="submit" value="submit" class="btn text-white font-semibold text-xs py-3 px-7 rounded-md duration-200 uppercase cursor-pointer">
            {{ t('cart.view-cart') }}
          </button>
        </router-link>
        <router-link to="/buyer/checkout">
          <button type="submit" value="submit" class="bg-black text-white font-semibold text-xs py-3 px-7 rounded-md hover:bg-[#E14641] duration-200 uppercase cursor-pointer">
            {{ t('cart.checkout') }}
          </button>
        </router-link>
      </div>
      <p class="minicart-message p-5 text-xs">
        {{ t('cart.free-ship') }} $1000!
      </p>
    </div>
  </div>
</template>

<style scoped>
.container > div:not(:last-child) {
    margin: 0 1rem;
    cursor: pointer;
}
.sidenav {
  font-family: "Lato", sans-serif;
}
.sidenav a {
  text-decoration: none;
  color: black;
  display: block;
  transition: 0.3s;
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-thumb {
  background: rgb(155, 155, 155);
}
@media (max-width:768px){
  .container > div:not(:last-child) {
    margin: 0 0.5rem;
}
}
</style>
