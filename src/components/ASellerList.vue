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
  sold: 115,
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

const percent = (sold, total) => {
  return parseFloat(sold * 100 / total).toFixed(2)
}
</script>

<template>
  <div class="seller-list bg-white border-1 border-solid border-gray-200 rounded-lg p-3 shadow-md shadow-gray-300">
    <div class="flex justify-between items-start">
      <div>
        <h6>Pending Requests</h6>
        <p>You have 50+ new requests</p>
      </div>
      <div>
        <button class="btn">
          Add new member
        </button>
      </div>
    </div>
    <div class="seller-table">
      <div class="seller-head grid grid-cols-6">
        <p class="col-span-3 text-center">
          CUSTOMER
        </p>
        <p class="col-span-2">
          PROGRESS
        </p>
        <p class="col-span-1">
          STATUS
        </p>
      </div>
      <div v-for="(seller, i) in sellerList" :key="i" class="seller-body grid grid-cols-6">
        <div class="flex justify-evenly items-center col-span-3">
          <img :src="seller.avatar" alt="avatar" class="rounded-full">
          <div>
            <p>{{ seller.name }}</p>
            <p>{{ seller.email }}</p>
          </div>
        </div>
        <div class="col-span-2">
          <div class="w-2/3 bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div class="bg-[#34B1AA] h-1.5 rounded-full" :style="`width: ${percent(seller.sold, seller.total)}%`" />
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
