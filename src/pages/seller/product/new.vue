<route lang="yaml">
meta:
  layout: seller/product/LSProdNew
</route>

<template>
  <div class="seller_new_prod_view max-w-254 w-254 p-7 bg-white shadow-md shadow-gray-300 rounded-md">
    <div class="basic_infor">
      <h5 class="font-medium text-lg">
        Basic information
      </h5>
      <div class="flex">
        <label>Product image</label>
        <div class="flex">
          <div class="cover_img border-1 border-dashed border-blue-400 max-w-19 h-19 flex justify-center items-center hover:bg-blue-50  cursor-pointer" style="background-image:url('/img/product/new.svg');background-repeat:no-repeat; background-position:center">
            <input type="file" name="cover_img" accept="image/png, image/jpeg, image/jpg" class="opacity-0">
          </div>
          <div v-for="i in 6" :key="i" class="cover_img relative">
            <input type="file" name="cover_img" accept="image/png, image/jpeg, image/jpg" class="opacity-0">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
