<script>
export default {
  data() {
    return {
      images: [
        '/img/brand/1.jpg',
        '/img/brand/2.jpg',
        '/img/brand/3.jpg',
        '/img/brand/4.jpg',
        '/img/brand/5.jpg',
        '/img/brand/6.jpg',
        '/img/brand/7.jpg',
        '/img/brand/8.jpg',
        '/img/brand/9.jpg',
      ],
      timer: null,
      currentIndex: 1,
      isSliding: false,
    }
  },
  mounted() {
    this.startSlide()
  },

  methods: {
    getStatus() {
      setTimeout(() => {
        this.isSliding = !this.isSliding
      }, 3000)
    },

    next() {
      this.currentIndex += 1
      this.isSliding = true
    },
    prev() {
      this.currentIndex -= 1
      this.isSliding = false
    },
  },
}
</script>

<template>
  <div class="product-container grid gap-7 max-h-2xl">
    <div class="title">
      <h2 class="text-3xl capitalize">
        Our Products
      </h2>
      <p class="opacity-60">
        Add our products to weekly line up
      </p>
    </div>
    <div class="tab-menu">
      <div class="flex justify-center items-center">
        <ul class="flex">
          <li class="nav-item font-semibold">
            <a href="">Audio & Video</a>
          </li>
          <li class="nav-item font-semibold">
            <a
              href=""
            >Camera & Photo</a>
          </li>
          <li class="nav-item font-semibold">
            <a
              href=""
            >Smart Electronics</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="card-product w-full h-100 grid grid-cols-7 mt-0 px-12">
      <div v-for="i in images.length-2" :key="i" class="flex justify-around items-center">
        <img :src="images[i]" :style="[isSliding ? {transform: 'translate(-12rem, 0)'} : {transform: 'translate(12rem, 0)'}]">
      </div>
      <a class="prev" @click="prev">&#10094;</a>
      <a class="next" @click="next">&#10095;</a>
    </div>
  </div>
</template>

<style scoped>
.nav-item {
margin: 0 0.25rem;
padding: 0.25rem 0.75rem;
border-radius: 5px;
text-transform: uppercase;
color: rgb(114, 114, 114);
font-size: 0.9rem;
}
.nav-item:hover{
    color: rgb(255, 102, 0);
    border: 2px solid rgb(255, 102, 0);
}
img{
  width: 12rem;
  height: 4rem;
  transition: 3s linear;
}
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 200%;
  width: 2.75rem;
  height: 2.75rem;
  color: rgb(114, 114, 114);
  font-size: 1rem;
  transition: 0.7s ease;
  border-radius: 50%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(230, 230, 230);
  background: transparent;
  opacity: 0;
  transition: 0.3s linear;
}

.next {
  right: 0rem;
}

.prev {
  left: 0rem;
}
.prev:hover, .next:hover{
background-color: rgb(255, 153, 0);
color: white;
}

.card-product:hover .prev{
transform: translateX(3rem);
opacity: 1;
}.card-product:hover .next {
transform: translateX(-3rem);
opacity: 1;
}
</style>
