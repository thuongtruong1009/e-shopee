<route lang="yaml">
meta:
  layout: buyer/account/LBDashboard
</route>

<script setup>
import { useRouter } from 'vue-router'
import { toast } from '~/stores/toast'
import { handleError } from '~/helpers/error'
import AuthRequest from '~/services/auth-request'
import AccountRequest from '~/services/account-request'

useHead({
  title: 'e-shopee | buyer dashboard',
})

const user = JSON.parse(localStorage.getItem('user'))
const router = useRouter()
const useToast = toast()

const payload = reactive({
  display_name: '',
  phone: '',
  gender: 1,
  date_of_birth: '',
  avatar_image: 'https://avatars.githubusercontent.com/u/47313528?v=4',
})

watchOnce(async() => {
  await AccountRequest.getProfile().then((res) => {
    payload.display_name = res.data.display_name
    payload.phone = res.data.phone
    payload.gender = res.data.gender
    payload.date_of_birth = res.data.date_of_birth
    payload.avatar_image = res.data.avatar_image
  }).catch((error) => {
    return handleError(error)
  })
})

const updateProfile = async() => {
  await AccountRequest.updateProfile().then(() => {
    useToast.updateToast('success', 'Profile account has been updated!', true)
  }).catch((error) => {
    return handleError(error)
  })
}

const signOut = async() => {
  await AuthRequest.signOut().then(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    router.push({ path: '/buyer/login' })
  })
}

</script>

<template>
  <div class="myaccount-content border-1 border-solid border-light-700 p-6 text-left rounded-lg bg-[#EBF6FC] dark:bg-cool-gray-800">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBDashboard />
      <h3 class="text-2xl">
        Dashboard
      </h3>
    </div>
    <div class="welcome py-5">
      <p>
        Hello, <strong>@{{ user.data.username }}</strong><span class="text-xs ml-5">(If not you !<a
          class="logout text-red-400" @click="signOut"
        > Logout</a>)</span>
      </p>
    </div>
    <p class="text-md font-light">
      From your account dashboard. you can easily check &amp; view your
      recent orders, manage your shipping and billing addresses and edit your
      password and account details.
    </p>

    <form @submit.prevent="updateProfile">
      <div class="">
        <input v-model="payload.display_name" placeholder="Full name" type="email" required>
      </div>

      <div class="">
        <input v-model="payload.phone" placeholder="Phone name" type="text">
        <select v-model="payload.gender" class="cursor-pointer">
          <option :value="1">
            Gender
          </option>
          <option :value="2">
            Male
          </option>
          <option :value="3">
            Female
          </option>
        </select>
      </div>

      <div>
        <input v-model="payload.date_of_birth" placeholder="Date of birth" type="date" required>
      </div>

      <div>
        <input v-model="payload.avatar_image" placeholder="Avatar link url" type="text" required>
      </div>

      <div class="pt-5 flex justify-end">
        <button type="submit" class="btn bg-black hover:bg-[#F33535] duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="updateProfile">
          <ISave />Save Changes
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
input, select{
  width: 100%;
  border: 1px solid rgba(233, 236, 239);
  border-radius: 0.3rem;
  padding: 0.3rem 1rem;
  transition: 0.2s linear;
  font-size: 0.9rem;
}
input:focus,
select:hover{
    box-shadow: 2px 2px 4px rgba(59, 175, 252, 0.8);
}
form > div{
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
</style>
