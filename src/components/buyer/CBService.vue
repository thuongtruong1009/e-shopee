<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="service-container text-white bg-[#EE4D2D] grid grid-cols-5 items-center text-left">
    <div class="shipping">
      <IBShipping class="services-icon" />
      <div>
        <h4>
          {{ t('service.shipping-title') }}
        </h4>
        <p>
          {{ t('service.shipping-desc') }}
        </p>
      </div>
    </div>
    <div class="return">
      <IBReturn class="services-icon" />
      <div>
        <h4>
          {{ t('service.return-title') }}
        </h4>
        <p>
          {{ t('service.return-desc') }}
        </p>
      </div>
    </div>
    <div class="contact">
      <IBSupport class="services-icon" />
      <div>
        <h4>
          {{ t('service.contact-title') }} 24/7
        </h4>
        <p>
          {{ t('service.contact-desc') }}
        </p>
      </div>
    </div>
    <div class="secure">
      <IBSecure class="services-icon" />
      <div>
        <h4>
          {{ t('service.payment-secure-title') }} 100%
        </h4>
        <p>
          {{ t('service.payment-secure-desc') }}
        </p>
      </div>
    </div>
    <div class="chat">
      <IBChat class="services-icon" />
      <div>
        <h4>
          {{ t('service.chat-title') }}
        </h4>
        <p>
          {{ t('service.chat-desc') }}
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.service-container{
  padding: 3.7rem 0rem;
}
.shipping, .return, .contact, .secure, .chat{
    display: flex;
    justify-content: center;
    align-items: center;
}
.shipping > div, .return > div, .contact > div, .secure > div, .chat > div{
    display: grid;
    justify-content: start;
    align-items: center;
    margin-bottom: 0.5rem;
}
.services-icon{
    font-size: 2.7rem;
    margin-right: 1rem;
    margin-bottom: 0.5rem;
}
@media (max-width: 1280px){
  .shipping, .return, .contact, .secure, .chat{
    flex-direction: column;
  }
}
@media (max-width: 950px){
  .service-container{
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: space-between;
  }
}
@media (max-width: 500px){
  .service-container{
    display: grid;
    grid-template-columns: 50% 50%;
    justify-content: space-between;
  }
  .shipping, .return, .contact, .secure, .chat{
    padding: 0.5rem 0;
  }
}
@media (max-width: 379px){
  .service-container{
    display: grid;
    grid-template-columns: 100%;
    justify-content: space-between;
    padding: 1rem 0;
  }
  .shipping, .return, .contact, .secure, .chat{
    padding: 1rem 0;
    text-align: center;
  }
}
</style>
