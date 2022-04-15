<route lang="yaml">
meta:
  layout: LLogin
</route>

<script setup>
useHead({
  title: 'e-shopee | buyer checkout',
})
const { t } = useI18n()

const isClicking = ref(false)

const onLogin = () => {
  isClicking.value = false
}
const onSignUp = () => {
  isClicking.value = true
}

</script>

<template>
  <div class="login-container max-w-full max-h-full grid grid-cols-2 bg-true-gray-700 text-white text-left mt-15 relative rounded-md">
    <div class="user_options-unregistered col-span-1 py-20 px-10">
      <h2 class="user_unregistered-title text-2xl font-bold">
        {{ t('login.no-account') }}?
      </h2>
      <p class="user_unregistered-text font-light text-sm">
        {{ t('login.sign-up-invite') }}.
      </p>
      <button id="signup-button" class="user_unregistered-signup uppercase mt-10 py-1 px-7 border-1 border-solid rounded-md border-light-200 hover:bg-gray-300 hover:text-black duration-200 tracking-widest animate-bounce" @click="onSignUp">
        {{ t('login.sign-up') }}
      </button>
    </div>

    <div class="user_options-registered col-span-1 py-20 px-10">
      <h2 class="user_registered-title text-2xl font-bold">
        {{ t('login.have-account') }}?
      </h2>
      <p class="user_registered-text font-light text-sm">
        {{ t('login.sign-in-invite') }}.
      </p>
      <button id="login-button" class="user_registered-login uppercase mt-10 py-1 px-7 border-1 border-solid rounded-md border-light-200 hover:bg-gray-300 hover:text-black duration-200 tracking-widest animate-bounce" @click="onLogin">
        {{ t('login.sign-in') }}
      </button>
    </div>
    <div class="popup absolute bg-white w-xl h-sm px-10 py-15 -mt-10 rounded-md shadow-md shadow-gray-500 dark:bg-[#663399]" :style="[isClicking ? {left: '2.5rem'} : {right: '2.5rem'}]">
      <div v-if="isClicking === false" class="user_forms-login">
        <h2 class="forms_title text-[#E14641] text-4xl font-semibold">
          {{ t('login.sign-in') }}
        </h2>
        <form class="forms_form">
          <fieldset class="forms_fieldset border-solid border-2 border-gray-400 my-10 rounded-md">
            <div class="forms_field">
              <input type="email" placeholder="Email" class="forms_field-input dark:bg-[#663399] dark:text-gray-200 text-black" required autofocus>
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" class="forms_field-input dark:bg-[#663399] dark:text-gray-200 text-black" required>
            </div>
          </fieldset>
          <div class="forms_buttons flex justify-between">
            <button type="button" class="forms_buttons-forgot text-gray-300 hover:text-gray-400 duration-200 underline">
              {{ t('login.forgot-password') }}?
            </button>
            <input type="submit" value="Log In" class="forms_buttons-action bg-[#E8716D] hover:bg-[#E14641] duration-200 uppercase text-white py-1.5 px-7 rounded-md tracking-widest cursor-pointer">
          </div>
        </form>
      </div>

      <div v-if="isClicking === true" class="user_forms-login">
        <h2 class="forms_title text-[#E14641] text-4xl font-semibold">
          {{ t('login.sign-up') }}
        </h2>
        <form class="forms_form">
          <fieldset class="forms_fieldset border-solid border-2 border-gray-400 my-10 rounded-md">
            <div class="forms_field">
              <input type="text" placeholder="Full Name" class="forms_field-input dark:bg-[#663399] dark:text-gray-200 text-black" required>
            </div>
            <div class="forms_field">
              <input type="email" placeholder="Email" class="forms_field-input dark:bg-[#663399] dark:text-gray-200 text-black" required autofocus>
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" class="forms_field-input dark:bg-[#663399] dark:text-gray-200 text-black" required>
            </div>
          </fieldset>
          <div class="forms_buttons flex justify-end">
            <input type="submit" value="Sign up" class="forms_buttons-action bg-[#E8716D] hover:bg-[#E14641] duration-200 uppercase text-white py-1.5 px-7 rounded-md tracking-widest cursor-pointer">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="text"],
input[type="email"],
input[type="password"]{
  outline: none;
  border-bottom: 1px solid rgb(230, 230, 230);
  width: 30%;
  margin: 0.5rem;
  transition: 0.3s linear;
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus{
  border-bottom: 1px solid rgb(190, 190, 190);
  width: 90%;
}
input[type="submit"]{
  outline: none;
  color: white;
}
</style>
