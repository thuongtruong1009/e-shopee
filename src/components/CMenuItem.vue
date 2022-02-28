<script setup>
import ICaretRight from '~/components/ICaretRight.vue'
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
    <nav class="nav relative">
      <i class="fal fa-bars hidden" />
      <ul class="menu flex justify-between">
        <li class="menu-item relative" @click="onAppearMenu">
          <a href="#" class="menu-link text-white block text-base text-white bg-[#1D71AB] hover:bg-[#38689A] duration-200 py-1.5 px-5 rounded-t-lg">
            <i class="fas fa-list-ul" /> {{ t('header.menu product items') }}
          </a>
          <ul v-if="isAppearMenu === true" class="menu-child absolute z-90 bg-white rounded-b-md divide-1 divide-y divide-solid divide-gray-200">
            <li v-for="(item, i) in Object.keys(lists[0])" :key="i" class="relative">
              <a href="#" class="flex justify-between items-center p-2 text-black hover:text-orange-600">
                {{ item }} <ICaretRight />
              </a>
              <ul class="menu-child-1 absolute bg-white left-40 top-0 rounded-md">
                <li class="">
                  <a href="#" class="flex justify-between items-center p-6 text-[#918eae]">
                    {{ lists[0][String(item)] }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <ul class="float-menu flex text-sm text-gray-500">
            <li v-for="(item, i) in Object.keys(lists[0])" :key="i" class="cursor-pointer py-1 px-3 text-white border-1 border-solid border-transparent hover:border-white rounded-md duration-150">
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
  :root {
    --shadow: 0 0 15px 0 rgba(0,0,0,0.05);
  }
    .menu-child-1{
        width: fit-content;
        display: none;
    }
    .menu-item > ul > li:hover .menu-child-1{
        display: block;
    }
    /* .menu-item > li:not(:first-child){
        background:rgba(255, 255, 255, 0.9);
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
        display: flex;
        align-items: center;
    } */
    /* .float-menu > li:hover{
        background: #F97316;
        color: white;
    } */
</style>
