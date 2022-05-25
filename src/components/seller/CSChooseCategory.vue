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
  <div class="grid grid-cols-4 rounded-xl gap-2">
    <div class="py-2 max-h-max overflow-y-scroll rounded-xl shadow-md" :class="{'bg-white dark:(bg-blue-gray-800 shadow-gray-600)': props.level0}">
      <div v-for="(category, i) in props.level0" :key="i" class="flex justify-between items-center dark:hover:bg-blue-gray-700 hover:(bg-[#FAFAFA] text-red-500 font-medium) px-3 py-1 cursor-pointer" @click="$emit('get-level1', category.id)">
        <p>{{ category.name }}</p>
        <ICaretRight v-if="category.number_of_children" />
      </div>
    </div>
    <Transition duration="500" name="nested">
      <div v-if="props.level1" :class="{'py-2 bg-white rounded-xl shadow-md dark:(bg-blue-gray-800 shadow-gray-600)': props.level1}">
        <div v-for="(category, i) in props.level1" :key="i" class="flex justify-between items-center dark:hover:bg-blue-gray-700 hover:(bg-[#FAFAFA] text-red-500 font-medium) px-3 py-1 cursor-pointer" @click="$emit('get-level2', category.id)">
          <p>{{ category.name }}</p>
          <ICaretRight v-if="category.number_of_children" />
        </div>
      </div>
    </Transition>
    <Transition duration="500" name="nested">
      <div v-if="props.level2" :class="{'py-2 bg-white rounded-xl shadow-md dark:(bg-blue-gray-800 shadow-gray-600)': props.level2}">
        <div v-for="(category, i) in props.level2" :key="i" class="flex justify-between items-center dark:hover:bg-blue-gray-700 hover:(bg-[#FAFAFA] text-red-500 font-medium) px-3 py-1 cursor-pointer" @click="$emit('get-level3', category.id)">
          <a>{{ category.name }}</a>
          <ICaretRight v-if="category.number_of_children" />
        </div>
      </div>
    </Transition>
    <Transition duration="500" name="nested">
      <div v-if="props.level3" :class="{'py-2 bg-white rounded-xl shadow-md dark:(bg-blue-gray-800 shadow-gray-600)': props.level3}">
        <div v-for="(category, i) in props.level3" :key="i" class="flex justify-between items-center dark:hover:bg-blue-gray-700 hover:(bg-[#FAFAFA] text-red-500 font-medium) px-3 py-1 cursor-pointer">
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
