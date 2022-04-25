<script setup>
const { t } = useI18n()
const lists = reactive([
  {
    'men fashion': [{
      shirt: 'articles',
      trousers: '1',
      pant: {
        title: 'JSON:API paints my bikeshed!',
        body: 'The shortest article. Ever.',
        created: '2015-05-22T14:56:29.000Z',
        updated: '2015-05-22T14:56:28.000Z',
      },
      shoes: {
        author: {
          data: {
            id: '42', type: 'people',
          },
        },
      },
      habiliment: '',
    }],
    'hot accessory': [
      {
        'watch': '',
        'hand bag': {
          'no-rope': '',
          'two-rope': '',
        },
        'leather wallet': {
          girl: '',
          women: 80,
          housewife: '',
        },
      },
    ],
    'glasses': [
      {
        men: 'people',
        women: '42',
        mordern: {
          white: '',
          black: '',
          pink: '',
        },
      },
    ],
    'iphone': '',
    'ipad': '',
    'laptop': '',
    'cosmetics': '',
    'mother and baby': '',
    'footwear': '',
    'watch': '',
    'jewelry': '',
    'electronic device': '',
    'bike': '',
  },
])
const isAppearMenu = ref(false)
const onAppearMenu = () => {
  isAppearMenu.value = !isAppearMenu.value
}
</script>

<template>
  <div class="menu-item-container">
    <div class="menu-item relative" @click="onAppearMenu">
      <!-- <i class="fas fa-list-ul" /> -->
      <p href="#" class="menu-link text-white text-sm text-black duration-200 py-1.5 px-5 flex items-end gap-1.5 cursor-pointer">
        {{ t('header.categories') }} <IBCaretDown />
      </p>
      <Transition duration="550" name="nested">
        <ul v-if="isAppearMenu === true" class="menu-child absolute z-90 mt-3 bg-white rounded-md divide-1 divide-y divide-solid divide-gray-200 shadow-md shadow-gray-500/50 bg-[#fbeee6]">
          <li v-for="(item, i) in Object.keys(lists[0])" :key="i" class="relative">
            <a :href="`/buyer/categories/${item}`" class="flex justify-between items-center p-2 text-black hover:text-orange-600 whitespace-nowrap">
              {{ item }} <ICaretRight class="caret_sign" />
            </a>
            <ul class="menu-child-1 absolute bg-white left-40 top-0 rounded-md">
              <li>
                <a :href="`/buyer/categories/${lists[0][String(item)]}`" class="flex justify-between items-center p-6 text-[#918eae]">
                  {{ lists[0][String(item)] }}
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.menu-child-1{
    width: fit-content;
    display: none;
}
.caret_sign{
    opacity: 0;
    transition: 0.3s;
}
.menu-item > ul > li:hover .menu-child-1{
    display: block;
}
.menu-item > ul > li:hover .caret_sign{
    opacity: 1;
}
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
