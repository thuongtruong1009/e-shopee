<route lang="yaml">
meta:
  layout: seller/prod/LSProdAdd
</route>

<script setup>
useHead({
  title: 'seller | add-productions',
})
const numberWord = ref('')
const productsList = reactive([
  {
    data: [{
      type: 'articles',
      id: '1',
      attributes: {
        title: 'JSON:API paints my bikeshed!',
        body: 'The shortest article. Ever.',
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: {
            id: '42', type: 'people',
          },
        },
      },
    }],
    included: [
      {
        type: 'people',
        id: '42',
        attributes: {
          name: 'John',
          age: 80,
          gender: 'male',
        },
      },
    ],
    machine: [{
      type: 'articles',
      id: '1',
      attributes: {
        title: 'JSON:API paints my bikeshed!',
        body: 'The shortest article. Ever.',
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
      },
      relationships: {
        author: {
          data: {
            id: '42', type: 'people',
          },
        },
      },
    }],
  },
])
// const result = JSON.stringify(Object.keys(productsList[0]))
// const level1 = result.slice(1, -1)
</script>

<template>
  <div class="seller-prod-add-container w-300 p-7 bg-white shadow-sm shadow-gray-500/50 rounded-md divide-y divide-solid divide-1 divide-light-800">
    <div class="pb-7">
      <h4 class="text-xl font-medium my-1">
        Add 1 new product
      </h4>
      <p class="text-gray-400 text-sm">
        Please select the appropriate category for your product.
      </p>
    </div>
    <div>
      <div class="pt-8 mb-4 flex items-center">
        <label for="add-product-name">Product name: </label>
        <div class="w-[85%] ml-5 border-1 border-red-500 border-solid flex items-center py-1 rounded-md divide-x divide-solid divide-3 divide-gray-300">
          <input id="add-product-name" v-model="numberWord" type="text" name="add-product-name" class="w-full outline-none px-2" placeholder="Input..." pattern="[A-Za-z0-9]{120}" required>
          <p class="flex justify-around opacity-60 text-xs px-2">
            {{ numberWord.length }}/120
          </p>
        </div>
      </div>
      <div class="bg-[#FAFAFA] p-5 rounded-md">
        <div class="grid grid-cols-3 gap-2 justify-start items-center">
          <div class="flex items-center border-1 border-solid border-gray-400 rounded-2xl py-1 px-2 bg-[#FAFAFA]">
            <ISearch />
            <input id="" type="text" name="add-product-search" class="outline-none ml-2 w-[85%]" placeholder="Product type name...">
          </div>
          <p class="text-gray-400 text-sm">
            Choose the correct category, <a href="" class="text-blue-500">click here to find out</a>
          </p>
        </div>
        <div class="bg-white grid grid-cols-4 divide-x divide-solid divide-3 divide-gray-300 mt-5">
          <div class="py-2 max-h-80 overflow-y-scroll">
            <div v-for="(product, i) in Object.keys(productsList[0])" :key="i" class="flex justify-between items-center hover:bg-[#FAFAFA] px-3 py-1 cursor-pointer">
              <p>{{ product }}</p>
              <ICaretRight />
            </div>
          </div>
          <div>ô 2</div>
          <div>ô 3</div>
          <div>ô 4</div>
        </div>
      </div>
      <div class="flex my-3 font-medium">
        <p>👉 Selected: </p>
        <p class="text-red-500 ml-5">
          Thiết Bị Điện Gia Dụng > Thiết bị điện gia dụng lớn > Thiết bị làm mát
        </p>
      </div>
      <button class="bg-[#E54A2B] text-white rounded-md px-10 py-1.5 my-5 shadow-md shadow-gray-300">
        Next
      </button>
    </div>
  </div>
</template>

<style scoped>
label{
    font-family: 'Helvetica Neue', sans-serif;
}
/* https://stackoverflow.com/questions/45152839/horizontally-scroll-hidden-overflow-x-with-buttons-and-js */
::-webkit-scrollbar-thumb {
  background: #ddd;
}
</style>
