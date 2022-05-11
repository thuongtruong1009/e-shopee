<route lang="yaml">
meta:
  layout: admin/account/LAReset
</route>

<script setup>
import { useRouter } from 'vue-router'
import { handleError } from 'vue'
import { toast } from '~/stores/toast'
import PasswordRequest from '~/services/password-request'

useHead({
  title: 'admin | reset password',
})
const router = useRouter()
const useToast = toast()

const forgotEmail = reactive({
  email: '',
})

const forgotSubmit = async(e) => {
  e.preventDefault()
  PasswordRequest.forgotPasswordAdmin(forgotEmail).then((res) => {
    useToast.updateToast('success', 'Your verify code is sent in your mailbox. Check now!', true)
    email.value = ''
  }).catch((error) => {
    return handleError(error)
  })
}

const payload = {
  token: '',
  email: '',
  password: '',
  passsword_confirmation: '',
}

const resetSubmit = async(e) => {
  e.preventDefault()
  PasswordRequest.resetPasswordAdmin(payload).then((res) => {
    router.push({ path: '/admin/login' })
    useToast.updateToast('success', `Your password is reset for ${payload.email}. Login again!`, true)
  }).catch((error) => {
    return handleError(error)
  })
}

</script>

<template>
  <div class="login-container grid grid-rows-5">
    <div class="forgot_password login-banner row-span-2 flex justify-center items-center relative">
      <div class="z-20 w-md">
        <label class="mb-2 text-sm font-medium text-white dark:text-gray-300">Reset your account easily with email</label>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <input v-model="forgotEmail.email" type="email" class="p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500 dark:focus:border-blue-500" placeholder="Input your email..." required>
          <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:border-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="forgotSubmit">
            Get OTP
          </button>
        </div>
      </div>
      <span class="bg-blue-900 w-full h-full absolute opacity-30 z-10 rounded-t-2xl" />
    </div>
    <div class="reset_password row-span-3 px-20 py-15 bg-white rounded-b-2xl shadow-md shadow-gray-400">
      <form @submit.prevent="resetSubmit">
        <div>
          <label>OTP code</label>
          <input v-model="payload.token" type="text" placeholder="Enter OTP code">
        </div>
        <div>
          <label>Email</label>
          <input v-model="payload.email" type="email" placeholder="Enter email">
        </div>
        <div>
          <label>Password</label>
          <input v-model="payload.password" type="password" placeholder="Enter password" autocomplete="true">
        </div>
        <div>
          <label>Passsword_confirmation</label>
          <input v-model="payload.passsword_confirmation" type="password" placeholder="Confirm your password" autocomplete="true">
        </div>
        <!-- <div class="flex justify-between items-center pl-25">
          <label class="container">Remember me
            <input type="checkbox" checked="checked">
            <span class="checkmark" />
          </label>
          <label for="forgot_password" class="cursor-pointer hover:text-[#6DB846] duration-200">Fogot Password?</label>
        </div> -->
        <div class="flex justify-center">
          <button type="submit" class="rounded-3xl bg-[#57B846] hover:bg-[#333333] py-2 px-10 text-white text-lg shadow-md shadow-gray-300 flex items-center gap-1" @click="resetSubmit">
            <ILogin class="text-sm" /> Reset
          </button>
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
.reset_password form > div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}
.reset_password form > div:last-child{
    margin-top: 1rem;
}
.reset_password label{
  font-size: 0.8rem;
  font-weight: 500;
}

.reset_password form > div > input{
    border: 1px solid gray;
    outline: none;
    border-top: none;
    border-right: none;
    border-left: none;
    padding: 0.5rem 0;
    max-width: 25rem;
    width: 25rem;
}
.reset_password form > div > input::placeholder{
  font-size: 0.8rem;
  opacity: 0.8;
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
