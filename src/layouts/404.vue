<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main class="text-center text-teal-700 dark:text-gray-200 relative bg-[#141019] overflow-y-hidden">
    <router-view />
    <div class="absolute bottom-[5%] left-[46%]">
      <button
        class="btn m-3 text-sm mt-8 flex items-center gap-1"
        @click="router.back()"
      >
        <carbon-warning class="inline-block" /> {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
