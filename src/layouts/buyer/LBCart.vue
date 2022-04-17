<template>
  <main class="text-center text-gray-700 dark:text-gray-200">
    <div class="flex justify-between items-center bg-black">
      <LMenu />
      <div class="flex justify-center items-center text-white">
        <RMenu />
        <CExtension class="mx-2.75" />
      </div>
    </div>
    <CBHead />
    <!-- //blur ground
    <div class="modal absolute bg-gray-900 opacity-60 top-0 left-0 w-screen h-screen -z-1" /> -->
    <div class="p-15">
      <h2 class="py-5 font-semibold text-3xl">
        Your cart items
      </h2>
      <router-view />
    </div>
    <CFooter />
  </main>
</template>
