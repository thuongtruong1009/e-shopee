<script setup>

const getURL = window.location.href
const splitURL = getURL.split('/')
const sliceURL = splitURL.slice(4)
let currentURL = ''
for (let i = 0; i < sliceURL.length; i++)
  currentURL += sliceURL[i]

</script>

<template>
  <div class="seller-header-container h-13 flex justify-between items-center border-b-3 border-b-solid border-b-gray-200 border-opacity-60 bg-white">
    <div class="seller-header-left flex items-center text-xl tracking-tighter">
      <router-link to="/seller/home">
        <IShopee class="mx-10 cursor-pointer" />
      </router-link>
      <div class="flex text-md lowercase text-gray-500/50">
        <h6>| seller</h6>
        <div v-for="(url, i) in sliceURL" :key="i" class="flex">
          <span class="mx-2">></span>
          <h6>{{ url }}</h6>
        </div>
      </div>
    </div>

    <div class="seller-header-right flex  justify-around items-center w-79 cursor-pointer">
      <router-link to="/buyer/home">
        <h2 class="hover:underline text-sm font-medium flex items-center gap-2">
          <IHome />Trang chủ Shopee
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
