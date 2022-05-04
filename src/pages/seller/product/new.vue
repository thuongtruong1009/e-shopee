<route lang="yaml">
meta:
  layout: seller/product/LSProdNew
</route>

<template>
  <div class="seller_new_prod_view max-w-254 w-254">
    <div class="basic_infor p-7 bg-white shadow-md shadow-gray-300 rounded-xl">
      <h5 class="font-medium text-lg">
        Basic information
      </h5>
      <div class="fields flex w-full">
        <div>
          <label>Product image</label>
        </div>
        <div class="flex gap-3">
          <div>
            <div class="cover_img border-1 border-dashed border-blue-400 rounded-md max-w-19 h-19 flex justify-center items-center hover:bg-blue-50  cursor-pointer" style="background-image:url('/img/product/new.svg');background-repeat:no-repeat; background-position:center">
              <input type="file" name="cover_img" accept="image/png, image/jpeg, image/jpg" class="opacity-0">
            </div>
            <p class="text-xs">
              * Cover image
            </p>
          </div>
          <div v-for="i in 6" :key="i">
            <div class="cover_img border-1 border-dashed border-blue-400 rounded-md max-w-19 h-19 flex justify-center items-center hover:bg-blue-50  cursor-pointer" style="background-image:url('/img/product/new.svg');background-repeat:no-repeat; background-position:center">
              <input type="file" :name="`product_img${i}`" accept="image/png, image/jpeg, image/jpg" class="opacity-0">
            </div>
            <p class="flex justify-center gap-1 text-xs">
              image {{ i }}
            </p>
          </div>
        </div>
      </div>
      <div class="fields flex w-full">
        <div>
          <label>Product video</label>
        </div>
        <div class="flex gap-5">
          <div>
            <div class="cover_img border-1 border-dashed border-blue-400 rounded-md max-w-19 h-19 flex justify-center items-center hover:bg-blue-50  cursor-pointer" style="background-image:url('/img/product/new.svg');background-repeat:no-repeat; background-position:center">
              <input type="file" name="cover_img" accept="video/mp4, video/mkv" class="opacity-0">
            </div>
            <p class="text-xs">
              * Cover video
            </p>
          </div>
          <div class="text-xs text-gray-400">
            <p>1. Maximum sizing: 30Mb, resolution not larger than 1280x1280px</p>
            <p>2. Length: 10s-60s</p>
            <p>3. Format: MP4 (not support vp9)</p>
            <p>4. Note: product can be displayed while processing. They are auto display when succesfull.</p>
          </div>
        </div>
      </div>
      <div class="fields flex w-full">
        <div>
          <label>* Product name</label>
        </div>
        <div>
          <input type="text">
        </div>
      </div>
      <div class="fields flex w-full">
        <div>
          <label>* Product descriptions</label>
        </div>
        <div>
          <textarea id="" name="prod_desc" rows="10" />
        </div>
      </div>
      <div class="fields flex w-full">
        <div>
          <label>Category</label>
        </div>
        <div class="flex items-center gap-2 text-xs text-gray-500 font-medium">
          <p class="cursor-pointer">
            Sắc đẹp > Chăm sóc nam giới > Chăm sóc tóc
          </p>
          <router-link to="/seller/product/category">
            <ISEdit />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fields{
  margin-top: 1rem;
}
.fields > div:nth-child(1){
  width: 20%;
  text-align: right;
  padding-right: 1rem;
  font-size: .8em;
}
.fields > div:nth-child(2){
  width: 80%;
}
textarea, input{
  border: 1px solid #e9e9e9;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.8em;
  font-weight: 500;
}
</style>
