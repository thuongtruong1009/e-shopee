<script setup>
import IShopee from '~/components/IShopee.vue'
</script>

<template>
  <div class="seller-header-container h-13 flex justify-between items-center border-3 border-solid border-gray-200 border-opacity-60 bg-white">
    <router-link to="/seller/home">
      <div class="seller-header-left flex justify-around items-center text-xl tracking-tighter capitalize w-65 cursor-pointer">
        <IShopee />
        <h2>Seller channel</h2>
      </div>
    </router-link>
    <div class="seller-header-right flex  justify-around items-center w-79 cursor-pointer">
      <router-link to="/">
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

<style scoped>
.seller-header-container{
  border-right: none;
  border-left: none;
  border-top: none;
}
</style>
