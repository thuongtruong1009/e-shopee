<template>
  <main class="text-center text-gray-700 dark:text-gray-200 overflow-hidden dark:bg-black bg-[#ecf0f3] min-h-screen">
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
