<route lang="yaml">
meta:
  layout: buyer/account/LBDashboard
</route>

<template>
  <div class="myaccount-content border-1 border-solid border-light-700 p-6 text-left rounded-lg">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBDashboard />
      <h3 class="text-2xl">
        Dashboard
      </h3>
    </div>
    <div class="welcome py-5">
      <p>
        Hello, <strong>Thuong Truong</strong> (If not <strong>you !</strong><a
          href="/login" class="logout text-red-400"
        > Logout</a>)
      </p>
    </div>
    <p class="text-md font-light">
      From your account dashboard. you can easily check &amp; view your
      recent orders, manage your shipping and billing addresses and edit your
      password and account details.
    </p>
  </div>
</template>
