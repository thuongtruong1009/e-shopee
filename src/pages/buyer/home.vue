<route lang="yaml">
meta:
  layout: buyer/LBHome
</route>

<script setup lang="ts">
import { useRouter } from 'vue-router'

useHead({
  title: 'buyer | home',
})
const router = useRouter()

onMounted(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/buyer/login' })
})
</script>

<template>
  <div>
    <CBSwipper />
    <CBCategory />
    <CBBanner />
    <!-- <CBFlashSales />
    <CBDemo1 />
    <CBOurProducts />
    <CBTrending />
    <CBTopProducts />
    <CBMonthSale />
    <CBDealArrivals />
    <CBDemo3 /> -->
    <!-- <div class="flex justify-center">
      <CBToday />
    </div> -->
    <div class="flex justify-center">
      <CBFeature />
    </div>
    <!-- <CSlick /> -->
    <CBDemo2 />
    <CBService />
  </div>
</template>
