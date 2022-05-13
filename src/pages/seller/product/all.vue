<route lang="yaml">
meta:
  layout: seller/LSDashBoard
</route>

<script setup>
useHead({
  title: 'seller | all productions',
})

const queryType = ref('all')

function clearForm() {
  document.getElementById('myForm').reset()
}

function onQueryType(type) {
  queryType.value = type
}
// https://stackoverflow.com/questions/33571382/check-all-checkboxes-vuejs

// document.getElementById('btn2').onclick = function() {
//   const checkboxes = document.getElementsByName('name[]')

//   for (let i = 0; i < checkboxes.length; i++)
//     checkboxes[i].checked = false
// }

// function unCheckAll() {
//   document.querySelectorAll('#product-check').checked = false
// }

</script>

<template>
  <div class="seller-prods-container max-w-300 w-300 p-2">
    <form id="myForm" class="top-container grid grid-cols-2 gap-3 p-5 bg-white shadow-sm shadow-gray-500/50 rounded-xl">
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
        <button type="submit" class="text-white font-md py-1 px-5 rounded-md bg-[#E54A2B] duration-200 capitalize tracking-normal cursor-pointer mr-3 shadow-md shadow-gray-300">
          Find
        </button>
        <button class="font-md py-1 px-3 text-md rounded-md bg-white duration-200 capitalize tracking-normal cursor-pointer border-1 border-solid border-gray-200" @click="clearForm">
          Input again
        </button>
      </div>
    </form>

    <div class="bottom-container p-5 my-5 bg-white shadow-sm shadow-gray-500/50 rounded-2xl divide-light-800 divide-y devide-solid">
      <div class="tabs7 mb-5 flex bg-[#eee] p-1.25 rounded-lg">
        <div class="tab-item focus:bg-white" :class="{active : queryType === 'all'}" @click="onQueryType('all')">
          All
        </div>
        <div class="tab-item focus:bg-white" :class="{active : queryType === 'online'}" @click="onQueryType('online')">
          Online
        </div>
        <div class="tab-item" :class="{active : queryType === 'outStock'}" @click="onQueryType('outStock')">
          Out of stock
        </div>
        <div class="tab-item" :class="{active : queryType === 'violet'}" @click="onQueryType('violet')">
          Violate
        </div>
        <div class="tab-item" :class="{active : queryType === 'hidden'}" @click="onQueryType('hidden')">
          Hidden
        </div>
      </div>
      <div class="grid grid-cols-5 py-3 my-1">
        <div class="col-span-2">
          <h3 class="font-semibold text-lg">
            0 Product
          </h3>
          <p class="opacity-70 text-xs flex items-center">
            can post 1000 more products <IQuestion />
          </p>
        </div>
        <!-- <li v-for="item in Names" v-if="!!item.FullName> -->
        <div class="col-span-3 flex justify-end items-end gap-2">
          <p v-if="queryType !== 'outStock' && queryType !== 'violet' && queryType !== 'hidden'" class="text-blue-500 cursor-pointer text-sm">
            product optimization
          </p>
          <button v-if="queryType === 'all'" class="text-white font-md py-0.75 px-3 rounded-md bg-[#E54A2B] duration-200 capitalize tracking-normal cursor-pointer shadow-md shadow-gray-300">
            + Add new a product
          </button>
          <select class="font-md px-1 text-md rounded-md bg-white duration-200 capitalize tracking-normal cursor-pointer border-1 border-solid border-gray-200">
            <option>
              batch processing tool
            </option>
            <option value="mass-posting">
              Mass posting
            </option>
            <option value="mass-updating">
              Mass updating
            </option>
            <option value="attribute-update">
              Attribute update
            </option>
          </select>
          <div id="btnContainer flex">
            <button class="toggle active" onclick="listView()">
              <i class="fa fa-bars" />
            </button>
            <button class="toggle" onclick="gridView()">
              <i class="fa fa-th-large" />
            </button>
          </div>
        </div>
      </div>
      <div class="all-table border-1 border-gray-300 border-solid rounded-md my-1">
        <div class="all-head-table grid grid-cols-16 bg-light-400 p-3">
          <div class="opacity-70 flex justify-center items-center">
            <input id="product-checkall" type="checkbox">
          </div>
          <div class="col-span-3 opacity-70">
            <h2>Product name</h2>
          </div>
          <div class="col-span-2 opacity-70">
            <h2>SKU classify</h2>
          </div>
          <div class="col-span-2 opacity-70">
            <h2>Category</h2>
          </div>
          <div class="col-span-2 flex items-center opacity-70">
            <h2>Prices <i class="fas fa-sort" /></h2>
          </div>
          <div class="col-span-2 flex items-center opacity-70">
            <h2>Warehouse <i class="fas fa-sort" /></h2>
          </div>
          <div class="col-span-2 flex items-center opacity-70">
            <h2>Sales <i class="fas fa-sort" /></h2>
          </div>
          <div class="col-span-2 opacity-70">
            <h2>Edit infor</h2>
          </div>
        </div>

        <div class="all-body-table overflow-y-scroll h-100">
          <div v-for="i in 10" :key="i" class="all-body-item grid grid-cols-16 p-3">
            <div class="opacity-70 flex justify-center items-center">
              <input id="product-check" type="checkbox">
            </div>
            <div class="col-span-3 opacity-70">
              <h2>Name {{ i }}</h2>
            </div>
            <div class="col-span-2 opacity-70">
              <h2>domestic</h2>
            </div>
            <div class="col-span-2 opacity-70">
              <h2>A</h2>
            </div>
            <div class="col-span-2 flex items-center opacity-70">
              <h2>{{ i*1000 }} $</h2>
            </div>
            <div class="col-span-2 flex items-center opacity-70">
              <h2>L.A</h2>
            </div>
            <div class="col-span-2 flex items-center opacity-70">
              <h2>Sales</h2>
            </div>
            <div class="col-span-2 opacity-70">
              <button class="btn">
                edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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

.tabs7 .tab-item.active {
  color: red;
  background-color: white;
}
.tabs7 .tab-item {
  white-space: nowrap;
  padding: 10px;
  cursor: pointer;
  font-weight: 500;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
  transition: 0.2s linear;
}
.toggle {
  border: none;
  outline: none;
  padding: 6px 10px;
  cursor: pointer;
  border-radius: 3px;
}

.toggle:hover {
  background-color: #ddd;
}

.toggle.active {
  background-color: #ddd;
  color: red;
}
::-webkit-scrollbar-thumb {
  background: #ddd;
}
</style>
