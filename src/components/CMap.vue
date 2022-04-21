<script setup lang="ts">
import { isDark } from '~/composables'
</script>

<template>
  <div class="map-container flex justify-center items-center py-5">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1316505217173!2d106.7994309147447!3d10.87759006029277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d8a415a9d221%3A0x550c2b41569376f9!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBRdeG7kWMgVOG6vyAtIMSQ4bqhaSBo4buNYyBRdeG7kWMgZ2lhIFRQLkhDTQ!5e0!3m2!1svi!2s!4v1642129522529!5m2!1svi!2s" width="1220" height="450" style="borderRadius: 1rem; filter: invert(90%)" :style="[isDark ? {'filter': 'invert(90%)'} : {'filter': 'invert(0%)'}]" allowfullscreen="" loading="lazy" class="shadow-lg shadow-gray-300 border-1 border-dashed border-orange-500" />
  </div>
</template>
