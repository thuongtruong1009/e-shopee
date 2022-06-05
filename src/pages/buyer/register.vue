<route lang="yaml">
meta:
  layout: buyer/LBRegister
</route>

<script setup>
import { useRouter } from 'vue-router'
import { useLoading } from '~/stores/loading'
import { toast } from '~/stores/toast'
import { handleError } from '~/helpers/error'
import AuthRequest from '~/services/auth-request'

useHead({
  title: 'buyer | register',
})

const { t } = useI18n()

const router = useRouter()
const loading = useLoading()
const useToast = toast()

const payload = reactive({
  username: '',
  email: '',
  password: '',
  password_confirmation: '',
})

const isEntrance = ref(false)
watchEffect(() => {
  if (payload.username.length > 0 && payload.email.length > 0 && payload.password.length > 0 && payload.password_confirmation.length > 0 && payload.password === payload.password_confirmation)
    isEntrance.value = true
})

const handleSubmit = async(e) => {
  e.preventDefault()
  loading.isLoading = true
  await AuthRequest.registerUser(payload)
    .then((res) => {
      router.push({ path: '/buyer/login' })
      loading.isLoading = false
      useToast.updateToast('success', `Hi, ${payload.username}. Check verification email sent in your mailbox!`, true)
    })
    .catch((error) => {
      return handleError(error)
    })
}

</script>

<template>
  <div class="buyer-register-container flex justify-center pt-20">
    <div class="register-inner border-4 border-solid border-white rounded-2xl flex w-4xl relative flex shadow-2xl shadow-gray-400 bg-[#B0D9DB]">
      <form class="bg-white w-1/2 p-5 rounded-xl" @submit.prevent="handleSubmit">
        <div class="capitalize text-2xl font-bold flex justify-center items-center">
          <IBRegister />
          <h1>
            {{ t('auth.b-register-title') }}
          </h1>
        </div>
        <p class="text-sm text-gray-400 font-medium">
          {{ t('auth.b-register-desc') }}
        </p>
        <div>
          <div class="icon">
            <IBUsername />
          </div>
          <input v-model="payload.username" type="text" placeholder="Username" required>
        </div>
        <div>
          <div class="icon">
            <IBEmail />
          </div>
          <input v-model="payload.email" type="email" placeholder="Email address" required>
        </div>
        <div>
          <div class="icon">
            <IBPassword />
          </div>
          <input v-model="payload.password" type="password" placeholder="Password" autocomplete="true" required>
        </div>
        <div>
          <div class="icon">
            <IBRepeat />
          </div>
          <input v-model="payload.password_confirmation" type="password" placeholder="Password confirmation" autocomplete="true" required>
        </div>
        <div>
          <button type="submit" class="capitalize bg-[#5ABBC1] font-semibold text-white text-md rounded-md py-1.75 w-full" :disabled="!isEntrance" :class="{'pointer-events-none':!isEntrance}" @click="handleSubmit">
            {{ t('auth.b-register-btn') }}
          </button>
          <p class="text-left text-gray-400 text-sm mt-3">
            {{ t('auth.b-register-already-account') }}? <a href="/buyer/login" class="text-[#5ABBC1] capitalize">{{ t('auth.b-register-refer') }}</a>
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
