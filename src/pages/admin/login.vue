<route lang="yaml">
meta:
  layout: admin/LALogin
</route>

<script setup>
import { useRouter } from 'vue-router'
import AuthRequest from '~/services/auth-request'
import { toast } from '~/stores/toast'
import { useAdmin } from '~/stores/admin'
import { useLoading } from '~/stores/loading'
import { handleError } from '~/helpers/error'

useHead({
  title: 'admin | login',
})
const { t } = useI18n()

const router = useRouter()
const loading = useLoading()
const useToast = toast()
const admin = useAdmin()

onMounted(() => {
  localStorage.removeItem('token')
  localStorage.removeItem('admin')
})
const payload = reactive({
  usernameOrEmail: '',
  password: '',
})

const handleSubmit = async(e) => {
  e.preventDefault()
  loading.isLoading = true
  await AuthRequest.loginAdmin(payload)
    .then((res) => {
      admin.payget = res.data
      localStorage.setItem('token', res.token)
      localStorage.setItem('admin', JSON.stringify(res))
      router.push({ path: '/admin/dashboard' })
      loading.isLoading = false
      useToast.updateToast('success', `Admin page is ready! Welcome back, ${payload.usernameOrEmail}!`, true)
    })
    .catch((error) => {
      return handleError(error)
    })
}

</script>

<template>
  <div class="seller_login_view_container grid grid-cols-2">
    <div class="seller-login-container-left grid text-center pt-10">
      <h2 class="text-red-500 font-bold text-3xl">
        {{ t('auth.a-banner') }}
      </h2>
      <h6 class="text-md tracking-tight w-full mb-5">
        {{ t('auth.a-desc') }}
      </h6>
      <PSLogin />
    </div>
    <div class="seller-login-container-right flex justify-center">
      <div class="w-4/5 bg-white grid justify-center p-5 rounded-2xl shadow-md shadow-gray-300">
        <h2 class="text-3xl font-semibold tracking-tight mb-5">
          {{ t('auth.a-title') }}
        </h2>
        <form @submit.prevent="handleSubmit">
          <div>
            <input v-model="payload.usernameOrEmail" type="text" class="outline-none rounded-md border-1 border-solid border-gray-300 py-2 px-4 w-full focus:bg-[#E8F0FE] duration-200" placeholder="username or email...">
          </div>
          <div>
            <input v-model="payload.password" type="password" class="outline-none rounded-md border-1 border-solid border-gray-300 py-2 px-4 w-full focus:bg-[#E8F0FE] duration-200" placeholder="password..." autocomplete="true">
          </div>
          <div class="flex justify-between text-xs">
            <div class="flex items-center gap-1 whitespace-nowrap accent-red-500">
              <input id="remember" type="checkbox">
              <label for="remember">{{ t('auth.a-remember') }}</label>
            </div>
            <p class="text-blue-600 hover:text-blue-800 cursor-pointer font-medium">
              Forgot password?
            </p>
          </div>
          <div class="bg-red-500 hover:bg-red-600 text-center text-white rounded-md py-2 my-1.5 shadow-md shadow-gray-300 capitalize" @click="handleSubmit">
            <button>
              {{ t('auth.a-login') }}
            </button>
          </div>

          <div class="grid gap-5">
            <div class="flex justify-between text-xs pt-5">
              <p class="opacity-60">
                Don't have a Shopee account yet?
              </p>
              <p class="text-blue-600 hover:text-blue-800 font-medium cursor-pointer">
                Create account
              </p>
            </div>
            <div class="flex justify-center opacity-40 text-xs">
              <span>_____________________  OR  _____________________</span>
            </div>
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
