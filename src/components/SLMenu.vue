<script setup>
import IOrder from '~/components/IOrder.vue'
import IProd from '~/components/IProd.vue'
import IShop from '~/components/IShop.vue'

const isOrder = ref(true)
const isProd = ref(true)
const isShop = ref(true)
const isClick = ref({ zero: false, one: false, two: false, three: false, four: false, five: false })

const onOpenOrder = () => {
  if (isOrder.value === false) isOrder.value = true
  else if (isOrder.value === true) isOrder.value = false
}
const onOpenProd = () => {
  if (isProd.value === false) isProd.value = true
  else if (isProd.value === true) isProd.value = false
}
const onOpenShop = () => {
  if (isShop.value === false) isShop.value = true
  else if (isShop.value === true) isShop.value = false
}

const onClick = (index) => {
  // isClick.forEach(element => isClick.value[element] = false)

  if (isClick.value[index] === false)
    isClick.value[index] = true

  else if (isClick.value[isClick.value[index]] === true)
    isClick.value[index] = false

  // for (const i of isClick.value) {
  //   if (i === index)
  //     isClick.value[i] = true
  // }
}

</script>

<template>
  <div class="seller-lmenu-container">
    <div class="sidenav h-full bg-white dark:bg-black overflow-x-hidden w-60 pt-5">
      <div class="dropdown flex items-center px-1 cursor-pointer" @click="onOpenOrder">
        <IOrder class="mr-1" />
        <div class="dropdown-item flex justify-between items-center w-full">
          <p>Order Management</p>
          <i class="fas fa-angle-down" :class="{active: isOrder}" />
        </div>
      </div>
      <div v-if="isOrder === true" class="grid pl-10">
        <router-link to="/seller/orders/all" href="seller/orders/all" :style="isClick.zero ? {'color': 'red'} : {'color': 'black'}" @click="onClick('zero')">
          <span class="text-xl">•</span> All order
        </router-link>
        <router-link to="/seller/orders/all" :style="isClick.one ? {'color': 'red'} : {'color': 'black'}" @click="onClick('one')">
          <span class="text-xl">•</span> Order cancel
        </router-link>
      </div>

      <div class="dropdown flex items-center px-1 cursor-pointer" @click="onOpenProd">
        <IProd class="mr-1" />
        <div class="dropdown-item flex justify-between items-center w-full">
          <p>Production Management</p>
          <i class="fas fa-angle-down" :class="{active: isProd}" />
        </div>
      </div>
      <div v-if="isProd === true" class="grid pl-10">
        <router-link to="/seller/prods/all" :style="isClick.two ? {'color': 'red'} : {'color': 'black'}" @click="onClick('two')">
          <span class="text-xl">•</span> All products
        </router-link>
        <router-link to="/seller/prods/add" :style="isClick.three ? {'color': 'red'} : {'color': 'black'}" @click="onClick('three')">
          <span class="text-xl">•</span> Add products
        </router-link>
      </div>

      <div class="dropdown flex items-center px-1 cursor-pointer" @click="onOpenShop">
        <IShop class="mr-1" />
        <div class="dropdown-item flex justify-between items-center w-full">
          <p>Shop Manager</p>
          <i class="fas fa-angle-down" :class="{active: isShop}" />
        </div>
      </div>
      <div v-if="isShop === true" class="grid pl-10">
        <router-link to="/seller/shop/profile" :style="isClick.four ? {'color': 'red'} : {'color': 'black'}" @click="onClick('four')">
          <span class="text-xl">•</span> Shop profile
        </router-link>
        <router-link to="/seller/login" :style="isClick.five ? {'color': 'red'} : {'color': 'black'}" @click="onClick('five')">
          <span class="text-xl">•</span> Shop address
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown{
  box-shadow: 1px 1px 5px gray;
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  margin-right: 0.25rem;
  background: linear-gradient(90deg, #7ec49a, #fbd786, #f7797d);
}
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

.fa-angle-down {
  transform: rotate(90deg);
  transition: 0.2s;
}
.fa-angle-down.active{
    transform: rotate(0deg);
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
