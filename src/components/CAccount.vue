<template>
  <div class="nav-container grid grid-rows-7 max-w-xs">
    <div>
      <a href="#dashboad" data-toggle="tab"><i class="fas fa-tachometer-alt" />
        Dashboard</a>
    </div>
    <div>
      <a href="#orders" data-toggle="tab"><i class="fa fa-cart-arrow-down" />
        Orders</a>
    </div>
    <div>
      <a href="#download" data-toggle="tab"><i class="fas fa-cloud-download-alt" />
        Download</a>
    </div>
    <div>
      <a href="#payment-method" data-toggle="tab"><i class="fa fa-credit-card" />
        Payment
        Method</a>
    </div>
    <div>
      <a href="#address-edit" data-toggle="tab"><i class="fa fa-map-marker" />
        address</a>
    </div>
    <div>
      <a href="#account-info" data-toggle="tab" class="active"><i class="fa fa-user" /> Account
        Details</a>
    </div>

    <div><a href="login.html"><i class="fa fa-sign-out" /> Logout</a></div>
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
