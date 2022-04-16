<route lang="yaml">
meta:
  layout: buyer/LBFilter
</route>

<script setup>
useHead({
  title: 'e-shopee | buyer wishlist',
})
const { t } = useI18n()

const priceValue = ref(200)
const priceMin = ref(200)
const priceMax = ref(1000)

const tags = reactive(['shopping', 'new_products', 'accessories', 'sales'])
const totalProducts = ref(13)
const regime = ref('grid')
const onChangeRegime = (type) => {
  regime.value = String(type)
}

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

const products = reactive([{
  img: '/img/arrival/1.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/arrival/2.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 5.99,
},
{
  img: '/img/arrival/3.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/arrival/4.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/arrival/5.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/arrival/6.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/arrival/7.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/arrival/8.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/arrival/9.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/arrival/10.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/product/shoes/1.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/product/shoes/2.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/product/shoes/3.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/product/shoes/5.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/product/shoes/6.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/product/shoes/7.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/product/shoes/8.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/product/shoes/9.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
},
{
  img: '/img/product/shoes/12.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  infor: 'Block out the haters with the fresh adidas® Originals Kaval Windbreaker Jacket. Part of the Kaval Collection. Regular fit is eased, but not sloppy, and perfect for any activity. Plain-woven jacket specifically constructed for freedom of movement.',
  quantity: 1200,
  price: 11.90,
  discountPrice: 11.90,
}])
</script>

