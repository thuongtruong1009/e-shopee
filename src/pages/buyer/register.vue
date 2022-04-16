<route lang="yaml">
meta:
  layout: buyer/LBRegister
</route>

<script setup>
useHead({
  title: 'e-shopee | buyer register',
})

</script>

<template>
  <div class="buyer-register-container flex justify-center pt-20">
    <div class="register-inner border-4 border-solid border-white rounded-2xl flex w-4xl relative flex shadow-2xl shadow-gray-400 bg-[#B0D9DB]">
      <form action="" method="post" class="bg-white w-1/2 p-5 rounded-xl">
        <div class="capitalize text-2xl font-bold flex justify-center items-center">
          <IBRegister />
          <h1>Create Account</h1>
        </div>
        <p class="text-sm text-gray-400 font-medium">
          Join us and start shopping in your style
        </p>
        <div>
          <div class="icon">
            <IBUsername />
          </div>
          <input type="text" name="username" placeholder="Username" required>
        </div>
        <div>
          <div class="icon">
            <IBEmail />
          </div>
          <input type="email" name="email " placeholder="Email address" required>
        </div>
        <div>
          <div class="icon">
            <IBPassword />
          </div>
          <input type="password" name="password" placeholder="Password" required>
        </div>
        <div>
          <div class="icon">
            <IBRepeat />
          </div>
          <input type="password" name="password_confirmation" placeholder="Password confirmation" required>
        </div>
        <div>
          <a href="/buyer/login">
            <button type="submit" class="capitalize bg-[#5ABBC1] font-semibold text-white text-md rounded-md py-1.75 w-full">
              Create Account
            </button>
          </a>
          <p class="text-left text-gray-400 text-sm mt-3">
            Already have account? <a href="/buyer/login" class="text-[#5ABBC1]">Login</a>
          </p>
        </div>
      </form>
      <div class="h-full w-1/2">
        <img src="/parttern/block.png" alt="block_pattern" class="absolute -top-5 -right-5 w-lg">
      </div>
    </div>
  </div>
</template>

<style scoped>
form > div:not(:last-child){
    margin: 2rem 0;
    display: flex;
    gap: 0.5rem;
}
form input{
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid #e9e9e9;
    outline: none;
    padding-bottom: 0.25rem;
    width: 100%;
    font-weight: 500;
}
form input::placeholder{
    color: rgba(149, 149, 149, 0.6);
    font-weight: 500;
}
form .icon{
  background: #5ABBC1;
  color: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
</style>
