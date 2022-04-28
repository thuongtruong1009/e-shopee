<script setup>
const { t } = useI18n()
const onLeftScroll = () => {
  document.getElementById('container').scrollLeft -= 260
}
const onRightScroll = () => {
  document.getElementById('container').scrollLeft += 260
}
const tabList1 = reactive([{
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
}])

const tabList2 = tabList1.slice()
const tabList3 = tabList1.slice()

const activeNav = ref(1)
const onActiveNav = (item) => {
  activeNav.value = item
}
</script>

<template>
  <div class="relative mx-8">
    <div>
      <div class="title">
        <h2 class="text-3xl capitalize">
          {{ t('carrival.our-products') }}
        </h2>
        <p class="opacity-60">
          {{ t('carrival.add-our-product') }}
        </p>
      </div>
      <div class="tab-menu">
        <div class="flex justify-center items-center">
          <ul class="flex">
            <li class="nav-item font-semibold" :class="{active : activeNav === 1}" @click="onActiveNav(1)">
              <a>Audio & Video</a>
            </li>
            <li class="nav-item font-semibold" :class="{active : activeNav === 2}" @click="onActiveNav(2)">
              <a>Camera & Photo</a>
            </li>
            <li class="nav-item font-semibold" :class="{active : activeNav === 3}" @click="onActiveNav(3)">
              <a>Smart Electronics</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="container" class="pb-5">
      <Transition duration="550" name="nested">
        <div v-if="activeNav === 1">
          <div id="content" class="flex items-center gap-5 px-1">
            <div v-for="(image, i) in tabList1" :key="i" class="card duration-300 ease-linear relative rounded-lg w-65">
              <div class="card-type flex justify-between absolute w-full p-2">
                <span class="bg-green-600 text-white font-bold capitalize text-xs rounded p-0.75">-10%</span>
                <span class="bg-orange-400 text-white font-bold capitalize text-xs rounded p-0.75">{{ t('carrival.new') }}</span>
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
      </Transition>

      <Transition duration="550" name="nested">
        <div v-if="activeNav === 2">
          <div id="content" class="flex items-center gap-5 px-1">
            <div v-for="(image, i) in tabList2" :key="i" class="card duration-300 ease-linear relative rounded-lg w-65">
              <div class="card-type flex justify-between absolute w-full p-2">
                <span class="bg-green-600 text-white font-bold capitalize text-xs rounded p-0.75">-10%</span>
                <span class="bg-orange-400 text-white font-bold capitalize text-xs rounded p-0.75">{{ t('carrival.new') }}</span>
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
      </Transition>

      <Transition duration="550" name="nested">
        <div v-if="activeNav === 3">
          <div id="content" class="flex items-center gap-5 px-1">
            <div v-for="(image, i) in tabList3" :key="i" class="card duration-300 ease-linear relative rounded-lg w-65">
              <div class="card-type flex justify-between absolute w-full p-2">
                <span class="bg-green-600 text-white font-bold capitalize text-xs rounded p-0.75">-10%</span>
                <span class="bg-orange-400 text-white font-bold capitalize text-xs rounded p-0.75">{{ t('carrival.new') }}</span>
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
                  <ICart class="cart w-9 h-9 p-2 rounded-full shadow-md shadow-300 bg-gray-100 cursor-pointer duration-200 ease-linear text-gray-500 hover:bg-[#FF9900] hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
    <button id="slide-left" @click="onLeftScroll">
      &#10094;
    </button>
    <button id="slide-right" @click="onRightScroll">
      &#10095;
    </button>
  </div>
</template>

<style scoped>
#container {
  height: max-content;
  overflow-x: scroll;
  scroll-behavior: smooth;
}

#content {
  width: max-content;
}
::-webkit-scrollbar-thumb {
  background: transparent;
}
/* **************************** HEAD NAV ************************** */
.nav-item {
margin: 2rem 0.25rem;
padding: 0.25rem 0.75rem;
border-radius: 5px;
text-transform: uppercase;
color: rgb(114, 114, 114);
font-size: 0.9rem;
border: 2px solid transparent;
transition: 0.2s;
cursor: pointer;
}
.nav-item:hover, .nav-item.active{
    color: rgb(255, 102, 0);
    border-color:rgb(255, 102, 0);
}
/* ******************************************************** */
.card:hover{
   --tw-shadow: 0 4px 6px -1px rgb(0 0 0/0.1),0 2px 4px -2px rgb(0 0 0/0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color);
  -webkit-box-shadow: var(--tw-ring-offset-shadow,0 0 rgba(107, 114, 128, 1)),var(--tw-ring-shadow,0 0 rgba(107, 114, 128, 1)),var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow,0 0 rgba(107, 114, 128, 1)),var(--tw-ring-shadow,0 0 rgba(107, 114, 128, 1)),var(--tw-shadow);
  --tw-shadow-color: rgba(107, 114, 128, 0.5);
  --tw-shadow: var(--tw-shadow-colored);
}
/* ************************ PREV, NEXT ***************** */
button{
  background-color: rgb(255, 153, 0);
  color: white;
  border-color: transparent;
  margin: 0 1rem;
  width: 2.75rem;
  height: 2.75rem;
  font-size: 1rem;
  background: white;
  border-radius: 50%;
  transition: 0.3s linear;
  position: absolute;
  top: 50%;
  color: rgb(114, 114, 114);
  border: 1px solid rgb(230, 230, 230);
  opacity: 0;
}
.relative:hover button{
  background-color: rgb(255, 153, 0);
  color: white;
  border-color: transparent;
  opacity: 1;
}
#slide-right{
  right: 0rem;
}

#slide-left{
  left: 0rem;
}
.relative:hover #slide-left{
  transform: translateX(1rem);
}
.relative:hover #slide-right{
  transform: translateX(-1rem);
}
/* **************** TRANSITION ******************* */
.nested-enter-active,
.nested-leave-active {
  transition: all 0.4s ease-in-out;
}
.nested-enter-from{
  transform: translateY(2rem);
  opacity: 0;
}
.nested-leave-to {
  display: none;
}
</style>
