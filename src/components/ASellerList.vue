<script setup>
const sellerList = reactive([{
  avatar: 'https://technext.github.io/star-admin2-free-admin-template/images/faces/face1.jpg',
  name: 'Brandon Washington',
  email: 'headadmin1@gmail.com',
  total: 162,
  sold: 85,
  status: 'Offline',
},
{
  avatar: 'https://technext.github.io/star-admin2-free-admin-template/images/faces/face2.jpg',
  name: 'Laura Brooks',
  email: 'headadmin2@gmail.com',
  total: 162,
  sold: 65,
  status: 'Active',
},
{
  avatar: 'https://technext.github.io/star-admin2-free-admin-template/images/faces/face3.jpg',
  name: 'Wayne Murphy',
  email: 'headadmin3@gmail.com',
  total: 162,
  sold: 135,
  status: 'Not found',
},
{
  avatar: 'https://technext.github.io/star-admin2-free-admin-template/images/faces/face4.jpg',
  name: 'Matthew Bailey',
  email: 'headadmin4@gmail.com',
  total: 162,
  sold: 32,
  status: 'Pending',
},
{
  avatar: 'https://technext.github.io/star-admin2-free-admin-template/images/faces/face5.jpg',
  name: 'Katherine Butler',
  email: 'headadmin5@gmail.com',
  total: 162,
  sold: 77,
  status: 'In progress',
}])

const statusColor = ref('#34B1AA')
const percent = (sold, total) => {
  const result = parseFloat(sold * 100 / total).toFixed(2)
  if (result <= 70) {
    statusColor.value = '#FFAF00'
    if (result < 40)
      statusColor.value = '#F95F53'
  }
  else {
    statusColor.value = '#34B1AA'
  }
  return result
}
</script>

<template>
  <div class="seller-list bg-white border-1 border-solid border-gray-200 rounded-lg p-5 shadow-md shadow-gray-300">
    <div class="flex justify-between items-start py-2">
      <div>
        <h6 class="font-semibold text-md">
          Seller list requests
        </h6>
        <p class="text-xs text-gray-500">
          Total 50+ new requests in this month
        </p>
      </div>
      <div>
        <button class="btn py-2 px-3 rounded-md shadow-md shadow-gray-300">
          <i class="fas fa-user-plus" /> Add new seller
        </button>
      </div>
    </div>
    <div class="seller-table divide-y divide-solid divide-1 divide-gray-300">
      <div class="seller-head grid grid-cols-7 py-5">
        <p class="col-span-1 text-center">
          DELETE
        </p>
        <p class="col-span-3 text-center">
          SELLERS
        </p>
        <p class="col-span-2">
          PROGRESS
        </p>
        <p class="col-span-1">
          STATUS
        </p>
      </div>
      <div v-for="(seller, i) in sellerList" :key="i" class="seller-body grid grid-cols-6 py-2">
        <div class="flex justify-around items-center col-span-3">
          <input id="delete_checkbox" type="checkbox" name="delete_checkbox" class="w-4 h-4 cursor-pointer outline-none">
          <div class="flex">
            <img :src="seller.avatar" alt="avatar" class="rounded-full mr-2">
            <div>
              <p class="font-medium">
                {{ seller.name }}
              </p>
              <p class="text-xs text-gray-400">
                {{ seller.email }}
              </p>
            </div>
          </div>
        </div>
        <div class="col-span-2 grid items-center">
          <div class="flex justify-between text-xs text-gray-400 w-3/4">
            <p>{{ percent(seller.sold, seller.total) }}%</p>
            <p>{{ seller.sold }}/{{ seller.total }}</p>
          </div>
          <div class="w-3/4 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div class="h-1.5 rounded-full" :style="`width: ${percent(seller.sold, seller.total)}% ; background: ${statusColor}`" />
          </div>
        </div>
        <div class="flex justify-start items-center">
          <p class="rounded-2xl py-0.5 px-2 bg-orange-200">
            {{ seller.status }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.seller-head > p{
    font-size: 0.7rem;
    font-weight: 600;
    color: gray;
}
</style>
