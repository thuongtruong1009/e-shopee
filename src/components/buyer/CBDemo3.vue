<template>
  <div class="demo2-container">
    <div class="split-wrap grid grid-cols-3 items-center p-8 gap-4">
      <div class="split third rounded-lg shadow-md shadow-gray-400">
        <div class="cover">
          <img src="/img/banner/4.webp">
        </div>
      </div>
      <div class="split third rounded-lg shadow-md shadow-gray-400">
        <div class="cover">
          <img src="/img/banner/5.webp">
        </div>
      </div>
      <div class="grid grid-rows-2 content-between gap-5">
        <div class="split third rounded-lg shadow-md shadow-gray-400">
          <div class="cover">
            <img src="/img/banner/6.webp">
          </div>
        </div>
        <div class="split third rounded-lg shadow-md shadow-gray-400">
          <div class="cover">
            <img src="/img/banner/7.webp">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.split.third {
    display: block;
    overflow: hidden;
    cursor: pointer;
}
.split.third img {
    width: 100%;
    height: auto;
    -webkit-transition: -webkit-transform 0.8s ease;
            transition: -webkit-transform 0.8s ease;
            transition: transform 0.8s ease;
            transition: transform 0.8s ease, -webkit-transform 1s ease;
}
.split.third:hover img {
    -webkit-transform: scale(1.15);
            transform: scale(1.15);
}
</style>
