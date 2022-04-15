<route lang="yaml">
meta:
  layout: LLogin
</route>

<script setup>
useHead({
  title: 'e-shopee | buyer login',
})

</script>

<template>
  <div class="buyer-login-container h-screen-sm grid justify-center items-center">
    <div>
      <h1 class="capitalize text-3xl font-semibold pt-15 pb-5">
        Welcome back!
      </h1>
    </div>
    <form class="flex justify-center items-center flex-col p-5 relative" method="POST" action="">
      <div class="ballon__circle absolute" />
      <div class="ballon__circle ballon__circle--t absolute" />
      <h2 class="form_title fs-1 fw-bold pb-5">
        Create Account
      </h2>
      <div class="form__icons">
        <img class="form__icon" src="./public/icons/facebook.svg" alt="">
        <img class="form__icon" src="./public/icons/twitter.svg">
        <img class="form__icon" src="./public/icons/linkedin.svg">
      </div>
      <span class="form__span mt-4 mb-1 fs-6 fw-light text-muted">or use email for registration</span>
      <input class="form__input" type="text" placeholder="Name">
      <input class="form__input" type="text" placeholder="Email">
      <input class="form__input" type="password" placeholder="Password">
      <button class="form__button button mt-5 fw-bold flex justify-center items-center gap-2">
        <img src="./public/icons/unlock.svg" alt="signup">SIGN UP
      </button>
    </form>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
.buyer-login-container {
    font-family: "Montserrat", sans-serif;
    background: #ecf0f3;
}
.buyer-login-container > form{
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
    border-radius: 1rem;
}
.form__icon {
    object-fit: contain;
    width: 30px;
    margin: 0 5px;
    opacity: 0.5;
    transition: 0.15s;
}
.form__icon:hover {
    opacity: 1;
    transition: 0.15s;
    cursor: pointer;
}
.form__input {
    width: 350px;
    height: 40px;
    margin: 4px 0;
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
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
    top: -40%;
    left: 70%;
}
.ballon__circle--t{
    width: 100px;
    height: 100px;
    top: 75%;
    left: -15%;
}
</style>
