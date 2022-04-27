<route lang="yaml">
meta:
  layout: seller/LSRegister
</route>

<script setup>
useHead({
  title: 'seller | register',
})

</script>

<template>
  <div class="seller-login-container grid grid-cols-2">
    <div class="seller-login-container-left grid">
      <PSRegister class="" />
    </div>
    <div class="seller-login-container-right flex justify-end">
      <div class="seller-signup-container-right">
        <h2 class="text-green-500 font-semibold text-sm mb-2">
          Become to official member of e-shopee! Why not?
        </h2>
        <form class="box bg-white rounded-lg shadow-md shadow-gray-300 p-7.5 text-center w-125">
          <div class="form__control">
            <input id="fullname" type="text" placeholder="Your Name" class="focus:bg-[#E8F0FE] duration-200">
          </div>

          <div class="form__control">
            <input id="username" type="text" placeholder="User Name" required class="focus:bg-[#E8F0FE] duration-200">
          </div>

          <div class="form__control">
            <input id="email" type="email" placeholder="Email Address" required class="focus:bg-[#E8F0FE] duration-200">
          </div>

          <div class="form__control">
            <input id="password" type="password" placeholder="Password" required class="focus:bg-[#E8F0FE] duration-200">
          </div>
          <Router-Link to="/seller/login">
            <button class="rounded-lg uppercase w-full outline-none font-medium cursor-pointer text-white tracking-normal py-3 text-sm shadow-md shadow-gray-300 bg-[#38cc8c]">
              Register to become seller
            </button>
          </Router-Link>

          <small class="pt-5 block font-medium text-xs text-[#bbb]">By clicking the button, you are agreeing to our
            <a href="/juridicals/term_of_service" class="text-[#ff7a7a]">Terms and Services</a></small>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
form > div{
  padding: 0.5rem 0;
  margin: 0.3rem 0;
}

.form__control input:focus::placeholder {
  color: #ff7a7a;
}

input {
  border: 1.3px solid hsl(246, 25%, 77%);
  border-radius: 5px;
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 500;
  padding: 0.75rem 1.75rem;
  width: 100%;
}

button {
  font-family: 'Poppins', sans-serif;
}
button:active {
  box-shadow: 0 0 hsl(154, 59%, 45%);
  transform: translateY(2px);
}
</style>
