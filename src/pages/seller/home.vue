<route lang="yaml">
meta:
  layout: seller/LSHome
</route>

<script setup>
useHead({
  title: 'seller | home',
})
</script>

<template>
  <div class="seller_home_container grid p-10 gap-5 h-min">
    <div class="max-w-196 w-196 h-min bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-300 p-3 border-t-1 border-t-[#e9e9e9]">
      <div class="p-2 text-lg font-medium">
        <h2>Your to do list</h2>
      </div>
      <div class="home_action flex justify-around divide-1 divide-solid divide-x divide-[#e9e9e9] text-center">
        <div>
          <h6>0</h6>
          <p>Chờ xác nhận</p>
        </div>
        <div>
          <h6>0</h6>
          <p>Đơn giảm giá</p>
        </div>
        <div>
          <h6>0</h6>
          <p>Đã xử lí</p>
        </div>
        <div>
          <h6>0</h6>
          <p>Đơn hủy</p>
        </div>
      </div>
    </div>
    <div class="max-w-196 w-196 h-min bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-300 p-3">
      <div>
        <div class="flex items-center">
          <h2 class="text-lg font-medium">
            Phân tích bán hàng
          </h2>
          <p class="text-xs text-gray-400 ml-3">
            ( Hôm nay 17:00 GMT+7 )
          </p>
        </div>
        <p class="text-xs text-gray-400">
          Tổng quan về dữ liệu của cửa hàng cho kích thước của đơn hàng đã xác nhận
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home_action > div{
  flex: 25%;
}
.home_action > div:hover{
  background: #F6F6F6;
}
.home_action p{
  font-size: 0.8em;
}
.home_action h6{
  color: #2673DD;
  font-weight: 500;
}
</style>
