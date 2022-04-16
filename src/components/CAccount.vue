<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="nav-container grid grid-rows-7 max-w-xs text-black dark:text-gray-300 h-min">
    <router-link to="/buyer/account/dashboard" :title="dashboard">
      <div class="items rounded-t-lg">
        <i class="fas fa-tachometer-alt" />
        {{ t('caccount.dashboard') }}
      </div>
    </router-link>

    <router-link to="/buyer/account/orders" :title="orders">
      <div class="items">
        <i class="fa fa-cart-arrow-down" />
        {{ t('caccount.orders') }}
      </div>
    </router-link>

    <router-link to="/buyer/account/download" :title="download">
      <div class="items">
        <i class="fas fa-cloud-download-alt" />
        {{ t('caccount.download') }}
      </div>
    </router-link>

    <router-link to="/buyer/account/payment" :title="payment">
      <div class="items">
        <i class="fa fa-credit-card" />
        {{ t('caccount.payment-method') }}
      </div>
    </router-link>

    <router-link to="/buyer/account/address" :title="address">
      <div class="items">
        <i class="fa fa-map-marker" />
        {{ t('caccount.address') }}
      </div>
    </router-link>

    <router-link to="/buyer/account/details" :title="details" class="active">
      <div class="items">
        <i class="fa fa-user" /> {{ t('caccount.account-details') }}
      </div>
    </router-link>

    <router-link to="/buyer/login" :title="logout">
      <div class="items rounded-b-lg">
        <i class="fa fa-sign-out" /> {{ t('caccount.Logout') }}
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
