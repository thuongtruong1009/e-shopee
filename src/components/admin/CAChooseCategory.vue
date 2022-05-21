<script setup>
const props = defineProps({
  level0: Object,
  level1: Object,
  level2: Object,
  level3: Object,
})
defineEmits(['get-level1', 'get-level2', 'get-level3'])

</script>

<template>
  <div class="bg-white dark:bg-blue-gray-800 grid grid-cols-4 divide-x divide-solid divide-3 divide-gray-300 rounded-xl">
    <div class="py-2 max-h-80 overflow-y-scroll">
      <div v-for="(category, i) in props.level0" :key="i" class="flex justify-between items-center hover:bg-[#FAFAFA] px-3 py-1 cursor-pointer" @click="$emit('get-level1', category.id)">
        <p>{{ category.name }}</p>
        <ICaretRight v-if="category.number_of_children" />
      </div>
    </div>
    <div>
      <div v-for="(category, i) in props.level1" :key="i" class="flex justify-between items-center hover:bg-[#FAFAFA] px-3 py-1 cursor-pointer" @click="$emit('get-level2', category.id)">
        <p>{{ category.name }}</p>
        <ICaretRight v-if="category.number_of_children" />
      </div>
    </div>
    <div>
      <div v-for="(category, i) in props.level2" :key="i" class="flex justify-between items-center hover:bg-[#FAFAFA] px-3 py-1 cursor-pointer" @click="$emit('get-level3', category.id)">
        <a>{{ category.name }}</a>
        <ICaretRight v-if="category.number_of_children" />
      </div>
    </div>
    <div>
      <div v-for="(category, i) in props.level3" :key="i" class="flex justify-between items-center hover:bg-[#FAFAFA] px-3 py-1 cursor-pointer">
        <p>{{ category.name }}</p>
        <ICaretRight v-if="category.number_of_children" />
      </div>
    </div>
  </div>
</template>

<style scoped>
::-webkit-scrollbar-thumb {
  background: #ddd;
}
::-webkit-scrollbar {
  width: 2px;
}
</style>
