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
          <div class="filter-check-box color-grey">
            <input id="20826" type="checkbox">
            <label for="20826">grey <span>(4)</span></label>
          </div>
          <div class="filter-check-box color-white">
            <input id="20827" type="checkbox">
            <label for="20827">white <span>(3)</span></label>
          </div>
          <div class="filter-check-box color-black">
            <input id="20828" type="checkbox">
            <label for="20828">black <span>(6)</span></label>
          </div>
          <div class="filter-check-box color-camel">
            <input id="20829" type="checkbox">
            <label for="20829">camel <span>(2)</span></label>
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
          <img src="/img/banner/2.jpg" alt="img">
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
  height: 4px;
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
  box-shadow: 0 0 4px 0 rgba(0,0,0, 1);
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
