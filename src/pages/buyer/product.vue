<route lang="yaml">
meta:
  layout: buyer/LBProductDetails
</route>

<template>
  <div class="buyer-product-details-container max-w-300 bg-white rounded-lg shadow-md shadow-gray-400 p-3 flex gap-5">
    <div>
      <img src="https://cf.shopee.vn/file/f0ef79bb6556880ebb85baab0e64c8d6" alt="product_img" class="max-w-112 max-h-112">
    </div>
    <div class="pr-5">
      <h2 class="break-words text-xl font-medium">
        🔥HÀNG SIÊU CẤP🔥Dép bánh mỳ nam nữ đúc nguyên khối cute siêu nhẹ và êm chân
      </h2>
      <div class="flex divide-1 divide-solid divide-x divide-gray-300">
        <div class="flex items-center gap-2 pr-3">
          <p class="border-b-1 border-b-solid border-b-[#EE4D2D] text-[#EE4D2D] font-medium">
            5.0
          </p>
          <div class="flex gap-0.25">
            <div v-for="i in 5" :key="i">
              <IStars />
            </div>
          </div>
        </div>
        <div class="flex item gap-2 px-3">
          <p class="border-b-1 border-b-solid border-b-black font-medium">
            1
          </p>
          <p class="text-gray-500">
            Evaluate
          </p>
        </div>
        <div class="flex item gap-2 px-3">
          <p class="font-medium">
            100
          </p>
          <p class="text-gray-500">
            Solded
          </p>
        </div>
      </div>
      <div class="py-3 px-5 bg-[#FAFAFA] rounded-lg flex items-center gap-5">
        <div class="old-price flex items-start text-gray-500 line-through">
          <p>₫</p>
          <h2 class="font-medium text-sm">
            178.000
          </h2>
        </div>
        <div class="current-price flex text-[#EE4D2D]">
          <p>₫</p>
          <h2 class="font-medium text-3xl">
            89.000
          </h2>
        </div>
        <div class="bg-[#EE4D2D] rounded-sm px-1">
          <p class="text-white font-medium text-xs">
            50% decrease
          </p>
        </div>
      </div>
      <div class="infor">
        <label>Deal sốc</label>
        <p class="text-[#EE4D2D] bg-[#FFEEE8] px-1 text-sm">
          Mua Kèm Deal Sốc
        </p>
      </div>
      <div class="infor">
        <label>Vận chuyển</label>
        <p>Vận chuyển tới</p>
      </div>
      <div class="infor">
        <label>Màu sắc</label>
        <div class="uppercase flex gap-2">
          <p>Trắng</p>
          <p>Đen</p>
          <p>Hồng</p>
        </div>
      </div>
      <div class="infor">
        <label>Kích cỡ</label>
        <div class="uppercase flex gap-2">
          <p>35-36</p>
          <p>37-38</p>
          <p>39-40</p>
          <p>41-42</p>
          <p>42-43</p>
        </div>
      </div>
      <div class="infor">
        <label>Số lượng</label>
        <div class="uppercase flex gap-2">
          <p>-</p>
          <p>1</p>
          <p>+</p>
        </div>
        <p>14984 sản phẩm có sẵn</p>
      </div>
      <div class="flex gap-3">
        <button class="px-5 py-3 rounded-md bg-[#FFEEE8] hover:bg-[#FFF5F1] border-1 border-solid border-[#EE4D2D] text-[#EE4D2D] capitalize">
          Thêm vào giỏ hàng
        </button>
        <button class="px-5 py-3 rounded-md bg-[#EE4D2D] hover:bg-[#F05D40] border-1 border-solid border-[#EE4D2D] text-white capitalize">
          Mua Ngay
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.infor{
    display: flex;
    text-transform: capitalize;
}
.infor > label{
    width: 6.8rem;
    font-size: 0.9em;
    color: rgb(107, 114, 128);
    font-weight: 500;
}
</style>
