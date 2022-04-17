<template>
  <main class="text-gray-700 dark:text-gray-200">
    <div class="flex justify-between items-center bg-black">
      <LMenu />
      <div class="flex justify-center items-center text-white">
        <RMenu />
        <CExtension class="mx-2.75" />
      </div>
    </div>
    <CBHead />
    <div class="header divide-y divide-gray-200 divide-solid px-15">
      <div class="capitalize text-3xl font-semibold pt-15 pb-5 flex justify-center items-center">
        <IAccount />
        <h1>
          My Account
        </h1>
      </div>

      <div class="grid grid-cols-4 pt-5 pb-20">
        <CAccount class="col-span-1" />
        <router-view class="col-span-3" />
      </div>
    </div>
    <CFooter />
  </main>
</template>
