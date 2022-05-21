<route lang="yaml">
meta:
  layout: buyer/account/LBDashboard
</route>

<script setup>
import { useRouter } from 'vue-router'

useHead({
  title: 'buyer | download',
})
const router = useRouter()

onMounted(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/buyer/login' })
})

</script>

<template>
  <div class="download-container border-1 border-solid border-light-700 rounded-md p-5 bg-[#EBF6FC] dark:bg-cool-gray-800">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBDownload />
      <h3 class="text-2xl">
        Downloads
      </h3>
    </div>

    <div class="download-table text-center py-3">
      <table class="w-full border-1 border-solid border-light-700">
        <thead>
          <tr>
            <th>Product</th>
            <th>Date</th>
            <th>Expire</th>
            <th>Download</th>
          </tr>
        </thead>

        <tbody class="text-sm text-gray-500">
          <tr>
            <td>Mostarizing Oil</td>
            <td>Aug 22, 2018</td>
            <td>Yes</td>
            <td><a href="/buyer/cart" class="hover:text-light-700">Download File</a></td>
          </tr>
          <tr>
            <td>Katopeno Altuni</td>
            <td>Sep 12, 2018</td>
            <td>Never</td>
            <td><a href="/buyer/cart" class="hover:text-light-700">Download File</a></td>
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
