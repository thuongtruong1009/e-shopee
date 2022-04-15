<script setup>
const { t } = useI18n()
const isPopupQR = ref(false)
const onOpenPopupQR = () => {
  isPopupQR.value = true
  const body = document.body
  body.style.overflowY = 'hidden'
}
const onClosePopupQR = () => {
  isPopupQR.value = false
  const body = document.body
  body.style.overflowY = ''
}
</script>

<template>
  <div class="month-sale-container grid justify-center gap-3 px-8 relative">
    <img src="/img/month_sale/2.png" alt="" class="rounded-lg w-screen cursor-pointer my-5" @click="onOpenPopupQR">
    <img src="/img/month_sale/1.png" alt="" class="w-full rounded-lg">
    <div v-if="isPopupQR === true" class="popup-qr fixed z-1 w-screen h-screen top-0 left-0 flex justify-center items-center">
      <div class="bg-black opacity-30 absolute top-0 left-0 w-full h-full" @click="onClosePopupQR" />
      <div class="bg-white w-152 z-2 rounded-md grid grid-cols-3 relative">
        <img src="/img/month_sale/topleft_label.png" alt="topleft_label" class="absolute top-0 left-0 w-13 h-13">
        <span class="absolute rounded-full bg-gray-600 w-7 h-7 border-3 border-solid border-white -top-2 -right-2 text-white flex justify-center items-center cursor-pointer" @click="onClosePopupQR"><ICross /></span>
        <div class="col-span-2 p-5 text-left">
          <h2 class="text-xl font-bold">
            <!-- Tải ứng dụng Shopee để nhận ngay Quà Tặng từ chúng tớ nhé! -->
            {{ t('cmonthsale.download') }}!
          </h2>
          <h5 class="py-2 text-lg font-normal">
            <!-- Nhận quà tặng và các deal độc quyền ngay bây giờ. -->
            {{ t('cmonthsale.get-gift') }}.
          </h5>
          <div class="grid grid-cols-2 gap-2 justify-between items-center pt-2">
            <img src="/img/month_sale/app_store.png" alt="app_store">
            <img src="/img/month_sale/google_store.png" alt="google_play">
          </div>
        </div>
        <div class="grid justify-center items-center p-5">
          <img src="/img/month_sale/qr_code.png" alt="qr_code">
          <div class="grid grid-cols-2 justify-around items-center w-full">
            <img src="/img/month_sale/chplay_min.png" alt="chplay_min">
            <img src="/img/month_sale/appstore_min.png" alt="appstore_min">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
