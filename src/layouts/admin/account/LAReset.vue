<template>
  <main class="text-gray-700 dark:text-gray-200 overflow-x-hidden">
    <SHead />
    <div class="reset_layout w-screen flex justify-center  px-10 py-17 items-center bg-[#F6F6F6] dark:bg-black">
      <router-view />
    </div>
  </main>
</template>

<style scoped>
.reset_layout{
  background: url("/img/admin/reset_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
