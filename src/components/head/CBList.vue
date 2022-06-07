<script setup>
import { useRouter } from 'vue-router'
import CartRequest from '~/services/cart-request'
import OrderRequest from '~/services/order-request'
import AccountRequest from '~/services/account-request'
import { useCart } from '~/stores/cart'
import { toast } from '~/stores/toast'
import { useUser } from '~/stores/user'
import { getResources } from '~/utils/resources'
import { floorNumber } from '~/utils/floorNumber'
import { removeItemByIndex } from '~/utils/arrayHandle'

const { t } = useI18n()
const useToast = toast()
const cart = useCart()
const router = useRouter()
const user = useUser()

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
watchEffect(async() => {
  const { data: cartData } = await CartRequest.getCart({ params: { limit: cartPayload.limit, page: cartPayload.page } })
  cart.result = cartData
})
const handleDelete = async(id) => {
  removeItemByIndex(cart.result, id, 1)
  await CartRequest.deleteCart(id)
  useToast.updateToast('success', 'You has been delete one cart items!', true)
}
// ---------------------------------------------------------------
const payloadOrder = reactive({
  address_id: '',
  orders: [{
    product_model_id: '',
    quantity: '',
  }],
})
const avatarID = ref('')
onMounted(async() => {
  const { data: addressData } = await AccountRequest.getAddress()
  payloadOrder.address_id = addressData.filter(e => Object.keys(addressData.id === 0))[0].id
  const { data: userData } = await AccountRequest.getProfile()
  avatarID.value = userData.profile.avatar_image
})

const handleOrder = async() => {
  if (payloadOrder.address_id) {
    await cart.result.map(item => payloadOrder.orders.push({ product_model_id: item.product_model_id, quantity: item.quantity }))
    await OrderRequest.createOrders(payloadOrder)
    useToast.updateToast('success', 'You order has been created!', true)
  }
  else {
    useToast.updateToast('error', 'Please need fill your address information!', true)
    router.push({ path: '/buyer/account/address' })
  }
}
</script>

<template>
  <div class="container flex justify-center items-center lg:w-xs text-white dark:text-black">
    <div>
      <router-link to="/buyer/favourite">
        <IHeart class="hover:text-[#adff2f] dark:text-[#adff2f]" style="filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2));" />
      </router-link>
    </div>
    <div class="flex items-end hover:text-[#adff2f] dark:text-[#adff2f] relative" style="filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2));" @click="openNav">
      <span class="total-notifications absolute -top-2 left-5 bg-green-500 w-5 h-5 text-white rounded-full flex justify-center items-center pr-0.5 text-xs font-medium">{{ cart.result.length }}</span>
      <IBCart />
      <h1 class="font-semibold ml-3">
        ${{ floorNumber(cart.result.reduce((accum,item) => accum + item.total_price, 0)) }}
      </h1>
    </div>
    <div>
      <router-link to="/buyer/account/dashboard">
        <img v-if="avatarID" :src="getResources(avatarID)" alt="avatar_img" class="rounded-full w-12 min-w-12 max-w-12 h-12 min-h-12 max-h-12 border-2 border-blue-500" style="object-fit: cover;filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2));">
        <img v-else class="w-12 min-w-12 max-w-12 h-12 min-h-12 max-h-12 rounded-full shadow-lg shadow-gray-500/50" src="/img/avatar_sample.png" alt="avatar_sample">
      </router-link>
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
        <li v-for="(item, index) in cart.result" :key="index" class="flex justify-between items-start p-5 inline-block">
          <div class="flex">
            <a>
              <!-- <img
                src="/img/product/1.png" alt="cart_product_img" class="max-w-25 max-h-25 border-light-600 border-solid border-1 rounded-md mr-3"
              > -->
              <img
                :src="getResources(item.product.images[0])" alt="cart_product_img" class="max-w-25 max-h-25 border-light-600 border-solid border-1 rounded-md mr-3"
              >
            </a>
            <div>
              <h5 class="title text-[#E14641] cursor-pointer">
                {{ item.product.name }}
              </h5>
              <span class="quantity-price">{{ item.quantity }} x <span class="price">${{ item.total_price }}</span></span>
            </div>
          </div>
          <span class="remove hover:text-red-500 cursor-pointer ml-2" @click="handleDelete(item.product_model_id)">×</span>
        </li>
      </ul>
      <div class="flex flex-wrap justify-between p-5">
        <strong>{{ t('cart.subtotal') }} :</strong>
        <span class="amount font-semibold">${{ floorNumber(cart.result.reduce((accum,item) => accum + item.total_price, 0)) }}</span>
      </div>
      <div class="flex justify-around items-center p-5">
        <router-link to="/buyer/cart">
          <button type="submit" value="submit" class="btn text-white font-semibold text-xs py-3 px-7 rounded-md duration-200 uppercase cursor-pointer">
            {{ t('cart.view-cart') }}
          </button>
        </router-link>
        <button type="submit" value="submit" class="bg-black text-white font-semibold text-xs py-3 px-7 rounded-md hover:bg-[#E14641] duration-200 uppercase cursor-pointer" @click="handleOrder">
          {{ t('cart.checkout') }}
        </button>
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
