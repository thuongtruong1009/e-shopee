<route lang="yaml">
meta:
  layout: buyer/LBProductDetails
</route>

<script setup>
import { useRouter } from 'vue-router'
import { useLoading } from '~/stores/loading'
import { toast } from '~/stores/toast'
import { useProduct } from '~/stores/product'
import { useSeller } from '~/stores/seller'
import { handleError } from '~/helpers/error'
import { handleDate } from '~/utils/date'
import { productStatus } from '~/utils/status'
import { equalArray } from '~/utils/arrayHandle'
import { getResources } from '~/utils/resources'
import ShopRequest from '~/services/shop-request'
import ProductRequest from '~/services/product-request'
import AccountRequest from '~/services/account-request'
import CartRequest from '~/services/cart-request'
import OrderRequest from '~/services/order-request'
import provinceNames from '~/shared/provinces'

useHead({
  title: 'buyer | product details',
})
const { t } = useI18n()
const loading = useLoading()
const router = useRouter()
const useToast = toast()
const product = useProduct()
const seller = useSeller()

const productResponseData = ref([])
const productPrice = ref()
const productStock = ref()
const productImg = ref('')
const productReview = ref([])

onMounted(async() => {
  if (!localStorage.getItem('token')) { router.push({ path: '/buyer/login' }) }
  else {
    loading.isLoading = true
    const { data: productData } = await ProductRequest.getProductsById(product.productRequestID)
    productResponseData.value = productData
    productImg.value = productData.images
    loading.isLoading = false

    const { data: reviewData } = await ProductRequest.getReviewsProductsById(product.productRequestID, { params: { limit: 10 } })
    productReview.value = reviewData
  }
})

watchOnce(async() => {
  loading.isLoading = true
  const { data: shopdata } = await ShopRequest.getShopsById(product.shopRequestID)
  loading.isLoading = false
  seller.payget = shopdata
  seller.statics = shopdata.statistic
})
// ---------------------------------------
const isAdd = ref(false)
const payloadCart = reactive({
  product_model_id: '',
  quantity: 1,
})
const handleAdd = async() => {
  await CartRequest.addCart(payloadCart)
  useToast.updateToast('success', 'You cart items has been updated!', true)
  isAdd.value = true
}
// ------------------------------------------
const isChoossen = ref()
watchEffect(async() => {
  // get price min-max
  const valuesPrice = productResponseData.value.models.map(i => i.price)
  const maxPrice = Math.max(...valuesPrice)
  const minPrice = Math.min(...valuesPrice)
  if (maxPrice === minPrice)
    productPrice.value = maxPrice
  else
    productPrice.value = `${minPrice} - ${maxPrice}`

  // get stock min-max
  const valuesStock = productResponseData.value.models.map(i => i.stock)
  const maxStock = Math.max(...valuesStock)
  const minStock = Math.min(...valuesStock)
  productStock.value = `${minStock} - ${maxStock}`
})
function getModelStock(array, outer, inner) {
  array.map((element) => {
    isChoossen.value = [outer, inner]
    if (element.variation_index.length === 2) {
      if (equalArray(element.variation_index, [outer, inner])) {
        productStock.value = element.stock
        productPrice.value = element.price
        payloadCart.product_model_id = element.id
      }
    }
    if (element.variation_index.length === 1) {
      const option = [element.variation_index[0], element.variation_index[0]]
      if (equalArray(option, [outer, inner])) {
        productStock.value = element.stock
        productPrice.value = element.price
        payloadCart.product_model_id = element.id
      }
    }
    return ''
  })
}

// --------------------------------------
const payload = reactive({
  slug: 'id_01',
  product_id: '01',
})
//   await ShopRequest.getShopsProducts(payload.slug)
//   loading.isLoading = false
// })
// --------------------------------------------
const payloadOrder = reactive({
  address_id: '',
  orders: [{
    product_model_id: 1,
    quantity: 1,
  }],
})
onMounted(async() => {
  const { data: addressData } = await AccountRequest.getAddress()
  payloadOrder.address_id = addressData.filter(e => Object.keys(addressData.id === 0))[0].id
})

