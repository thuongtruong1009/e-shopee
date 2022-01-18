<script setup>
import IShopee from '~/components/IShopee.vue'
import IFacebook from '~/components/IFacebook.vue'
import IInstagram from '~/components/IInstagram.vue'
</script>

<template>
  <div class="seller-header-container h-13 flex justify-between items-center border-3 border-solid border-gray-200 border-opacity-60">
    <router-link to="seller/login">
      <div class="seller-header-left flex justify-around items-center text-xl tracking-tighter capitalize w-65 cursor-pointer">
        <IShopee />
        <h2>Seller channel</h2>
      </div>
    </router-link>
    <div class="seller-header-right flex  justify-around items-center w-67 cursor-pointer">
      <router-link to="/">
        <h2 class="hover:underline text-sm font-medium">
          Trang chủ Shopee
        </h2>
      </router-link>
      <span class="opacity-20">|</span>
      <IFacebook class="hover:bg-gray-200 p-1.5 rounded-full" />
      <IInstagram class="hover:bg-gray-200 p-1.5 rounded-full" />
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
