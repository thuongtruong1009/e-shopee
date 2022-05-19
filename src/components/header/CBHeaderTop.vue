<script setup>
import { ref } from 'vue'

const isScroll = ref(false)
const scrollFunction = () => {
  const header = document.getElementById('header')
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    header.style.padding = '0 2rem'
    header.classList.add('sticky')
  }
  else {
    header.classList.remove('sticky')
    header.style.padding = '0.25rem 0'
  }
}
window.addEventListener('scroll', scrollFunction)

</script>

<template>
  <div id="header" class="buyer_header_container grid grid-cols-3 justify-between items-center bg-black">
    <LMenu />
    <div class="flex justify-end items-center text-white col-span-2">
      <RMenu />
      <CExtension class="mx-2.75" />
    </div>
  </div>
</template>

<style scoped>
.buyer_header_container {
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.5s ease-out;
    z-index: 999;
    position: sticky;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.3);
}

.buyer_header_container.sticky {
    position: fixed;
    opacity: 0.9;
    background: #000000e1;
}
</style>
