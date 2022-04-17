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
</script>

<template>
  <div class="buyer-menu-item-container flex justify-center">
    <ul class="float-menu flex text-sm text-gray-500 overflow-x-scroll max-w-screen-xl whitespace-nowrap">
      <li v-for="(item, i) in Object.keys(lists[0])" :key="i" class="cursor-pointer py-1 px-3 text-white dark:text-black border-1 border-solid border-transparent hover:border-white rounded-md duration-150">
        {{ item }}
      </li>
    </ul>
  </div>
</template>
