<template>
  <Carousel :items-to-show="3" :wrap-around="true" :settings="settings" :breakpoints="breakpoints" :autoplay="20000">
    <Slide v-for="slide in 9" :key="slide">
      <div class="carousel__item">
        <img :src="`/img/brand/${slide}.jpg`">
      </div>
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
})
</script>

<style scoped>
.carousel__slide {
  padding: 10px;
  transition: 0.2s linear;
}
.carousel__prev, .carousel__next{
  cursor: pointer;
  position: absolute;
  top: 107%;
  width: 2.75rem;
  height: 2.75rem;
  color: white;
  font-size: 1rem;
  transition: 0.7s ease;
  border-radius: 50%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel__prev{
  left: 1rem;
}
.carousel__next{
right: 1rem;
}
</style>
