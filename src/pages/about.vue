<route lang="yaml">
meta:
  layout: LAbout
</route>

<script setup>
useHead({
  title: 'e-shopee | about',
})
const { t } = useI18n()
</script>

<template>
  <div class="about-container pb-10">
    <header class="py-20 bg-[#F6F6F6] font-medium text-3xl dark:bg-gray-800 dark:text-gray-200 flex justify-center">
      <h1 class="flex items-center gap-3">
        <IBook />{{ t('about.about-us') }}
      </h1>
    </header>
    <div class="grid grid-cols-2 px-10 gap-5 py-15">
      <div class="text-left">
        <h1 class="font-medium text-3xl flex items-center gap-2">
          <IShakeHand /> {{ t('about.welcome') }} e-shopee!
        </h1>
        <p class="my-5 dark:text-gray-400">
          {{ t('about.desc-one') }}.
        </p>
        <p class="dark:text-gray-400">
          {{ t('about.desc-two') }}.
        </p>
      </div>
      <div>
        <img src="/img/about/about_img.webp" alt="about_img" class="rounded-lg">
      </div>
    </div>
    <div class="grid grid-cols-3 text-left p-10">
      <div>
        <h2><ICompany /> {{ t('about.our-company') }}</h2>
        <p class="dark:text-gray-400">
          {{ t('about.company-desc') }}.
        </p>
      </div>
      <div>
        <h2><ITeam /> {{ t('about.our-team') }}</h2>
        <p class="dark:text-gray-400">
          {{ t('about.team-desc') }}.
        </p>
      </div>
      <div>
        <h2><ITestimonial /> {{ t('about.testimonial') }}</h2>
        <p class="dark:text-gray-400">
          {{ t('about.testimonial-desc') }}.
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
