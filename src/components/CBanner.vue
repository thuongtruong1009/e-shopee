<template>
<!--   <div class="slider-container w-full h-40 mt-0 flex justify-center items-center relative">
    <div class="grid grid-cols-7 h-full w-11/12 overflow-x-scroll">
      <div v-for="i in images.length-2" :key="i" class="flex justify-around items-center">
        <img :src="images[i]" :style="[isSliding ? {transform: 'translate(-12rem, 0)'} : {transform: 'translate(12rem, 0)'}]">
      </div>
    </div>
    <a class="prev" @click="prev">&#10094;</a>
    <a class="next" @click="next">&#10095;</a>
  </div> -->
  <div class="brand-container">
    <div class="photobanner">
      <img src="/img/brand/1.jpg" alt="">
      <img src="/img/brand/2.jpg" alt="">
      <img src="/img/brand/3.jpg" alt="">
      <img src="/img/brand/4.jpg" alt="">
      <img src="/img/brand/5.jpg" alt="">
      <img src="/img/brand/6.jpg" alt="">
      <img src="/img/brand/7.jpg" alt="">
      <img src="/img/brand/8.jpg" alt="">
      <img src="/img/brand/9.jpg" alt="">
    </div>
  </div>
</template>

<style scoped>
.brand-container {
  height:8rem;
  width: 100vw;
  position:relative;
  overflow:hidden;
}
.photobanner {
  position:absolute;
  width: 100%;
  top:0px;
  left:0px;
  overflow:hidden;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: bannermove 10s linear infinite;
}
.photobanner img {
  margin: 0 0.5em;
  max-height: 5rem;
}

@keyframes bannermove {
  0% {
      transform: translate(100%, 0);
  }
  100% {
      transform: translate(-100%, 0);
  }
}
/* img{
  width: 12rem;
  height: 4rem;
  transition: 3s linear;
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: 2.75rem;
  height: 2.75rem;
  color: white;
  font-size: 1rem;
  transition: 0.7s ease;
  border-radius: 50%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
}

.next {
  right: 1rem;
}

.prev {
  left: 1rem;
}

.slider-container:hover .prev, .slider-container:hover .next {
  background-color: rgb(255, 153, 0);
}
::-webkit-scrollbar-thumb {
  background: transparent;
} */
</style>

<script>
// export default {
//   data() {
//     return {
//       images: [
//         '/img/brand/1.jpg',
//         '/img/brand/2.jpg',
//         '/img/brand/3.jpg',
//         '/img/brand/4.jpg',
//         '/img/brand/5.jpg',
//         '/img/brand/6.jpg',
//         '/img/brand/7.jpg',
//         '/img/brand/8.jpg',
//         '/img/brand/9.jpg',
//       ],
//       timer: null,
//       currentIndex: 1,
//       isSliding: false,
//     }
//   },
//   mounted() {
//     this.startSlide()
//   },

//   methods: {
//     getStatus() {
//       setTimeout(() => {
//         this.isSliding = !this.isSliding
//       }, 3000)
//     },

//     next() {
//       this.currentIndex += 1
//       this.isSliding = true
//     },
//     prev() {
//       this.currentIndex -= 1
//       this.isSliding = false
//     },
//   },
// }
</script>
