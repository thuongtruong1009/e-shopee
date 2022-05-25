<route lang="yaml">
meta:
  layout: buyer/LBReset
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
        {{ t('auth.b-reset-title') }}?
      </h2>
      <p class="user_unregistered-text font-light text-sm">
        {{ t('auth.b-reset-invite') }}.
      </p>
      <button id="signup-button" class="user_unregistered-signup uppercase mt-10 py-1 px-7 border-1 border-solid rounded-md border-light-200 hover:bg-gray-300 hover:text-black duration-200 tracking-widest animate-bounce" @click="onSignUp">
        {{ t('auth.b-reset') }}
      </button>
    </div>

    <div class="user_options-registered col-span-1 py-20 px-10">
      <h2 class="user_registered-title text-2xl font-bold">
        {{ t('auth.b-forgot-title') }}?
      </h2>
      <p class="user_registered-text font-light text-sm">
        {{ t('auth.b-forgot-invite') }}.
      </p>
      <button id="login-button" class="user_registered-login uppercase mt-10 py-1 px-7 border-1 border-solid rounded-md border-light-200 hover:bg-gray-300 hover:text-black duration-200 tracking-widest animate-bounce" @click="onLogin">
        {{ t('auth.b-forgot') }}
      </button>
    </div>
    <div class="popup absolute bg-white w-xl h-sm p-10 -mt-10 rounded-md shadow-md shadow-gray-500 dark:bg-[#663399]" :style="[isClicking ? {left: '2.5rem'} : {right: '2.5rem'}]">
      <Transition name="slide-fade">
        <div v-if="isClicking === false" class="user_forms-forgot">
          <h2 class="forms_title text-[#E14641] text-4xl font-semibold">
            {{ t('auth.b-forgot-form-title') }}
          </h2>
          <p class="text-gray-500 dark:text-light-300 mt-5">
            {{ t('auth.b-forgot-form-desc') }}.
          </p>
          <form class="forms_form" method="post" action="">
            <fieldset class="forms_fieldset border-solid border-2 border-gray-400 my-10 rounded-md">
              <div class="forms_field pt-2">
                <input type="email" placeholder="Username or Email address" name="usernameOrEmail" class="forms_field-input dark:bg-[#663399] dark:text-gray-200 text-black" required autofocus>
              </div>
            </fieldset>
            <div class="forms_buttons flex justify-end">
              <button type="submit" value="Get New Password" class="forms_buttons-action bg-[#E8716D] hover:bg-[#E14641] duration-200 uppercase text-white py-1.5 px-7 rounded-md tracking-wide cursor-pointer">
                {{ t('auth.b-forgot-form-button') }}
              </button>
            </div>
          </form>
        </div>
      </Transition>

      <Transition name="slide-fade">
        <div v-if="isClicking === true" class="user_forms-reset">
          <h2 class="forms_title text-[#E14641] text-4xl font-semibold">
            {{ t('auth.b-new-password') }}
          </h2>
          <form class="forms_form" method="post" action="">
            <fieldset class="forms_fieldset border-solid border-2 border-gray-400 my-10 rounded-md">
              <div class="forms_field">
                <input type="text" placeholder="Verification code" name="token" class="forms_field-input dark:bg-[#663399] dark:text-gray-200 text-black" required autofocus>
              </div>
              <div class="forms_field">
                <input type="email" placeholder="Email" name="email" class="forms_field-input dark:bg-[#663399] dark:text-gray-200 text-black" required>
              </div>
              <div class="forms_field">
                <input type="password" placeholder="New password" name="password" class="forms_field-input dark:bg-[#663399] dark:text-gray-200 text-black" required>
              </div>
              <div class="forms_field">
                <input type="password" placeholder="Password confirmation" name="passsword_confirmation" class="forms_field-input dark:bg-[#663399] dark:text-gray-200 text-black" required>
              </div>
            </fieldset>
            <div class="forms_buttons flex justify-end">
              <button type="submit" value="Sign up" class="forms_buttons-action bg-[#E8716D] hover:bg-[#E14641] duration-200 uppercase text-white py-1.5 px-7 rounded-md tracking-widest cursor-pointer">
                {{ t('auth.b-reset-form-button') }}
              </button>
            </div>
          </form>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
input[type="text"],
input[type="email"],
input[type="password"]{
  outline: none;
  border-bottom: 1px solid rgb(230, 230, 230);
  width: 40%;
  margin: 0.5rem;
  transition: 0.3s linear;
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus{
  border-bottom: 1px solid rgb(190, 190, 190);
  width: 90%;
}
button{
  outline: none;
  color: white;
}
/* ****************** FORM TRANSITION ******************* */
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from{
  transform: translateX(2rem);
  opacity: 0;
}
.slide-fade-leave-to {
  display: none;
}
</style>
