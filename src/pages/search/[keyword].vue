<route lang="yaml">
meta:
  layout: LFilter
</route>

<script setup lang="ts">
import { keyword } from '~/stores/keyword'
import { useLoading } from '~/stores/loading'
import ProductRequest from '~/services/product-request'

const props = defineProps<{ keyword: string }>()
const router = useRouter()
const useKeyword = keyword()
const loading = useLoading()
const { t } = useI18n()

useHead({
  title: `search | ${props.keyword}`,
})
// ------------- get result of search product -----------
const payload = reactive({
  limit: 12,
  page: 1,
  keyword: props.keyword,
  order_by: 1,
  filter: {
    category_ids: [
      1,
    ],
  },
})
onMounted(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/buyer/login' })
})
watch(async() => {
  loading.isLoading = true
  const { data: searchData } = await ProductRequest.searchProducts({ params: { limit: payload.limit, page: payload.page, keyword: payload.keyword, order_by: payload.order_by, filter: payload.filter } })
  useKeyword.resultProduct = searchData.data
  loading.isLoading = false
})
// get props keyword from store after search
watchEffect(() => {
  useKeyword.setNewKeyword(props.keyword)
})

// ------------------------------------------------------------------
const priceValue = ref(200)
const priceMin = ref(200)
const priceMax = ref(1000)

const tags = reactive(['shopping', 'new_products', 'accessories', 'sales'])
const regime = ref('grid')
const onChangeRegime = (type: any) => {
  regime.value = String(type)
}
</script>

