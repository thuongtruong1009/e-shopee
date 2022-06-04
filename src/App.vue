<script setup>
import { useLoading } from '~/stores/loading'

const loading = useLoading()
onMounted(() => {
  window.onload = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }
})

useHead({
  title: 'e-shopee',
  meta: [
    { name: 'description', content: 'Online shopping application and e-commerce trading platform real-time.' }, { name: 'author', content: 'https://github.com/thuongtruong1009/e-shopee' },
  ],
})
const isScroll = ref(false)
const scrollToTop = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}
const scrollFunction = () => {
  // const y = window.scrollY
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100)
    isScroll.value = true

  else
    isScroll.value = false
}
window.addEventListener('scroll', scrollFunction)

</script>

<template>
  <Transition name="bounce">
    <div v-if="isScroll" id="fcircle" class="fixed z-30 w-13 h-13 bottom-5 right-5 bg-orange-500 border-3 border-solid border-green-600 text-white rounded-full border shadow-lg shadow-gray-500/50 flex justify-center items-center cursor-pointer hover:bg-orange-600" @click="scrollToTop">
      <ITop />
    </div>
  </Transition>
  <CToast />
  <!-- <router-view />
  <CLoading v-if="loading.isLoading === true" /> -->
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition || 'fade'" mode="out-in">
      <keep-alive>
        <suspense>
          <template #default>
            <component
              :is="Component"
              :key="route.meta.usePathKey ? route.path : undefined"
            />
          </template>
          <template #fallback>
            <CLoading v-if="loading.isLoading === true" />
          </template>
        </suspense>
      </keep-alive>
    </transition>
  </router-view>
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
