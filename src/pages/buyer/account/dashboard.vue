<route lang="yaml">
meta:
  layout: buyer/account/LBDashboard
</route>

<script setup>
import { useRouter } from 'vue-router'
import { toast } from '~/stores/toast'
import { useUser } from '~/stores/user'
import { handleDate } from '~/utils/date'
import AuthRequest from '~/services/auth-request'
import AccountRequest from '~/services/account-request'
import ResourceRequest from '~/services/resource-request'

useHead({
  title: 'buyer | dashboard',
})

const { t } = useI18n()
const router = useRouter()
const useToast = toast()
const user = useUser()

onMounted(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/buyer/login' })
})

$(document).ready(() => {
  const files = document.querySelector('#user_avatar_file')
  files.addEventListener('change', (e) => {
    const files = e.target.files
    const formData = new FormData()
    formData.append('image', files[0])
    formData.append('ratio', 0)

    const { data: avatarData } = ResourceRequest.createResourcesImages(formData)
    user.avatarID = res.data.id
  })
})
const payload = reactive({
  username: '',
  display_name: '',
  phone: '',
  gender: '',
  date_of_birth: '',
  avatar_image: user.avatarID,
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

    <div class="flex justify-between items-center m-2">
      <div class="flex items-center gap-3">
        <img v-if="user.profile.avatar_image" :src="`https://tp-o.tk/resources/images/${user.profile.avatar_image}`" alt="avatar_img" class="rounded-full w-15 h-15 border-2 border-blue-400 p-0.25" style="object-fit: cover;">
        <img v-else class="w-15 h-15 rounded-full" src="/img/avatar_sample.png" alt="avatar_sample">

        <div class="my-1 dark:text-white">
          <div class="flex">
            <p>{{ t('account.hello') }},</p>
            <p class="font-medium text-red-400">
              @{{ payload.display_name }}
            </p>
          </div>
          <div class="text-xs text-gray-500 dark:text-gray-400">
            {{ t('account.joined-at') }} {{ handleDate(user.payget.created_at) }}
          </div>
        </div>
      </div>
      <p>
        <span class="text-xs ml-5">({{ t('account.not-you') }} !<a
          class="logout text-red-400 cursor-pointer capitalize" @click="signOut"
        > {{ t('account.logout') }}</a>)</span>
      </p>
    </div>

    <p class="text-xs text-gray-400 m-2">
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
        <!-- <input v-model="payload.avatar_image" placeholder="Avatar link url" type="text" required disabled> -->
        <input id="user_avatar_file" type="file" accept=".png, .jpg, .jpeg">
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