<template>
  <div class="filter-container bg-white grid grid-cols-4 py-20 px-10 gap-3 dark:bg-gray-800">
    <aside class="left-sidebar theme1 text-left col-span-1 px-2">
      <div class="search-filter">
        <h4 class="title">
          Bags &amp; Shoes
        </h4>
      </div>

      <ul class="blog-ctry-menu pb-5">
        <li>
          <a href="" class="flex justify-between items-center">Shoes <span>+</span></a>
          <ul class="category-sub-menu">
            <li><a href="#">Women Shoes</a></li>
            <li><a href="#">Men Shoes</a></li>
            <li><a href="#">Boots</a></li>
            <li><a href="#">Casual Shoes</a></li>
            <li><a href="#">Flip Flops</a></li>
          </ul>
        </li>
        <li>
          <a href="" class="flex justify-between items-center">Luggage &amp; Bags <span>+</span></a>
          <ul class="category-sub-menu">
            <li><a href="#">Stylish Backpacks</a></li>
            <li><a href="#">Shoulder Bags</a></li>
            <li><a href="#">Crossbody Bags</a></li>
            <li><a href="#">Briefcases</a></li>
            <li><a href="#">Luggage &amp; Travel</a></li>
          </ul>
        </li>
        <li>
          <a href="" class="flex justify-between items-center">Accessories <span>+</span></a>
          <ul class="category-sub-menu">
            <li><a href="#">Cosmetic Bags &amp; Cases</a></li>
            <li><a href="#">Wallets &amp; Card Holders</a></li>
            <li><a href="#">Luggage Covers</a></li>
            <li><a href="#">Passport Covers</a></li>
            <li><a href="#">Bag Parts &amp; Accessories</a></li>
          </ul>
        </li>
      </ul>

      <div class="search-filter">
        <h4 class="title">
          {{ t('search.filter-by') }}
        </h4>
      </div>

      <div>
        <form action="#">
          <h4 class="sub-title">
            {{ t('search.categories') }}
          </h4>
          <div class="filter-check-box">
            <input id="20820" type="checkbox" class="accent-pink-500">
            <label for="20820">Digital Cameras <span>(13)</span></label>
          </div>
          <div class="filter-check-box">
            <input id="20821" type="checkbox" class="accent-pink-500">
            <label for="20821">Camcorders <span>(13)</span></label>
          </div>
          <div class="filter-check-box">
            <input id="20822" type="checkbox" class="accent-pink-500">
            <label for="20822">Camera Drones<span>(13)</span></label>
          </div>

          <h4 class="sub-title">
            {{ t('search.price') }}
          </h4>
          <div class="filter-check-box">
            $0 - ${{ priceValue }}
          </div>
          <div class="range-wrap">
            <div class="range-value">
              <span :style="`left: calc(${Number((priceValue - priceMin) * 100 / (priceMax - priceMin))}% + (${10 + (Number((priceValue - priceMin) * 100 / (priceMax - priceMin)) * 3.2)}px))`">{{ priceValue }}</span>
            </div>
            <input v-model="priceValue" type="range" :min="priceMin" :max="priceMax" step="1">
          </div>

          <h4 class="sub-title">
            {{ t('search.color') }}
          </h4>
          <div class="pt-2">
            <label class="checkbox-container" for="20826">grey (4)
              <input id="20826" type="checkbox">
              <span class="checkmark bg-[#7e7e7e]" />
            </label>
            <label class="checkbox-container" for="20827">white (3)
              <input id="20827" type="checkbox" checked="checked">
              <span class="checkmark bg-white" />
            </label>
            <label class="checkbox-container" for="20828">black (6)
              <input id="20828" type="checkbox">
              <span class="checkmark bg-black" />
            </label>
            <label class="checkbox-container" for="20829">camel (2)
              <input id="20829" type="checkbox" checked="checked">
              <span class="checkmark bg-[#C19A6B]" />
            </label>
          </div>

          <h4 class="sub-title">
            {{ t('search.brand') }}
          </h4>
          <div class="filter-check-box">
            <input id="20824" type="checkbox" class="accent-pink-500">
            <label for="20824">Graphic Corner<span>(5)</span></label>
          </div>
          <div class="filter-check-box">
            <input id="20825" type="checkbox" class="accent-pink-500">
            <label for="20825">Studio Design<span>(8)</span></label>
          </div>
        </form>
      </div>

      <div class="search-filter">
        <h4 class="title">
          {{ t('search.tags') }}
        </h4>
      </div>
      <ul class="product-tag flex justify-start items-center mb-10 mt-5 flex-wrap ">
        <li v-for="i in tags.length" :key="i" :class="{'active':i === 2}">
          <a href="#">{{ tags[i-1] }}</a>
        </li>
      </ul>
      <div class="banner hover-animation relative overflow-hidden">
        <a href="shop-grid-4-column.html" class="block">
          <img src="/img/banner/2.webp" alt="img" class="rounded-xl">
        </a>
      </div>
    </aside>
    <!-- ------------------------------------ -->
    <div class="grid-products-filter col-span-3">
      <div class="flex justify-between items-center bg-gray-100 dark:bg-gray-700 rounded-lg py-2 px-5">
        <ul id="pills-tab" class="nav-pills flex items-center">
          <li class="nav-item text-lg hover:text-red-500 cursor-pointer" :style="[regime === 'grid' ? {color:'red'} : {color:'gray'}]" @click="onChangeRegime('grid')">
            <i class="fa fa-th" />
          </li>
          <li class="nav-item ml-3 mr-7 text-lg hover:text-red-500 cursor-pointer" :style="[regime === 'flow' ? {color:'red'} : {color:'gray'}]" @click="onChangeRegime('flow')">
            <i class="fa fa-list" />
          </li>
          <li><span class="total-products text-sm">{{ t('search.there-are') }} {{ useKeyword.resultProduct.length }} {{ t('search.products') }}.</span></li>
        </ul>
        <div>
          <span class="text-sm mr-3" for="sort_by">{{ t('search.sort-by') }}: </span>
          <select id="sort_by" v-model="payload.order_by" name="sort_by" class="px-3 py-0.5 cursor-pointer text-sm text-gray-900 bg-blue-100 rounded-lg border border-gray-300 focus:(ring-blue-500 border-blue-500) dark:(bg-gray-700 placeholder-gray-400 text-white) dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option value="" disabled selected hidden>
              {{ t('search.relevance') }}
            </option>
            <option value="name_a_to_z" class="bg-white dark:bg-transparent hidden">
              {{ t('search.name') }}, {{ t('search.a-z') }}
            </option>
            <option :value="1" class="bg-white dark:bg-transparent">
              {{ t('search.name') }} newest
            </option>
            <option :value="2" class="bg-white dark:bg-transparent">
              {{ t('search.price') }}, {{ t('search.high-low') }}
            </option>
            <option :value="3" class="bg-white dark:bg-transparent">
              {{ t('search.price') }}, {{ t('search.low-high') }}
            </option>
          </select>
        </div>
      </div>

      <Transition name="slide-fade">
        <div v-if="regime === 'grid'">
          <div v-if="loading.isLoading" class="grid-products-list flex flex-wrap gap-5 py-10">
            <RProductCardGrid v-for="index in 12" :key="index" />
          </div>
          <div v-else v-cloak class="grid-products-list flex flex-wrap gap-5 py-10">
            <div v-for="(prod, index) in useKeyword.resultProduct" :key="index" class="card duration-200 ease-linear relative rounded-lg w-60  shadow-md dark:bg-gray-700 hover:shadow-gray-400/50 pb-0">
              <CProductCardGrid :card="prod" mode="discount" />
            </div>
          </div>
        </div>
      </Transition>
      <Transition name="slide-fade">
        <div v-if="regime === 'flow'" class="grid-products-list grid gap-3 py-10">
          <CProductCardFlow v-for="(prod, index) in useKeyword.resultProduct" :key="index" class="card duration-200 ease-linear rounded-xl w-full shadow-md hover:(shadow-lg shadow-gray-400/50) pb-0 flex border-t-1 border-t-[#e9e9e9]" :card="prod" />
        </div>
      </Transition>
      <div v-if="useKeyword.resultProduct.length===0" class="grid justify-center gap-5">
        <PNotFound class="w-70 justify-self-center" />
        <div class="flex gap-5 text-gray-500 dark:text-gray-300">
          <p class="bg-[#e9e9e9] dark:(bg-gray-700 shadow-gray-700) rounded-full shadow-md shadow-gray-300 w-7 h-7 p-1 cursor-pointer" @click="router.back()"><svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" /></svg></p>
          <p>not have product at here</p>
        </div>
      </div>
      <CPagination v-else :index="payload.page" @on-prev="--payload.page" @on-next="++payload.page" />
    </div>
  </div>
