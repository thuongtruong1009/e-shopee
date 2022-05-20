<route lang="yaml">
meta:
  layout: buyer/account/LBDashboard
</route>

<script setup>
import { useLoading } from '~/stores/loading'
import { toast } from '~/stores/toast'
import { useUser } from '~/stores/user'
import { useOrder } from '~/stores/order'
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

    <div class="orders-table text-center py-3">
      <table class="w-full border-1 border-solid border-light-700">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody class="text-sm text-gray-500">
          <tr>
            <td>1</td>
            <td>{{ order.payget.name }}</td>
            <td>{{ handleDate(order.payget.created_at) }}</td>
            <td>{{ order.payget.status_id }}</td>
            <td>$45</td>
            <td>
              <a href="/cart" class="hover:text-light-700">View</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Katopeno Altuni</td>
            <td>July 22, 2018</td>
            <td>Approved</td>
            <td>$100</td>
            <td>
              <a href="/cart" class="ht-btn black-btn">View</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Murikhete Paris</td>
            <td>June 12, 2017</td>
            <td>On Hold</td>
            <td>$99</td>
            <td>
              <a href="/cart" class="ht-btn black-btn">View</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
tr{
  border-bottom: 1px solid rgba(233, 236, 239);
}
th:not(:last-child), td:not(:last-child){
  border-right: 1px solid rgba(233, 236, 239);
  padding: 0.75rem 0;
}
thead > tr{
  background: #A7F3D0;
  color: #05967A;
}
</style>
