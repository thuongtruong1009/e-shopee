<template>
  <div class="hint-today-container px-17 my-10">
    <div class="bg-white flex justify-start rounded-lg">
      <h2 class="text-red-500 border-b-4 border-b-solid border-b-red-500 text-lg rounded-l-lg text-left inline-block py-2 px-10 uppercase font-medium">
        Hint today
      </h2>
    </div>
    <div class="flex flex-wrap gap-3 py-3">
      <div v-for="i in 20" :key="i" class="w-47 rounded-md bg-white shadow-sm shadow-gray-400 border-1 border-solid border-transparent hover:border-red-500 cursor-pointer">
        <img src="/img/today/1.jfif" alt="" class="w-full h-47 rounded-t-md">
        <p class="text-left text-xs p-1">
          Áo Hoodie nam, nữ form rộng. Áo khoác bomber nam...
        </p>
        <div class="flex justify-between items-center px-1 py-2">
          <p class="text-red-500">
            <span class="text-xs font-light">đ</span>1.065
          </p>
          <p class="text-xs">
            Đã bán 2k
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hint-today-container > div:nth-child(2) > div{
    color: #000000;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    line-height: 16.8px;
    padding: 10px;
}
</style>
