<route lang="yaml">
meta:
  layout: buyer/LBLogin
</route>

<script setup>
import { useRouter } from 'vue-router'
import { useLoading } from '~/stores/loading'
import { toast } from '~/stores/toast'
import { handleError } from '~/helpers/error'
import AuthRequest from '~/services/auth-request'
import EmailRequest from '~/services/email-request'

useHead({
  title: 'buyer | login',
})

const { t } = useI18n()

const router = useRouter()
const loading = useLoading()
const useToast = toast()

onMounted(() => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
})

const payload = reactive({
  usernameOrEmail: '',
  password: '',
})

const isEntrance = ref(false)
watchEffect(() => {
  if (payload.usernameOrEmail.length > 0 && payload.password.length > 0)
    isEntrance.value = true
})

const handleSubmit = (e) => {
  e.preventDefault()
  loading.isLoading = true
  AuthRequest.loginUser(payload).then((res) => {
    localStorage.setItem('token', res.token)
    localStorage.setItem('user', JSON.stringify(res))
    router.push({ path: '/buyer/home' })
    useToast.updateToast('success', `Login success! Welcome back, ${payload.usernameOrEmail}!`, true)
    loading.isLoading = false
  }).catch((err) => {
    handleError(err)
  })
}
</script>

<template>
  <div class="buyer-login-container grid justify-center items-center mt-20 relative">
    <div class="my-10 z-10">
      <h1 class="text-3xl font-semibold" style="text-shadow:3px 2px 3px #a8a8a8;">
        {{ t('auth.b-login-welcome') }}!
      </h1>
    </div>
    <form class="flex justify-center items-center flex-col p-5 rounded-2xl z-10 bg-[#ecf0f3]" @submit.prevent="handleSubmit">
      <h2 class="form_title fs-1 fw-bold pb-5">
        {{ t('auth.b-login-desc') }}
      </h2>
      <div class="flex justify-evenly w-full">
        <IBFacebook class="form__icon" />
        <IBGoogle class="form__icon" />
        <IBGithub class="form__icon" />
      </div>
      <span class="form__span mt-4">{{ t('auth.b-oauth') }}</span>
      <input v-model="payload.usernameOrEmail" class="form__input" name="usernameOrEmail" type="text" placeholder="Email" required>
      <input v-model="payload.password" class="form__input" name="password" type="password" placeholder="Password" autocomplete="true" required @keydown.enter="handleSubmit">
      <div class="text-xs text-gray-500/50 flex justify-between w-full">
        <a href="/buyer/register">
          {{ t('auth.b-not-account') }}?
        </a>
        <a href="/buyer/password/reset">
          {{ t('auth.b-login-forgot') }}?
        </a>
      </div>
      <button type="submit" class="form__button flex justify-center items-center gap-2 font-semibold uppercase mt-5" :class="{'pointer-events-none':!isEntrance}" :disabled="!isEntrance" @click="handleSubmit">
        <IBUnlock />{{ t('auth.b-login-btn') }}
      </button>
    </form>
    <!-- ballon decoration -->
    <div class="ballon__circle ballon__circle--t0 absolute" />
    <div class="ballon__circle ballon__circle--t1 absolute" />
    <div class="ballon__circle ballon__circle--t2 absolute" />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');
.buyer-login-container {
    font-family: "Montserrat", sans-serif;
}

.buyer-login-container > form{
    box-shadow: 10px 10px 10px #d1d9e6, -10px -10px 10px #f9f9f9;
}
.form__icon {
    opacity: 0.8;
    transition: 0.15s linear;
}
.form__icon:hover {
    opacity: 1;
    cursor: pointer;
}
.form__input {
    width: 22rem;
    height: 2.5rem;
    margin: 0.75rem 0;
    padding-left: 25px;
    font-size: 13px;
    letter-spacing: 0.15px;
    border: none;
    outline: none;
    font-family: "Montserrat", sans-serif;
    background-color: #ecf0f3;
    transition: 0.25s ease;
    border-radius: 8px;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
}
.form__input:focus {
    box-shadow: inset 4px 4px 4px #d1d9e6, inset -4px -4px 4px #f9f9f9;
}
.form__button {
    width: 180px;
    height: 50px;
    border-radius: 25px;
    font-size: 14px;
    letter-spacing: 1.15px;
    background-color: #ff003d;
    color: #f9f9f9;
    box-shadow: 8px 8px 16px #d1d9e6, -8px -8px 16px #f9f9f9;
}
.form__button:hover{
    border: 3px solid pink;
}
.ballon__circle {
    border-radius: 50%;
    background-color: #ecf0f3;
    box-shadow: inset 8px 8px 12px #d1d9e6, inset -8px -8px 12px #f9f9f9;
    z-index: 0;
}
.ballon__circle--t0{
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
}
.ballon__circle--t1{
    top: 75%;
    left: 15%;
    width: 130px;
    height: 130px;
}
.ballon__circle--t2{
    bottom: -30%;
    left: 60%;
    width: 80px;
    height: 80px;
}
</style>
