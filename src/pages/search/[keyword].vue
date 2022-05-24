<script setup lang="ts">
import { keyword } from '~/stores/keyword'

const props = defineProps<{ keyword: string }>()
const router = useRouter()
const useKeyword = keyword()
const { t } = useI18n()
useHead({
  title: `search | ${props.keyword}`,
})

onMounted(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/buyer/login' })
})

watchEffect(() => {
  useKeyword.setNewKeyword(props.keyword)
})
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      {{ t('intro.hi', { name: props.keyword }) }}
    </p>

    <p class="text-sm opacity-50">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <template v-if="useKeyword.otherKeyword.length">
      <p class="text-sm mt-4">
        <span class="opacity-75">{{ t('intro.aka') }}:</span>
        <ul>
          <li v-for="otherKeyword in useKeyword.otherKeyword" :key="otherKeyword">
            <router-link :to="`/keyword/${otherKeyword}`" replace>
              {{ otherKeyword }}
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
