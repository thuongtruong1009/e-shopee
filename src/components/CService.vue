<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="service-container text-white bg-black grid grid-cols-4 justify-around items-center text-left">
    <div class="shipping">
      <img
        class="" src="/img/icon/2.png"
        alt="icon"
      >
      <div class="">
        <h4 class="">
          {{ t('service.free shipping') }}
        </h4>
        <p class="">
          {{ t('service.freeship') }} $75.00
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
          {{ t('service.free return') }}
        </h4>
        <p class="">
          {{ t('service.return periods') }}
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
          {{ t('service.support') }} 24/7
        </h4>
        <p class="">
          {{t('service.contact time')}}
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
          100% {{t('service.payment secure')}}
        </h4>
        <p class="">
          {{t('service.payment safe')}}
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
@media (max-width: 1280px){
  .shipping, .return, .support, .secure{
    padding: 1rem;
  }
}
@media (max-width: 1024px){
  .shipping, .return, .support, .secure{
    display: grid;
  }
  img{
    margin-left: 3rem;
  }
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
    display: flex;
    justify-content: space-around;
  }
}
</style>
