<route lang="yaml">
meta:
  layout: LIndex
</route>

<template>
  <div class="index-view">
    <div class="index-header flex justify-between py-4 px-20 border-b-1 border-b-solid">
      <div class="flex items-end gap-7">
        <IShopee />
        <router-link to="/home/admin">
          <h2 class="text-sm flex items-center gap-1">
            <IAdmin />Admin chanel
          </h2>
        </router-link>
        <router-link to="/home/seller">
          <h2 class="text-sm flex items-center gap-1">
            <ISell />Seller chanel
          </h2>
        </router-link>
        <router-link to="/home">
          <h2 class="text-sm flex items-center gap-1">
            <IHome />Buying chanel
          </h2>
        </router-link>
      </div>
      <div class="flex justify-around items-center w-40">
        <div class="hover:bg-gray-200 p-2 rounded-full cursor-pointer">
          <IApplication />
        </div>
        <div class="hover:bg-gray-200 p-1.5 rounded-full cursor-pointer">
          <IFacebook />
        </div>
        <div class="hover:bg-gray-200 p-1.5 rounded-full cursor-pointer">
          <IInstagram />
        </div>
      </div>
    </div>
    <main class="index-banner flex justify-around flex-wrap pt-15">
      <div class="grid content-center">
        <div>
          <h1 class="text-6xl font-semibold">
            Exploring e-shopee!
          </h1>
          <h3 class="text-3xl font-medium">
            The world's leading shopping app
          </h3>
        </div>
        <ul>
          <li>Download the app now</li>
          <li>
            <a href="https://apps.apple.com/vn/app/id959841449" target="_blank">
              <img src="/img/index/app_store.png" alt="app_store" class="w-60 h-18">
            </a>
          </li>
          <li>
            <a href="https://play.google.com/store/apps/details?id=com.shopee.vn&referrer=af_tranid%3Drsx9V4J79OX3NH5LwyqLcw%26pid%3DOrganicA%26c%3Dlp_home_and1" target="_blank">
              <img src="/img/index/google_play.png" alt="google_play" class="w-60 h-18">
            </a>
          </li>
          <li>
            <a href="https://appgallery.huawei.com/app/C101433653?sharePrepath=ag&channelId=web&detailType=0" target="_blank">
              <img src="/img/index/app_galary.png" alt="app_galary" class="w-60 h-18">
            </a>
          </li>
        </ul>
      </div>
      <div>
        <img src="/img/index/hand_phone.png" alt="app_mobile">
      </div>
    </main>
  </div>
</template>

<style scoped>
.index-banner{
    background-image: url("/img/index/banner_main.png");
    background-repeat: no-repeat;
    background-size: cover;
}
li{
    margin: 1rem 0;
}
</style>
