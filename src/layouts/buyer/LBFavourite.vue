<template>
  <main class="text-center text-gray-700 dark:text-gray-200">
    <div class="flex justify-between items-center bg-black">
      <LMenu />
      <div class="flex justify-center items-center text-white">
        <RMenu />
        <CExtension class="mx-2.75" />
      </div>
    </div>
    <div class="header divide-y divide-gray-400 divide-solid px-10 pb-10 bg-[#FFE7CD] dark:bg-black">
      <h1 class="capitalize text-3xl font-semibold pt-15 pb-5">
        Favourite page
      </h1>
      <div class="pt-5 pb-20">
        <router-view />
      </div>
    </div>
    <CFooter />
  </main>
</template>
