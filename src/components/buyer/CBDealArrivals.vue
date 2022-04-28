<script setup>
import { next, prev } from '~/utils/scrollX'

const onPrev = () => prev('deals_list')
const onNext = () => next('deals_list')
</script>

<template>
  <div class="deal_arrivals_container m-8 p-5 flex gap-2 bg-[#F5F5F5] rounded-2xl">
    <div class="relative  max-w-1/3">
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
          <div class="flex flex-col justify-center px-5">
            <img src="/img/arrival/deal1.webp" :alt="`deal${index}_img`">
            <div class="flex">
              <img v-for="i in 3" :key="i" src="/img/arrival/deal1.webp" :alt="`deal${i}_img`" class="max-w-1/3">
            </div>
          </div>
          <div class="flex flex-col justify-center gap-2">
            <h3 class="text-gray-400 text-lg">
              Originals Windbreaker Winter Jacket
            </h3>
            <p class="flex justify-center">
              <img v-for="i in 5" :key="i" src="https://img.icons8.com/fluency/48/ffffff/star.png" class="max-w-5 max-h-5">
            </p>
            <div class="flex justify-center items-end">
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
      <button class="absolute flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 top-1/2 left-0 cursor-pointer w-7 h-7 p-1 hover:(w-10 h-10 text-3xl -translate-y-5) text-gray-500" @click="onPrev">
        &#10094;
      </button>
      <button class="absolute flex justify-center items-center rounded-full bg-white shadow-md shadow-gray-300 duration-300 top-1/2 right-0 cursor-pointer w-7 h-7 p-1 hover:(w-10 h-10 text-3xl -translate-y-5) text-gray-500" @click="onNext">
        &#10095;
      </button>
    </div>
    <div>
      <div>
        <h1>New Arrivals</h1>
        <h6>Add new product to weeky line up</h6>
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
