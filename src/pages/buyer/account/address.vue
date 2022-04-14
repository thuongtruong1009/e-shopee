<template>
  <div class="myaccount-content border-1 border-solid border-light-700 rounded-md p-5">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 text-2xl font-medium">
      <h3>Billing Address</h3>
    </div>

    <div class="py-5">
      <p class="font-medium text-gray-500 text-md">
        Thuong Truong
      </p>
      <p class="text-sm">
        6 quater, Linh Trung ward, Thu Duc dist, HoChiMinh city, VietNam
      </p>
      <p class="text-sm">
        Mobile: (+84) 917-085-937
      </p>
    </div>

    <a href="#" class="edit-address-btn text-sm text-blue-700 gap-1 flex items-center"><i
      class="fa fa-edit"
    />Edit Address</a>
  </div>
</template>

<route lang="yaml">
meta:
  layout: LAddress
</route>
