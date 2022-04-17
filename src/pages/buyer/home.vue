<route lang="yaml">
meta:
  layout: buyer/LBHome
</route>

<script setup lang="ts">
useHead({
  title: 'e-shopee | buyer home',
})
</script>

<template>
  <div>
    <CBSwipper />
    <CBCategory />
    <CBBanner />
    <CBDemo1 />
    <CBArrivals />
    <CBMonthSale />
    <CBTrending />
    <CBDemo3 />
    <div class="flex justify-center">
      <CBToday />
    </div>
    <!-- <CSlick /> -->
    <CBDemo2 />
    <CBService />
  </div>
</template>
