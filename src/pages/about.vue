<route lang="yaml">
meta:
  layout: LAbout
</route>

<script setup>
import IBook from '~/components/icons/IBook.vue'
import IShakeHand from '~/components/icons/IShakeHand.vue'
import ICompany from '~/components/icons/ICompany.vue'
import ITeam from '~/components/icons/ITeam.vue'
import Itestimonial from '~/components/icons/ITestimonial.vue'
useHead({
  title: 'e-shopee | about',
})
</script>

<template>
  <div class="about-container pb-10">
    <header class="py-20 bg-[#F6F6F6] font-medium text-3xl dark:bg-gray-800 dark:text-gray-200 flex justify-center">
      <h1 class="flex items-center gap-3">
        <IBook />About Us
      </h1>
    </header>
    <div class="grid grid-cols-2 px-10 gap-5 py-15">
      <div class="text-left">
        <h1 class="font-medium text-3xl">
          <IShakeHand /> Welcome to e-shopee!
        </h1>
        <p class="my-5 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore aperiam fugit consequuntur voluptatibus ex sint iure in, distinctio sed dolorem aspernatur veritatis repellendus dolorum voluptate, animi libero officiis eveniet accusamus recusandae. Temporibus amet ducimus sapiente voluptatibus autem dolorem magnam quas, officiis eveniet accusamus animi libero officiis eveniet accusamus recusandae. Temporibus
        </p>
        <p class="dark:text-gray-400">
          Sint voluptatum beatae necessitatibus quos mollitia vero, optio asperiores aut tempora iusto eum rerum, possimus, minus quidem ut saepe laboriosam. Praesentium aperiam accusantium minus repellendus accusamus neque iusto pariatur laudantium provident quod
        </p>
      </div>
      <div>
        <img src="/img/about/about_img.webp" alt="about_img" class="rounded-lg">
      </div>
    </div>
    <div class="grid grid-cols-3 text-left p-10">
      <div>
        <h2><ICompany /> Our Company</h2>
        <p class="dark:text-gray-400">
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
        </p>
      </div>
      <div>
        <h2><ITeam /> Our Team</h2>
        <p class="dark:text-gray-400">
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
        </p>
      </div>
      <div>
        <h2><Itestimonial /> Testimonial</h2>
        <p class="dark:text-gray-400">
          Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet conse ctetur adipisicing elit.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2{
  font-weight: 600;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
