<template>
  <div class="demo-banner grid grid-cols-3 justify-center items-center gap-3 px-7 mb-15 min-w-screen-md">
    <div class="col-span-1 flex justify-evenly item-center">
      <a href="">
        <img src="/img/banner/10.jpg" alt="banner-thumb-naile">
      </a>
    </div>
    <div class="col-span-1 flex justify-evenly item-center">
      <a href="">
        <img src="/img/banner/11.jpg" alt="banner-thumb-naile">
      </a>
    </div>
    <div class="col-span-1 flex justify-evenly item-center">
      <a href="">
        <img src="/img/banner/12.jpg" alt="banner-thumb-naile">
      </a>
    </div>
  </div>
</template>

<style scoped>
img{
    max-width: 450px;
    max-height: 300px;
    transition: 0.3s linear;
}
img:hover{
  transform: scale(1.03);
}
</style>
