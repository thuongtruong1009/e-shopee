<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { useRouter } from 'vue-router'
const router = useRouter()

const { t } = useI18n()

const openCatergory = () => {
  router.push('/buyer/filter')
}

const categories1 = reactive([{
  img: '/img/category/bach-hoa_online.png',
  content: t('ccategory.online-store'),
}, {
  img: '/img/category/balo_tui_vi_nam.png',
  content: t('ccategory.men-backpacks-wallets'),
}, {
  img: '/img/category/cham_soc_thu_cung.png',
  content: t('ccategory.take-care-of-the-pet'),
}, {
  img: '/img/category/dien_thoai_phu_kien.png',
  content: t('ccategory.phones-accessories'),
}, {
  img: '/img/category/do_choi.png',
  content: t('ccategory.toy'),
}, {
  img: '/img/category/dong_ho.png',
  content: t('ccategory.watch'),
}, {
  img: '/img/category/giat_giu_cham_soc_nha_cua.png',
  content: t('ccategory.laundry-home-care'),
}, {
  img: '/img/category/giay_dep_nam.png',
  content: t('ccategory.men-shoes'),
}, {
  img: '/img/category/giay_dep_nu.png',
  content: t('ccategory.women-shoes'),
}, {
  img: '/img/category/may_anh_may_quay_phim.png',
  content: t('ccategory.camera-camcorder'),
}, {
  img: '/img/category/may_tinh_laptop.png',
  content: t('ccategory.computers-laptops'),
}, {
  img: '/img/category/me_va_be.png',
  content: t('ccategory.mother-baby'),
}, {
  img: '/img/category/nha_cua_doi_song.png',
  content: t('ccategory.home-life'),
}])

const categories2 = reactive([{
  img: '/img/category/nha_sach_online.png',
  content: t('ccategory.online-bookstore'),
}, {
  img: '/img/category/oto_xe_may_xe_dap.png',
  content: t('ccategory.cars-motorcycles-bicycles'),
}, {
  img: '/img/category/phu_kien_trang_suc_nu.png',
  content: t('ccategory.women-accessories-jewelry'),
}, {
  img: '/img/category/sac_dep.png',
  content: t('ccategory.beauty'),
}, {
  img: '/img/category/suc_khoe.png',
  content: t('ccategory.health'),
}, {
  img: '/img/category/the_thao_du_lich.png',
  content: t('ccategory.sports-travel'),
}, {
  img: '/img/category/thiet_bi_dien_gia_dung.png',
  content: t('ccategory.household-electrical-appliances'),
}, {
  img: '/img/category/thiet_bi_dien_tu.png',
  content: t('ccategory.electronic-device'),
}, {
  img: '/img/category/thoi_trang_nam.png',
  content: t('ccategory.men-fashion'),
}, {
  img: '/img/category/thoi_trang_nu.png',
  content: t('ccategory.women-fashion'),
}, {
  img: '/img/category/thoi_trang_tre_em.png',
  content: t('ccategory.child-fashion'),
}, {
  img: '/img/category/tui_vi_nu.png',
  content: t('ccategory.women-purse-bags'),
}, {
  img: '/img/category/voucher_dich_vu.png',
  content: t('ccategory.vouchers-services'),
}])
</script>

<template>
  <div class="grid grid-rows-2 h-100 w-screen px-10 my-5">
    <swiper
      :slides-per-view="10"
      :space-between="10" class="w-full py-2"
    >
      <swiper-slide v-for="(category1, i) in categories1" :key="i" class="grid" @click="openCatergory">
        <div class="border-1 border-solid border-[#e9e9e9] dark:(border-transparent bg-blue-gray-700) rounded-md shadow-sm shadow-gray-300 hover:shadow-md text-xs my-2 cursor-pointer">
          <div class="flex justify-center mb-2">
            <img :src="category1.img" alt="category_img" class="max-w-30">
          </div>
          {{ category1.content }}
        </div>
      </swiper-slide>
    </swiper>
    <swiper
      :slides-per-view="10"
      :space-between="10" class="w-full py-2"
    >
      <swiper-slide v-for="(category2, i) in categories2" :key="i" class="grid" @click="openCatergory">
        <div class="border-1 border-solid border-[#e9e9e9] dark:(border-transparent bg-blue-gray-700) rounded-md shadow-sm shadow-gray-300 hover:shadow-md text-xs my-2 cursor-pointer">
          <div class="flex justify-center mb-2">
            <img :src="category2.img" alt="category_img" class="max-w-30">
          </div>
          {{ category2.content }}
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
