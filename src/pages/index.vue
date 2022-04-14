<route lang="yaml">
meta:
  layout: LIndex
</route>

<script setup lang="ts">
useHead({
  title: 'e-shopee',
})
</script>

<template>
  <div class="index-view overflow-x-hidden">
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
      <div class="grid content-center gap-5">
        <div>
          <h1 class="text-6xl font-semibold">
            Exploring e-shopee!
          </h1>
          <h3 class="text-3xl font-medium my-3">
            The top world's leading shopping app.
          </h3>
        </div>
        <ul>
          <li class="text-2xl font-medium">
            Download the app now
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
          Shopping anytime, anywhere!
        </h1>
        <h3 class="text-2xl">
          Enjoy attractive promotions, super savings from the most prestigious stores.
        </h3>
      </div>
      <div class="services-lists flex flex-wrap gap-5 p-5">
        <div>
          <img src="/img/index/shipping_service.png" alt="shipping_service">
          <h3>Transfer Support</h3>
          <p>Your order status is always updated in detail since you place your order</p>
        </div>
        <div>
          <img src="/img/index/customer_service.png" alt="customer_service">
          <h3>Customer support</h3>
          <p>Customer Care Department is always ready to support you 24/7</p>
        </div>
        <div>
          <img src="/img/index/hint_service.png" alt="hint_service">
          <h3>Today's Suggestions</h3>
          <p>Choose the right products for you in Today's Suggestions</p>
        </div>
        <div>
          <img src="/img/index/payment_service.png" alt="payment_service">
          <h3>Safe payment method</h3>
          <p>Thanh toán dễ dàng và thuận tiện: Thanh toán khi nhận hàng hoặc Thanh toán trước bằng Thẻ Tín dụng/Ghi nợ.</p>
        </div>
        <div>
          <img src="/img/index/chat_service.png" alt="chat_service">
          <h3>"Chat" feature</h3>
          <p>Chat directly with the seller for more product advice. You can also negotiate the desired price with the Seller through the "Chat" section</p>
        </div>
        <div>
          <img src="/img/index/insurance_service.png" alt="insurance_service">
          <h3>Guarantee Privacy</h3>
          <p>Shopee commits that the amount you pay will be transferred to the seller after you receive the goods. We always protect you!</p>
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
          <h5>e-shopee! The place to own all the products you love.</h5>
        </div>
      </div>

      <div class="bg-[#FEEFD0]">
        <div class="grid content-center">
          <h1>e-shoppe</h1>
          <h5>e-shopee! The place to own all the products you love.</h5>
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
          <h1>gifts for new customers</h1>
          <h5>Exclusive and attractive gifts for new customers at e-shopee</h5>
        </div>
      </div>
    </section>
    <section class="index-guys py-7">
      <div class="text-center text-3xl font-medium p-10">
        <h2>What do users say about e-shopee?</h2>
      </div>
      <div class="guys-opinion flex justify-center flex-wrap gap-5 px-5">
        <div class="rounded-lg shadow-lg shadow-gray-400/50 w-153 h-69 p-2">
          <div class="flex w-full h-[85%]">
            <div>
              <img src="/img/index/quote.png" alt="quote_mark_img" class="min-w-14 h-13">
            </div>
            <div class="content text-white flex justify-center items-center w-7/10 text-xl">
              <p>I always look forward to Shopee to hunt for deals and always get surprisingly good deals. Not to mention every deal hunting is fun, the last deal hunt is the most fun in my 2 years of e-shopee addiction.</p>
            </div>
            <div class="infor flex items-end text-xl">
              <p>Diem My</p>
            </div>
          </div>
          <div class="flex justify-end text-sm text-gray-500">
            <p>joined at 12/2018</p>
          </div>
        </div>
        <div class="rounded-lg shadow-md shadow-gray-300 w-153 h-69 p-2">
          <div class="flex w-full h-[85%]">
            <div>
              <img src="/img/index/quote.png" alt="quote_mark_img" class="min-w-14 h-13">
            </div>
            <div class="content text-white flex justify-center items-center w-7/10 text-xl">
              <p>Every time I go to e-shopee, I have great results, dozens of items keep picking up until I receive the goods, I don't even know when I ordered this or that. So addicted to e-shopee</p>
            </div>
            <div class="infor flex items-end text-xl">
              <p>Nhung Wo</p>
            </div>
          </div>
          <div class="flex justify-end text-sm text-gray-500">
            <p>Joined at 12/2018</p>
          </div>
        </div>
      </div>
    </section>
    <footer class="text-center text-gray-400 py-3">
      <p>Copyright @2022 e-shopee. All rights reserved.</p>
    </footer>
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
.services-lists > div{
    flex: 30%;
    display: grid;
    align-content: center;
    text-align: center;
    word-wrap: break-word;
    border: 1px solid #e9e9e9;
    border-radius: 1rem;
    box-shadow: 2px 2px 4px #d9d9d9;
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
