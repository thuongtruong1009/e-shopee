<script>
export default {
  methods: {
    openNav() {
      document.getElementById('mySidenav').style.width = '25rem'
    },
    closeNav() {
      document.getElementById('mySidenav').style.width = '0'
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

    <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Clients</a>
      <a href="#">Contact</a>
    </div>
  </div>
</template>

<style scoped>
.container > div:not(:last-child) {
    margin: 0 1rem;
    cursor: pointer;
}
data-icon{
  width: 15rem;
  height: 15rem;
}
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;
  font-family: "Lato", sans-serif;
}
.sidenav a {
  text-decoration: none;
  color: black;
  display: block;
  transition: 0.3s;
}
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
