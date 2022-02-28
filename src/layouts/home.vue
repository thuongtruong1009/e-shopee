<template>
  <main class="text-center text-gray-700 dark:text-gray-200 overflow-x-hidden">
    <div class="header-home flex justify-between items-center bg-black">
      <LMenu />
      <div class="flex justify-center items-center text-white">
        <RMenu />
        <CExtension class="mx-2.75" />
      </div>
    </div>
    <CHead />
    <CSwipper />
    <CBanner />
    <CDemo1 />
    <CArrivals />
    <CMonthSale />
    <CDemo3 />
    <router-view />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">
      [Home Layout]
    </div>
    <CSlick />
    <CCategory />
    <CDemo2 />
    <CService />
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
