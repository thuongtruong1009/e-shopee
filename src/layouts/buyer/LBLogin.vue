<template>
  <main class="text-center text-gray-700 dark:text-gray-200 overflow-hidden dark:bg-black min-h-screen">
    <div class="flex justify-between items-center bg-black shadow-md shadow-gray-500">
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
main {
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}
</style>
