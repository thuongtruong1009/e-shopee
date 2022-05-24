<route lang="yaml">
meta:
  layout: LIndex
</route>

<script setup>
useHead({
  title: 'e-shopee | welcome',
})
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div class="index-view overflow-x-hidden">
    <div class="index-header flex justify-between py-4 px-20 border-b-1 border-b-solid bg-[#ececec] dark:bg-blue-gray-700">
      <div class="flex items-end">
        <IShopee />
        <div class="flex mx-5 gap-5">
          <router-link to="/admin/login">
            <h2 class="text-sm flex items-center gap-1">
              <IAdmin />{{ t('index.admin-chanel') }}
            </h2>
          </router-link>
          <router-link to="/seller/home">
            <h2 class="text-sm flex items-center gap-1">
              <ISell />{{ t('index.seller-chanel') }}
            </h2>
          </router-link>
          <router-link to="/buyer/login">
            <h2 class="text-sm flex items-center gap-1">
              <IHome />{{ t('index.buying-chanel') }}
            </h2>
          </router-link>
        </div>
      </div>
      <div class="flex items-center gap-3 dark:text-gray-200">
        <div class="hover:bg-gray-200 hover:text-gray-800 p-2 rounded-full cursor-pointer">
          <IApplication />
        </div>
        <div class="hover:bg-gray-200 hover:text-gray-800 p-1.5 rounded-full cursor-pointer">
          <IFacebook />
        </div>
        <div class="hover:bg-gray-200 hover:text-gray-800 p-1.5 rounded-full cursor-pointer">
          <IInstagram />
        </div>
        <div class="hover:bg-gray-200 hover:text-gray-800 p-1.5 rounded-full cursor-pointer">
          <a class="icon-btn" :title="t('button.toggle_langs')" @click="toggleLocales">
            <carbon-language />
          </a>
        </div>
        <Cswitch />
      </div>
    </div>
    <main class="index-banner flex justify-around flex-wrap pt-15">
      <div class="grid content-center gap-5">
        <div>
          <h1 class="text-6xl font-semibold">
            {{ t('index.exploring') }} e-shopee!
          </h1>
          <h3 class="text-3xl font-medium my-3">
            {{ t('index.banner-desc') }}.
          </h3>
        </div>
        <ul>
          <li class="text-2xl font-medium">
            {{ t('index.download-now') }}
          </li>
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
    <section class="index-services p-5">
      <div class="services-title p-10 break-words text-center">
        <h1 class="text-4xl font-medium my-3">
          {{ t('index.service-title') }}!
        </h1>
        <h3 class="text-2xl">
          {{ t('index.service-desc') }}.
        </h3>
      </div>
      <div class="services-lists flex flex-wrap gap-5 p-5">
        <div>
          <img src="/img/index/shipping_service.png" alt="shipping_service">
          <h3>{{ t('index.transfer-support') }}</h3>
          <p>{{ t('index.transfer-desc') }}</p>
        </div>
        <div>
          <img src="/img/index/customer_service.png" alt="customer_service">
          <h3>{{ t('index.customer-support') }}</h3>
          <p>{{ t('index.customer-desc') }}</p>
        </div>
        <div>
          <img src="/img/index/hint_service.png" alt="hint_service">
          <h3>{{ t('index.today-suggestion') }}</h3>
          <p>{{ t('index.today-suggestion-desc') }}</p>
        </div>
        <div>
          <img src="/img/index/payment_service.png" alt="payment_service">
          <h3>{{ t('index.safe-payment') }}</h3>
          <p>{{ t('index.safe-payment-desc') }}.</p>
        </div>
        <div>
          <img src="/img/index/chat_service.png" alt="chat_service">
          <h3>"{{ t('index.chat') }}" {{ t('index.chat-feature') }}</h3>
          <p>{{ t('index.chat-desc') }}</p>
        </div>
        <div>
          <img src="/img/index/insurance_service.png" alt="insurance_service">
          <h3>{{ t('index.guarantee-privacy') }}</h3>
          <p>{{ t('index.commit') }}!</p>
        </div>
      </div>
    </section>
    <section class="index-eshoppe pt-10 bg-[#F9F9F9]">
      <div class="bg-[#F9F9F9]">
        <div>
          <img src="/img/index/mobile_1.png" alt="mobile_1_img">
        </div>
        <div class="grid content-center">
          <h1>e-shoppe</h1>
          <h5>e-shopee! {{ t('index.advertisement-1-desc') }}.</h5>
        </div>
      </div>

      <div class="bg-[#FEEFD0]">
        <div class="grid content-center">
          <h1>{{ t('index.advertisement-2-title') }}</h1>
          <h5>{{ t('index.advertisement-2-desc') }}.</h5>
        </div>
        <div>
          <img src="/img/index/mobile_2.png" alt="mobile_2_img">
        </div>
      </div>

      <div class="bg-[#F9F9F9]">
        <div>
          <img src="/img/index/mobile_3.png" alt="mobile_3_img">
        </div>
        <div class="grid content-center">
          <h1>{{ t('index.advertisement-3-title') }}</h1>
          <h5>{{ t('index.advertisement-3-desc') }}</h5>
        </div>
      </div>
    </section>
    <section class="index-guys py-7">
      <div class="text-center text-3xl font-medium p-10">
        <h2>{{ t('index.customer-opinion-title') }}?</h2>
      </div>
      <div class="guys-opinion flex justify-center flex-wrap gap-5 px-5">
        <div class="rounded-lg shadow-lg shadow-gray-400/50 w-153 h-69 p-2">
          <div class="flex w-full h-[85%]">
            <div>
              <img src="/img/index/quote.png" alt="quote_mark_img" class="min-w-14 h-13">
            </div>
            <div class="content text-white flex justify-center items-center w-7/10 text-xl">
              <p>{{ t('index.opinion-1') }}.</p>
            </div>
            <div class="infor flex items-end text-xl">
              <p>Diem My</p>
            </div>
          </div>
          <div class="flex justify-end text-sm text-gray-500">
            <p>{{ t('index.joined-at') }} 12/2018</p>
          </div>
        </div>
        <div class="rounded-lg shadow-md shadow-gray-300 w-153 h-69 p-2">
          <div class="flex w-full h-[85%]">
            <div>
              <img src="/img/index/quote.png" alt="quote_mark_img" class="min-w-14 h-13">
            </div>
            <div class="content text-white flex justify-center items-center w-7/10 text-xl">
              <p>{{ t('index.opinion-2') }}</p>
            </div>
            <div class="infor flex items-end text-xl">
              <p>Nhung Wo</p>
            </div>
          </div>
          <div class="flex justify-end text-sm text-gray-500">
            <p>{{ t('index.joined-at') }} 12/2018</p>
          </div>
        </div>
      </div>
    </section>
    <footer class="text-center text-gray-400 py-3">
      <p>{{ t('index.copyright') }} @{{ new Date().getFullYear() }} e-shopee. {{ t('index.all-rights-reserved') }}.</p>
    </footer>
  </div>
