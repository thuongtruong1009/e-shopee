<template>
  <div class="demo2-container">
    <div class="split-wrap flex items-center p-8">
      <div class="split third rounded-lg shadow-md shadow-gray-400">
        <div class="cover">
          <img src="/img/banner/8.webp">
        </div>
      </div>
      <div class="split third rounded-lg shadow-md shadow-gray-400">
        <div class="cover">
          <img src="/img/banner/9.webp">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.split.third {
    width: 50%;
    display: block;
    overflow: hidden;
    margin: 1rem;
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
