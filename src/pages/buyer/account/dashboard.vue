<route lang="yaml">
meta:
  layout: buyer/account/LBDashboard
</route>

<script setup>
import { useRouter } from 'vue-router'
import { toast } from '~/stores/toast'
import { useUser } from '~/stores/user'
import AuthRequest from '~/services/auth-request'
import AccountRequest from '~/services/account-request'

useHead({
  title: 'buyer | dashboard',
})

const { t } = useI18n()
const router = useRouter()
const useToast = toast()
const user = useUser()

const payload = reactive({
  username: '',
  display_name: '',
  phone: '',
  gender: '',
  date_of_birth: '',
  avatar_image: 'demo-avatar-01',
})

onMounted(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/buyer/login' })
})
watch(async() => {
  const { data: userData } = await AccountRequest.getProfile()
  user.payget = userData
  user.profile = userData.profile

  payload.display_name = user.profile.display_name
  payload.phone = user.profile.phone
  payload.gender = user.profile.gender
  payload.date_of_birth = user.profile.date_of_birth
})
// --------------------------------------------

const genderType = reactive([
  {
    id: 1,
    type: 'Male',
  },
  {
    id: 2,
    type: 'Female',
  },
  {
    id: 3,
    type: 'Others',
  }])
const handleUpdate = async() => {
  await AccountRequest.updateProfile(payload)
  useToast.updateToast('success', 'Profile account has been updated!', true)
}
// -------------------------------------------------------
const signOut = async() => {
  await AuthRequest.logoutUser()
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  router.push({ path: '/buyer/login' })
}

</script>

<template>
  <div class="myaccount-content border-1 border-solid border-light-700 p-6 text-left rounded-lg bg-[#EBF6FC] dark:bg-cool-gray-800">
    <div class="flex justify-between">
      <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
        <IBDashboard />
        <h3 class="text-2xl capitalize">
          {{ t('account.dashboard') }}
        </h3>
      </div>
    </div>
    <div class="welcome py-5">
      <p>
        {{ t('account.hello') }}, <strong>@{{ user.payget.username }}</strong><span class="text-xs ml-5">({{ t('account.not-you') }} !<a
          class="logout text-red-400 cursor-pointer capitalize" @click="signOut"
        > {{ t('account.logout') }}</a>)</span>
      </p>
    </div>
    <p class="text-sm text-gray-400">
      {{ t('account.dashboard-desc', {symbol: '&amp;'}) }}.
    </p>

    <form @submit.prevent="updateProfile">
      <div>
        <input v-model="payload.display_name" placeholder="Full name" type="text" required>
      </div>
      <div>
        <input v-model="payload.phone" placeholder="Phone name" type="text">
        <select v-model="payload.gender" class="cursor-pointer">
          <option v-for="(gender, i) in genderType" :key="i" :value="gender.id">
            {{ gender.type }}
          </option>
        </select>
      </div>
      <div>
        <input v-model="payload.date_of_birth" placeholder="Date of birth (MM/DD/YYYY)" type="text" required>
        <input v-model="user.payget.email" placeholder="Date of birth" disabled>
      </div>
      <div>
        <input v-model="payload.avatar_image" placeholder="Avatar link url" type="text" required disabled>
      </div>
      <div class="pt-5 flex justify-end">
        <button type="submit" class="btn bg-black hover:bg-[#F33535] duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="handleUpdate">
          <ISave />{{ t('account.save-changes') }}
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
  background: white;
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
