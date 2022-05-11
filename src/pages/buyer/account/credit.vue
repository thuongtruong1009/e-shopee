<route lang="yaml">
meta:
  layout: buyer/account/LBCredit
</route>

<script setup>
import { toast } from '~/stores/toast'
import { handleError } from '~/helpers/error'
import AccountRequest from '~/services/account-request'

useHead({
  title: 'buyer | account credit',
})

const useToast = toast()
const id = JSON.parse(localStorage.getItem('user')).data.id

const payload = reactive({
  cardholder_name: '',
  expiry_date: '',
  cvv: '',
  registration_address: '',
  postal_code: '',
  card_number: '',
})

watchOnce(async() => {
  await AccountRequest.getCreditCard().then((res) => {
    payload.cardholder_name = res.data.cardholder_name
    payload.expiry_date = res.data.expiry_date
    payload.cvv = res.data.cvv
    payload.registration_address = res.data.registration_address
    payload.postal_code = res.data.postal_code
    payload.card_number = res.data.card_number
  }).catch((error) => {
    return handleError(error)
  })
})

const handleCreate = async(e) => {
  e.preventDefault()
  await AccountRequest.createCreditCard(payload).then(() => {
    useToast.updateToast('created', 'your card has been created successfully!', true)
  }).catch((error) => {
    return handleError(error)
  })
}
const handleUpdate = async(e) => {
  e.preventDefault()
  await AccountRequest.updateCreditCardById(id, payload).then(() => {
    useToast.updateToast('updated', 'Your card has been successfully!', true)
  }).catch((error) => {
    return handleError(error)
  })
}

const handleDelete = async(e) => {
  e.preventDefault()
  await AccountRequest.deleteCreditCardById(id, payload).then(() => {
    useToast.updateToast('deleted', 'Your card has been deleted!', true)
  }).catch((error) => {
    return handleError(error)
  })
}

</script>

<template>
  <div class="payment-container border-1 border-solid border-light-700 rounded-md p-5 bg-[#EBF6FC] dark:bg-cool-gray-800">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBPayment />
      <h3 class="text-2xl">
        Payment method
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
        ZIP postal: 700000
      </p>
    </div>
    <p class="saved-message py-5 text-gray-400 text-sm font-medium">
      You not't saved your Payment method yet.
    </p>

    <form @submit.prevent="handleCreate">
      <div>
        <label>Card holder name</label>
        <input v-model="payload.cardholder_name" type="text" required>
      </div>
      <div>
        <label>Card number</label>
        <input v-model="payload.card_number" type="text" required>
      </div>
      <div>
        <label>Expiry date</label>
        <input v-model="payload.expiry_date " type="date" required>
      </div>
      <div>
        <label>Cvv</label>
        <input v-model="payload.cvv" type="text" required>
      </div>
      <div>
        <label>Registration address</label>
        <input v-model="payload.registration_address" type="text" required>
      </div>
      <div>
        <label>Postal ZIP code</label>
        <input v-model="payload.postal_code" type="text" required>
      </div>
      <div class="pt-5 flex justify-end gap-5">
        <button type="submit" class="btn bg-black  duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium opacity-60" @click="handleUpdate">
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
input{
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
