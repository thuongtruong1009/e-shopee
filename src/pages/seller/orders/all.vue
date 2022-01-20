<route lang="yaml">
meta:
  layout: SOrderAll
</route>

<script setup>

function clearForm() {
  document.getElementById('myForm').reset()
}

// function listView() {
//   const elements = document.getElementsByClassName('column')
//   for (let i = 0; i < elements.length; i++)
//     elements[i].style.width = '100%'
// }

// function gridView() {
//   const elements = document.getElementsByClassName('column')
//   for (let i = 0; i < elements.length; i++)
//     elements[i].style.width = '50%'
// }
// function toggleView() {
//   const container = document.getElementById('btnContainer')
//   const btns = container.getElementsByClassName('btn')
//   for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener('click', function() {
//       const current = document.getElementsByClassName('active')
//       current[0].className = current[0].className.replace(' active', '')
//       this.className += ' active'
//     })
//   }
// }

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

    <div class="bottom-container p-5 my-5 bg-white shadow-sm shadow-gray-500/50 rounded-md divide-light-800 divide-y devide-solid">
      <div class="tabs7 mb-5">
        <div class="tab-item active focus:bg-white">
          All
        </div>
        <div class="tab-item focus:bg-white">
          Online
        </div>
        <div class="tab-item">
          Out of stock
        </div>
        <div class="tab-item">
          Violate
        </div>
        <div class="tab-item">
          Hidden
        </div>
      </div>
      <div class="grid grid-cols-5 py-3 my-1">
        <div class="col-span-2">
          <h3 class="font-semibold text-xl">
            0 Product
          </h3>
          <p class="opacity-70 text-sm">
            can post 1000 more products  !
          </p>
        </div>
        <div class="col-span-3 flex justify-between items-end">
          <p class="text-blue-500 cursor-pointer">
            product optimization
          </p>
          <button class="text-white font-md py-1 px-5 rounded-md bg-[#E14641] duration-200 capitalize tracking-normal cursor-pointer">
            + Add new a product
          </button>
          <button class="font-md py-1 px-3 text-md rounded-md bg-white duration-200 capitalize tracking-normal cursor-pointer border-1 border-solid border-gray-200">
            batch processing tool
          </button>
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
            <input type="checkbox">
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
            <h2>Prices</h2>
            <div class="grid">
              <i class="fas fa-caret-up" /><i class="fa fa-caret-down" />
            </div>
          </div>
          <div class="col-span-2 flex items-center opacity-70">
            <h2>Warehouse</h2>
            <div class="grid">
              <i class="fas fa-caret-up" /><i class="fa fa-caret-down" />
            </div>
          </div>
          <div class="col-span-2 flex items-center opacity-70">
            <h2>Sales</h2>
            <div class="grid">
              <i class="fas fa-caret-up" /><i class="fa fa-caret-down" />
            </div>
          </div>
          <div class="col-span-2 opacity-70">
            <h2>Edit infor</h2>
          </div>
        </div>

        <div class="all-body-table overflow-y-scroll h-100">
          <div v-for="i in 10" :key="i" class="all-body-item grid grid-cols-16 p-3">
            <div class="opacity-70 flex justify-center items-center">
              <input type="checkbox">
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

.tabs7 {
  display: flex;
  background-color: #eee;
  border-radius: 8px;
  padding: 5px;
}
.tabs7 .tab-item.active {
  color: #6a5af9;
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
  transition: 0.5s linear;
}
.column {
  float: left;
  width: 50%;
  padding: 10px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
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
.fa-caret-up, .fa-caret-down{
  transform: scale(0.8);
  margin-left: 0.25rem;
}
::-webkit-scrollbar-thumb {
  background: #ddd;
}
</style>
