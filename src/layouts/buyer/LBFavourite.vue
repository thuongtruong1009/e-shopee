<script setup>
const { t } = useI18n()
</script>

<template>
  <main class="text-center text-gray-700 dark:text-gray-200">
    <CBHeaderTop />
    <div class="header divide-y divide-gray-400 divide-solid px-10 pb-10 bg-[#FFE7CD] dark:bg-black">
      <h1 class="capitalize text-3xl font-semibold pt-15 pb-5">
        {{ t('favourite.favourite-banner') }}
      </h1>
      <div class="pt-5 pb-20">
        <router-view />
      </div>
    </div>
    <CBFooter />
  </main>
</template>