</template>

<style scoped>
.index-header h2{
  padding: 0.25rem 1rem;
  border-radius: 1rem;
  background: #ebecff;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
              10px 10px 15px rgba(70, 70, 70, 0.12);
}
.index-banner{
    background-image: url("/img/index/banner_main.png");
    background-repeat: no-repeat;
    background-size: cover;
}
li{
    margin: 1rem 0;
}
.services-lists > div{
    flex: 30%;
    display: grid;
    align-content: center;
    text-align: center;
    word-wrap: break-word;
    border: 1px solid #e9e9e9;
    border-radius: 1rem;
    box-shadow: 2px 2px 4px #cccccc;
    background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);
}
.services-lists img{
    justify-self: center;
}
.services-lists > div > h3{
    font-size: 1.6em;
    font-weight: 500;
}
.index-eshoppe > div:nth-child(1):after {
  content: "";
  display: block;
  margin-top: -20vh;
  border-top: 12vw solid transparent;
  border-bottom: 0px solid transparent;
  border-right: 100vw solid #FEEFD0;
}
.index-eshoppe > div:nth-child(2):after {
  content: "";
  display: block;
  margin-top: -20vh;
  border-top: 12vw solid transparent;
  border-bottom: 0px solid transparent;
  border-left: 100vw solid #F9F9F9;
}
.index-eshoppe > div{
    display: flex;
    justify-content: space-around;
    word-wrap: break-word;
    flex-wrap: wrap;
}
.index-eshoppe > div > div{
    flex: 50%;
    display: grid;
    justify-content: center;
}
.index-eshoppe > div h1{
    color: #FC7D50;
    font-size: 2.5em;
}
.index-eshoppe > div h5{
    font-size: 1.5em;
}
.guys-opinion > div:nth-child(1){
    background-image: url("/img/index/guy_1.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
}
.guys-opinion > div:nth-child(2){
    background-image: url("/img/index/guy_2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
}
</style>
