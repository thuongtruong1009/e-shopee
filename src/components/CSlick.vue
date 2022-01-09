<template>
  <VueperSlides
    autoplay="true" infinite :transition-speed="600" :duration="3000" :always-refresh-clones="true" :visible-slides="3"
    slide-multiple
    :slide-ratio="1 / 4"
    :gap="5"
  >
    <VueperSlide
      v-for="i in 10"
      :key="i"
      class="duration-3000"
      :style="'background-color: ' + ['#ff5252', '#42b983'][i % 2]" :title="i.toString()"
    />
  </VueperSlides>
</template>

<script>

import { VueperSlide, VueperSlides } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      duration: [Number, String],
      fixedHeight: [Boolean, String],
    }
  },

}
</script>
