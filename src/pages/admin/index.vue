<route lang="yaml">
meta:
  layout: admin/LAHome
</route>

<template>
  <div class="container h-full p-4">
    <div id="modalPopup" class="bg-white border-1 border-solid border-bg-red-500 py-3 px-5 rounded-md duration-3000">
      <h2 class="text-xl font-bold">
        Welcome back!
      </h2>
    </div>
    <div class="grid grid-cols-4 gap-5 my-5">
      <div class="bg-[#00C689] flex justify-around items-center rounded-2xl py-3 cursor-pointer shadow-md shadow-gray-500/50">
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
      <div class="bg-[#3DA5F4] flex justify-around items-center rounded-2xl py-3 cursor-pointer shadow-md shadow-gray-500/50">
        <div class="p-3 bg-white rounded-full text-[#3DA5F4]">
          <IBasket />
        </div>
        <div class="text-white tracking-tight">
          <p class="font-medium">
            Total Orders
          </p>
          <div class="flex items-center">
            <span class="mr-3 font-bold text-xl">$387</span>
            <p>This month</p>
          </div>
        </div>
      </div>
      <div class="bg-[#F1536E] flex justify-around items-center rounded-2xl py-3 cursor-pointer shadow-md shadow-gray-500/50">
        <div class="p-3 bg-white rounded-full text-[#F1536E]">
          <IDonut />
        </div>
        <div class="text-white tracking-tight">
          <p class="font-medium">
            Total Users
          </p>
          <div class="flex items-center">
            <span class="mr-3 font-bold text-xl">$161</span>
            <p>Overtime</p>
          </div>
        </div>
      </div>
      <div class="bg-[#FDA006] flex justify-around items-center rounded-2xl py-3 cursor-pointer shadow-md shadow-gray-500/50">
        <div class="p-3 bg-white rounded-full text-[#FDA006]">
          <IMultiline />
        </div>
        <div class="text-white tracking-tight">
          <p class="font-medium">
            Total Growth
          </p>
          <div class="flex items-center">
            <span class="mr-3 font-bold text-xl">$231</span>
            <p>This month</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 justify-between my-3 gap-5">
      <VChart class="col-span-1 chart w-sm h-sm bg-white border-1 border-solid border-gray-200 rounded-lg pt-2 shadow-md shadow-gray-300" :option="option" />
      <AreaChart class="col-span-2 bg-white border-1 border-solid border-gray-200 rounded-lg p-2 shadow-md shadow-gray-300" />
    </div>
    <div class="my-3 grid grid-cols-3 justify-between gap-5">
      <ACalendar class="col-span-1" />
      <ASellerList class="col-span-2" />
    </div>
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
import AreaChart from '~/components/AreaChart.vue'
import ACalendar from '~/components/ACalendar.vue'
import ASellerList from '~/components/ASellerList.vue'

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
    useHead({
      title: 'admin | home',
    })
    const option = ref({
      title: {
        text: 'Top sales',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Electronic', 'Jewels', 'Watch', 'Houseware', 'Iphone'],
      },
      series: [
        {
          name: 'Shopee Sources',
          type: 'pie',
          radius: '55%',
          center: ['50%', '65%'],
          data: [
            { value: 335, name: 'Electronic' },
            { value: 310, name: 'Jewels' },
            { value: 234, name: 'Watch' },
            { value: 135, name: 'Houseware' },
            { value: 1548, name: 'Iphone' },
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
    const myTimeout = setTimeout(() => {
      const modalCongrate = document.getElementById('modalPopup')
      modalCongrate.style.transform = 'translateX(20rem)'
      const myTimeout = setTimeout(() => {
        modalCongrate.style.opacity = 0
        modalCongrate.style.display = 'none'
      }, 1000)
    }, 5000)

    return { option, myTimeout }
  },
})
</script>
