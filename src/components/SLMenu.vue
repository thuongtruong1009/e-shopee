<script setup>
import IOrder from '~/components/IOrder.vue'
import IProd from '~/components/IProd.vue'

const isOrder = ref(true)
const isProd = ref(true)

const onOpenOrder = () => {
  if (isOrder.value === false) isOrder.value = true
  else if (isOrder.value === true) isOrder.value = false
}
const onOpenProd = () => {
  if (isProd.value === false) isProd.value = true
  else if (isProd.value === true) isProd.value = false
}

</script>

<template>
  <div class="seller-lmenu-container">
    <div class="sidenav h-full bg-white dark:bg-black overflow-x-hidden w-60 pt-5">
      <div class="dropdown flex items-center w-full px-1 cursor-pointer" @click="onOpenOrder">
        <IOrder class="mr-1" />
        <div class="dropdown-item flex justify-between items-center w-full">
          <p>Order Management</p>
          <i class="fa fa-caret-down" :class="{active: isOrder}" />
        </div>
      </div>
      <div v-if="isOrder === true" class="grid pl-10">
        <router-link to="/seller/orders/all" href="seller/order/all">
          All order
        </router-link>
        <router-link to="/seller/orders/all" href="#">
          Order cancel
        </router-link>
      </div>
      <div class="dropdown flex items-center px-1 cursor-pointer" @click="onOpenProd">
        <IProd class="mr-1" />
        <div class="dropdown-item flex justify-between items-center w-full">
          <p>Production Management</p>
          <i class="fa fa-caret-down" :class="{active: isProd}" />
        </div>
      </div>

      <div v-if="isProd === true" class="grid pl-10">
        <router-link to="/seller/orders/all" href="#">
          All products
        </router-link>
        <router-link to="/seller/orders/all" href="#">
          Add products
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidenav {
  font-family: "Lato", sans-serif;
}
router-link{
  font-size: 0.9rem;
}
p{
  font-size: 1.1rem;
  opacity: 0.8;
}

.fa-caret-down {
  transform: rotate(90deg);
  transition: 0.2s;
}
.fa-caret-down.active{
    transform: rotate(0deg);
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
