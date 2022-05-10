<script setup lang="ts">
import { category } from '~/stores/category'

const props = defineProps<{ category: string }>()
const router = useRouter()
const useCategory = category()
const { t } = useI18n()

watchEffect(() => {
  useCategory.setNewName(props.category)
})
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      {{ t('intro.hi', { name: props.category }) }}
    </p>

    <p class="text-sm opacity-50">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="useCategory.otherCategories.length">
      <p class="text-sm mt-4">
        <span class="opacity-75">{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherCategory in useCategory.otherCategories" :key="otherCategory">
            <router-link :to="`/hi/${otherCategory}`" replace>
              {{ otherCategory }}
            </router-link>
          </li>
        </ul>
      </p>
    </template>

    <div>
      <button
        class="btn m-3 text-sm mt-6"
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
