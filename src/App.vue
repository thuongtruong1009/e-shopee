<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'e-shopee',
  meta: [
    { name: 'description', content: 'Online shopping application and e-commerce trading platform.' }, { name: 'author', content: 'https://github.com/thuongtruong1009/e-shopee' },
  ],
})
</script>

<template>
  <router-view />
</template>
