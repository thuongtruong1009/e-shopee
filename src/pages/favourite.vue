<route lang="yaml">
meta:
  layout: LFavourite
</route>
<template>
  <div class="favourite-container flex flex-row justify-center gap-5 flex-wrap">
    <div v-for="i in 9" :key="i" class="grid justify-center items-center gap-3 rounded-lg shadow-md shadow-gray-400 bg-[#8CD0E3] p-2 w-65">
      <img src="/img/today/1.jfif" alt="favourite_img" class="rounded-full w-60 h-60 justify-self-center">
      <h6 class="text-sm font-medium">
        Bright Idea Moisturizer
      </h6>
      <p class="text-xs text-gray-500">
        Vitamin C + Tri-Peptide Collagen Protecting & Brightening Moisturizer
      </p>
      <div class="flex justify-center gap-2">
        <button><IHeart /></button>
        <button class="flex items-center gap-2 btn bg-[#948AD3] rounded-md shadow-md shadow-gray-400">
          Add to cart<span>$24</span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
button:nth-child(1){
    background: #948AD3;
    color: white;
    border-radius: 50%;
    padding: 0.5rem;
    font-size: 0.7rem;
    box-shadow: 2px 2px 4px #888;
}
</style>
