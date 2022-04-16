<script setup lang="ts">
useHead({
  title: 'e-shopee | buyer home',
})
</script>

<template>
  <div>
    <CSwipper />
    <CBCategory />
    <CBanner />
    <CDemo1 />
    <CArrivals />
    <CMonthSale />
    <CTrending />
    <CDemo3 />
    <div class="flex justify-center">
      <CToday />
    </div>
    <!-- <CSlick /> -->
    <CDemo2 />
    <CService />
  </div>
</template>

<route lang="yaml">
meta:
  layout: LHome
</route>
