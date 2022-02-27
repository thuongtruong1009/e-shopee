<route lang="yaml">
meta:
  layout: LFilter
</route>

<script setup>
const priceValue = ref(200)
const priceMin = ref(200)
const priceMax = ref(1000)

const tags = reactive(['shopping', 'new_products', 'accessories', 'sales'])
const totalProducts = ref(13)
const images = reactive([{
  img: '/img/arrival/1.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/arrival/2.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/arrival/3.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/arrival/4.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/arrival/5.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/arrival/6.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/arrival/7.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/arrival/8.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/arrival/9.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/arrival/10.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/product/shoes/1.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/product/shoes/2.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/product/shoes/3.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/product/shoes/5.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/product/shoes/6.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/product/shoes/7.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/product/shoes/8.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/product/shoes/9.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
},
{
  img: '/img/product/shoes/12.webp',
  desc: 'New Luxury Men\'s Slim Fit Shirt Short Sleeve...',
  price: 11.90,
}])
</script>

<template>
  <div class="filter-container bg-white grid grid-cols-4 py-20 px-10 gap-3">
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
          Filter By
        </h4>
      </div>

      <div>
        <form action="#">
          <h4 class="sub-title">
            Categories
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
            Price
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
            color
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
            Brand
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
          Product Tags
        </h4>
      </div>
      <ul class="product-tag flex justify-start items-center mb-10 mt-5 flex-wrap ">
        <!-- <li><a href="#">shopping</a></li>
        <li><a href="#">New products</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">sale</a></li> -->
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
          <li class="nav-item text-lg hover:text-red-500">
            <a
              id="pills-home-tab" class="nav-link active"
              href="#pills-home"
            >
              <i class="fa fa-th" />

            </a>
          </li>
          <li class="nav-item ml-3 mr-7 text-lg hover:text-red-500">
            <a
              id="pills-profile-tab" class="nav-link"
              href="#pills-profile"
            ><i class="fa fa-list" /></a>
          </li>
          <li><span class="total-products text-sm">There are {{ totalProducts }} products.</span></li>
        </ul>
        <div>
          <span class="text-sm mr-3">Sort by: </span>
          <select id="sort_by" name="sort_by" class="outline-none rounded-xl px-3 py-0.5 cursor-pointer text-sm">
            <option value="relevance">
              Relevance
            </option>
            <option value="name_a_to_z">
              Name, A to Z
            </option>
            <option value="name_z_to_a">
              Name, Z to A
            </option>
            <option value="price_low_to_high">
              Price, low to high
            </option>
            <option value="price_high_to_low">
              Price, high to low
            </option>
          </select>
        </div>
      </div>
      <div class="grid-products-list flex flex-wrap gap-5 py-10">
        <div v-for="(image, i) in images" :key="i" class="card duration-200 ease-linear relative rounded-lg w-60 hover:shadow-md hover:shadow-gray-400/50 pb-0">
          <div class="card-type flex justify-between absolute w-full p-2">
            <span class="bg-green-600 text-white font-bold capitalize text-xs rounded p-0.75">-10%</span>
            <span class="bg-orange-400 text-white font-bold capitalize text-xs rounded p-0.75">new</span>
          </div>
          <div class="card-img max-w-full max-h-7/12">
            <a href="single-product.html">
              <img class="first-img rounded-t-lg" :src="image.img" alt="thumbnail">
            </a>
          </div>
          <div class="product-description text-left p-2">
            <p class="card-title cursor-pointer duration-200 ease-linear hover:text-[#FF6600]">
              {{ image.desc }}
            </p>
            <div class="star-rating flex justify-start">
              <img v-for="i in 5" :key="i" src="https://img.icons8.com/fluency/48/ffffff/star.png" class="max-w-4 max-h-4">
            </div>
            <div class="flex items-center justify-between">
              <h6 class="card-price font-bold tracking-tighter">
                ${{ image.price }}
              </h6>
              <ICart class="cart w-9 h-9 p-2 rounded-full bg-gray-100 cursor-pointer duration-200 ease-linear text-gray-500 hover:bg-[#FF9900] hover:text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@font-face {
    font-family: "Gilroy-Medium";
    src: url("/fonts/Gilroy-Medium.woff");
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
  height: 3px;
  cursor: grab;
  animation: 0.2s;
  background: #03a9f4;
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
  background: #03a9f4;
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
</style>
