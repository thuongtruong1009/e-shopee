<route lang="yaml">
meta:
  layout: SShopProfile
</route>

<script setup>
import ICaretRight from '~/components/ICaretRight.vue'
import ICake from '~/components/icons/ICake.vue'
import ITime from '~/components/icons/ITime.vue'
import IStar from '~/components/icons/IStar.vue'
import IChat from '~/components/icons/IChat.vue'
import INote from '~/components/icons/INote.vue'
import IPlus from '~/components/icons/IPlus.vue'
const numberShopName = ref('Lamborghini Aventador S')
const numberShopDescription = ref('')
</script>

<template>
  <div class="shop-profile-container w-full px-24 py-2">
    <div class="bg-white grid shadow-sm shadow-gray-500/50 rounded-md divide-1 divide-solid divide-y divide-light-800">
      <div class="head-profile items-center px-5">
        <div>
          <h1 class="font-bold text-2xl">
            Profile information
          </h1>
          <p class="opacity-70 text-sm">
            View Shop status and update your Shop profile
          </p>
        </div>
      </div>
      <div class="grid grid-cols-5 p-5 gap-5">
        <div class="profile-left col-span-2 rounded-md border-1 border-solid border-gray-300">
          <div class="profile-cover h-40 grid grid-cols-3 bg-gray-200 text-white">
            <div class="col-span-1 flex justify-center items-center">
              Avatar
            </div>
            <div class="col-span-2 flex justify-center items-center">
              Bio
            </div>
          </div>
          <div class="bg-gray-500 text-center text-white">
            <p>
              Edit cover photo
            </p>
          </div>
          <div class="profile-field grid grid-rows-5 divide-1 divide-solid divide-y divide-light-800">
            <div class="flex justify-between items-center p-3">
              <div class="flex items-center">
                <ICake />
                <p>Product</p>
              </div>
              <div class="flex items-center">
                <p>0</p>
                <ICaretRight />
              </div>
            </div>
            <div class="flex justify-between items-center p-3">
              <div class="flex items-center">
                <IChat />
                <p>Response rate</p>
              </div>
              <div class="flex items-center">
                <p>57%</p>
              </div>
            </div>
            <div class="flex justify-between items-center p-3">
              <div class="flex items-center">
                <ITime />
                <p>Response time</p>
              </div>
              <div class="flex items-center">
                <p>Within a few hours</p>
              </div>
            </div>
            <div class="flex justify-between items-center p-3">
              <div class="flex items-center">
                <IStar />
                <p>Shop reviews</p>
              </div>
              <div class="flex items-center">
                <p>0</p>
              </div>
            </div>
            <div class="flex justify-between items-center p-3">
              <div class="flex items-center">
                <INote />
                <p>Unsuccessful rate</p>
              </div>
              <div class="flex items-center">
                <p>0,00%</p>
                <ICaretRight />
              </div>
            </div>
          </div>
        </div>
        <div class="profile-right col-span-3">
          <div>
            <label for="shop-name">Shop Name</label>
            <div class="w-[85%] border-1 border-solid border-gray-300 flex items-center my-2 py-1 rounded-md divide-x divide-solid divide-3 divide-gray-300">
              <input id="shop-name" v-model="numberShopName" type="text" name="shop-name" class="w-full outline-none px-2 text-sm text-gray-500" placeholder="Input shop name..." pattern="[A-Za-z0-9]{120}" required>
              <p class="flex justify-around opacity-60 text-xs px-2">
                {{ numberShopName.length }}/30
              </p>
            </div>
          </div>
          <div class="">
            <label for="shop-preview">Some preview pictures or video</label>
            <div class="grid justify-center text-center items-center border-1 border-solid border-gray-300 outline-none rounded-md w-45 h-45 opacity-60 my-2 p-5">
              <IPlus class="justify-self-center" />
              <p>Add photos and videos (0/5)</p>
            </div>
          </div>
          <div>
            <label for="shop-disciption">Shop description</label>
            <textarea id="shop-disciption" v-model="numberShopDescription" name="shop-disciption" class="w-full h-25 border-1 border-solid border-gray-300 outline-none rounded-md my-2 py-1 px-3 text-sm" placeholder="Enter description or information about your shop here...">dd3</textarea>
            <p class="text-right text-xs px-2 text-gray-400">
              {{ numberShopDescription.length }}/500
            </p>
          </div>
        </div>
        <div class="col-span-5 flex justify-center items-center">
          <button class="bg-[#E54A2B] text-white rounded-md px-10 py-1.5 my-5">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head-profile > div{
  border-bottom: 3px solid red;
  width: fit-content;
  padding: 0.75rem 0;
}
.profile-field > div > div:nth-child(2){
  color:#EE4D2D;
}
</style>
