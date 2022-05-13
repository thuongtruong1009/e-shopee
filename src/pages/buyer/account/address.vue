<route lang="yaml">
meta:
  layout: buyer/account/LBAddress
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
  full_name: user.payget.username,
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

const isEdit = ref(false)

const addressType = reactive([
  {
    0: true,
    1: false,
  }])

watchOnce(() => {
  AccountRequest.getAddress().then((res) => {
    user.address = res.data
  }).catch((error) => {
    return handleError(error)
  })
})

const handleCreate = async(e) => {
  e.preventDefault()
  await AccountRequest.createAddress(payload).then(() => {
    useToast.updateToast('created', 'Address has been created successfully!', true)
  }).catch((error) => {
    return handleError(error)
  })
}

const handleUpdate = async(e, id) => {
  e.preventDefault()
  await AccountRequest.updateAddressById(optionAddress.value, payload).then(() => {
    useToast.updateToast('sucess', 'Address has been updated successfully!', true)
  }).catch((error) => {
    return handleError(error)
  })
}
const handleDelete = async(e) => {
  e.preventDefault()
  await AccountRequest.deleteAddressById(optionAddress.value).then(() => {
    useToast.updateToast('delete', 'Address has been removed!', true)
  }).catch((error) => {
    return handleError(error)
  })
}

</script>

<template>
  <div class="myaccount-content border-1 border-solid border-light-700 rounded-md p-5 bg-[#EBF6FC] dark:bg-cool-gray-800">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex justify-between items-center">
      <div class="flex items-center gap-1 font-medium">
        <IBAddress />
        <h3 class="text-2xl">
          Billing Address
        </h3>
      </div>
      <div class="flex items-center gap-5">
        <div class="text-blue-500" @click="isCreating = !isCreating">
          <IBCreate v-if="!isCreating" />
          <IEdit v-if="isCreating" />
        </div>
        <IBDelete class="text-red-400" @click="handleDelete" />
      </div>
    </div>
    <div class="address_infor py-5 text-sm flex flex-wrap justify-around gap-10">
      <div v-for="(location, i) in user.address" :key="i" class="bg-white rounded-xl p-2">
        <p class="flex justify-between">
          <span>{{ location.full_name }}</span>
          <input type="radio" name="radio_delete" class="accent-red-500" @click="optionAddress = location.id">
        </p>
        <p>
          Phone number {{ i+1 }}: <span>{{ location.phone }}</span>
        </p>
        <p>
          Address {{ i+1 }}: <span>{{ location.address }}</span>
        </p>
        <p>
          Location {{ i+1 }}: <span>{{ location.town }}, {{ location.city }}</span>
        </p>
      </div>
    </div>

    <form>
      <div>
        <label>Full name</label>
        <input v-model="payload.full_name" type="text" required>
      </div>
      <div>
        <label>Phone number <span>(10-11 digits)</span></label>
        <input v-model="payload.phone" type="number" required>
      </div>
      <div>
        <label>State</label>
        <input v-model="payload.state" type="text" required>
      </div>
      <div>
        <label>City</label>
        <input v-model="payload.city" type="text" required>
      </div>
      <div>
        <label>Town</label>
        <input v-model="payload.town" type="text" required>
      </div>
      <div>
        <label>Address</label>
        <input v-model="payload.address" type="text" required>
      </div>

      <div class="addres_type dark:text-black">
        <select v-for="(types, index) in addressType" :key="index" v-model="payload.is_home">
          <option value="" disabled selected hidden>
            Is home
          </option>
          <option v-for="(type, i) in types" :key="i" :value="type.i">
            {{ type }}
          </option>
        </select>
        <select v-model="payload.is_pickup_address">
          <option value="" disabled selected hidden>
            Is pickup address
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
            Is default address
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
            Is return addressk
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
        <button v-if="!isCreating" type="submit" class="btn bg-black duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="handleUpdate">
          <ISave />Update address
        </button>
        <button v-if="isCreating" type="submit" class="btn bg-black hover:bg-[#F33535] duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="handleCreate">
          <ISave />Create address
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
form input:focus{
    box-shadow: 2px 2px 4px rgba(59, 175, 252, 0.8);
}
/* form .addres_type > div{
  display: flex;
  flex-direction: column;
  flex: 100%;
} */
form > div:not(:last-child){
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
</style>
