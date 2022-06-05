<route lang="yaml">
meta:
  layout: buyer/account/LBDashboard
</route>

<script setup>
import { useRouter } from 'vue-router'
import { useUser } from '~/stores/user'
import { toast } from '~/stores/toast'
import { handleError } from '~/helpers/error'
import AccountRequest from '~/services/account-request'

useHead({
  title: 'buyer | address',
})

const { t } = useI18n()
const router = useRouter()
const useToast = toast()
const id = JSON.parse(localStorage.getItem('user')).data.id
const user = useUser()
const isCreating = ref(false)
const optionAddress = ref()

onMounted(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/buyer/login' })
})

const payload = reactive({
  full_name: '',
  phone: '',
  state: '',
  city: '',
  town: '',
  address: '',
  is_home: '',
  is_pickup_address: '',
  is_default_address: '',
  is_return_address: '',
})

watch(async() => {
  const { data: addressData } = await AccountRequest.getAddress()
  user.address = addressData
})

const addressType = reactive([
  {
    0: true,
    1: false,
  }])

const handleCreate = async(e) => {
  e.preventDefault()
  await AccountRequest.createAddress(payload)
  useToast.updateToast('success', 'Address has been created successfully!', true)
}

const isEdit = ref(false)
const handleUpdate = async(e) => {
  e.preventDefault()
  await AccountRequest.updateAddressById(optionAddress.value, payload)
  useToast.updateToast('success', 'Address has been updated successfully!', true)
}
const handleDelete = async() => {
  await AccountRequest.deleteAddressById(optionAddress.value)
  useToast.updateToast('success', 'Address has been removed!', true)
}

</script>

<template>
  <div class="myaccount-content border-1 border-solid border-light-700 rounded-md p-5 bg-[#EBF6FC] dark:bg-cool-gray-800">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex justify-between items-center">
      <div class="flex items-center gap-1 font-medium">
        <IBAddress />
        <h3 class="text-2xl">
          {{ t('account.address-billing') }}
        </h3>
      </div>
      <div class="flex items-center gap-5">
        <div class="text-blue-500 cursor-pointer" @click="isCreating = !isCreating">
          <IBCreate v-if="isCreating" />
          <IEdit v-if="!isCreating" />
        </div>
        <IBDelete class="text-red-400 cursor-pointer" @click="handleDelete" />
      </div>
    </div>
    <div class="address_infor py-5 text-sm flex flex-wrap justify-around gap-10">
      <div v-for="(location, i) in user.address" :key="i" class="bg-white rounded-xl p-2">
        <p class="flex justify-between">
          <span>{{ location.full_name }}</span>
          <input type="radio" name="radio_delete" class="w-4 h-4 accent-blue-500 border-gray-300 focus:(ring-transparent ring-2) dark:focus:ring-blue-600 dark:(ring-offset-gray-800 bg-gray-700 border-gray-600)" @click="optionAddress = location.id">
        </p>
        <p>
          {{ t('account.address-phone') }} {{ i+1 }}: <span>{{ location.phone }}</span>
        </p>
        <p>
          {{ t('account.address') }} {{ i+1 }}: <span>{{ location.address }}</span>
        </p>
        <p>
          {{ t('account.address-location') }} {{ i+1 }}: <span>{{ location.town }}, {{ location.city }}</span>
        </p>
      </div>
    </div>

    <form>
      <div>
        <label>{{ t('account.address-owner') }}</label>
        <input v-model="payload.full_name" type="text" required placeholder="Full name...">
      </div>
      <div>
        <label>{{ t('account.address-phone') }} <span>(10-11 digits)</span></label>
        <input v-model="payload.phone" type="number" required placeholder="Phone number [create: 11 digits] - [update: 10 digits]...">
      </div>
      <div>
        <label>{{ t('account.address-state') }}</label>
        <input v-model="payload.state" type="text" required placeholder="State name...">
      </div>
      <div>
        <label>{{ t('account.address-city') }}</label>
        <input v-model="payload.city" type="text" required placeholder="Current city..">
      </div>
      <div>
        <label>{{ t('account.address-town') }}</label>
        <input v-model="payload.town" type="text" required placeholder="Town name..">
      </div>
      <div>
        <label>{{ t('account.address') }}</label>
        <input v-model="payload.address" type="text" required placeholder="Home number, building, street...">
      </div>

      <div class="addres_type dark:text-black">
        <select v-for="(types, index) in addressType" :key="index" v-model="payload.is_home">
          <option value="" disabled selected hidden>
            {{ t('account.is-home') }}?
          </option>
          <option v-for="(type, i) in types" :key="i" :value="type.i">
            {{ type }}
          </option>
        </select>
        <select v-model="payload.is_pickup_address">
          <option value="" disabled selected hidden>
            {{ t('account.is-pickup-address') }}?
          </option>
          <option :value="false">
            False
          </option>
          <option :value="true">
            True
          </option>
        </select>
        <select v-model="payload.is_default_address">
          <option value="" disabled selected hidden>
            {{ t('account.is-default-address') }}?
          </option>
          <option :value="false">
            False
          </option>
          <option :value="true">
            True
          </option>
        </select>
        <select v-model="payload.is_return_address">
          <option value="" disabled selected hidden>
            {{ t('account.is-return-address') }}?
          </option>
          <option :value="false">
            False
          </option>
          <option :value="true">
            True
          </option>
        </select>
      </div>

      <div class="pt-5 flex gap-5 justify-end">
        <button v-if="isCreating" type="submit" class="btn bg-black duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="handleUpdate">
          <ISave />{{ t('account.address-update') }}
        </button>
        <button v-if="!isCreating" type="submit" class="btn bg-black hover:bg-[#F33535] duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="handleCreate">
          <ISave />{{ t('account.address-create') }}
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.address_infor div p{
  margin: 0.5rem;
}
.address_infor div p span{
  font-size: 1em;
  font-weight: 500;
  color: #ff3700d6;
}
form label span{
  font-size: 0.5em;
}
form input, form select{
  width: 80%;
  outline: none;
  border: 1px solid rgba(233, 236, 239);
  border-radius: 0.3rem;
  padding: 0.3rem 1rem;
  transition: 0.2s linear;
  font-size: 0.9rem;
}
form select, input[type="radio"]{
  cursor: pointer;
}
form input:focus{
    box-shadow: 2px 2px 4px rgba(59, 175, 252, 0.8);
}

form > div:not(:last-child){
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
</style>
