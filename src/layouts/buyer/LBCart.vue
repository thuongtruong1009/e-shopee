<script setup>
const { t } = useI18n()
</script>

<template>
  <main class="text-center text-gray-700 dark:text-gray-200">
    <CBHeaderTop />
    <CBHead />
    <div class="p-15 bg-[#DAECF7] dark:bg-$dark-bg">
      <h2 class="py-5 font-semibold text-3xl">
        {{ t('cart.title') }}
      </h2>
      <router-view />
    </div>
    <CBFooter />
  </main>
</template>
