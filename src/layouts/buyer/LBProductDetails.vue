<template>
  <main class="text-gray-700 dark:text-gray-200 overflow-x-hidden bg-[#F5F5F5] dark:bg-black">
    <div class="header-home flex justify-between items-center bg-black">
      <LMenu />
      <div class="flex justify-center items-center text-white">
        <RMenu />
        <CExtension class="mx-2.75" />
      </div>
    </div>
    <CBHead />
    <div class="grid justify-center m-5 gap-5">
      <router-view />
    </div>
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
