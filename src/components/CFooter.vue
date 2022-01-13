<template>
  <div class="footer flex dark:text-gray-200">
    <div class="left w-1/3 p-16 text-left bg-gray-100 dark:bg-black">
      <CBrand class="py-4" />
      <p class="py-4">
        We are always committed to serving you with the best services. Connect to receive more offers immediately.
      </p>
      <div class="contact flex py-4">
        <span><a href="tel:(+84)917085937"><img src="/img/icon/phone2.png" alt=""></a></span>
        <div class="phone pl-4">
          <p>NEED HELP?</p>
          <a href="tel:(+84)917085937"><h4 class="font-semibold text-black dark:text-gray-100 hover:text-red-500 duration-300">(+84) 917 085 937</h4></a>
        </div>
      </div>
      <div class="social flex justify-start py-4">
        <span><img src="https://img.icons8.com/ios/50/000000/facebook-new.png"></span>
        <span><img src="https://img.icons8.com/ios/50/000000/github--v2.png"></span>
        <span><img src="https://img.icons8.com/ios/50/000000/twitter--v1.png"></span>
        <span><img src="https://img.icons8.com/ios/50/000000/youtube-play.png"></span>
      </div>
      <div class="copyright py-4">
        <p>Copyright © <a href="">galaxy</a>. All Rights Reserved</p>
      </div>
    </div>
    <div class="right grid grid-cols-4 w-2/3 py-15 px-8 text-left bg-light-200 dark:bg-black">
      <div class="information col-span-1">
        <h3>INFORMATION</h3>
        <span class="absolute bg-orange-500 w-15 h-0.5" />
        <ul>
          <li>Delivery</li>
          <li>About Us</li>
          <li>Secure Payment</li>
          <li>Contact Us</li>
          <li>Sitemap</li>
          <li>Stores</li>
        </ul>
      </div>
      <div class="custom col-span-1">
        <h3>CUSTOM LINKS</h3>
        <span class="absolute bg-orange-500 w-15 h-0.5" />
        <ul>
          <li>Legal Notice</li>
          <li>Prices Drop</li>
          <li>New Products</li>
          <li>Best Sales</li>
          <li><a href="/login">Login</a></li>
          <li><a href="/account">Login</a>My Account</li>
        </ul>
      </div>
      <div class="news col-span-2">
        <h3>NEWSLETTER</h3>
        <span class="absolute bg-orange-500 w-15 h-0.5" />
        <div class="py-4">
          <p>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
        </div>
        <form action="/POST" class="py-4">
          <input type="text" placeholder="Your email address..." class="outline-none rounded-l-3xl px-3 py-2.5 w-4/6">
          <button type="submit" class="bg-orange-500 text-white rounded-r-3xl px-3 py-2.5">
            Sign up
          </button>
        </form>
        <div class="find-on py-4 flex justify-start gap-3">
          <a href=""><img src="/img/icon/apple.png" alt=""></a>
          <a href=""><img src="/img/icon/play.png" alt=""></a>
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
}
.social > span:hover{
  background: rgb(255, 145, 0);
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
  color: orange;
}
</style>
