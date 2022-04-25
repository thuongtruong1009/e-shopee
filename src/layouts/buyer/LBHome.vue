<template>
  <main class="text-center text-gray-700 dark:text-gray-200 overflow-x-hidden dark:bg-black">
    <CBHeaderTop />
    <CBHead />
    <router-view />
    <CFooter />
  </main>
</template>

<style scoped>
@media (max-width: 992px){
  .header-home{
    display: none;
  }
}
</style>
