<script setup>
import CMenuItem from '~/components/CMenuItem.vue'
</script>

<template>
  <div class="head-container bg-orange-500 relative">
    <div class="flex justify-around items-center h-28">
      <CBrand class="item3" />
      <CSearch class="item5" />
      <CList class="item4" />
    </div>
    <CMenuItem />

    <!-- <span class="w-full h-0.25 bg-gray-600 absolute bottom-0 left-0" /> -->
  </div>
</template>

<style scoped>
span{
  animation: timeshow-animate 3.8s linear infinite;
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
