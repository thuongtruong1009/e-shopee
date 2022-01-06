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
      isSliding: true,
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
    <div class="card-product w-full max-h-100 flex justify-center items-center">
      <div class="grid justify-around items-center w-11/12 h-full overflow-x-scroll gap-5" :class="[`grid-cols-${images.length-2}`]">
        <div v-for="i in images.length-2" :key="i" class="card grid row-span-1 bg-pink-300" :class="[`col-start-${i} col-end-${i+2}`]" :style="[isSliding ? {transform: 'translateX(-12rem)'} : {transform: 'translateX(12rem)'}]">
          <div class="card-type flex justify-between">
            <span class="bg-orange-400 text-white font-bold capitalize text-xs rounded p-0.75">new</span>
            <span class="bg-green-600 text-white font-bold capitalize text-xs rounded p-0.75">-10%</span>
          </div>
          <div class="card-img max-w-full max-h-7/12">
            <a href="single-product.html">
              <img class="first-img" src="/img/product/13.jpg" alt="thumbnail">
            </a>
          </div>
          <div class="product-description">
            <p class="title">
              New Luxury Men's Slim Fit Shirt Short Sleeve...
            </p>
            <div class="star-rating flex justify-start">
              <img v-for="i in 5" :key="i" src="https://img.icons8.com/fluency/48/ffffff/star.png" class="max-w-5 max-h-5">
            </div>
            <div class="flex items-center justify-between">
              <h6 class="card-price">
                $11.90
              </h6>
              <img src="https://img.icons8.com/small/50/000000/shopping-cart.png" class="max-w-9 max-h-9 p-2 rounded-full bg-gray-200">
            </div>
          </div>
        </div>
        <a class="prev" @click="prev">&#10094;</a>
        <a class="next" @click="next">&#10095;</a>
      </div>
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
border: 2px solid transparent;
transition: 0.2s;
}
.nav-item:hover{
    color: rgb(255, 102, 0);
    border-color:rgb(255, 102, 0);
}
.card{
  transition: 1.5s linear;
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 210%;
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
  background: white;
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
}
.card-product:hover .next {
transform: translateX(-3rem);
opacity: 1;
}
::-webkit-scrollbar-thumb {
  background: transparent;
}
</style>
