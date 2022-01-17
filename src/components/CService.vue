<template>
  <div class="service-container text-white bg-black grid grid-cols-4 justify-around items-center text-left">
    <div class="shipping">
      <img
        class="" src="/img/icon/2.png"
        alt="icon"
      >
      <div class="">
        <h4 class="">
          Free Shipping
        </h4>
        <p class="">
          On all orders over $75.00
        </p>
      </div>
    </div>
    <div class="return">
      <img
        class="" src="/img/icon/3.png"
        alt="icon"
      >
      <div class="">
        <h4 class="">
          Free Returns
        </h4>
        <p class="">
          Returns are free within 9 days
        </p>
      </div>
    </div>
    <div class="support">
      <img
        class="" src="/img/icon/5.png"
        alt="icon"
      >
      <div class="">
        <h4 class="">
          Support 24/7
        </h4>
        <p class="">
          Contact us 24 hours a day
        </p>
      </div>
    </div>
    <div class="secure">
      <img
        class="" src="/img/icon/4.png"
        alt="icon"
      >
      <div class="">
        <h4 class="">
          100% Payment Secure
        </h4>
        <p class="">
          Your payment are safe with us.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.shipping, .return, .support, .secure{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4rem;
}
.shipping > div, .return > div, .support > div, .secure > div{
    display: grid;
    justify-content: start;
    align-items: center;
    margin-left: 1.5rem;
}
@media (max-width: 767.9px){
  .service-container{
    display: grid;
    grid-template-columns: 50% 50%;
  }
  .shipping, .return, .support, .secure{
    padding: 1rem;
  }
}
@media (max-width: 379px){
  .service-container{
    grid-template-columns: 100%;
  }
.shipping, .return, .support, .secure{
    padding: 0.25rem;
  }
}
</style>
