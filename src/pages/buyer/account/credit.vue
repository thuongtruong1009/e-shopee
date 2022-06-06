<route lang="yaml">
meta:
  layout: buyer/account/LBDashboard
</route>

<script setup>
import { useLoading } from '~/stores/loading'
import { useUser } from '~/stores/user'
import { toast } from '~/stores/toast'
import AccountRequest from '~/services/account-request'

useHead({
  title: 'buyer | account credit',
})

const { t } = useI18n()
const useToast = toast()
const user = useUser()
const loading = useLoading()

onMounted(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/buyer/login' })
})

const payload = reactive({
  cardholder_name: '',
  expiry_date: '',
  cvv: '',
  registration_address: '',
  postal_code: '',
  card_number: '',
})
watch(async() => {
  loading.isLoading = true
  const { data: creditData } = await AccountRequest.getCreditCard()
  user.credit = creditData[0]
  loading.isLoading = false
  payload.cardholder_name = user.credit.cardholder_name
  payload.expiry_date = user.credit.expiry_date
  payload.cvv = user.credit.cvv
  payload.registration_address = user.credit.registration_address
  payload.postal_code = user.credit.postal_code
  payload.card_number = user.credit.card_number
})
// ------------------------------------------------
const handleCreate = async(e) => {
  e.preventDefault()
  await AccountRequest.createCreditCard(payload)
  useToast.updateToast('success', 'A new card has been created successfully!', true)
}
// ----------------------------------
const handleUpdate = async(e) => {
  e.preventDefault()
  await AccountRequest.updateCreditCardById(user.credit.id, payload)
  useToast.updateToast('success', 'Your card has been updated!', true)
}
// ------------------------------
const handleDelete = async(e) => {
  e.preventDefault()
  await AccountRequest.deleteCreditCardById(user.credit.id)
  useToast.updateToast('deleted', 'Your card has been deleted!', true)
}

</script>

<template>
  <div class="payment-container border-1 border-solid border-light-700 rounded-md p-5 bg-[#EBF6FC] dark:bg-cool-gray-800">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 flex justify-between items-center">
      <div class="flex items-center gap-1 font-medium">
        <IBPayment />
        <h3 class="text-2xl">
          {{ t('account.credit-card') }}
        </h3>
      </div>
      <IBDelete v-if="user.credit" class="text-red-400 cursor-pointer" @click="handleDelete" />
    </div>
    <div class="saved-message py-5 text-gray-400 text-sm font-medium">
      <p v-if="user.payment">
        {{ t('account.have-card') }}
      </p>
      <p v-else>
        {{ t('account.not-card') }}.
      </p>
    </div>
    <form>
      <div>
        <label>{{ t('account.card-name') }}</label>
        <input v-model="payload.cardholder_name" type="text" required>
      </div>
      <div>
        <label>{{ t('account.card-number') }} <span>(16 digits)</span></label>
        <input v-model="payload.card_number" type="text" required>
      </div>
      <div>
        <label>{{ t('account.card-expiry') }}</label>
        <input v-model="payload.expiry_date " type="text" required>
      </div>
      <div>
        <label>{{ t('account.card-cvv') }} <span>(3 digits)</span></label>
        <input v-model="payload.cvv" type="text" required>
      </div>
      <div>
        <label>{{ t('account.card-address') }}</label>
        <input v-model="payload.registration_address" type="text" required>
      </div>
      <div>
        <label>{{ t('account.postal-zip-code') }}<span>(5 digits)</span></label>
        <input v-model="payload.postal_code" type="text" required>
      </div>
      <div class="pt-5 flex justify-end">
        <button v-if="user.credit" type="submit" class="btn bg-black  duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="handleUpdate">
          <ISave />{{ t('account.card-upadte') }}
        </button>
        <button v-if="!user.credit" type="submit" class="btn bg-black hover:bg-[#F33535] duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium" @click="handleCreate">
          <ISave />{{ t('account.card-create') }}
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
form label span{
  font-size: 0.5em;
}
</style>
