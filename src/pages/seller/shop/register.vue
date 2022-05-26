<route lang="yaml">
meta:
  layout: seller/LSDashBoard
</route>

<script setup>
import { useRouter } from 'vue-router'
import { toast } from '~/stores/toast'
import ShopRequest from '~/services/shop-request'
import { useLoading } from '~/stores/loading'
import { useUser } from '~/stores/user'
import { handleError } from '~/helpers/error'
import AccountRequest from '~/services/account-request'

useHead({
  title: 'seller | shop register',
})
const { t } = useI18n()
const router = useRouter()
const loading = useLoading()
const useToast = toast()
const user = useUser()

const resumeAddress = ref([])
onMounted(async() => {
  loading.isLoading = true
  const { data: addressData } = await AccountRequest.getAddress()
  resumeAddress.value = addressData.filter(e => Object.keys(addressData.id === 0))[0]
  loading.isLoading = false
})

const payload = reactive({
  name: 'dededdede',
  slug: 'Shop-03',
  address: resumeAddress.value,
  phone: '',
})

const handleCreate = async() => {
  loading.isLoading = true
  await ShopRequest.createShops(payload)
  // router.push('/seller/home')
  loading.isLoading = false
  useToast.updateToast('success', 'Your shop information is ready!', true)
}
</script>

<template>
  <div class="bg-white max-w-300 w-300 grid shadow-sm shadow-gray-500/50 rounded-2xl divide-1 divide-solid divide-y divide-light-800 p-10">
    <div class="head-profile grid justify-center items-center p-5">
      <div class="flex justify-center items-center gap-3">
        <div class="flex items-center bg-orange-600 rounded-full w-2.5 h-2.5" />
        <div class="flex items-center bg-orange-600 rounded-full w-sm h-0.75" />
        <div class="flex items-center bg-orange-600 rounded-full w-2.5 h-2.5" />
      </div>
      <div class="flex justify-center items-center justify-between gap-5 text-sm text-gray-500">
        <p>Shop information settings</p>
        <div />
        <p>Post products for sale</p>
      </div>
    </div>
    <form class="grid justify-center p-5 gap-8">
      <div class="register_field w-lg">
        <div>
          <label><span>*</span> Shop name</label>
          <div class="w-full border-1 border-red-500 border-solid flex items-center py-1 rounded-md divide-x divide-solid divide-3 divide-gray-300">
            <input id="add-product-name" v-model="payload.name" type="text" name="add-product-name" class="w-full px-2" placeholder="Input..." pattern="[A-Za-z0-9]{120}" required>
            <p class="flex justify-around opacity-60 text-xs px-2">
              {{ payload.name.length }}/30
            </p>
          </div>
        </div>
        <div>
          <label><span>*</span> Shop ID</label>
          <input v-model="payload.slug" type="text" class="w-full px-3 py-1 border-1 border-[#e9e9e9] rounded-md" placeholder="Input shop id..." required>
        </div>
        <div>
          <label><span>*</span> New address</label>
          <input v-if="resumeAddress" :value="resumeAddress.address" type="text" class="w-full px-3 py-1 border-1 border-[#e9e9e9] rounded-md" placeholder="Input address..." required disabled>
          <input v-else v-model="payload.address" type="text" class="w-full px-3 py-1 border-1 border-[#e9e9e9] rounded-md" placeholder="Input address..." required>
        </div>
        <div>
          <label><span>*</span> Phone</label>
          <div class="w-full border-1 border-[#e9e9e9] border-solid flex items-center py-1 rounded-md divide-x divide-solid divide-3 divide-gray-300">
            <p class="flex justify-around opacity-60 text-xs px-2">
              +84
            </p>
            <input v-if="resumeAddress" :value="resumeAddress.phone" type="text" class="w-full px-2" placeholder="Input phone number..." pattern="[A-Za-z0-9]{120}" required>
            <input v-else v-model="payload.phone" type="text" class="w-full px-2" placeholder="Input phone number..." pattern="[A-Za-z0-9]{120}" required>
          </div>
        </div>
      </div>
      <div class="col-span-5 flex justify-center items-center">
        <button type="submit" class="bg-[#E54A2B] text-white rounded-md px-10 py-1.5 my-5 shadow-md shadow-gray-300" @click="handleCreate">
          Create
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.register_field > div{
    display: grid;
    grid-template-columns: 30% 60%;
    grid-gap: 2rem;
    margin-top: 1.25rem;
}
.register_field label{
    text-align: right;
    font-size: 1em;
}
.register_field label span{
    color: orangered;
   font-size: 0.8em;
}
.register_field > div input::placeholder{
    font-size: 0.8em;
}
</style>
