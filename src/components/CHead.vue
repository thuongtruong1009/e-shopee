<template>
  <div class="head-container bg-orange-500 flex justify-around items-center h-28">
    <CBrand class="item3" />
    <CSearch class="item5" />
    <CList class="item4" />
    <!-- <span class="w-full h-1 bg-gray-600 absolute mt-29 left-0" /> -->
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
@media (max-width: 992px){
  .head-container {
    display: grid;
    grid-template-areas:
      'main main right right'
      'footer footer footer footer';
    grid-gap: 10px;
    padding: 0.5rem;
    height: 10rem;
  }
  .item3 {
    grid-area: main;
    display: flex;
    justify-content: start;
  }
  .item4 {
    grid-area: right;
    display: flex;
    justify-content: end;
  }
  .item5 {
    grid-area: footer;
    display: flex;
    justify-content: center;
  }
}
</style>
