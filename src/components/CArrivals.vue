<script setup>
import ICaretLeft from '~/components/icons/ICaretLeft.vue'
import ICaretRight from '~/components/icons/ICaretRight.vue'
const onCarousel = () => {
  const buttonLeft = document.getElementById('slide-left')
  const buttonRight = document.getElementById('slide-right')

  buttonLeft.onclick = function() {
    document.getElementById('container').scrollLeft -= 300
  }
  buttonRight.onclick = function() {
    document.getElementById('container').scrollLeft += 300
  }
}
const images = reactive([
  '/img/brand/1.jpg',
  '/img/brand/2.jpg',
  '/img/brand/3.jpg',
  '/img/brand/4.jpg',
  '/img/brand/5.jpg',
  '/img/brand/6.jpg',
  '/img/brand/7.jpg',
  '/img/brand/8.jpg',
  '/img/brand/9.jpg',
])

</script>

<template>
  <div id="container" class="duration-300">
    <div id="content" class="flex gap-5">
      <div v-for="i in images.length-2" :key="i" class="relative">
        <div class="card-type flex justify-between absolute w-full p-2">
          <span class="bg-green-600 text-white font-bold capitalize text-xs rounded p-0.75">-10%</span>
          <span class="bg-orange-400 text-white font-bold capitalize text-xs rounded p-0.75">new</span>
        </div>
        <div class="card-img max-w-full max-h-7/12">
          <a href="single-product.html">
            <img class="first-img" src="/img/product/13.jpg" alt="thumbnail">
          </a>
        </div>
        <div class="product-description text-left p-2">
          <p class="card-title cursor-pointer">
            New Luxury Men's Slim Fit Shirt Short Sleeve...
          </p>
          <div class="star-rating flex justify-start">
            <img v-for="i in 5" :key="i" src="https://img.icons8.com/fluency/48/ffffff/star.png" class="max-w-4 max-h-4">
          </div>
          <div class="flex items-center justify-between">
            <h6 class="card-price font-bold tracking-tighter">
              $11.90
            </h6>
            <img src="https://img.icons8.com/small/50/000000/shopping-cart.png" class="cart max-w-9 max-h-9 p-2 rounded-full bg-gray-100 cursor-pointer duration-200 ease-linear">
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-around">
    <button id="slide-left" type="button" @click="onCarousel">
      <ICaretLeft />
    </button>
    <button id="slide-right" type="button" @click="onCarousel">
      <ICaretRight />
    </button>
  </div>
</template>

<style scoped>
#container {
  /* width: 100vw; */
  height: max-content;
  border: 1px solid #ccc;
  overflow-x: scroll;
  scroll-behavior: smooth;
}

#content {
  width: max-content;
}
</style>
