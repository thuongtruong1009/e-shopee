<route lang="yaml">
meta:
  layout: seller/LSDashBoard
</route>

<script setup>
import PNotFound from '~/components/partterns/PNotFound.vue'
useHead({
  title: 'seller | all-orders',
})
const queryType = ref('code orders')
const navActive = ref('all')

const navRoute = (item) => {
  navActive.value = item
}

function clearForm() {
  document.getElementById('form-query').reset()
}
</script>

<template>
  <div class="max-w-300 w-300 bg-white grid shadow-sm shadow-gray-500/50 rounded-2xl divide-1 divide-solid divide-y divide-light-800">
    <div class="head-nav grid grid-cols-6 items-center text-center w-full text-md px-5">
      <div :class="{active : navActive === 'all'}" @click="navRoute('all')">
        <p>All orders</p>
      </div>
      <div :class="{active : navActive === 'wait-confirm'}" @click="navRoute('wait-confirm')">
        <p>Wait for confirmation</p>
      </div>
      <div :class="{active : navActive === 'wait-goods'}" @click="navRoute('wait-goods')">
        <p>Waiting for the goods</p>
      </div>
      <div :class="{active : navActive === 'delivering'}" @click="navRoute('delivering')">
        <p>Delivering</p>
      </div>
      <div :class="{active : navActive === 'delivered'}" @click="navRoute('delivered')">
        <p>Delivered</p>
      </div>
      <div :class="{active : navActive === 'cancel'}" @click="navRoute('cancel')">
        <p>Cancellation form</p>
      </div>
    </div>
    <div class="grid p-5">
      <form id="form-query" class="grid gap-5">
        <div>
          <div class="flex float-right w-[40%] justify-around items-center">
            <label for="order-date">Order date</label>
            <input id="order-date" type="date" name="order-date" value="2022-01-01" class="border-1 border-solid border-gray-200 rounded-md outline-none px-3 py-1.25 text-sm cursor-pointer">
            <button class="border-1 border-solid border-gray-200 rounded-md outline-none px-3 py-1.5 text-sm">
              Export
            </button>
            <button class="border-1 border-solid border-gray-200 rounded-md outline-none px-3 py-1">
              <i class="fas fa-bars" />
            </button>
          </div>
        </div>
        <div class="flex">
          <select id="order-query" v-model="queryType" name="order-query" class="border-1 border-solid border-gray-200 rounded-md outline-none">
            <option value="code orders">
              Code orders
            </option>
            <option value="buyer's name">
              Buyer's name
            </option>
            <option value="product">
              Product
            </option>
            <option value="bill of lading code">
              Bill of lading code
            </option>
          </select>
          <div class="flex justify-around items-center w-full">
            <div class="border-1 border-solid border-gray-200 rounded-md px-5 py-1">
              <input id="search-query" type="text" name="search-query" :placeholder="`Input ${queryType}...`" class="outline-none border-none w-xl">
              <i class="fas fa-search opacity-50 ml-2" />
            </div>
            <button type="submit" class="text-white font-md py-1 px-5 rounded-md bg-[#E54A2B] duration-200 capitalize tracking-normal cursor-pointer shadow-md shadow-gray-300">
              Search
            </button>
            <button class="font-md py-1 px-3 text-md rounded-md bg-white duration-200 capitalize tracking-normal cursor-pointer border-1 border-solid border-gray-200" @click="clearForm">
              Set again
            </button>
          </div>
        </div>
      </form>
      <div class="flex justify-between items-center py-8">
        <h2 class="font-bold text-2xl">
          O Orders
        </h2>
        <div>
          <button class="font-md py-2 px-5 text-md rounded-md bg-white duration-200 capitalize tracking-normal cursor-pointer border-1 border-solid border-gray-200" @click="clearForm">
            <i class="fas fa-sort-amount-down opacity-70" /> Sorted by
          </button>
          <button type="submit" class="text-white font-semibold ml-5 py-2 px-5 rounded-md bg-[#E54A2B] duration-200 capitalize tracking-normal cursor-pointer shadow-md shadow-gray-300">
            <i class="fas fa-wallet" /> Mass Delivery
          </button>
        </div>
      </div>
      <div class="grid grid-cols-8 justify-around items-center bg-[#F6F6F6] p-3 border-1 border-solid border-gray-200 rounded-md">
        <p class="col-span-3">
          Product
        </p>
        <p>Total Orders</p>
        <p>Status</p>
        <p>Countdown</p>
        <p>Delivery</p>
        <p>Operation</p>
      </div>
      <div class="grid justify-center items-center py-5">
        <PNotFound />
        <p class="text-gray-400">
          Order not found
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head-nav > div{
  padding: 1rem 0.2rem;
  border-top: 3px solid transparent;
}
.head-nav > div:hover{
  transition: 0.2s linear;
  color: #ee4d2d;
  cursor: pointer;
}
.head-nav > div.active{
  transition: 0.2s linear;
  border-bottom: 3px solid red;
  color: red;
  font-weight: bold;
}
/* select, input, button{
  border: 1px solid rgb(210, 210, 210);
  border-radius: 5px;
  outline: none;
  padding: 0.15rem 0.5rem;
  cursor: pointer;
  transition: 0.2s;
}
select:hover, input:hover, button:hover{
    background: rgb(240, 240, 240);
} */
</style>
