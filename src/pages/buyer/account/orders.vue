<route lang="yaml">
meta:
  layout: buyer/account/LBDashboard
</route>

<script setup>
import { useRouter } from 'vue-router'
import { useLoading } from '~/stores/loading'
import { toast } from '~/stores/toast'
import { useUser } from '~/stores/user'
import { useOrder } from '~/stores/order'
import OrderRequest from '~/services/order-request'

useHead({
  title: 'buyer | orders',
})
const { t } = useI18n()
const loading = useLoading()
const user = useUser()
const order = useOrder()
const router = useRouter()

onMounted(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/buyer/login' })
})

const payload = reactive({
  limit: 10,
  status_id: 1,
})
watch(async() => {
  loading.isLoading = true
  const { data: orderData } = await OrderRequest.getOrders({ params: { limit: payload.limit } })
  loading.isLoading = false
  user.order = orderData
  order.payget = orderData.data
})
const trackOrder = (order_id) => {
  order.savedOrder = order_id
  router.push(`/buyer/order/${encodeURIComponent(order_id)}`)
}
</script>

<template>
  <div class="orders-container border-1 border-solid border-light-700 rounded-lg p-5 bg-[#EBF6FC] dark:bg-cool-gray-800">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBOrder />
      <h3 class="text-2xl">
        {{ t('account.order-title') }}
      </h3>
    </div>

    <div class="orders-table text-center bg-[#A7F3D0] rounded-xl mt-5">
      <table class="w-full">
        <thead class="text-[#05967A]">
          <tr>
            <th>{{ t('account.order-no') }}</th>
            <th>{{ t('account.order-name') }}</th>
            <th>{{ t('account.order-total') }}</th>
            <th>{{ t('account.order-action') }}</th>
          </tr>
        </thead>

        <tbody class="text-sm text-gray-500 bg-white dark:bg-blue-gray-600 dark:text-gray-200">
          <tr v-for="(item, index) in order.payget" :key="index">
            <td>{{ index+1 }}</td>
            <td>{{ item.name }}</td>
            <td class="text-red-500 font-medium">
              ${{ item.total }}
            </td>
            <td>
              <button type="button" class="text-gray-700 bg-gradient-to-r from-teal-200 to-lime-200 hover:(bg-gradient-to-l from-teal-200 to-lime-200) focus:(ring-2 focus:ring-lime-200) dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-1.75 text-center mr-2 mb-2 flex items-center gap-1" @click="trackOrder(item.id)">
                <IBTrackOrder /> Track
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
thead > tr, tbody > tr:not(:last-child){
  border-bottom: 1px solid #e9e9e9;
}
th, td{
  border-right: 1px solid #e9e9e9;
  padding: 0.75rem;
}
</style>
