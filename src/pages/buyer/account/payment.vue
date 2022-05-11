<route lang="yaml">
meta:
  layout: buyer/account/LBPayment
</route>

<script setup>
import { toast } from '~/stores/toast'
import { handleError } from '~/helpers/error'
import AccountRequest from '~/services/account-request'

useHead({
  title: 'buyer | account payment',
})

const useToast = toast()

const payload = reactive({
  accountholder_name: '',
  identification_number: '',
  bank_name: '',
  bank_branch: '',
  account_number: '',
})

watchOnce(async() => {
  await AccountRequest.getAddress().then((res) => {
    payload.accountholder_name = res.data.accountholder_name
    payload.identification_number = res.data.identification_number
    payload.bank_name = res.data.bank_name
    payload.bank_branch = res.data.bank_branch
    payload.account_number = res.data.account_number
  }).catch((error) => {
    return handleError(error)
  })
})

const handleUpdate = async(e) => {
  e.preventDefault()
  await AccountRequest.createAddress(payload).then(() => {
    useToast.updateToast('success', 'Payment method created successfully!', true)
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
        Mobile: (+84) 917-085-937
      </p>
    </div>
    <p class="saved-message py-5 text-gray-400 text-sm font-medium">
      You not't saved your Payment method yet.
    </p>

    <form @submit.prevent="handleUpdate">
      <div>
        <label>Full name</label>
        <input v-model="payload.accountholder_name" type="text" required>
      </div>
      <div>
        <label>Identification number</label>
        <input v-model="payload.identification_number" type="text" required>
      </div>
      <div>
        <label>Bank name</label>
        <input v-model="payload.bank_name" type="text" required>
      </div>
      <div>
        <label>Bank branch</label>
        <input v-model="payload.bank_branch" type="text" required>
      </div>
      <div>
        <label>Card number</label>
        <input v-model="payload.account_number" type="text" required>
      </div>
      <div class="pt-5 flex justify-end">
        <button type="submit" class="btn bg-black hover:bg-[#F33535] duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="handleUpdate">
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
