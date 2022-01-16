<script>
export default {
  methods: {
    openNav() {
      document.getElementById('mySidenav').style.width = '25rem'
      const body = document.body
      body.style.overflowY = 'hidden'
    },
    closeNav() {
      document.getElementById('mySidenav').style.width = '0'
      const body = document.body
      body.style.overflowY = ''
    },
  },
}
</script>

<template>
  <div class="container flex justify-center items-center w-xs text-white dark:text-black">
    <div>
      <!-- <img src="https://img.icons8.com/fluency-systems-regular/32/ffffff/swap-paths.png"> -->
      <!-- <span class="iconify" data-icon="ic:outline-compare-arrows" /> -->
      <ICompare />
    </div>
    <div>
      <!-- <img src="https://img.icons8.com/windows/32/ffffff/like--v1.png"> -->
      <!-- <span class="iconify" data-icon="cil:heart" /> -->
      <IHeart />
    </div>
    <div class="flex items-end" @click="openNav">
      <!-- <img src="https://img.icons8.com/material-outlined/32/ffffff/shopping-cart.png"> -->
      <!-- <span class="iconify" data-icon="clarity:shopping-cart-line" /> -->
      <ICart />
      <h1 class="font-semibold ml-3">
        $90.00
      </h1>
    </div>

    <div id="mySidenav" class="sidenav w-0 h-full fixed top-12 right-0 bg-white duration-500 overflow-x-hidden z-1 text-left text-black dark:(text-gray-200 bg-black) divide-light-700 divide-y">
      <!-- <a href="javascript:void(0)" class="closebtn absolute top-0 right-1.5" @click="closeNav">&times;</a> -->
      <div class="flex justify-between items-center p-5">
        <p class="font-semibold">
          Cart
        </p>
        <span class="cursor-pointer text-4xl" @click="closeNav">&times;</span>
      </div>
      <!-- <div v-for="i in 3" :key="i" class="flex justify-between items-center p-5">
        <img src="/img/product/1.jpg" alt="Cart product Image" class="max-w-2 max-h-2">
      </div> -->
      <ul class="minicart-product-list divide-light-700 divide-y max-h-1/2 overflow-y-scroll">
        <li v-for="i in 6" :key="i" class="flex justify-between items-start p-5 inline-block">
          <div class="flex">
            <a><img
              src="/img/product/1.png" alt="Cart product Image" class="max-w-25 max-h-25 border-light-600 border-solid border-1 rounded-md mr-3"
            ></a>
            <div>
              <a href="" class="title">Walnut Cutting Board</a>
              <span class="quantity-price">1 x <span class="price">$100.00</span></span>
            </div>
          </div>
          <span class="remove hover:text-red-500 cursor-pointer">×</span>
        </li>
      </ul>
      <div class="flex flex-wrap justify-between p-5">
        <strong>Subtotal :</strong>
        <span class="amount font-semibold">$144.00</span>
      </div>
      <div class="flex justify-around items-center p-5">
        <router-link to="/cart">
          <button type="submit" value="submit" class="btn text-white font-semibold text-xs py-3 px-7 rounded-md duration-200 uppercase cursor-pointer">
            view cart
          </button>
        </router-link>
        <router-link to="/checkout">
          <button type="submit" value="submit" class="bg-black text-white font-semibold text-xs py-3 px-7 rounded-md hover:bg-[#E14641] duration-200 uppercase cursor-pointer">
            checkout
          </button>
        </router-link>
      </div>
      <p class="minicart-message p-5 text-xs">
        Free Shipping on All Orders Over $100!
      </p>
    </div>
  </div>
</template>

<style scoped>
.container > div:not(:last-child) {
    margin: 0 1rem;
    cursor: pointer;
}
/* data-icon{
  width: 15rem;
  height: 15rem;
} */
.sidenav {
  font-family: "Lato", sans-serif;
}
.sidenav a {
  text-decoration: none;
  color: black;
  display: block;
  transition: 0.3s;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
::-webkit-scrollbar {
  width: 2px;
  height: 2px;
}
::-webkit-scrollbar-thumb {
  background: rgb(155, 155, 155);
}
</style>
