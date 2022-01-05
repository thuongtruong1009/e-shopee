<template>
  <div class="head-container bg-orange-500 flex justify-around items-center h-28">
    <CBrand />
    <CSearch />
    <CList />
    <span class="w-full h-1 bg-gray-600 absolute mt-29 left-0" />
  </div>
</template>

<style scoped>
span{
  animation: timeshow-animate 4s linear infinite;
  transform-origin: left;
}
@keyframes timeshow-animate {
  0%{
    width: 0;
  }
  100%{
    width: 100%;
  }
}
</style>
