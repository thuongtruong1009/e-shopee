<script setup>

const getURL = window.location.href
const splitURL = getURL.split('/')
const sliceURL = splitURL.slice(4)
let currentURL = ''
for (let i = 0; i < sliceURL.length; i++)
  currentURL += sliceURL[i]

const colorsTab = reactive(['linear-gradient(to right, #d6b59d,#fd8c70)', 'linear-gradient(to right, #269f55,#9fdf09)', 'linear-gradient(to right,#f7019f,#5c11c4)', 'linear-gradient(to right, #077dd2,#77f2d6)', 'linear-gradient(to right, #654ea3, #eaafc8)', 'linear-gradient(to right, #108dc7, #ef8e38)'])
</script>

<template>
  <div class="seller-header-container h-13 flex justify-between items-center border-b-3 border-b-solid border-b-gray-200 border-opacity-60 bg-white">
    <div class="seller-header-left flex items-center text-xl tracking-tighter gap-15 pl-10">
      <router-link to="/seller/home">
        <IShopee class="cursor-pointer" />
      </router-link>
      <div class="flex text-sm lowercase text-white">
        <div v-for="(url, i) in sliceURL" :key="i" style="clip-path: polygon(80% 0, 100% 50%, 80% 100%, 0% 100%, 19% 51%, 0% 0%);" :style="`background:${colorsTab[Math.floor(Math.random() * 6)]};`" class="w-25 h-7 flex justify-center items-center">
          <h6>{{ url }}</h6>
        </div>
      </div>
    </div>

    <div class="seller-header-right flex justify-around items-center w-79 cursor-pointer">
      <router-link to="/buyer/home">
        <h2 class="hover:underline text-sm font-medium flex items-center gap-2">
          <IHome />e-shopee {{ t('menu.s-home') }}
        </h2>
      </router-link>
      <span class="opacity-20">|</span>
      <div class="hover:bg-gray-200 p-2 rounded-full">
        <IApplication />
      </div>
      <div class="hover:bg-gray-200 p-1.5 rounded-full">
        <IFacebook />
      </div>
      <div class="hover:bg-gray-200 p-1.5 rounded-full">
        <IInstagram />
      </div>
    </div>
  </div>
</template>
