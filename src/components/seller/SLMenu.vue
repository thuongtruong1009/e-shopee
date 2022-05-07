<script setup>
const sellerName = ref('Thuong Truong')
const sellerAvatar = ref('/img/admin/avatar_sample.png')
const notifyTotal = ref(102)

const isOrder = ref(true)
const isProd = ref(true)
const isShop = ref(true)
const isClick = ref({ zero: false, one: false, two: false, three: false, four: false, five: false, six: false, seven: false })

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
      <div class="dropdown flex items-center px-1 cursor-pointer shadow-md shadow-gray-300" @click="onOpenOrder">
        <IOrder class="mr-1" />
        <div class="dropdown-item flex justify-between items-center w-full">
          <p>Order Management</p>
          <i class="fas fa-angle-down" :class="{active: isOrder}" />
        </div>
      </div>
      <div v-if="isOrder === true" class="grid pl-10">
        <router-link to="/seller/orders/all" :style="isClick.zero ? {'color': 'red'} : {'color': 'black'}" @click="onClick('zero')">
          <span class="text-xl">•</span> All order
        </router-link>
        <router-link to="/seller/orders/all" :style="isClick.one ? {'color': 'red'} : {'color': 'black'}" @click="onClick('one')">
          <span class="text-xl">•</span> Order cancel
        </router-link>
      </div>

      <div class="dropdown flex items-center px-1 cursor-pointer shadow-md shadow-gray-300" @click="onOpenProd">
        <IProd class="mr-1" />
        <div class="dropdown-item flex justify-between items-center w-full">
          <p>Production Management</p>
          <i class="fas fa-angle-down" :class="{active: isProd}" />
        </div>
      </div>
      <div v-if="isProd === true" class="grid pl-10">
        <router-link to="/seller/product/all" :style="isClick.two ? {'color': 'red'} : {'color': 'black'}" @click="onClick('two')">
          <span class="text-xl">•</span> All products
        </router-link>
        <router-link to="/seller/product/category" :style="isClick.three ? {'color': 'red'} : {'color': 'black'}" @click="onClick('three')">
          <span class="text-xl">•</span> Add products
        </router-link>
      </div>

      <div class="dropdown flex items-center px-1 cursor-pointer shadow-md shadow-gray-300" @click="onOpenShop">
        <IShop class="mr-1" />
        <div class="dropdown-item flex justify-between items-center w-full">
          <p>Shop Manager</p>
          <i class="fas fa-angle-down" :class="{active: isShop}" />
        </div>
      </div>
      <div v-if="isShop === true" class="grid pl-10">
        <router-link to="/seller/shop/home" :style="isClick.four ? {'color': 'red'} : {'color': 'black'}" @click="onClick('four')">
          <span class="text-xl">•</span> Shop preview
        </router-link>
        <router-link to="/seller/shop/profile" :style="isClick.five ? {'color': 'red'} : {'color': 'black'}" @click="onClick('five')">
          <span class="text-xl">•</span> Shop profile
        </router-link>
        <router-link to="/seller/shop/address" :style="isClick.six ? {'color': 'red'} : {'color': 'black'}" @click="onClick('six')">
          <span class="text-xl">•</span> Shop address
        </router-link>
        <router-link to="/seller/login" :style="isClick.seven ? {'color': 'red'} : {'color': 'black'}" @click="onClick('seven')">
          <span class="text-xl">•</span> Logout
        </router-link>
      </div>
      <div class="grid grid-cols-4 items-center gap-1">
        <a href="/seller/shop/profile" class="col-span-3">
          <div class="account-item text-white flex justify-around items-center border-1 border-solid border-gray rounded-r-lg cursor-pointer py-2 bg-[#00C689] hover:(bg-transparent text-gray-500) duration-200 shadow-md shadow-gray-200">
            <img :src="sellerAvatar" alt="avatar" width="40" height="40" class="rounded-full shadow-light-800 shadow-md">
            <div>
              <h4>{{ sellerName }}</h4>
              <p class="text-xs opacity-60 flex items-center gap-1">
                login succesfully! <ITick class="tick" />
              </p>
            </div>
          </div>
        </a>
        <div class="text-gray-400 text-xl font-bold flex justify-center items-center border-2 border-solid border-gray rounded-lg col-span-1 h-full cursor-pointer hover:(bg-[#00C689] text-white) duration-200 shadow-md shadow-gray-200">
          <router-link to="/seller/notifications">
            <a href="/seller/notifications" class="notification relative inline-block flex items-center">
              <span><INotify class="text-gray-500 hover:text-white" /></span>
              <span class="badge absolute bg-red-500 text-white text-xs font-thin rounded-full">{{ notifyTotal }}</span>
            </a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown{
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  margin-right: 0.25rem;
  background: linear-gradient(90deg, #7ec49a, #fbd786, #f7797d);
}
.sidenav {
  font-family: "Lato", sans-serif;
}
router-link{
  font-size: 0.9em;
}
.dropdown-item > p{
  font-size: 1em;
  opacity: 0.8;
}

.fa-angle-down {
  transform: rotate(90deg);
  transition: 0.2s;
}
.fa-angle-down.active{
  transform: rotate(0deg);
}
.account-item:hover .tick{
  color: #00C689;
}

.notification .badge {
  top: -0.9rem;
  right: -0.9rem;
  padding: 0 0.25rem;
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
