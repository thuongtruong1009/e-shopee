<template>
  <main class="text-center text-gray-700 dark:text-gray-200 overflow-hidden dark:bg-black bg-[#A3D0D3] min-h-screen">
    <div class="flex justify-between items-center bg-black">
      <LMenu />
      <div class="flex justify-center items-center text-white">
        <RMenu />
        <CExtension class="mx-2.75" />
      </div>
    </div>
    <router-view />
  </main>
</template>

<style scoped>
/* main {
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
} */
</style>