</template>

<style scoped>
@font-face {
    font-family: "Gilroy-Medium";
    src: url("/fonts/Gilroy-Medium.woff");
}
@font-face {
    font-family: "Gilroy-Light";
    src: url("/fonts/Gilroy-Light.woff");
}
.search-filter{
  font-family: "Gilroy-Medium";
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: #1d1d1d;
  padding-bottom: 20px;
  margin-bottom: 20px;
  font-weight: 500;
  position: relative;
  display: block;
  border-bottom: 1px solid #ebebeb;
  text-transform: capitalize;
}
.search-filter::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 60px;
  height: 1px;
  background: #f33535;
}
.blog-ctry-menu > li > a, .filter-check-box{
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 2;
}

.blog-ctry-menu li ul.category-sub-menu {
  display: none;
}

.blog-ctry-menu li ul.category-sub-menu li a {
  font-size: 13px;
  line-height: 35px;
  padding: 0 10px;
  display: block;
  color: #707070;
}
 h4{
    font-weight: 500;
    padding-top: 0.5rem;
}
/* ********************************** COLOR CHECKBOX *************************** */
input[type="checkbox"]{
    margin-right: 1rem;
}
.filter-check-box{
    padding: 0.25rem 0;
}
.checkbox-container {
  display: block;
  position: relative;
  padding-left: 2rem;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 0.9rem;
  text-transform: capitalize;
  transition: 0.2s;
}
.checkbox-container:hover{
  color: #F33535;
}

/* Hide the browser's default checkbox */
.checkbox-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1rem;
  width: 1rem;
  border-radius: 0.2rem;
  box-shadow: 1px 1px 3px gray;
}

/* When the checkbox is checked, add a blue background */
.checkbox-container input:checked ~ .checkmark {
  background-color: transparent;
  box-shadow: none;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.checkbox-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.checkbox-container .checkmark:after {
  left: 5px;
  top: 0;
  width: 6px;
  height: 14px;
  border: solid #F33535;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
/* ************************ SLIDER RANGE ************************ */
input[type=range] {
  -webkit-appearance: none;
  margin: 20px 0;
  width: 100%;
  cursor: grab;
}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 5px;
  cursor: grab;
  animation: 0.2s;
  background: #F33535;
  border-radius: 25px;

}
input[type=range]::-webkit-slider-thumb {
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.7);
  cursor: grab;
  -webkit-appearance: none;
  margin-top: -8px;
}
input[type=range]:focus::-webkit-slider-runnable-track {
  background: #F33535;
}
.range-wrap{
  width: 100%;
  position: relative;
}
.range-value{
  position: absolute;
}

.range-value span{
  width: 1.8rem;
  height: 1.3rem;
  line-height: 24px;
  text-align: center;
  background: #03a9f4;
  color: #fff;
  font-size: 0.7rem;
  display: block;
  position: absolute;
  top: -1em;
  left: -50%;
  transform: translate(-50%, 0);
  border-radius: 6px;
  cursor: grab;
}
.range-value span:before{
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-top: 10px solid #03a9f4;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  margin-top: -1px;
}
/* ***************************** TAGS ******************************** */
.product-tag > li{
  border: 1px solid rgb(223, 223, 223);
  padding: 0.3rem 1.2rem;
  margin: 0.25rem;
  border-radius: 2rem;
  transition: 0.2s;
  font-size: 0.9rem;
  font-weight: lighter;
  cursor: pointer;
}
.product-tag > li:hover,
.product-tag > li.active{
  background: #F33535;
  color: white;
}
.product-infor{
 font-family: "Gilroy-Light";
}

/* ************************ TRANSITION ***************************** */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(2rem);
  opacity: 0;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes popup-animate {
  0%{
    transform: scale(1.3);
    opacity: 0;
  }
  100%{
    transform: scale(1);
    opacity: 1;
  }
}
</style>
