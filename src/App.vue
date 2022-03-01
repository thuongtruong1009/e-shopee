<script setup>
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'e-shopee',
  meta: [
    { name: 'description', content: 'Online shopping application and e-commerce trading platform.' }, { name: 'author', content: 'https://github.com/thuongtruong1009/e-shopee' },
  ],
})
const scrollToTop = () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}
</script>

<template>
  <div class="fixed z-30 w-13 h-13 bottom-5 right-5 bg-orange-500 border-3 border-solid border-green-600 text-white rounded-full border shadow-md shadow-gray-400 flex justify-center items-center cursor-pointer" @click="scrollToTop">
    <ITop />
  </div>
  <router-view />
</template>
