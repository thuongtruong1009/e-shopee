<template>
  <div class="nav-container grid grid-rows-7 max-w-xs text-black dark:text-gray-300">
    <router-link to="/account/dashboard" :title="dashboard">
      <div class="items">
        <i class="fas fa-tachometer-alt" />
        Dashboard
      </div>
    </router-link>

    <router-link to="/account/orders" :title="orders">
      <div class="items">
        <i class="fa fa-cart-arrow-down" />
        Orders
      </div>
    </router-link>

    <router-link to="/account/download" :title="download">
      <div class="items">
        <i class="fas fa-cloud-download-alt" />
        Download
      </div>
    </router-link>

    <router-link to="/account/payment" :title="payment">
      <div class="items">
        <i class="fa fa-credit-card" />
        Payment Method
      </div>
    </router-link>

    <router-link to="/account/address" :title="address">
      <div class="items">
        <i class="fa fa-map-marker" />
        Address
      </div>
    </router-link>

    <router-link to="/account/details" :title="details" class="active">
      <div class="items">
        <i class="fa fa-user" /> Account
        Details
      </div>
    </router-link>

    <router-link to="/login" :title="logout">
      <div class="items">
        <i class="fa fa-sign-out" /> Logout
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.items{
    display: flex;
    justify-content: start;
    align-items: center;
    padding:1rem;
    cursor:pointer;
    font-weight: 500;
    text-transform: uppercase;
    border: 1px solid rgb(239, 239, 239);
}
.items:hover{
background: #F33535;
transition: 0.2s linear;
color: white;
}
i{
  margin-right: 1rem;
}
</style>
