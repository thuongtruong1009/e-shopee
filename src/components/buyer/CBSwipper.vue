<script setup>
const images = reactive([
  // '/img/swipper/slide1.webp',
  // '/img/swipper/slide2.webp',
  'https://honglinhhatinh.com/wp-content/uploads/2021/04/banner-quang-cao-cua-lazada.jpg',
  'https://chuyenstandee.com/wp-content/uploads/2021/03/thiet-ke-banner-2-1-1.jpg',
  'https://inanaz.com.vn/wp-content/uploads/2020/02/mau-banner-quang-cao-dep-3.jpg',
  'https://inanaz.com.vn/wp-content/uploads/2020/02/mau-banner-quang-cao-dep-14.jpg',
  'https://inanaz.com.vn/wp-content/uploads/2020/02/mau-banner-quang-cao-dep-8.jpg',
  'https://induongquang.com/data/upload/banner-shoppe.jpg',
  'https://www.duchuymobile.com/images/promo/34/iphone-giam-gia.jpg',
  'https://static.ladipage.net/5bf3dc7edc60303c34e4991f/thumb-20211219233256.jpg',
  'https://binhminhdigital.com/StoreData/images/PageData/top-5-tai-nghe-chup-tai-sony-tot-trong-tam-gia-1-trieu-Binhminhdigital.jpg',
  'https://shanshe.vn/wp-content/uploads/2021/09/kem-duong-da-viet-nam-chat-luong-cao-4.jpg',
  'https://image-us.eva.vn/upload/1-2019/images/2019-01-17/tet-khong-tang-gia-lai-con-giam-den-95---chi-co-the-la-tet-sieu-sale-shopee-1-1547691411-87-width660height408.jpg',
  'https://i.ytimg.com/vi/DJsi7z4w-zM/maxresdefault.jpg',
  'https://hoaanhdao.vn/2018_img/files/hoang/0R4A1919.jpg',
])
const timer = ref(null)
const currentIndex = ref(0)

const currentImg = computed(() => {
  return images[Math.abs(currentIndex.value) % images.length]
})

const next = setInterval(() => {
  currentIndex.value += 1
}, 4000)
const prev = () => {
  currentIndex.value -= 1
}
</script>

<template>
  <div class="swipper-container min-w-screen-md h-150">
    <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img :src="currentImg">
      </div>
    </transition-group>
    <a class="prev" href="#" @click="prev">&#10094;</a>
    <a class="next" href="#" @click="next">&#10095;</a>
  </div>
</template>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:100%;
  opacity: 0;
}

img {
  height:600px;
  width:100%
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 50%;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 1rem;
}

.prev {
  left: 1rem;
}

.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
@media (max-width: 1024px){
  transition-group{
    height: 30rem;
  }
}
</style>
