<script setup>
useHead({
  title: 'e-shopee',
  meta: [
    { name: 'description', content: 'Online shopping application and e-commerce trading platform.' }, { name: 'author', content: 'https://github.com/thuongtruong1009/e-shopee' },
  ],
})
const isScroll = ref(false)
const scrollToTop = () => {
  document.body.scrollTop = 0 // For Safari
  document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
}
const scrollFunction = () => {
  // Get the current scroll value
  const y = window.scrollY
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    isScroll.value = true

  else
    isScroll.value = false
}
window.addEventListener('scroll', scrollFunction)

</script>

<template>
  <Transition name="bounce">
    <div v-if="isScroll" id="fcircle" class="fixed z-30 w-13 h-13 bottom-5 right-5 bg-orange-500 border-3 border-solid border-green-600 text-white rounded-full border shadow-md shadow-gray-400 flex justify-center items-center cursor-pointer hover:bg-orange-600" @click="scrollToTop">
      <ITop />
    </div>
  </Transition>
  <router-view />
</template>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
    transform: translateY(2rem);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
    transform: translateY(0);
  }
}
</style>
