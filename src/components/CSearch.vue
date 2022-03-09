<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="search-container w-lg <lg:w-xl shadow-md shadow-gray-500/50 flex justify-center items-center rounded-3xl">
    <input type="text" :placeholder="t('header.placeholder search')" class="outline-none w-full h-full bg-white">
    <button class="text-white flex items-center bg-black hover:bg-opacity-70 h-full">
      <router-link to="/wishlist">
        <IFind />
      </router-link>
    </button>
  </div>
</template>

<style scoped>
  .search-container {
    height: 2.7rem;
    overflow: hidden;
  }
  .search-container > input {
    padding: 10px 20px;
    -webkit-appearance: none;
    font-size: 14px;
    font-weight: 400;
  }
  .search-container > button {
    padding: 10px 15px;
    flex-shrink: 0;
  }
  @media (max-width: 992px){
    .search-container{
      width: 100%;
    }
  }
</style>
