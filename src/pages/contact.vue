<route lang="yaml">
meta:
  layout: LContact
</route>

<script setup>
useHead({
  title: 'e-shopee | contact',
})
const { t } = useI18n()

const message = ref('')
</script>

<template>
  <div class="contact-container grid grid-cols-2 gap-15 text-left p-15">
    <div class="left divide-light-700 divide-y">
      <div>
        <h3>
          {{ t('contact.contact-us') }}
        </h3>
        <p>{{ t('contact.tell-us-desc') }}.</p>
        <p>{{ t('contact.tell-us-support') }}.</p>
      </div>
      <div class="single-contact-block">
        <h4><i class="fa fa-fax" /> {{ t('contact.address') }}</h4>
        <p>{{ t('contact.sub-adddress') }} – {{ t('contact.country') }}</p>
      </div>
      <div class="single-contact-block">
        <h4><i class="fa fa-phone" /> {{ t('contact.phone') }}</h4>
        <p>
          <a href="tel:0917085937">{{ t('contact.mobile') }}: (+84) 917 085 937</a>
        </p>
        <p><a href="tel:0917085937">{{ t('contact.hotline') }}: 1009 678 456</a></p>
      </div>
      <div class="single-contact-block">
        <h4><i class="fas fa-envelope" /> {{ t('contact.email') }}</h4>
        <p>
          <a href="mailto:ititiu19228@student.hcmiu.edu.vn">ititiu19228@student.hcmiu.edu.vn</a>
        </p>
      </div>
    </div>
    <div class="right">
      <form action="" method="post">
        <h3>
          {{ t('contact.tell-us-your-message') }}
        </h3>
        <div>
          <label for="fname">{{ t('contact.your-name') }} *</label><br>
          <input type="text" name="fname" required>
        </div>
        <div>
          <label for="fmail">{{ t('contact.your-email') }} *</label><br>
          <input type="text" name="fmail" required>
        </div>
        <div>
          <label for="fsubject">{{ t('contact.subject') }}</label><br>
          <input type="text" name="fsubject">
        </div>
        <div>
          <label for="fmessage">{{ t('contact.note') }}</label><br>
          <textarea v-model="message" placeholder="write somethings..." class="h-30" />
        </div>
        <button type="submit" value="submit" class="bg-black text-white font-semibold py-2 px-7 rounded-md hover:bg-[#E14641] dark:bg-[#E14641] duration-200 uppercase tracking-widest cursor-pointer">
          {{ t('contact.submit') }}
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
h3{
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 600;
}
h4{
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 500;
}
lable{
    display: inline-block;
}
textarea,
input{
    border: 1px solid rgb(209, 209, 209);
    outline: none;
    border-radius: 0.25rem;
    width: 90%;
    padding: 0.5rem 1rem;
    transition: 0.2s;
    margin-top: 0.25rem;
}
input:focus, textarea:focus{
    box-shadow: 1px 1px 3px rgb(59, 175, 252);
}
.left > div:not(:first-child){
    padding: 1.5rem 0;
}
.left > div > p {
    padding: 0.25rem 0;
}
form > div{
    padding: 0.75rem 0;
}
</style>
