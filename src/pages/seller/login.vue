<route lang="yaml">
meta:
  layout: seller/LSLogin
</route>

<script setup>
useHead({
  title: 'seller | login',
})

</script>

<template>
  <div class="seller_login_view_container grid grid-cols-2">
    <div class="seller-login-container-left grid text-center pt-10">
      <h2 class="text-red-500 font-bold text-3xl">
        Professional seller
      </h2>
      <h6 class="text-md tracking-tight w-full mb-5">
        Manage your shop more effectively on e-shopee with e-shopee Seller-Channel
      </h6>
      <PSLogin />
    </div>
    <div class="seller-login-container-right flex justify-center">
      <div class="w-4/5 bg-white grid justify-center p-5 rounded-2xl shadow-md shadow-gray-300">
        <h2 class="text-3xl font-semibold tracking-tight mb-5">
          Login to Seller channel
        </h2>
        <form action="" method="post">
          <div>
            <input type="text" class="outline-none rounded-md border-1 border-solid border-gray-300 py-2 px-4 w-full focus:bg-[#E8F0FE] duration-200" placeholder="username or email...">
          </div>
          <div>
            <input type="password" class="outline-none rounded-md border-1 border-solid border-gray-300 py-2 px-4 w-full focus:bg-[#E8F0FE] duration-200" placeholder="password...">
          </div>
          <div class="flex justify-between text-xs">
            <div class="flex items-center gap-1 whitespace-nowrap accent-red-500">
              <input id="remember" type="checkbox">
              <label for="remember">Remember me</label>
            </div>
            <p class="text-blue-600 hover:text-blue-800 cursor-pointer font-medium">
              Forgot password?
            </p>
          </div>
          <Router-Link to="/seller/home">
            <div class="bg-red-500 hover:bg-red-600 text-center text-white rounded-md py-2 my-1.5 shadow-md shadow-gray-300">
              <button>Login</button>
            </div>
          </Router-Link>

          <div class="grid gap-5">
            <div class="flex justify-between text-xs pt-5">
              <p class="opacity-60">
                Don't have a Shopee account yet?
              </p>
              <Router-Link to="/seller/register">
                <p class="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                  Create account
                </p>
              </Router-Link>
            </div>
            <div class="flex justify-center opacity-40 text-xs">
              <span>_____________________  OR  _____________________</span>
            </div>
            <!-- <span>OR</span> -->
            <div class="text-center outline-none rounded-md border-1 border-solid border-gray-300 py-2 px-4 cursor-pointer">
              <p>Login with Primary/Secondary account</p>
            </div>
          </div>
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
</style>
