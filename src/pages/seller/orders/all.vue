<route lang="yaml">
meta:
  layout: SOrderAll
</route>

<script setup>
const queryType = ref('code-orders')

function clearForm() {
  document.getElementById('form-query').reset()
}
</script>

<template>
  <div class="seller-order-container w-full px-24 py-2">
    <div class="bg-white grid shadow-sm shadow-gray-500/50 rounded-md divide-1 divide-solid divide-y divide-light-800">
      <div class="head-nav">
        <ul class="grid grid-cols-6 items-center text-center w-full text-md p-5">
          <li>All orders</li>
          <li>Wait for confirmation</li>
          <li>Waiting for the goods</li>
          <li>Delivering</li>
          <li>Delivered</li>
          <li>Cancellation form</li>
        </ul>
        <div />
      </div>
      <div class="grid p-5">
        <form id="form-query" class="grid">
          <div>
            <div class="flex float-right w-[40%] justify-around items-center">
              <label for="order-date">Order date</label>
              <input id="order-date" type="date" name="order-date" value="2022-01-01">
              <button>Export</button>
              <button><i class="fas fa-bars" /></button>
            </div>
          </div>
          <div class="grid grid-cols-9 gap-5">
            <div class="col-span-7 grid grid-cols-4">
              <select id="order-query" v-model="queryType" name="order-query">
                <option value="code-orders">
                  Code orders
                </option>
                <option value="buyer-name-query">
                  Buyer's name
                </option>
                <option value="product-query">
                  Product
                </option>
                <option value="bill-code-query">
                  Bill of lading code
                </option>
              </select>
              <div class="col-span-3">
                <input id="search-query" type="text" name="search-query" :placeholder="`Input ${queryType}...`" class="w-full">
              </div>
            </div>
            <div class="flex justify-between items-center col-span-2">
              <button type="submit" class="text-white font-md py-1 px-5 rounded-md bg-[#E54A2B] duration-200 capitalize tracking-normal cursor-pointer mr-3">
                Search
              </button>
              <button class="font-md py-1 px-5 text-md rounded-md bg-white duration-200 capitalize tracking-normal cursor-pointer border-1 border-solid border-gray-200" @click="clearForm">
                Set again
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
ul > li:hover{
color: #ee4d2d;
cursor: pointer;
}
select, input, button{
  border: 1px solid rgb(210, 210, 210);
  border-radius: 5px;
  outline: none;
  padding: 0.15rem 0.5rem;
  cursor: pointer;
  transition: 0.2s;
}
select:hover, input:hover, button:hover{
    background: rgb(240, 240, 240);
}
</style>
