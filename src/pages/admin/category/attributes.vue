<route lang="yaml">
meta:
  layout: admin/LADashboard
</route>

<script setup>
import { useRouter } from 'vue-router'
import ProductRequest from '~/services/product-request'
import { useAdmin } from '~/stores/admin'
import { random } from '~/utils/random'
import { btnColors } from '~/shared/colors'

const router = useRouter()
const admin = useAdmin()
onBeforeMount(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/admin/login' })
})

const inputSearch = ref('')
const handleSearch = async(e) => {
  e.preventDefault()
  const { data } = await ProductRequest.searchCategoriesAttributes(inputSearch.value)
  admin.attributesSearch = data
//   await ProductRequest.searchCategoriesAttributes(inputSearch.value).then((res) => {
//     admin.attributesSearch = res
//     console.log(res)
//   })
}

</script>

<template>
  <section class="grid gap-5 max-w-250 w-250 h-min">
    <div class="flex items-center gap-2 text-lg text-[#F34280] font-medium my-5">
      <IAAttributes />
      <h1>Category attributes</h1>
    </div>
    <!-- <div class="bg-white rounded-xl">
      <div class="bg-[#AEC4D1] p-2">trên</div>
      <div class="p-2">duoi</div>
    </div> -->
    <div class="grid grid-cols-3 gap-5">
      <div class="list_category col-span-1 overflow-y-scroll max-h-lg px-2">
        <h2 v-for="i in 30" :key="i" :class="`bg-[${btnColors[random(7)]}]`" class="p-2 text-white my-2 rounded-lg cursor-pointer">
          {{ i }}. category {{ btnColors[random(7)] }}
        </h2>
      </div>
      <div class="col-span-2 rounded-md">
        <div class="flex justify-between items-center bg-[#B194D7] rounded-t-xl py-1 px-3">
          <h5 class="text-white font-medium">
            Search item
          </h5>
          <form class="relative w-3/5" @submit.prevent="handleSearch">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </div>
            <input v-model="inputSearch" type="search" class="block p-2.5 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search attributes...">
            <button type="submit" class="text-white absolute right-2 bottom-1.25 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="handleSearch">
              Search
            </button>
          </form>
        </div>

        <div class="relative overflow-x-auto shadow-md sm:rounded-xl">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th class="px-6 py-3 font-normal">
                  Product name
                </th>
                <th class="px-6 py-3 font-normal">
                  Color
                </th>
                <th class="px-6 py-3 font-normal">
                  Category
                </th>
                <th class="px-6 py-3 font-medium font-normal">
                  Price
                </th>
                <th class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                  Sliver
                </td>
                <td class="px-6 py-4">
                  Laptop
                </td>
                <td class="px-6 py-4">
                  $2999
                </td>
                <td class="px-6 py-4 text-right">
                  <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Update
                  </button>
                </td>
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                  White
                </td>
                <td class="px-6 py-4">
                  Laptop PC
                </td>
                <td class="px-6 py-4">
                  $1999
                </td>
                <td class="px-6 py-4 text-right">
                  <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Delete
                  </button>
                </td>
              </tr>
              <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                  Black
                </td>
                <td class="px-6 py-4">
                  Accessories
                </td>
                <td class="px-6 py-4">
                  $99
                </td>
                <td class="px-6 py-4 text-right">
                  <button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                    Add
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
::-webkit-scrollbar {
  width: 3px;
}
::-webkit-scrollbar-thumb {
  background: #dedede;
  border-radius: 300px;
}
</style>
