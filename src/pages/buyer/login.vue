<route lang="yaml">
meta:
  layout: buyer/LBLogin
</route>

<script setup>
useHead({
  title: 'e-shopee | buyer login',
})

</script>

<template>
  <div class="buyer-login-container grid justify-center items-center mt-20 relative">
    <div class="my-10 z-10">
      <h1 class="capitalize text-3xl font-semibold">
        Welcome back!
      </h1>
    </div>
    <form class="flex justify-center items-center flex-col p-5 rounded-2xl z-10 bg-[#ecf0f3]" method="POST" action="">
      <h2 class="form_title fs-1 fw-bold pb-5">
        Experience many attractive offers and services
      </h2>
      <div class="flex justify-evenly w-full">
        <IBFacebook class="form__icon" />
        <IBGoogle class="form__icon" />
        <IBGithub class="form__icon" />
      </div>
      <span class="form__span mt-4">or use email for login</span>
      <input class="form__input" name="usernameOrEmail" type="text" placeholder="Email" required>
      <input class="form__input" name="password" type="password" placeholder="Password" required>
      <div class="text-xs text-gray-500/50 flex justify-between w-full">
        <a href="/buyer/register">
          Don't have account?
        </a>
        <a href="/buyer/password/reset">
          Forgot password?
        </a>
      </div>
      <a href="/buyer/home">
        <button type="submit" class="form__button flex justify-center items-center gap-2 font-semibold uppercase mt-5">
          <IBUnlock />SIGN IN
        </button>
      </a>
    </form>
    <!-- ballon decoration -->
    <div class="ballon__circle ballon__circle--t0 absolute" />
    <div class="ballon__circle ballon__circle--t1 absolute" />
    <div class="ballon__circle ballon__circle--t2 absolute" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
.buyer-login-container {
    font-family: "Montserrat", sans-serif;
}
.buyer-login-container > form{
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
}
.form__icon {
    opacity: 0.8;
    transition: 0.15s linear;
}
.form__icon:hover {
    opacity: 1;
    cursor: pointer;
}
.form__input {
    width: 22rem;
    height: 2.5rem;
    margin: 0.75rem 0;
    padding-left: 25px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;
    font-family: "Montserrat", sans-serif;
    background-color: #ecf0f3;
    transition: 0.25s ease;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}
.form__input:focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}
.form__button {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: #ff003d;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
}
.form__button:hover{
    border: 3px solid pink;
}
.ballon__circle {
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
    z-index: 0;
}
.ballon__circle--t0{
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
}
.ballon__circle--t1{
    top: 75%;
    left: 15%;
    width: 130px;
    height: 130px;
}
.ballon__circle--t2{
    bottom: -30%;
    left: 60%;
    width: 80px;
    height: 80px;
}
</style>