<template>
  <div class="filter-container bg-white grid grid-cols-4 py-20 px-10 gap-3 dark:bg-black">
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
          {{ t('wishlist.filter-by') }}
        </h4>
      </div>

      <div>
        <form action="#">
          <h4 class="sub-title">
            {{ t('wishlist.categories') }}
          </h4>
          <div class="filter-check-box">
            <input id="20820" type="checkbox">
            <label for="20820">Digital Cameras <span>(13)</span></label>
          </div>
          <div class="filter-check-box">
            <input id="20821" type="checkbox">
            <label for="20821">Camcorders <span>(13)</span></label>
          </div>
          <div class="filter-check-box">
            <input id="20822" type="checkbox">
            <label for="20822">Camera Drones<span>(13)</span></label>
          </div>

          <h4 class="sub-title">
            {{ t('wishlist.price') }}
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
            {{ t('wishlist.color') }}
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
            {{ t('wishlist.brand') }}
          </h4>
          <div class="filter-check-box">
            <input id="20824" type="checkbox">
            <label for="20824">Graphic Corner<span>(5)</span></label>
          </div>
          <div class="filter-check-box">
            <input id="20825" type="checkbox">
            <label for="20825">Studio Design<span>(8)</span></label>
          </div>
        </form>
      </div>

      <div class="search-filter">
        <h4 class="title">
          {{ t('wishlist.tags') }}
        </h4>
      </div>
      <ul class="product-tag flex justify-start items-center mb-10 mt-5 flex-wrap ">
        <li v-for="i in tags.length" :key="i">
          <a href="#">{{ tags[i-1] }}</a>
        </li>
      </ul>
      <div class="banner hover-animation relative overflow-hidden">
        <a href="shop-grid-4-column.html" class="block">
          <img src="/img/banner/2.webp" alt="img" class="rounded-md">
        </a>
      </div>
    </aside>
    <!-- ************************************ -->
    <div class="grid-products-filter col-span-3">
      <div class="flex justify-between items-center bg-gray-100 rounded-lg py-2 px-5">
        <ul id="pills-tab" class="nav-pills flex items-center">
          <li class="nav-item text-lg hover:text-red-500 cursor-pointer" :style="[regime === 'grid' ? {color:'red'} : {color:'gray'}]" @click="onChangeRegime('grid')">
            <i class="fa fa-th" />
          </li>
          <li class="nav-item ml-3 mr-7 text-lg hover:text-red-500 cursor-pointer" :style="[regime === 'flow' ? {color:'red'} : {color:'gray'}]" @click="onChangeRegime('flow')">
            <i class="fa fa-list" />
          </li>
          <li><span class="total-products text-sm">{{ t('wishlist.there-are') }} {{ totalProducts }} {{ t('wishlist.products') }}.</span></li>
        </ul>
        <div>
          <span class="text-sm mr-3">{{ t('wishlist.sort-by') }}: </span>
          <select id="sort_by" name="sort_by" class="outline-none rounded-xl px-3 py-0.5 cursor-pointer text-sm">
            <option value="relevance">
              {{ t('wishlist.relevance') }}
            </option>
            <option value="name_a_to_z">
              {{ t('wishlist.name') }}, A to Z
            </option>
            <option value="name_z_to_a">
              {{ t('wishlist.name') }}, Z to A
            </option>
            <option value="price_low_to_high">
              {{ t('wishlist.price') }}, low to high
            </option>
            <option value="price_high_to_low">
              {{ t('wishlist.price') }}, high to low
            </option>
          </select>
        </div>
      </div>
      <Transition name="slide-fade">
        <div v-if="regime === 'grid'" class="grid-products-list flex flex-wrap gap-5 py-10">
          <div v-for="(prod, i) in products" :key="i" class="card duration-200 ease-linear relative rounded-lg w-60 hover:shadow-md hover:shadow-gray-400/50 pb-0">
            <div class="card-type flex justify-between absolute w-full p-2">
              <span class="bg-green-600 text-white font-bold capitalize text-xs rounded p-0.75">-10%</span>
              <span class="bg-orange-400 text-white font-bold capitalize text-xs rounded p-0.75">new</span>
            </div>
            <div class="card-img max-w-full max-h-7/12">
              <a href="single-product.html">
                <img class="first-img rounded-t-lg" :src="prod.img" alt="thumbnail">
              </a>
            </div>
            <div class="product-description text-left p-2">
              <p class="card-title cursor-pointer duration-200 ease-linear hover:text-[#FF6600]">
                {{ prod.desc }}
              </p>
              <div class="star-rating flex justify-start">
                <img v-for="i in 5" :key="i" src="https://img.icons8.com/fluency/48/ffffff/star.png" class="max-w-4 max-h-4">
              </div>
              <div class="flex items-center justify-between">
                <h6 class="card-price font-bold tracking-tighter">
                  ${{ prod.price }}
                </h6>
                <ICart class="cart w-9 h-9 p-2 rounded-full bg-gray-100 cursor-pointer duration-200 ease-linear text-gray-500 hover:bg-[#FF9900] hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </Transition>
      <Transition name="slide-fade">
        <div v-if="regime === 'flow'" class="grid-products-list grid gap-3 py-10">
          <div v-for="(prod, i) in products" :key="i" class="card duration-200 ease-linear rounded-lg w-full hover:shadow-md hover:shadow-gray-400/50 pb-0 flex">
            <div class="relative">
              <div class="card-type flex justify-between absolute w-full p-5">
                <span class="bg-green-600 text-white font-bold capitalize text-xs rounded p-0.75">-10%</span>
                <span class="bg-orange-400 text-white font-bold capitalize text-xs rounded p-0.75">new</span>
              </div>
              <div class="card-img max-w-full max-h-7/12">
                <a href="single-product.html">
                  <img class="first-img rounded-t-lg" :src="prod.img" alt="thumbnail">
                </a>
              </div>
            </div>
            <div class="product-description text-left p-2">
              <div class="px-2">
                <p class="card-title cursor-pointer duration-200 ease-linear hover:text-[#FF6600]">
                  {{ prod.desc }}
                </p>
                <div class="star-rating flex justify-start py-2">
                  <img v-for="i in 5" :key="i" src="https://img.icons8.com/fluency/48/ffffff/star.png" class="max-w-4 max-h-4">
                </div>
                <div class="flex items-center justify-start">
                  <h6 class="card-price font-bold tracking-tighter mr-2" :style="[prod.price == prod.discountPrice ? {color: 'black'} : {color: '#9B9B9B','text-decoration': 'line-through'}]">
                    ${{ prod.price }}
                  </h6>
                  <h6 v-if="prod.price !== prod.discountPrice" class="font-bold tracking-tighter text-red-500">
                    ${{ prod.discountPrice }}
                  </h6>
                </div>
              </div>
              <div class="product-infor py-5 text-sm leading-6">
                <p v-for="(line, index) in prod.infor.split('.')" :key="index">
                  {{ line }}
                </p>
              </div>
              <div class="product-quantity">
                <p>{{ t('wishlist.availability') }}: <span class="text-[#10A391]">{{ prod.quantity }} In Stock</span></p>
              </div>
              <div class="py-5 flex justify-start">
                <h3 class="uppercase py-2.5 px-10 rounded-md bg-black text-white font-medium text-sm cursor-pointer hover:bg-[#F33535] duration-200" @click="onOpenPopup">
                  {{ t('wishlist.add-to-cart') }}
                </h3>
              </div>
              <div v-if="isPopup === true" class="popup-modal fixed w-screen h-screen top-0 left-0 flex justify-center items-center ease-linear">
                <div class="bg-white w-284 z-20 rounded-lg">
                  <div class="text-white flex justify-center items-center bg-black rounded-t-lg gap-2 relative py-2">
                    <ICheck />
                    <h5 class="text-lg" style="font-family: 'Gilroy-Medium'">
                      {{ t('wishlist.add-success-message') }}
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
                        <p>{{ t('wishlist.dimension') }}: <span class="text-sm font-normal">40x60cm</span></p>
                        <p>{{ t('wishlist.quantity') }}: 1</p>
                      </div>
                    </div>
                    <div class="col-span-4 px-10 text-sm font-semibold">
                      <p class="py-0.5 font-normal">
                        {{ t('wishlist.there-is') }} 1 {{ t('wishlist.item-in-your-cart') }}.
                      </p>
                      <p class="py-0.5">
                        {{ t('wishlist.total-products') }}: <span class="font-normal">$123.72</span>
                      </p>
                      <p class="py-0.5">
                        {{ t('wishlist.total-shipping') }}: <span class="font-normal">$7.00</span>
                      </p>
                      <p class="py-0.5">
                        {{ t('wishlist.taxes') }} <span class="font-normal">$0.00</span>
                      </p>
                      <p class="py-0.5">
                        {{ t('wishlist.total') }}: <span class="font-normal">$130.72 (tax excl.)</span>
                      </p>
                      <div class="uppercase flex text-white font-medium text-sm py-5">
                        <h6 class="bg-black rounded-md py-2 px-6 mr-2 hover:bg-red-500 cursor-pointer duration-200">
                          {{ t('wishlist.continue-shopping') }}
                        </h6>
                        <h6 class="bg-black rounded-md py-2 px-6 hover:bg-red-500 cursor-pointer duration-200 flex gap-2 items-center">
                          <ICheck />{{ t('wishlist.proceed-checkout') }}
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="isPopup === true" class="fixed z-10 w-screen h-screen bg-black opacity-5 top-0 left-0" @click="onClosePopup" />
              </div>
            </div>
          </div>
        </div>
      </Transition>
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
.product-tag > li:hover{
  background: #F33535;
  color: white;
}
.product-infor{
 font-family: "Gilroy-Light";
}
/* ************************ POPUP MODAL **************************** */
.popup-modal{
  animation: popup-animate 0.1s linear;
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
