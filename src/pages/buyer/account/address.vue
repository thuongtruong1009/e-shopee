<route lang="yaml">
meta:
  layout: buyer/account/LBAddress
</route>

<script setup>
import { useRouter } from 'vue-router'
import { toast } from '~/stores/toast'
import { handleError } from '~/helpers/error'
import AccountRequest from '~/services/account-request'

useHead({
  title: 'buyer | address',
})

const router = useRouter()
const useToast = toast()
const id = JSON.parse(localStorage.getItem('user')).data.id

const payload = reactive({
  full_name: '',
  phone: '',
  state: '',
  city: '',
  town: '',
  address: '',
  is_home: false,
  is_pickup_address: false,
  is_default_address: false,
  is_return_address: false,
})

const isEdit = ref(false)

watchOnce(() => {
  AccountRequest.getAddress().then((res) => {
    payload.full_name = res.data.full_name
    payload.address = res.data.address
    payload.phone = res.data.phone
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

const handleUpdate = async(e) => {
  e.preventDefault()
  await AccountRequest.creatupdateAddressById(id, payload).then(() => {
    useToast.updateToast('updated', 'Address has been updated successfully!', true)
  }).catch((error) => {
    return handleError(error)
  })
}
const handleDelete = async(e) => {
  e.preventDefault()
  await AccountRequest.deleteAddressById(id).then(() => {
    useToast.updateToast('updated', 'Address has been updated successfully!', true)
  }).catch((error) => {
    return handleError(error)
  })
}

</script>

<template>
  <div class="myaccount-content border-1 border-solid border-light-700 rounded-md p-5 bg-[#EBF6FC] dark:bg-cool-gray-800">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBAddress />
      <h3 class="text-2xl">
        Billing Address
      </h3>
    </div>
    <div class="py-5">
      <p class="font-medium text-gray-500 text-md">
        Thuong Truong
      </p>
      <p class="text-sm">
        6 quater, Linh Trung ward, Thu Duc dist, HoChiMinh city, VietNam
      </p>
      <p class="text-sm">
        Mobile: (+84) 917-085-937
      </p>
    </div>
    <a class="edit-address-btn text-sm text-blue-700 gap-1 flex items-center cursor-pointer" @click="isEdit = !isEdit"><i
      class="fa fa-edit"
    />Edit Address</a>

    <form>
      <div>
        <label>Full name</label>
        <input v-model="payload.full_name" type="text" required>
      </div>
      <div>
        <label>Phone number</label>
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

      <div class="dark:text-black">
        <select v-model="payload.is_home">
          <option>Is Home</option>
          <option value="false">
            False
          </option>
          <option value="true">
            True
          </option>
        </select>
        <select v-model="payload.is_pickup_address">
          <option>Is Pickup Address</option>
          <option value="false">
            False
          </option>
          <option value="true">
            True
          </option>
        </select>
        <select v-model="payload.is_default_address">
          <option>Is Default Address</option>
          <option value="false">
            False
          </option>
          <option value="true">
            True
          </option>
        </select>
        <select v-model="payload.is_return_address">
          <option>Is Return Address</option>
          <option value="false">
            False
          </option>
          <option value="true">
            True
          </option>
        </select>
      </div>

      <div class="pt-5 flex gap-5 justify-end">
        <button type="submit" class="btn bg-black hover:bg-[#F33535] duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="handleDelete">
          <ISave />Delete address
        </button>
        <button type="submit" class="btn bg-black  duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium opacity-80" :disabled="!isEdit" @click="handleUpdate">
          <ISave />Update address
        </button>
        <button type="submit" class="btn bg-black hover:bg-[#F33535] duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="handleCreate">
          <ISave />Save Changes
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
input, select{
  width: 80%;
  outline: none;
  border: 1px solid rgba(233, 236, 239);
  border-radius: 0.3rem;
  padding: 0.3rem 1rem;
  transition: 0.2s linear;
  font-size: 0.9rem;
}
input:focus{
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
