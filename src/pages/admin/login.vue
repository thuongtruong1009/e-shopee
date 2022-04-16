<route lang="yaml">
meta:
  layout: admin/LALogin
</route>

<script setup lang="ts">
useHead({
  title: 'admin | login',
})
</script>

<template>
  <div class="login-container grid grid-rows-5">
    <div class="login-banner row-span-2 flex justify-center items-center relative">
      <h1 class="text-3xl text-white font-bold z-20">
        LOG IN
      </h1>
      <span class="bg-blue-900 w-full h-full absolute opacity-30 z-10 rounded-t-2xl" />
    </div>
    <div class="row-span-3 px-20 py-15 bg-white rounded-b-2xl shadow-md shadow-gray-300">
      <form action="" method="post">
        <div>
          <label for="user_name">Username</label>
          <input type="text" placeholder="Enter username">
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" placeholder="Enter password">
        </div>
        <div class="flex justify-between items-center pl-25">
          <label class="container">Remember me
            <input type="checkbox" checked="checked">
            <span class="checkmark" />
          </label>
          <label for="forgot_password" class="cursor-pointer hover:text-[#6DB846] duration-200">Fogot Password?</label>
        </div>
        <div class="flex justify-center">
          <router-link to="/admin">
            <button type="submit" class="rounded-3xl bg-[#57B846] hover:bg-[#333333] py-2 px-10 text-white text-lg shadow-md shadow-gray-300">
              Login
            </button>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.login-banner{
    background-image: url('/img/admin/login_header.jpg');
    background-size: cover;
    border-radius: 1rem 1rem 0 0;
}
input[type='text'],
input[type='password']{
    border: 1px solid gray;
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    padding: 0.5rem 0;
    width: 30rem;
}
form > div{
    display: flex;
    align-items: center;
    gap: 2rem;
}
form > div:nth-child(2){
    margin: 2rem 0 1rem 0;
}
.container {
  display: block;
  position: relative;
  padding-left: 2rem;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 1rem;
  width: max-content;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 1.25rem;
  width: 1.25rem;
  background-color: #eee;
  border-radius: 0.2rem;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #6DB846;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
