<script setup>
import { useRouter } from 'vue-router'
import { useAdmin } from '~/stores/admin'
import AuthRequest from '~/services/auth-request'

const admin = useAdmin()
const router = useRouter()

const adminAvatar = ref('/img/admin/avatar_sample.png')

const signOut = async() => {
  await AuthRequest.logoutAdmin().then(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('admin')
    router.push({ path: '/admin/login' })
  })
}

</script>

<template>
  <main class="text-gray-700 dark:text-gray-200 overflow-x-hidden">
    <SHead />
    <div class="bg-[#F6F6F6] flex dark:bg-black">
      <div class="w-100 bg-white px-3">
        <div class="flex justify-end text-gray-400 hover:text-black cursor-pointer py-1">
          <IEdit />
        </div>
        <div class="flex justify-center py-10 px-5">
          <img :src="adminAvatar" alt="avatar" width="226" height="226" class="rounded-full shadow-light-800 shadow-md">
        </div>
        <div class="flex justify-center">
          <h2 class="font-semibold text-xl">
            Hi, {{ admin.payget.email }}!
          </h2>
        </div>
        <div class="grid grid-cols-4 items-center gap-2">
          <div class="text-white flex justify-around items-center border-1 border-solid border-gray rounded-lg col-span-3 cursor-pointer py-2 bg-[#00C689] hover:(bg-transparent text-gray-500) duration-200 shadow-md shadow-gray-200">
            <img :src="adminAvatar" alt="avatar" width="40" height="40" class="rounded-full shadow-light-800 shadow-md">
            <div>
              <h4>{{ admin.payget.username }}</h4>
              <p class="text-xs opacity-60">
                Logged in successfully!
              </p>
            </div>
          </div>
          <div class="text-gray-400 text-xl font-bold flex justify-center items-center border-2 border-solid border-gray rounded-lg col-span-1 h-full cursor-pointer hover:(bg-[#00C689] text-white) duration-200 shadow-md shadow-gray-200" @click="signOut">
            <ILogout />
          </div>
        </div>
      </div>
      <div class="flex justify-center w-full p-3">
        <router-view />
      </div>
    </div>
  </main>
</template>
