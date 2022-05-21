<route lang="yaml">
meta:
  layout: buyer/account/LBDashboard
</route>

<script setup>
import { useLoading } from '~/stores/loading'
import { toast } from '~/stores/toast'
import { useUser } from '~/stores/user'
import { useOrder } from '~/stores/order'
import { orderStatus } from '~/utils/orderStatus'
import OrderRequest from '~/services/order-request'
import { handleDate } from '~/utils/date'

const loading = useLoading()
const user = useUser()
const order = useOrder()

const payload = reactive({
  limit: 10,
  status_id: 1,
})
onMounted(async() => {
  loading.isLoading = true
  const { data: orderData } = await OrderRequest.getOrders({ params: { limit: payload.limit, status_id: payload.status_id } })
  user.order = orderData
  order.payget = orderData.data[0]
  loading.isLoading = false
})
</script>

<template>
  <div class="orders-container border-1 border-solid border-light-700 rounded-lg p-5 bg-[#EBF6FC] dark:bg-cool-gray-800">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBOrder />
      <h3 class="text-2xl">
        Your orders lists
      </h3>
    </div>

    <div class="orders-table text-center bg-[#A7F3D0] rounded-xl mt-5">
      <table class="w-full">
        <thead class="text-[#05967A]">
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody class="text-sm text-gray-500 bg-white dark:bg-blue-gray-600 dark:text-gray-200">
          <tr>
            <td>1</td>
            <td>{{ order.payget.name }}</td>
            <td>{{ order.payget.created_at }}</td>
            <td>{{ orderStatus(order.payget.status_id) }}</td>
            <td>{{ order.payget.quantity }}</td>
            <td>${{ order.payget.total }}</td>
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
th:not(:last-child), td:not(:last-child){
  border-right: 1px solid #e9e9e9;
  padding: 0.75rem 0;
}
</style>
