<route lang="yaml">
meta:
  layout: SOrderAll
</route>

<script setup>

function clearForm() {
  document.getElementById('myForm').reset()
}
</script>

<template>
  <div class="seller-order-container w-full px-24 py-2">
    <form id="myForm" class="top-container grid grid-cols-2 gap-3 p-5 bg-white shadow-sm shadow-gray-500/50 rounded-md">
      <div class="flex items-center">
        <select id="country" type="text" name="country">
          <option>Product name</option>
          <option value="vn">
            SKU products
          </option>
          <option value="en">
            SKU classify
          </option>
          <option value="us">
            Category
          </option>
          <option value="fr">
            Products code
          </option>
        </select>
        <input type="text" placeholder="Enter..." class="w-90">
      </div>

      <div class="flex justify-center items-center">
        <label for="s-item" class="mr-4">Item</label>
        <input type="text" placeholder="Enter category..." class="w-full">
      </div>

      <div class="flex items-center">
        <label for="s-warehouse">Warehouse</label>
        <input type="number" min="1" max="100" step="1" value="Input" class="w-50 mx-3">
        <input type="number" min="1" max="100" step="1" value="0" class="w-50">
      </div>

      <div class="flex items-center">
        <label for="s-warehouse">Sales</label>
        <input type="number" min="1" max="100" step="1" value="Input" class="w-60 mx-3">
        <input type="number" min="1" max="100" step="1" value="0" class="w-60">
      </div>

      <div>
        <button type="submit" class="text-white font-md py-1 px-5 rounded-md bg-[#E14641] duration-200 capitalize tracking-normal cursor-pointer mr-3">
          Find
        </button>
        <button class="font-md py-1 px-3 text-md rounded-md bg-white duration-200 capitalize tracking-normal cursor-pointer border-1 border-solid border-gray-200" @click="clearForm">
          Input again
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
select, input{
  border: 1px solid rgb(210, 210, 210);
  border-radius: 5px;
  outline: none;
  padding: 0.2rem 0.5rem;
}
select{
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
