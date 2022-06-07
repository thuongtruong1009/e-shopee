<script setup>
import ProductRequest from '~/services/product-request'
import { useProduct } from '~/stores/product'

const { t } = useI18n()
const product = useProduct()

watchEffect(async() => {
  const { data } = await ProductRequest.getCategoriesChildrenById()
  product.category = data
})

const isAppearMenu = ref(false)
const appearMenu = () => {
  isAppearMenu.value = !isAppearMenu.value
  product.level.level1 = ''
  product.level.level2 = ''
  product.level.level3 = ''
}
</script>

<template>
  <div class="menu-item-container">
    <div class="menu-item relative">
      <p href="#" class="menu-link text-sm text-gray-500 duration-200 py-1.5 pl-5 pr-4 flex items-end gap-1.5 cursor-pointer" @mouseover="appearMenu" @click="appearMenu">
        <i class="fas fa-list-ul mb-0.5" /> {{ t('header.categories') }} <IBCaretDown />
      </p>
      <Transition duration="500" name="nested">
        <div v-if="isAppearMenu" class="menu-child absolute z-90 mt-3 rounded-xl">
          <CGetCategoryChildren class="w-max" :level0="product.category" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.nested-enter-active,
.nested-leave-active {
    transition: all 0.3s ease-in-out;
}
.nested-leave-active {
    transition-delay: 0.1s;
}
.nested-enter-from,
.nested-leave-to {
    transform: translateY(30px);
    opacity: 0;
}
</style>
