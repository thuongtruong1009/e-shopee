<route lang="yaml">
meta:
  layout: buyer/LBProductDetails
</route>

<script setup>
import provinceNames from '~/shared/provinces'

</script>

<template>
  <div class="product-summary-container max-w-300 bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-400/50 p-3 mx-2">
    <div class="main-content flex gap-10">
      <div>
        <img src="https://cf.shopee.vn/file/f0ef79bb6556880ebb85baab0e64c8d6" alt="product_img" class="max-w-112 max-h-112 rounded-lg shadow-lg shadow-gray-300">
        <div class="grid grid-cols-5 max-w-112 mt-3 gap-2">
          <img src="https://cf.shopee.vn/file/12ae221177dcb74dc4b1701afc06b298_tn" alt="product_preview_img" class="rounded-md border-2 border-solid hover:border-[#EE4D2D] cursor-pointer">
          <img src="https://cf.shopee.vn/file/5413e844e5893181b0f33a191af65cd0_tn" alt="product_preview_img" class="rounded-md border-2 border-solid hover:border-[#EE4D2D] cursor-pointer">
          <img src="https://cf.shopee.vn/file/7ed7a314372976ba07c7cc4f083bbf68_tn" alt="product_preview_img" class="rounded-md border-2 border-solid hover:border-[#EE4D2D] cursor-pointer">
          <img src="https://cf.shopee.vn/file/f0ef79bb6556880ebb85baab0e64c8d6" alt="product_preview_img" class="rounded-md border-2 border-solid hover:border-[#EE4D2D]">
          <img src="https://cf.shopee.vn/file/963e9b04751b757bb2a4ead4d1a2f1e9_tn" alt="product_preview_img" class="rounded-md border-2 border-solid hover:border-[#EE4D2D] cursor-pointer">
        </div>
      </div>
      <div class="pr-5 grid content-between min-h-112">
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
        <div class="py-3 px-5 bg-[#FAFAFA] dark:bg-gray-700 rounded-lg flex items-center gap-5">
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
          <label>Shipping</label>
          <p class="text-sm flex gap-1 items-center">
            <IBShipping /> Vận chuyển tới
          </p>
          <div>
            <select name="province" class="cursor-pointer dark:bg-gray-700 rounded-md pl-2">
              <div>
                <input type="text" placeholder="search">
              </div>
              <option v-for="(province, i) in provinceNames" :key="i" :value="province" class="mt-5 bg-[#FFF5F1] dark:bg-gray-700">
                {{ province }}
              </option>
            </select>
          </div>
        </div>
        <div class="infor">
          <label>Colors</label>
          <div class="uppercase flex gap-2">
            <p class="box-type">
              White
            </p>
            <p class="box-type">
              Black
            </p>
            <p class="box-type">
              Pink
            </p>
          </div>
        </div>
        <div class="infor">
          <label>Sizes</label>
          <div class="uppercase flex gap-2 text-sm">
            <p class="box-type">
              35-36
            </p>
            <p class="box-type">
              37-38
            </p>
            <p class="box-type">
              39-40
            </p>
            <p class="box-type">
              41-42
            </p>
            <p class="box-type">
              42-43
            </p>
          </div>
        </div>
        <div class="infor">
          <label>Quantities</label>
          <div class="uppercase flex items-center rounded-md border-1 border-solid border-gray-300 text-sm">
            <p class="px-2 cursor-pointer hover:bg-[#FAFAFA]">
              <IBMinus />
            </p>
            <p class="border-l-1 border-l-solid border-l-gray-300 border-r-1 border-r-solid border-r-gray-300 font-medium px-5 py-1">
              1
            </p>
            <p class="px-2 cursor-pointer hover:bg-[#FAFAFA]">
              <IBPlus />
            </p>
          </div>
          <p class="lowercase text-gray-500">
            14984 available products
          </p>
        </div>
        <div class="flex gap-3">
          <button class="px-5 py-3 rounded-md bg-[#FFEEE8] hover:bg-[#FFF5F1] border-1 border-solid border-[#EE4D2D] text-[#EE4D2D] capitalize flex items-center gap-1">
            <ICart class="max-h-6" />Thêm vào giỏ hàng
          </button>
          <button class="px-5 py-3 rounded-md bg-[#EE4D2D] hover:bg-[#F05D40] border-1 border-solid border-[#EE4D2D] text-white capitalize">
            Mua Ngay
          </button>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap gap-10 py-5">
      <div class="min-w-112 flex justify-center items-center gap-2 cursor-pointer">
        <IBLove />
        <p>Total liked: (934)</p>
      </div>
      <div class="flex justify-center items-center gap-5">
        <div class="flex items-center gap-1">
          <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/83e10a1f95cb083579c089448ef8dd3b.png" alt="insurance_icon" class="max-w-4 max-h-4">
          <p>e-shopee insurance</p>
        </div>
        <div class="capitalize text-gray-500 text-sm">
          <p>3 ngày trả hàng / hoàn tiền</p>
        </div>
      </div>
    </div>
  </div>

  <div class="shop-product-container max-w-300 bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-400/50 p-5 mx-2 divide-x divide-1 divide-solid divide-gray-300 flex flex-wrap">
    <div class="flex">
      <img src="https://cf.shopee.vn/file/7ebd612d6fddcf7f4114bf2d97da382a_tn" alt="shop_avatar" class="max-w-19 max-h-19 rounded-full shadow-md shadow-gray-200 mr-4">
      <div class="min-w-85">
        <p class="font-medium text-md">
          deplenamcaocap
        </p>
        <p class="text-gray-500 text-xs">
          Online 13 hours ago
        </p>
        <div class="flex gap-2 text-sm mt-2">
          <button class="px-3 py-0.5 rounded-md bg-[#FFEEE8] hover:bg-[#FFF5F1] border-1 border-solid border-[#EE4D2D] text-[#EE4D2D] capitalize flex items-center gap-1">
            <IChat />Chat now
          </button>
          <button class="px-3 py-1 rounded-md hover:bg-[#FAFAFA] border-2 border-solid border-gray-300 text-[#EE4D2D] capitalize flex items-center gap-1">
            <IShop />Visit shop
          </button>
        </div>
      </div>
    </div>
    <div class="flex justify-around items-center w-3/5 text-sm text-gray-400">
      <div>
        <div class="flex gap-2 min-w-27">
          <p>Evalute</p>
          <span>171</span>
        </div>
        <div class="flex gap-2 min-w-27">
          <p>Productions</p>
          <span>43</span>
        </div>
      </div>
      <div>
        <div class="flex gap-2 min-w-27">
          <p>Response ratio</p>
          <span>11%</span>
        </div>
        <div class="flex gap-2 min-w-27">
          <p>Response time</p>
          <span>in some hours</span>
        </div>
      </div>
      <div>
        <div class="flex gap-2 min-w-27">
          <p>Joined</p>
          <span>13 months ago</span>
        </div>
        <div class="flex gap-2 whitespace-nowrap">
          <p>Follower</p>
          <span>9.4k</span>
        </div>
      </div>
    </div>
  </div>

  <div class="product-details max-w-300 bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-400/50 p-5 mx-2">
    <div class="bg-[#FAFAFA] dark:bg-gray-700 p-3 rounded-lg">
      <h2 class="uppercase text-xl">
        Product describes
      </h2>
    </div>
    <div>
      <label>Category</label>
      <p class="text-[#0055BD] cursor-pointer">
        e-shopee > men's shoes > sandal > other
      </p>
    </div>
    <div>
      <label>Organization</label>
      <p>Updating...</p>
    </div>
    <div>
      <label>Origin</label>
      <p>VietNam</p>
    </div>
    <div>
      <label>Address</label>
      <p>Updating...</p>
    </div>
    <div>
      <label>Warehouse</label>
      <p>14984</p>
    </div>
    <div>
      <label>Ship from</label>
      <p>Huyện Tân Kỳ, Nghệ An</p>
    </div>
    <div>
      <p>🔥Thanh toán khi nhận hàng liên hệ trước với shop nếu muốn xem hàng trước khi thanh toán</p>
      <p>Hotline: 0842610686</p>
      <p>🔥 Đổi trả miễn phí trong 15 ngày lỗi do nhà sản xuất</p>
      <p>🔥Bảo Hành: 6 tháng</p>
      <p>🔥Xuất Xứ: Shop chuyên hàng nhập thái và VNXK nói không với hàng chợ kém chất lượng</p>
      <p>🔥Size: 38 – 43</p>
      <p>🔥 Đế dép được thiết kế chịu ma sát tốt,  ôm chân, thon gọn, thoải mái di chuyển mà không lo đau chân Sử dụng trong mọi thời tiết và địa hình. Thiết kế tinh tế, phù hợp xu hướng thời trang hiện đại, trẻ trung, năng động. Thích hợp với nhiều trang phục của phái mạnh khi đi làm, đi chơi,...</p>
      <p>⚡ Kiểu dáng hottrend của năm 2021.</p>
      <p>⚡ Giày đẹp, nhẹ, bền. Có thể làm giày cặp, giày nhóm. Thích hợp đi chơi, chạy bộ, gym, đi học, đi làm...</p>
      <p>⚡ Có thể kết hợp Đồ, jeans, sooc, Ngố vv…. Đều phù hợp</p>
      <p>🔥Shop chuyên sỉ và lẻ toàn quốc với giá tốt nhất đến tay khách hàng</p>
      <p>🍀 Zalo; 0879614176</p>
      <p>🍀 Số Lượng Có Hạn , Nhanh Tay Đặt Hàng Nhé</p>
      <p>🍀 Cảm Ơn Khách Hàng Luôn Tin Tưởng Và Ủng Hộ Shop ☘️</p>
      <p>
        <span v-for="i in 20" :key="i" class="mr-3 text-[#0055BD] cursor-pointer">#dép nam</span>
      </p>
    </div>
  </div>

  <div class="product-evalutions max-w-300 bg-white dark:bg-gray-800 rounded-lg shadow-md shadow-gray-400/50 p-5 mx-2">
    <div class="text-xl uppercase">
      <h2>Product evalutions</h2>
    </div>
    <div class="divide-y divide-1 divide-solid divide-gray-200">
      <div v-for="i in 3" :key="i" class="flex py-3">
        <div class="px-3">
          <img src="https://cf.shopee.vn/file/3922ddaf7b5dde58c3193c6689e7aaca_tn" alt="customer_avatar_img" class="max-w-10 max-h-10 rounded-full">
        </div>
        <div class="customer-cmt">
          <p class="customer-username text-xs text-gray-600">
            yen050619
          </p>
          <p class="flex gap-0.25">
            <IStars v-for="i in 5" :key="i" />
          </p>
          <p class="text-gray-500 text-sm">
            Very good! I like it.
          </p>
          <p class="flex items-center gap-2 text-sm cursor-pointer text-gray-500">
            <IBLike /> 11
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.infor{
    display: flex;
    text-transform: capitalize;
    gap: 0.5rem;
}
.infor > label{
    width: 6.8rem;
    font-size: 0.9em;
    color: rgb(107, 114, 128);
    font-weight: 500;
}
.infor .box-type{
  border: 1px solid #e9e9e9;
  cursor: pointer;
  border-radius: 0.3rem;
  padding: 0 0.5rem;
}
.infor .box-type:hover{
  color: #EE4D2D;
  border-color: #EE4D2D;
  background: #FFF5F1;
}
.shop-product-container span{
  color: #EE4D2D;
}
.product-details > div:not(:first-child):not(:last-child) {
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  gap: 1rem;
}

.product-details label{
  min-width: 8.5rem;
  color: rgb(156, 163, 175);
}
.product-details > div:last-child > p:not(:last-child){
  margin: 0.5rem 0 0.5rem 1rem;
  font-size: 0.875rem;
}
.product-evalutions .customer-cmt p{
  margin: 0 0.5rem 0.5rem 0;
}
@media (max-width: 1000px){
  .main-content{
    flex-wrap: wrap;
  }
  .main-content > div:nth-child(2){
    margin-left: 0.75rem;
  }
}
</style>
