<script setup>
import { isDark } from '~/composables'
const { t } = useI18n()
</script>

<template>
  <div class="footer flex dark:text-$dark-text">
    <div class="left md:(w-1/3 p-16 bg-gray-100) text-left dark:bg-black <md:(w-1/2 p-7 bg-light-200)">
      <IBrand class="py-4" style="filter: drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2));" />
      <p class="py-4">
        {{ t('footer.commit') }}
      </p>
      <div class="contact flex py-4">
        <span><a href="tel:(+84)917085937"><img src="/img/icon/phone2.png" alt="phone_img"></a></span>
        <div class="phone pl-4">
          <p>{{ t('footer.help') }}</p>
          <a href="tel:(+84)917085937"><h4 class="font-semibold text-black dark:text-gray-200 hover:text-red-500 duration-300">(+84) 917 085 937</h4></a>
        </div>
      </div>
      <div class="social flex justify-start py-4">
        <span><img src="https://img.icons8.com/ios/50/000000/facebook-new.png"></span>
        <span><img src="https://img.icons8.com/ios/50/000000/github--v2.png"></span>
        <span><img src="https://img.icons8.com/ios/50/000000/twitter--v1.png"></span>
        <span><img src="https://img.icons8.com/ios/50/000000/youtube-play.png"></span>
      </div>
      <div class="copyright py-4 text-sm">
        <p>{{ t('footer.copyright') }} © <a href="">e-shopee {{ new Date().getFullYear() }}</a>. {{ t('footer.all rights reserved') }}</p>
      </div>
    </div>
    <div class="right grid w-2/3 py-15 px-8 grid-cols-4 text-left bg-light-200 dark:bg-black">
      <div class="information col-span-1">
        <h3 :class="{dark : isDark}" class="flex gap-2 items-center">
          <IInfor /> {{ t('footer.information') }}
        </h3>
        <span class="absolute bg-[#EE4D2D] w-15 h-0.5" />
        <ul>
          <li>{{ t('footer.delivery') }}</li>
          <li><a href="/about">{{ t('footer.about us') }}</a></li>
          <li><a href="/buyer/account/payment">{{ t('footer.secure payment') }}</a></li>
          <li><a href="/contact">{{ t('footer.contact us') }}</a></li>
          <li><a href="/sitemap">{{ t('footer.sitemap') }}</a></li>
          <li>{{ t('footer.stores') }}</li>
        </ul>
      </div>
      <div class="custom col-span-1">
        <h3 :class="{dark : isDark}" class="flex items-center gap-2">
          <ILink /> {{ t('footer.link') }}
        </h3>
        <span class="absolute bg-[#EE4D2D] w-15 h-0.5" />
        <ul>
          <li><a href="/juridicals/privacy_policy">{{ t('footer.privacy policy') }}</a></li>
          <li><a href="/juridicals/term_of_service">{{ t('footer.term of service') }}</a></li>
          <li><a href="/juridicals/service_requirement">{{ t('footer.service requirement') }}</a></li>
          <li><a href="">{{ t('footer.best sales') }}</a></li>
          <li><a href="/buyer/login">{{ t('footer.login') }}</a></li>
          <li><a href="/buyer/account/dashboard">{{ t('footer.my account') }}</a></li>
        </ul>
      </div>
      <div class="news col-span-2">
        <h3 :class="{dark : isDark}" class="flex items-center gap-2">
          <INotify /> {{ t('footer.newsletter') }}
        </h3>
        <span class="absolute bg-[#EE4D2D] w-15 h-0.5" />
        <div class="py-4">
          <p>{{ t('footer.subscribe') }}</p>
          <p><em>{{ t('footer.sign up today') }}</em></p>
        </div>
        <form action="" method="post" class="py-4 whitespace-nowrap relative">
          <input type="text" placeholder="Your email address..." class="outline-none rounded-l-3xl px-3 py-2.5 w-4/6 border-solid border-1 border-transparent shadow-md shadow-gray-300" autofocus>
          <button type="submit" class="bg-[#EE4D2D] text-white rounded-r-3xl px-3 py-2.5 shadow-md shadow-gray-400">
            {{ t('footer.sign up') }}
          </button>
        </form>
        <div class="product-store find-on py-4 flex justify-start gap-3">
          <a href="https://apps.apple.com/vn/app/id959841449" target="_blank"><img src="/img/icon/apple.png" alt=""></a>
          <a href="https://play.google.com/store/apps/details?id=com.shopee.vn&referrer=af_tranid%3Drsx9V4J79OX3NH5LwyqLcw%26pid%3DOrganicA%26c%3Dlp_home_and1" target="_blank"><img src="/img/icon/play.png" alt=""></a>
        </div>
      </div>
      <div class="payment">
        <a href="https://paypal.me/thuongtruong1009"><img src="/img/payment/1.png" alt="payment" class="max-w-70"></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer{
  color: #707070;
}
.social > span{
  padding: 0.5rem;
  margin-right: 1rem;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s linear;
  --tw-shadow-color: 209, 213, 219;
  --tw-shadow-color: 0, 0, 0;
  --tw-shadow: 0 4px 6px -1px rgba(var(--tw-shadow-color), 0.1), 0 2px 4px -1px rgba(var(--tw-shadow-color), 0.06);
  -webkit-box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.social > span:hover{
  background: orange;
}
.social > span > img{
  max-width: 1.5rem;
  max-height: 1.5rem;
}
h3{
  font-weight: bold;
  padding: 1rem 0;
  border-bottom: 1px solid rgb(224, 224, 224);
}
h3.dark{
  border-color: transparent;
}
ul{
  padding: 1rem 0;
}
ul > li{
  transition: 0.2s linear;
  cursor: pointer;
  padding: 2px 0;
}
ul > li:hover{
  transform: translateX(0.75rem);
  color: #EE4D2D;
}
form::after{
  content: url("https://patch.com/img/cdn/assets/layout/subscribe/planeAndTrails.svg");
  position: absolute;
  top: -4rem;
  right: 0rem;
}
@media (max-width: 767.9px){
  .right{
    grid-template-columns: 50% 50%;
    padding: 1rem;
    width: 50%;
  }
}
@media (max-width: 639.9px){
  .footer{
    display: grid;
  }
  .left, .right{
    width: 100%;
    padding: 0.5rem 0;
  }
  .payment{
    padding-left: 2rem
  }
}
</style>
