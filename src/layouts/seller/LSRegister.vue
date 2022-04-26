<template>
  <main class="text-gray-700 dark:text-gray-200 overflow-x-hidden h-screen bg-[#F6F6F6]">
    <SHead />
    <div class="seller-main w-screen flex justify-center p-20 items-center bg-green-50 dark:bg-black">
      <router-view />
    </div>
    <CSFooter />
  </main>
</template>
