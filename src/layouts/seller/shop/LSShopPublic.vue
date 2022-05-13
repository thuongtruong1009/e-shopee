<template>
  <main class="text-gray-700 dark:text-gray-200 overflow-x-hidden bg-[#F5F5F5] dark:bg-black">
    <CBHeaderTop />
    <CBHead />
    <div class="grid justify-center m-5 gap-5">
      <router-view />
    </div>
    <CBFooter />
  </main>
</template>
