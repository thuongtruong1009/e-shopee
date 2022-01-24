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
        <div class="profile-left col-span-3">
          <h1>Right</h1>
        </div>
        <div class="col-span-5 flex justify-center items-center">
          <button class="bg-[#E54A2B] text-white rounded-md px-10 py-1.5 my-5">
            Save
          </button>
        </div>
      </div>
      <!-- <div class="flex justify-center items-center">
        <button class="bg-[#E54A2B] text-white rounded-md px-10 py-1.5 my-5">
          Save
        </button>
      </div> -->
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
