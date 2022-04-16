<route lang="yaml">
meta:
  layout: seller/shop/LSShopAddress
</route>

<script setup>
useHead({
  title: 'seller | shop-address',
})
</script>

<template>
  <div class="shop-address-container w-full px-10 py-2 flex justify-center">
    <div class="bg-white shadow-sm shadow-gray-500/50 rounded-md divide-1 divide-solid divide-y divide-light-800 w-276">
      <div class="head-address flex justify-between px-5 py-3">
        <div>
          <h1 class="font-bold text-xl">
            Address
          </h1>
          <p class="opacity-70 text-sm">
            Manage your shipping and delivery address
          </p>
        </div>
        <p class="flex items-center gap-2 bg-red-500 rounded-md text-white h-9 px-3 cursor-pointer hover:bg-red-600 shadow-md shadow-gray-300">
          <IPlus class="text-xs" />Add new address
        </p>
      </div>
      <div class="grid grid-cols-5 p-3">
        <div class="col-span-3 grid grid-cols-5">
          <div class="text-[#00C689] flex justify-center pt-2">
            <ILocation />
          </div>
          <div class="text-sm grid">
            <p>Name</p>
            <p>Phone number</p>
            <p>Address</p>
          </div>
          <div class="col-span-3 text-md font-medium grid">
            <p>Thuong Truong</p>
            <p>84917085937</p>
            <p>Linh Trung ward, Thu Duc district, Ho Chi Minh city, VietNam</p>
          </div>
        </div>
        <div class="col-span-2 flex justify-between items-start">
          <p class="text-green-600 bg-green-100 px-1 text-xs rounded-sm">
            Default address
          </p>
          <h1 class="flex gap-2 items-center text-blue-500 cursor-pointer">
            <IEdit class="text-xs" />Edit
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>
