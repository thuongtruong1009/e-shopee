<route lang="yaml">
meta:
  layout: AHome
</route>

<template>
  <div class="container h-full p-4">
    <div class="bg-white border-1 border-solid border-grey py-3 px-5">
      <h2 class="text-xl font-bold">
        Hi! Welcome back!
      </h2>
    </div>
    <div class="grid grid-cols-4 gap-5 my-5">
      <div class="bg-[#00C689] flex justify-around items-center rounded-2xl py-3">
        <div class="p-3 bg-white rounded-full text-[#00C689]">
          <ITotalSale />
        </div>
        <div class="text-white tracking-tight">
          <p class="font-medium">
            Total Sales
          </p>
          <div class="flex items-center">
            <span class="mr-3 font-bold text-xl">$508</span>
            <p>This month</p>
          </div>
        </div>
      </div>
      <div class="bg-[#3DA5F4] flex justify-around items-center rounded-2xl py-3">
        <div class="p-3 bg-white rounded-full text-[#3DA5F4]">
          <IBasket />
        </div>
        <div class="text-white tracking-tight">
          <p class="font-medium">
            Total Sales
          </p>
          <div class="flex items-center">
            <span class="mr-3 font-bold text-xl">$508</span>
            <p>This month</p>
          </div>
        </div>
      </div>
      <div class="bg-[#F1536E] flex justify-around items-center rounded-2xl py-3">
        <div class="p-3 bg-white rounded-full text-[#F1536E]">
          <IDonut />
        </div>
        <div class="text-white tracking-tight">
          <p class="font-medium">
            Total Sales
          </p>
          <div class="flex items-center">
            <span class="mr-3 font-bold text-xl">$508</span>
            <p>This month</p>
          </div>
        </div>
      </div>
      <div class="bg-[#FDA006] flex justify-around items-center rounded-2xl py-3">
        <div class="p-3 bg-white rounded-full text-[#FDA006]">
          <IMultiline />
        </div>
        <div class="text-white tracking-tight">
          <p class="font-medium">
            Total Sales
          </p>
          <div class="flex items-center">
            <span class="mr-3 font-bold text-xl">$508</span>
            <p>This month</p>
          </div>
        </div>
      </div>
    </div>
    <v-chart class="chart w-sm h-sm" :option="option" />
  </div>
</template>

<script>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart } from 'echarts/charts'
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { defineComponent, ref } from 'vue'

import ITotalSale from '~/components/icons/ITotalSale.vue'
import IBasket from '~/components/icons/IBasket.vue'
import IDonut from '~/components/icons/IDonut.vue'
import IMultiline from '~/components/icons/IMultiline.vue'

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
])

export default defineComponent({
  name: 'HelloWorld',
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: 'light',
  },
  setup() {
    const option = ref({
      title: {
        text: 'Traffic Sources',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
      },
      series: [
        {
          name: 'Traffic Sources',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            { value: 335, name: 'Direct' },
            { value: 310, name: 'Email' },
            { value: 234, name: 'Ad Networks' },
            { value: 135, name: 'Video Ads' },
            { value: 1548, name: 'Search Engines' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    })

    return { option }
  },
})
</script>
