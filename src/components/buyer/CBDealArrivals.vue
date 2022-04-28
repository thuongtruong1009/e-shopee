<script setup>
import { next, prev } from '~/utils/scrollX'

const onPrevDeal = () => prev('deals_list')
const onNextDeal = () => next('deals_list')

const onPrevArrival = () => prev('arrival_list')
const onNextArrival = () => next('arrival_list')
</script>

<template>
  <div class="deal_arrivals_container m-8 p-5 flex gap-5 bg-[#F5F5F5] rounded-2xl">
    <div class="relative max-w-1/3">
      <div id="deals_list" class="rounded-xl overflow-x-scroll flex shadow-lg shadow-gray-300 bg-white">
        <div v-for="index in 3" :key="index" class="min-w-full p-5">
          <div class="flex justify-between">
            <h1 class="text-3xl">
              Hot Deals
            </h1>
            <h1 class="text-lg text-white font-medium rounded-md bg-[#10A341] p-1.25">
              -20%
            </h1>
          </div>
          <div class="flex flex-col justify-center px-5 relative">
            <img src="/img/arrival/deal1.webp" :alt="`deal${index}_img`">
            <div class="flex">
              <img v-for="i in 3" :key="i" src="/img/arrival/deal1.webp" :alt="`deal${i}_img`" class="max-w-1/3">
            </div>
            <div class="absolute top-2/3 left-0 w-full max-h-15 text-xs flex justify-center gap-5">
              <p class="rounded-full bg-[#F5F5F5] hover:bg-orange-500 text-gray-500 hover:text-white p-1.75 cursor-pointer duration-300">
                <IHeart />
              </p>
              <p class="rounded-full bg-[#F5F5F5] hover:bg-orange-500 text-gray-500 hover:text-white p-1.75 cursor-pointer duration-300">
                <IFind />
              </p>
              <p class="rounded-full bg-[#F5F5F5] hover:bg-orange-500 text-gray-500 hover:text-white p-1.75 cursor-pointer duration-300">
                <ICart />
              </p>
            </div>
          </div>
          <div class="flex flex-col justify-center gap-2">
            <h3 class="text-gray-400 text-lg">
              Originals Windbreaker Winter Jacket
            </h3>
            <p class="flex justify-center">
              <img v-for="i in 5" :key="i" src="https://img.icons8.com/fluency/48/ffffff/star.png" class="max-w-5 max-h-5">
            </p>
            <div class="flex justify-center items-end gap-3">
              <p class="text-gray-500/50 text-lg font-bold line-through">
                $23.90
              </p>
              <h6 class="text-2xl text-orange-600 font-bold">
                $21.54
              </h6>
            </div>
            <p class="text-sm text-gray-500">
              Availability: <span class="text-green-500">300 In Stock</span>
            </p>
          </div>
          <div class="flex items-end px-3">
            <div class="w-1/2 break-words text-gray-500">
              <p>Hurry up! Offers ends in:</p>
            </div>
            <div class="deal_time w-1/2 flex justify-end gap-1">
              <div>
                <h5>0</h5>
                <p>Days</p>
              </div>
              <div>
                <h5>:</h5>
                <p />
              </div>
              <div>
                <h5>0</h5>
                <p>Hours</p>
              </div>
              <div>
                <h5>:</h5>
                <p />
              </div>
              <div>
                <h5>0</h5>
                <p>Mins</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button class="absolute flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 top-1/2 -left-3 cursor-pointer w-7 h-7 p-1 hover:(w-10 h-10 text-3xl -translate-y-5) text-gray-500" @click="onPrevDeal">
        &#10094;
      </button>
      <button class="absolute flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 top-1/2 -right-3 cursor-pointer w-7 h-7 p-1 hover:(w-10 h-10 text-3xl -translate-y-5) text-gray-500" @click="onNextDeal">
        &#10095;
      </button>
    </div>
    <div class="max-w-2/3 w-2/3 relative px-2">
      <div>
        <h1 class="text-3xl">
          New Arrivals
        </h1>
        <h6 class="text-sm font-semibold text-gray-400 mt-2 mb-5">
          Add new product to weekly line up
        </h6>
      </div>
      <div id="arrival_list" class="overflow-x-scroll max-w-full">
        <div v-for="i in 2" :key="i" class="flex">
          <div v-for="index in 10" :key="index" class="max-w-50 min-w-50 bg-white rounded-lg shadow-md shadow-gray-300 p-2 mr-3 mb-3">
            <div class="flex justify-end">
              <p class="p-1 text-xs font-medium rounded-md bg-[#FF7519] text-white">
                New
              </p>
            </div>
            <img :src="`/img/arrival/${index}.webp`" :alt="`arrival${index}_img`">
            <div class="text-left text-sm text-gray-500">
              <p>New Balance Fresh Foam Kaymin From New Zeland</p>
              <p class="flex pt-1">
                <img v-for="i2 in 5" :key="i2" src="https://img.icons8.com/fluency/48/ffffff/star.png" class="max-w-4 max-h-4">
              </p>
            </div>
            <div class="flex justify-between items-end">
              <p class="text-md font-bold tracking-tighter">
                $11.90
              </p>
              <p class="bg-[#F5F5F5] duration-300 hover:bg-orange-400 hover:text-white rounded-full text-xs p-1.5 cursor-pointer">
                <ICart />
              </p>
            </div>
          </div>
        </div>
        <button class="absolute flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 top-1/2 left-0 cursor-pointer w-7 h-7 p-1 hover:(w-10 h-10 text-3xl -translate-y-5) text-gray-500" @click="onPrevArrival">
          &#10094;
        </button>
        <button class="absolute flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 top-1/2 -right-3 cursor-pointer w-7 h-7 p-1 hover:(w-10 h-10 text-3xl -translate-y-5) text-gray-500" @click="onNextArrival">
          &#10095;
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.deal_time h5{
    font-weight: 600;
    font-size: 1.4em;
}
.deal_time p{
    font-size: 0.8em;
    font-weight: 400;
}
::-webkit-scrollbar-thumb {
  background: transparent;
}
</style>
