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
    <div>
      <!-- <img src="https://img.icons8.com/material-outlined/32/ffffff/shopping-cart.png"> -->
      <!-- <span class="iconify" data-icon="clarity:shopping-cart-line" /> -->
      <ICart />
    </div>
    <h1 class="font-semibold">
      $90.00
    </h1>
  </div>
</template>

<style scoped>
.container > div {
    margin: 0 1rem;
    cursor: pointer;
}
data-icon{
  width: 15rem;
  height: 15rem;
}
</style>
