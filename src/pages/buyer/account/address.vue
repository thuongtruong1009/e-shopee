<template>
  <div class="myaccount-content border-1 border-solid border-light-700 rounded-md p-5 bg-[#EBF6FC]">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBAddress />
      <h3 class="text-2xl">
        Billing Address
      </h3>
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

    <form action="" method="post">
      <div>
        <label>Full name</label>
        <input type="text" name="full_name" required>
      </div>
      <div>
        <label>Phone number</label>
        <input type="number" name="phone" required>
      </div>
      <div>
        <label>State</label>
        <input type="text" name="state" required>
      </div>
      <div>
        <label>City</label>
        <input type="text" name="city" required>
      </div>
      <div>
        <label>Town</label>
        <input type="text" name="town" required>
      </div>
      <div>
        <label>Address</label>
        <input type="text" name="address" required>
      </div>
    </form>
  </div>
</template>

<route lang="yaml">
meta:
  layout: buyer/account/LBAddress
</route>
