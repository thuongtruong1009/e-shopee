<route lang="yaml">
meta:
  layout: buyer/account/LBPayment
</route>

<script setup>
import { useUser } from '~/stores/user'
import { toast } from '~/stores/toast'
import { handleError } from '~/helpers/error'
import AccountRequest from '~/services/account-request'

useHead({
  title: 'buyer | account payment',
})

const useToast = toast()
const id = JSON.parse(localStorage.getItem('user')).data.id
const user = useUser()
const isCreating = ref(true)

const payload = reactive({
  accountholder_name: '',
  identification_number: '',
  bank_name: '',
  bank_branch: '',
  account_number: '',
})

watchOnce(async() => {
  await AccountRequest.getBankAccount().then((res) => {
    user.payment = res.data[0]
  }).catch((error) => {
    return handleError(error)
  })
  user.payment !== '' ? isCreating.value = false : isCreating.value = true
})

const handleCreate = async(e) => {
  e.preventDefault()
  await AccountRequest.createBankAccount(payload).then(() => {
    useToast.updateToast('success', 'Payment method has been created successfully!', true)
  }).catch((error) => {
    return handleError(error)
  })
}
const handleUpdate = async(e) => {
  e.preventDefault()
  await AccountRequest.updateBankAccountById(user.payment.id, payload).then(() => {
    useToast.updateToast('success', 'Payment method has been updated successfully!', true)
  }).catch((error) => {
    return handleError(error)
  })
}
const handleDelete = async(e) => {
  e.preventDefault()
  await AccountRequest.deleteBankAccountById(user.payment.id).then(() => {
    useToast.updateToast('deleted', 'Payment method has been removed!', true)
  }).catch((error) => {
    return handleError(error)
  })
}

</script>

<template>
  <div class="payment-container border-1 border-solid border-light-700 rounded-md p-5 bg-[#EBF6FC] dark:bg-cool-gray-800">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex justify-between items-center">
      <div class="flex items-center gap-1 font-medium ">
        <IBPayment />
        <h3 class="text-2xl">
          Payment method
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
    <div v-if="user.payment !==''" class="payment_infor py-5 text-sm flex justify-around gap-10">
      <div>
        <p>
          Owner account: <span>{{ user.payment.accountholder_name }}</span>
        </p>
        <p>
          Identification number: <span>{{ user.payment.identification_number }}</span>
        </p>
        <p>
          Payment ID: <span>{{ user.payment.id }}</span>
        </p>
      </div>
      <div>
        <p>
          Bank name: <span>{{ user.payment.bank_name }}</span>
        </p>
        <p>
          Bank branch: <span>{{ user.payment.bank_branch }}</span>
        </p>
        <p>
          Account number: <span>{{ user.payment.account_number }}</span>
        </p>
      </div>
    </div>
    <p v-else class="saved-message py-5 text-gray-400 text-sm font-medium">
      You not't saved your Payment method yet.
    </p>

    <form>
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
      <div class="pt-5 flex justify-end gap-5">
        <button v-if="!isCreating" type="submit" class="btn bg-black  duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium opacity-60" @click="handleUpdate">
          <ISave />Update payment
        </button>
        <button v-if="isCreating" type="submit" class="btn bg-black hover:bg-[#F33535] duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="handleCreate">
          <ISave />Create payment
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
.payment_infor div p{
  margin: 0.5rem;
}
.payment_infor div p span{
  font-size: 1em;
  font-weight: 500;
  color: #ff3700d6;
}
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
