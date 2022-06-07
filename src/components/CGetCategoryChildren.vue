<script setup>
import { useRouter } from 'vue-router'
import { useProduct } from '~/stores/product'

const router = useRouter()
const product = useProduct()

const props = defineProps({
  level0: Object,
})

const searchCategory = async(category) => {
  await router.push(`/search/${encodeURIComponent(category)}`)
  await location.reload()
}

</script>

<template>
  <div class="grid grid-cols-4 rounded-xl gap-2">
    <div class="py-2 max-h-max overflow-y-scroll rounded-xl shadow-md" :class="{'bg-white dark:(bg-blue-gray-800 shadow-gray-600)': props.level0}">
      <div v-for="(category, i) in props.level0" :key="i" class="flex justify-between items-center dark:hover:bg-blue-gray-700 hover:(bg-[#FAFAFA] text-red-500 font-medium) px-3 py-1 cursor-pointer" @mouseover="product.level.level1 = category.children" @click="searchCategory(category.name)">
        <p>{{ category.name }}</p>
        <ICaretRight v-if="category.number_of_children" />
      </div>
    </div>

    <Transition duration="500" name="nested">
      <div v-if="product.level.level1" :class="{'py-2 bg-white rounded-xl shadow-md dark:(bg-blue-gray-800 shadow-gray-600)': product.level.level1}">
        <div v-for="(category, i) in product.level.level1" :key="i" class="flex justify-between items-center dark:hover:bg-blue-gray-700 hover:(bg-[#FAFAFA] text-red-500 font-medium) px-3 py-1 cursor-pointer" @mouseover="product.level.level2 = category.children" @click="searchCategory(category.name)">
          <p>{{ category.name }}</p>
          <ICaretRight v-if="category.number_of_children" />
        </div>
      </div>
    </Transition>

    <Transition duration="500" name="nested">
      <div v-if="product.level.level2" class="py-2 bg-white rounded-xl shadow-md dark:(bg-blue-gray-800 shadow-gray-600)">
        <div v-for="(category, i) in product.level.level2" :key="i" class="flex justify-between items-center dark:hover:bg-blue-gray-700 hover:(bg-[#FAFAFA] text-red-500 font-medium) px-3 py-1 cursor-pointer" @mouseover="product.level.level3 = category.children">
          <a>{{ category.name }}</a>
          <ICaretRight v-if="category.number_of_children" />
        </div>
      </div>
    </Transition>

    <Transition duration="500" name="nested">
      <div v-if="product.level.level3" :class="{'py-2 bg-white rounded-xl shadow-md dark:(bg-blue-gray-800 shadow-gray-600)': product.level.level3}">
        <div v-for="(category, i) in product.level.level3" :key="i" class="flex justify-between items-center dark:hover:bg-blue-gray-700 hover:(bg-[#FAFAFA] text-red-500 font-medium) px-3 py-1 cursor-pointer">
          <p>{{ category.name }}</p>
          <ICaretRight v-if="category.number_of_children" />
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
::-webkit-scrollbar-thumb {
  background: #ddd;
}
::-webkit-scrollbar {
  width: 2px;
}
.nested-enter-active {
    transition: all 0.2s ease-in-out;
}

.nested-enter-from{
    transform: translateY(30px);
    opacity: 0;
}
</style>
