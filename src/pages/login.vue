<route lang="yaml">
meta:
  layout: LLogin
</route>

<script>
export default {
  data() {
    return {
      isClicking: false,
    }
  },
  methods: {
    onLogin() {
      this.isClicking = false
    },
    onSignUp() {
      this.isClicking = true
    },
  },
}

</script>

<template>
  <div class="login-container max-w-full max-h-full grid grid-cols-2 bg-true-gray-700 text-white text-left mt-15 relative">
    <div class="user_options-unregistered col-span-1 py-20 px-10">
      <h2 class="user_unregistered-title text-2xl font-bold">
        Don't have an account?
      </h2>
      <p class="user_unregistered-text font-light text-sm">
        Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.
      </p>
      <button id="signup-button" class="user_unregistered-signup uppercase mt-10 py-1 px-7 border-1 border-solid rounded-sm border-light-200 hover:bg-gray-300 hover:text-black duration-200 tracking-widest" @click="onSignUp">
        Sign up
      </button>
    </div>

    <div class="user_options-registered col-span-1 py-20 px-10">
      <h2 class="user_registered-title text-2xl font-bold">
        Have an account?
      </h2>
      <p class="user_registered-text font-light text-sm">
        Banjo tote bag bicycle rights, High Life sartorial cray craft beer whatever street art fap.
      </p>
      <button id="login-button" class="user_registered-login uppercase mt-10 py-1 px-7 border-1 border-solid rounded-sm border-light-200 hover:bg-gray-300 hover:text-black duration-200 tracking-widest" @click="onLogin">
        Login
      </button>
    </div>
    <div class="popup absolute bg-white w-xl h-sm px-10 py-20 -mt-10 shadow-md shadow-gray-500 duration-2000" :style="[isClicking ? {left: '2.5rem'} : {right: '2.5rem'}]">
      <div class="user_forms-login">
        <h2 class="forms_title text-[#E14641] text-4xl font-semibold">
          Login
        </h2>
        <form class="forms_form">
          <fieldset class="forms_fieldset border-solid border-2 border-gray-400 my-10 rounded-md">
            <div class="forms_field">
              <input type="email" placeholder="Email" class="forms_field-input" required autofocus>
            </div>
            <div class="forms_field">
              <input type="password" placeholder="Password" class="forms_field-input" required>
            </div>
          </fieldset>
          <div class="forms_buttons flex justify-between">
            <button type="button" class="forms_buttons-forgot text-gray-300 hover:text-gray-400 duration-200 underline">
              Forgot password?
            </button>
            <input type="submit" value="Log In" class="forms_buttons-action bg-[#E8716D] hover:bg-[#E14641] duration-200 uppercase text-white py-1.5 px-7 rounded-sm tracking-widest cursor-pointer">
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="email"],
input[type="password"]{
  outline: none;
  color: black;
  border-bottom: 1px solid rgb(230, 230, 230);
  width: 30%;
  margin: 0.5rem;
  transition: 0.3s linear;
}
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
