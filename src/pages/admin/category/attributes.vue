<route lang="yaml">
meta:
  layout: admin/LADashboard
</route>

<script setup>
import { useRouter } from 'vue-router'
import ProductRequest from '~/services/product-request'
import { useAdmin } from '~/stores/admin'
import { toast } from '~/stores/toast'
import { useProduct } from '~/stores/product'
import { random } from '~/utils/random'
import { btnColors } from '~/shared/colors'

const router = useRouter()
const admin = useAdmin()
const useToast = toast()
const product = useProduct()

onBeforeMount(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/admin/login' })
})

const inputSearch = ref('')
const handleSearch = async(e) => {
  e.preventDefault()
  const { data: searchData } = await ProductRequest.searchCategoriesAttributesAdmin(inputSearch.value)
  admin.attributesSearch = searchData
  inputSearch.value = ''
}

const createItem = reactive({
  create: [{
    name: '',
    units: ['', ''],
  }],

})
const handleCreate = async() => {
  await ProductRequest.createCategoriesAttributesAdmin(createItem)
  useToast.updateToast('success', 'Category attributes has been created!', true)
  createItem.create[0].name = ''
  createItem.create[0].units[0] = ''
  createItem.create[0].units[1] = ''
}

const updateItem = reactive({
  update: [{
    id: 1,
    name: 'string',
    units: [
      'string', 'string',
    ],
  }],
})
const handleUpdate = async(id, name, units0, units1) => {
  updateItem.update[0].id = id
  updateItem.update[0].name = name
  updateItem.update[0].units[0] = units0
  updateItem.update[0].units[1] = units1
  await ProductRequest.updateCategoriesAttributesAdmin(updateItem)
  useToast.updateToast('success', 'Category attributes has been updated!', true)
}

const deleteItem = reactive({
  delete: [{
    id: '',
  }],
})
const handleDelete = async(id) => {
  deleteItem.delete[0].id = id
  await ProductRequest.deleteCategoriesAttributesAdmin(deleteItem)
  useToast.updateToast('success', 'Category attributes has been deleted!', true)
}
// ----------------------------------------------------
watch(async() => {
  const { data } = await ProductRequest.getCategoriesChildrenById(0)
  product.category = data
})

const getLevel1 = async(id) => {
  const { data } = await ProductRequest.getCategoriesChildrenById(id)
  product.level1 = data
  product.choicedList[0] = product.level1.parent
}

const getLevel2 = async(id) => {
  const { data } = await ProductRequest.getCategoriesChildrenById(id)
  product.level2 = data
  product.choicedList[1] = product.level2.parent
}

const getLevel3 = async(id) => {
  const { data } = await ProductRequest.getCategoriesChildrenById(id)
  product.level3 = data
  product.choicedList[2] = product.level3.parent
}

</script>

<template>
  <section class="grid gap-5 max-w-300 w-300 h-min">
    <div class="flex items-center gap-2 text-lg text-[#F34280] font-medium my-5">
      <IAAttributes />
      <h1>Category attributes</h1>
    </div>
    <!-- <div class="bg-white rounded-xl">
      <div class="bg-[#AEC4D1] p-2">trên</div>
      <div class="p-2">duoi</div>
    </div> -->

    <CAChooseCategory :level0="product.category.children" :level1="product.level1.children" :level2="product.level2.children" :level3="product.level3.children" @get-level1="getLevel1" @get-level2="getLevel2" @get-level3="getLevel3" />

    <div class="grid grid-cols-3 gap-5">
      <div class="list_category col-span-1 overflow-y-scroll max-h-lg px-2">
        <h2 v-for="i in 30" :key="i" :class="`bg-[${btnColors[random(7)]}]`" class="p-2 text-white my-2 rounded-lg cursor-pointer">
          {{ i }}. category {{ btnColors[random(7)] }}
        </h2>
      </div>
      <div class="col-span-2 rounded-md">
        <div class="flex justify-between items-center bg-[#B194D7] rounded-t-xl p-3">
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

        <div class="relative overflow-x-hidden max-h-md">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th class="px-6 py-3 font-normal">
                  Product name
                </th>
                <th class="px-6 py-3 font-normal">
                  Units
                </th>
                <th class="px-6 py-3 font-medium font-normal">
                  ID
                </th>
                <th class="px-6 py-3">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(attribute, i) in admin.attributesSearch" :key="i" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  <input type="text" :value="attribute.name" :disabled="!attribute.name">
                </th>
                <td class="px-6 py-4 flex gap-2">
                  <!-- <span v-if="attribute.units[0]">{{ attribute.units[0] }}</span> <span v-if="attribute.units[1]">, {{ attribute.units[1] }}</span> -->
                  <input :value="attribute.units[0]" type="text" class="w-10" :disabled="!attribute.units[0]">
                  <input :value="attribute.units[1]" type="text" class="w-10" :disabled="!attribute.units[1]">
                </td>
                <td class="px-6 py-4">
                  <input type="text" :value="attribute.id" class="w-15" :disabled="!attribute.id">
                </td>
                <td class="p-4 text-right flex gap-2 justify-end">
                  <button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center" @click="handleUpdate">
                    Update
                  </button>
                  <button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center" @click="handleDelete(attribute.id)">
                    <!-- <IADelete /> -->
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 shadow-md rounded-b-lg flex justify-between items-center p-3">
          <div class="font-medium dark:text-white">
            <input v-model="createItem.create[0].name" type="text" class="border-1 rounded-md py-1 px-3 border-blue-300" required placeholder="name...">
          </div>
          <div class="font-medium dark:text-white flex gap-2">
            <input v-model="createItem.create[0].units[0]" type="text" class="border-1 rounded-md py-1 px-3 border-blue-300 w-20" required placeholder="units 1...">
            <input v-model="createItem.create[0].units[1]" type="text" class="border-1 rounded-md py-1 px-3 border-blue-300 w-20" required placeholder="units 2...">
          </div>
          <div>
            <button type="button" class="text-white bg-gradient-to-br from-lime-200 via-lime-500 to-lime-600 hover:bg-gradient-to-tl focus:ring-2 focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 flex items-center gap-1" @click="handleCreate">
              <IAAdd />Add
            </button>
          </div>
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
