<route lang="yaml">
meta:
  layout: buyer/account/LBPayment
</route>

<template>
  <div class="payment-container border-1 border-solid border-light-700 rounded-md p-5">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBPayment />
      <h3 class="text-2xl">
        Payment method
      </h3>
    </div>
    <p class="saved-message py-5 text-gray-400 text-sm font-medium">
      You not't saved your Payment Method yet.
    </p>
  </div>
</template>
