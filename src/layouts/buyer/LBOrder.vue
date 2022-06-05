<template>
  <main class="text-center text-gray-700 dark:(text-gray-200 bg-$dark-bg) overflow-x-hidden">
    <CBHeaderTop />
    <CBHead />
    <router-view />
    <CBFooter />
  </main>
</template>

<style scoped>
@media (max-width: 992px){
  .header-home{
    display: none;
  }
}
</style>
