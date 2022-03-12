<route lang="yaml">
meta:
  layout: LSitemap
</route>

<script setup>
import CMap from '~/components/CMap.vue'
useHead({
  title: 'e-shopee | sitemap',
})
const { t } = useI18n()
</script>

<template>
  <div class="sitemap-container p-10">
    <div class="text-3xl font-semibold py-10 dark:text-gray-400">
      <h1>{{ t('sitemap.sitemap') }}</h1>
    </div>
    <CMap />
  </div>
</template>
