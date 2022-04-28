<route lang="yaml">
meta:
  layout: buyer/LBHome
</route>

<script setup lang="ts">
import CBTopProducts from '~/components/buyer/CBTopProducts.vue';
import CBFlashSales from '../../components/buyer/CBFlashSales.vue';
useHead({
  title: 'e-shopee | buyer home',
})
</script>

<template>
  <div>
    <CBSwipper />
    <CBCategory />
    <CBBanner />
    <CBFlashSales />
    <CBDemo1 />
    <CBArrivals />
    <CBMonthSale />
    <CBTrending />
    <CBTopProducts />
    <CBDemo3 />
    <div class="flex justify-center">
      <CBToday />
    </div>
    <!-- <CSlick /> -->
    <CBDemo2 />
    <CBService />
  </div>
</template>