const handleOrder = () => {
  if (payloadOrder.address_id) {
    OrderRequest.createOrders(payloadOrder)
    useToast.updateToast('success', 'You order has been created!', true)
  }
  else {
    useToast.updateToast('error', 'Please need fill your address information!', true)
    router.push({ path: '/buyer/account/address' })
  }
}
// ----------------------------------
const onvisitShop = () => {
  router.push(`/shop/${encodeURIComponent(productResponseData.value.shop_id)}`)
}
</script>

<template>
  <div class="product-summary-container max-w-300 bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-400/50 p-3 mx-2">
    <div v-cloak class="main-content flex gap-10">
      <div>
        <img :src="getResources(productImg[0])" alt="product_img" class="max-w-112 max-h-112 rounded-2xl shadow-lg shadow-gray-400/50 dark:shadow-gray-700">
        <div class="grid grid-cols-5 max-w-112 mt-3 gap-2">
          <img v-for="(img, i) in productImg" :key="i" :src="getResources(img)" alt="product_preview_img" class="rounded-md border-2 border-solid hover:border-[#EE4D2D] cursor-pointer">
          <!-- <img src="https://cf.shopee.vn/file/12ae221177dcb74dc4b1701afc06b298_tn" alt="product_preview_img" class="rounded-md border-2 border-solid hover:border-[#EE4D2D] cursor-pointer">
          <img src="https://cf.shopee.vn/file/5413e844e5893181b0f33a191af65cd0_tn" alt="product_preview_img" class="rounded-md border-2 border-solid hover:border-[#EE4D2D] cursor-pointer">
          <img src="https://cf.shopee.vn/file/7ed7a314372976ba07c7cc4f083bbf68_tn" alt="product_preview_img" class="rounded-md border-2 border-solid hover:border-[#EE4D2D] cursor-pointer">
          <img src="https://cf.shopee.vn/file/f0ef79bb6556880ebb85baab0e64c8d6" alt="product_preview_img" class="rounded-md border-2 border-solid hover:border-[#EE4D2D]">
          <img src="https://cf.shopee.vn/file/963e9b04751b757bb2a4ead4d1a2f1e9_tn" alt="product_preview_img" class="rounded-md border-2 border-solid hover:border-[#EE4D2D] cursor-pointer"> -->
        </div>
      </div>
      <div class="pr-5 grid content-between min-h-112">
        <h2 class="break-words text-xl font-medium">
          🔥{{ productResponseData.name }}
        </h2>
        <div class="flex divide-1 divide-solid divide-x divide-gray-300">
          <div class="flex items-center gap-2 pr-3">
            <p class="border-b-1 border-b-solid border-b-[#EE4D2D] text-[#EE4D2D] font-medium">
              5.0
            </p>
            <div class="flex gap-0.25">
              <div v-for="i in 5" :key="i">
                <IStars />
              </div>
            </div>
          </div>
          <div class="flex item gap-2 px-3">
            <p class="border-b-1 border-b-solid border-b-black font-medium">
              1
            </p>
            <p class="text-gray-500">
              {{ t('product.evaluate') }}
            </p>
          </div>
          <div class="flex item gap-2 px-3">
            <p class="font-medium">
              {{ productResponseData.sold }}
            </p>
            <p class="text-gray-500">
              {{ t('product.solded') }}
            </p>
          </div>
        </div>
        <div class="py-3 px-5 bg-[#FAFAFA] dark:bg-gray-700 rounded-lg flex items-center gap-5">
          <div class="old-price flex items-start text-gray-500 line-through">
            <p>$</p>
            <h2 class="font-medium text-sm">
              78.000
            </h2>
          </div>
          <div class="current-price flex text-[#EE4D2D]">
            <p>$</p>
            <h2 class="font-medium text-3xl">
              {{ productPrice }}
            </h2>
          </div>
          <div class="bg-[#EE4D2D] rounded-sm px-1">
            <p class="text-white font-medium text-xs">
              {{ productStatus(productResponseData.status_id) }}
            </p>
          </div>
        </div>
        <div class="infor">
          <label>{{ t('product.weight') }}</label>
          <p>{{ productResponseData.weight }}gram</p>
          <p class="text-[#EE4D2D] bg-[#FFEEE8] px-1 text-sm ml-5">
            {{ t('product.buy-with-deal') }}
          </p>
        </div>
        <div class="infor">
          <label>{{ t('product.shipping') }}</label>
          <p class="text-sm flex gap-2 items-center">
            <IBShipping /> {{ t('product.transport') }}
          </p>
          <div>
            <select name="province" class="cursor-pointer dark:bg-gray-700 rounded-md px-2 appearance-none border-1 border-dashed border-gray-300">
              <option value="" selected hidden disabled>
                Choose province
              </option>
              <option v-for="(province, i) in provinceNames" :key="i" :value="province" class="mt-5 bg-[#FFF5F1] dark:bg-gray-700">
                {{ province }}
              </option>
            </select>
          </div>
        </div>

        <div v-for="(variation, index) in productResponseData.variations" :key="index" class="infor">
          <label>{{ variation.name }}</label>
          <div class="uppercase flex gap-2">
            <p v-for="(option, i) in variation.options" :key="i" class="box-type" :class="{active:equalArray(isChoossen, [index, i])}" @click="getModelStock(productResponseData.models, index, i)">
              {{ option }}
            </p>
          </div>
        </div>

        <div class="infor">
          <label>{{ t('product.quantities') }}</label>
          <div class="uppercase flex items-center rounded-md border-1 border-solid border-gray-300 text-sm">
            <p class="px-2 cursor-pointer hover:bg-[#FAFAFA]" :class="{'pointer-events-none opacity-50': payloadCart.quantity<2}" @click="payloadCart.quantity--">
              <IBMinus />
            </p>
            <p class="border-l-1 border-l-solid border-l-gray-300 border-r-1 border-r-solid border-r-gray-300 font-medium px-5 py-1">
              {{ payloadCart.quantity }}
            </p>
            <p class="px-2 cursor-pointer hover:bg-[#FAFAFA]" :class="{'pointer-events-none': payloadCart.quantity >= productStock}" @click="payloadCart.quantity++">
              <IBPlus />
            </p>
          </div>
          <p class="lowercase text-gray-500">
            {{ productStock }} {{ t('product.available-products') }}
          </p>
        </div>
        <div class="flex gap-3">
          <button class="px-5 py-3 rounded-md bg-[#FFEEE8] hover:bg-[#FFF5F1] border-1 border-solid border-[#EE4D2D] text-[#EE4D2D] capitalize flex items-center gap-1" @click="handleAdd">
            <ICart class="max-h-6" />{{ t('product.add-to-cart') }}
          </button>
          <button class="px-5 py-3 rounded-md bg-[#EE4D2D] hover:bg-[#F05D40] border-1 border-solid border-[#EE4D2D] text-white capitalize" @click="handleOrder">
            {{ t('product.order-now') }}
          </button>
          <button v-if="isAdd" class="px-5 py-3 rounded-md bg-[#FFEEE8] hover:bg-[#FFF5F1] border-1 border-solid border-[#EE4D2D] text-[#EE4D2D] capitalize flex items-center gap-1" @click="router.push('/buyer/cart')">
            <ICart class="max-h-6" />View cart
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap gap-10 py-5">
      <div class="min-w-112 flex justify-center items-center gap-2 cursor-pointer">
        <IBLove />
        <p>{{ t('product.total-liked') }}: (934)</p>
      </div>
      <div class="flex justify-center items-center gap-5">
        <div class="flex items-center gap-1">
          <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/83e10a1f95cb083579c089448ef8dd3b.png" alt="insurance_icon" class="max-w-4 max-h-4">
          <p>e-shopee {{ t('product.insurance') }}</p>
        </div>
        <div class="capitalize text-gray-500 text-sm">
          <p>3 {{ t('product.return-refund') }}</p>
        </div>
      </div>
    </div>
  </div>

  <div class="shop-product-container max-w-300 bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-400/50 p-5 mx-2 divide-x divide-1 divide-solid divide-gray-300 flex flex-wrap">
    <div class="flex">
      <img v-if="seller.payget.avatar_image" :src="`https://tp-o.tk/resources/images/${seller.payget.avatar_image}`" alt="shop_avatar" class="max-w-19 max-h-19 rounded-full shadow-md shadow-gray-200 mr-4 object-cover">
      <img v-else src="https://cf.shopee.vn/file/7ebd612d6fddcf7f4114bf2d97da382a_tn" alt="shop_avatar" class="max-w-19 max-h-19 rounded-full shadow-md shadow-gray-200 mr-4">
      <div class="min-w-85">
        <p class="font-medium text-md">
          {{ seller.payget.name }}
        </p>
        <p class="text-gray-500 text-xs">
          {{ t('product.online') }} 1 minutes {{ t('product.ago') }}
        </p>
        <div class="flex gap-2 text-sm mt-2">
          <button class="px-3 py-0.5 rounded-md bg-[#FFEEE8] hover:bg-[#FFF5F1] border-1 border-solid border-[#EE4D2D] text-[#EE4D2D] capitalize flex items-center gap-1">
            <IChat />{{ t('product.chat-now') }}
          </button>
          <button class="px-3 py-1 rounded-md hover:bg-[#FAFAFA] border-2 border-solid border-gray-300 text-[#EE4D2D] capitalize flex items-center gap-1" @click="onvisitShop">
            <IShop />{{ t('product.visit-shop') }}
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-around items-center w-3/5 text-sm text-gray-400">
      <div>
        <div class="flex gap-2 min-w-27 capitalize">
          <p>{{ t('product.evaluate') }}</p>
          <span>{{ seller.statics.average_raiting }}</span>
        </div>
        <div class="flex gap-2 min-w-27 capitalize">
          <p>{{ t('product.productions') }}</p>
          <span>{{ seller.statics.product_count }}</span>
        </div>
      </div>
      <div>
        <div class="flex gap-2 min-w-27">
          <p>{{ t('product.response-ratio') }}</p>
          <span>{{ seller.statics.nonfulfilment_rate }}%</span>
        </div>
        <div class="flex gap-2 min-w-27">
          <p>{{ t('product.response-time') }}</p>
          <span>{{ t('product.in-some-hours') }}</span>
        </div>
      </div>
      <div>
        <div class="flex gap-2 min-w-27">
          <p>{{ t('shop.joined') }}</p>
          <span>{{ handleDate(seller.payget.created_at) }}</span>
        </div>
        <div class="flex gap-2 whitespace-nowrap">
          <p>{{ t('product.follower') }}</p>
          <span>9.4k</span>
        </div>
      </div>
    </div>
  </div>

  <div class="product-details max-w-300 bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-400/50 p-5 mx-2">
    <div class="bg-[#FAFAFA] dark:bg-gray-700 p-3 rounded-xl flex items-center gap-2 uppercase text-xl font-medium">
      <IBDescription />
      <h2>
        {{ t('product.product-describes') }}
      </h2>
    </div>
    <div>
      <label>{{ t('product.category') }}</label>
      <div class="text-[#0055BD] cursor-pointer font-medium flex">
        e-shopee >
        <div v-if="productResponseData.attributes" class="flex gap-7">
          <p v-for="(attr, i) in productResponseData.attributes" :key="i">
            {{ attr.name }} > {{ attr.value }}
          </p>
        </div>
        <p v-else>
          updating...
        </p>
      </div>
    </div>
    <div>
      <label>{{ t('product.organization') }}</label>
      <p>Trung tâm hàng nội địa xuất khẩu Quảng Châu</p>
    </div>
    <div>
      <label>{{ t('product.origin') }}</label>
      <p>VietNam</p>
    </div>
    <div>
      <label>{{ t('product.address') }}</label>
      <p>{{ t('product.updating') }}...</p>
    </div>
    <div>
      <label>{{ t('product.warehouse') }}</label>
      <p>14984</p>
    </div>
    <div>
      <label>{{ t('product.ship-from') }}</label>
      <p>Huyện Tân Kỳ, Nghệ An</p>
    </div>
    <div>
      <p v-for="(desc, i) in productResponseData.description?.split('\\n')" :key="i">
        &bull; {{ desc }}
      </p>

      <!-- <p>🔥Thanh toán khi nhận hàng liên hệ trước với shop nếu muốn xem hàng trước khi thanh toán</p>
      <p>Hotline: 0842610686</p>
      <p>🔥 Đổi trả miễn phí trong 15 ngày lỗi do nhà sản xuất</p>
      <p>🔥Bảo Hành: 6 tháng</p>
      <p>🔥Xuất Xứ: Shop chuyên hàng nhập thái và VNXK nói không với hàng chợ kém chất lượng</p>
      <p>🔥Size: 38 – 43</p>
      <p>🔥 Đế dép được thiết kế chịu ma sát tốt,  ôm chân, thon gọn, thoải mái di chuyển mà không lo đau chân Sử dụng trong mọi thời tiết và địa hình. Thiết kế tinh tế, phù hợp xu hướng thời trang hiện đại, trẻ trung, năng động. Thích hợp với nhiều trang phục của phái mạnh khi đi làm, đi chơi,...</p>
      <p>⚡ Kiểu dáng hottrend của năm 2021.</p>
      <p>⚡ Giày đẹp, nhẹ, bền. Có thể làm giày cặp, giày nhóm. Thích hợp đi chơi, chạy bộ, gym, đi học, đi làm...</p>
      <p>⚡ Có thể kết hợp Đồ, jeans, sooc, Ngố vv…. Đều phù hợp</p>
      <p>🔥Shop chuyên sỉ và lẻ toàn quốc với giá tốt nhất đến tay khách hàng</p>
      <p>🍀 Zalo; 0879614176</p>
      <p>🍀 Số Lượng Có Hạn , Nhanh Tay Đặt Hàng Nhé</p>
      <p>🍀 Cảm Ơn Khách Hàng Luôn Tin Tưởng Và Ủng Hộ Shop ☘️</p> -->
      <p>
        <span v-for="i in 20" :key="i" class="mr-3 text-[#0055BD] cursor-pointer">#dép nam</span>
      </p>
    </div>
  </div>

  <div class="product-evalutions max-w-300 bg-white dark:bg-gray-800 rounded-xl shadow-md shadow-gray-400/50 p-5 mx-2">
    <div class="text-xl uppercase flex items-center gap-2 uppercase text-xl font-medium">
      <IBDescription />
      <h2>{{ t('product.product-evalutions') }}</h2>
    </div>
    <div class="divide-y divide-1 divide-solid divide-gray-200">
      <div v-for="i in 2" :key="i" class="flex justify-between items-start py-3">
        <div class="flex">
          <div class="px-3">
            <img src="https://cf.shopee.vn/file/3922ddaf7b5dde58c3193c6689e7aaca_tn" alt="customer_avatar_img" class="max-w-10 max-h-10 rounded-full">
          </div>
          <div class="customer-cmt text-sm text-gray-600 dark:text-gray-300">
            <p class="customer-username text-xs">
              yen050619
            </p>
            <p class="flex gap-0.25">
              <IStars v-for="i in 5" :key="i" />
            </p>
            <p>
              Very good! I like it.
            </p>
            <div class="flex items-center gap-5">
              <p class="flex items-center gap-1.5 cursor-pointer">
                <IBLike /> 11
              </p>
              <p class="flex items-center gap-1.5 cursor-pointer">
                <IBChat /> Comment
              </p>
            </div>
          </div>
        </div>
        <div class="cursor-pointer hover:opacity-60">
          <IBThreeDot />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.infor{
    display: flex;
    text-transform: capitalize;
    gap: 0.5rem;
}
.infor > label{
    width: 6.8rem;
    font-size: 0.9em;
    color: rgb(107, 114, 128);
    font-weight: 500;
}
.infor .box-type{
  border: 1px solid #e9e9e9;
  cursor: pointer;
  border-radius: 0.3rem;
  padding: 0 0.5rem;
}
.infor .box-type:hover,
.infor .box-type.active{
  color: #EE4D2D;
  border-color: #EE4D2D;
  background: #FFF5F1;
}
.shop-product-container span{
  color: #EE4D2D;
}
.product-details > div:not(:first-child):not(:last-child) {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  gap: 1rem;
}

.product-details label{
  min-width: 8.5rem;
  color: rgb(156, 163, 175);
}
.product-details > div:last-child > p:not(:last-child){
  margin: 0.5rem 0 0.5rem 1rem;
  font-size: 0.875rem;
}
.product-evalutions .customer-cmt p{
  margin: 0 0.5rem 0.5rem 0;
}
@media (max-width: 1000px){
  .main-content{
    flex-wrap: wrap;
  }
  .main-content > div:nth-child(2){
    margin-left: 0.75rem;
  }
}
</style>
