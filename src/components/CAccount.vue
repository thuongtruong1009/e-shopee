<template>
  <div class="nav-container grid grid-rows-7 max-w-xs">
    <div>
      <router-link to="/account/dashboard" :title="dashboard">
        <i class="fas fa-tachometer-alt" />
        Dashboard
      </router-link>
    </div>
    <div>
      <router-link to="/account/orders" :title="orders">
        <i class="fa fa-cart-arrow-down" />
        Orders
      </router-link>
    </div>
    <div>
      <router-link to="/account/download" :title="download">
        <i class="fas fa-cloud-download-alt" />
        Download
      </router-link>
    </div>
    <div>
      <router-link to="/account/payment" :title="payment">
        <i class="fa fa-credit-card" />
        Payment Method
      </router-link>
    </div>
    <div>
      <router-link to="/account/address" :title="address">
        <i class="fa fa-map-marker" />
        Address
      </router-link>
    </div>
    <div>
      <router-link to="/account/details" :title="details" class="active">
        <i class="fa fa-user" /> Account
        Details
      </router-link>
    </div>

    <div>
      <router-link href="login.html">
        <i class="fa fa-sign-out" /> Logout
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.nav-container > div{
    display: inline-flex;
    justify-content: start;
    align-items: center;
    padding:1rem;
    color: black;
    cursor:pointer;
    font-weight: 500;
    text-transform: uppercase;
    border: 1px solid rgb(239, 239, 239);
}
.nav-container > div:hover{
background: #F33535;
transition: 0.2s linear;
color: white;
}
</style>
