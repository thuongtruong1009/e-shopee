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
    <div class="flex justify-between flex-wrap text-left p-10">
      <div class="max-w-115">
        <h2><ICompany /> {{ t('about.our-purpose') }}</h2>
        <p class="dark:text-gray-400">
          {{ t('about.purpose-desc') }}.
        </p>
        <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="company_img" class="bg-contain rounded-lg mt-5">
      </div>
      <div class="max-w-115">
        <h2><ITeam /> {{ t('about.our-team') }}</h2>
        <p class="dark:text-gray-400">
          {{ t('about.team-desc') }}.
        </p>
        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="team_img" class="bg-contain rounded-lg mt-5">
      </div>
      <div class="max-w-115">
        <h2><ITestimonial /> {{ t('about.testimonial') }}</h2>
        <p class="dark:text-gray-400">
          {{ t('about.testimonial-desc') }}.
        </p>
        <img src="https://images.unsplash.com/photo-1572884267966-02340ebc90ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="testimonial_img" class="bg-contain rounded-lg mt-5">
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
