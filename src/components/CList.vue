<script>
export default {
  methods: {
    openNav() {
      document.getElementById('mySidenav').style.width = '22rem'
      const body = document.body
      body.style.overflowY = 'hidden'
      // const app = document.getElementById('app')
      // body.classList.add('modal')
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
  <div class="container flex justify-center items-center lg:w-xs text-white dark:text-black">
    <div>
      <ICompare />
    </div>
    <div>
      <IHeart />
    </div>
    <div class="flex items-end" @click="openNav">
      <ICart />
      <h1 class="font-semibold ml-3">
        $90.00
      </h1>
    </div>

    <div id="mySidenav" class="sidenav w-0 h-screen fixed top-12 right-0 bg-white duration-500 z-1 overflow-x-hidden text-left text-black dark:(text-gray-200 bg-black) divide-light-700 divide-y border-1 border-dotted border-gray-700 shadow-2xl shadow-gray-500">
      <div class="flex justify-between items-center p-5">
        <p class="font-semibold">
          Cart
        </p>
        <span class="cursor-pointer text-4xl" @click="closeNav">&times;</span>
      </div>
      <ul class="minicart-product-list divide-light-700 divide-y max-h-1/2 overflow-y-scroll">
        <li v-for="i in 6" :key="i" class="flex justify-between items-start p-5 inline-block">
          <div class="flex">
            <a><img
              src="/img/product/1.png" alt="Cart product Image" class="max-w-25 max-h-25 border-light-600 border-solid border-1 rounded-md mr-3"
            ></a>
            <div>
              <h5 class="title hover:text-[#E14641] cursor-pointer">
                Walnut Cutting Board
              </h5>
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
@media (max-width:768px){
  .container > div:not(:last-child) {
    margin: 0 0.5rem;
}
}
</style>
