<script setup>
import ProductRequest from '~/services/product-request'
import { useProduct } from '~/stores/product'

const { t } = useI18n()
const product = useProduct()

watch(async() => {
  const { data } = await ProductRequest.getCategoriesChildrenById(0)
  product.category = data
})

const getLevel1 = async(id) => {
  const { data } = await ProductRequest.getCategoriesChildrenById(id)
  product.level1 = data
  product.choicedList[0] = product.level1.parent
}

const getLevel2 = async(id) => {
  const { data } = await ProductRequest.getCategoriesChildrenById(id)
  product.level2 = data
  product.choicedList[1] = product.level2.parent
}

const getLevel3 = async(id) => {
  const { data } = await ProductRequest.getCategoriesChildrenById(id)
  product.level3 = data
  product.choicedList[2] = product.level3.parent
}

const isAppearMenu = ref(false)
const onAppearMenu = () => {
  isAppearMenu.value = !isAppearMenu.value
  if (!isAppearMenu.value) {
    product.level1 = ''
    product.level2 = ''
    product.level3 = ''
  }
}
</script>

<template>
  <div class="menu-item-container">
    <div class="menu-item relative">
      <p href="#" class="menu-link text-sm text-gray-500 duration-200 py-1.5 pl-5 pr-4 flex items-end gap-1.5 cursor-pointer" @click="onAppearMenu">
        <i class="fas fa-list-ul mb-0.5" /> {{ t('header.categories') }} <IBCaretDown />
      </p>
      <Transition duration="500" name="nested">
        <div v-if="isAppearMenu === true" class="menu-child absolute z-90 mt-3 rounded-xl">
          <CSChooseCategory class="w-max" :level0="product.category.children" :level1="product.level1.children" :level2="product.level2.children" :level3="product.level3.children" @get-level1="getLevel1" @get-level2="getLevel2" @get-level3="getLevel3" />
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
