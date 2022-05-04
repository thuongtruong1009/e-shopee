<route lang="yaml">
meta:
  layout: seller/product/LSProdNew
</route>

<template>
  <div class="seller_new_prod_view max-w-254 w-254">
    <div class="basic_infor p-7 my-5 bg-white shadow-md shadow-gray-300 rounded-xl">
      <div>
        <h5 class="font-medium text-lg">
          Basic information
        </h5>
      </div>
      <div class="basic_fields flex w-full">
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
      <div class="basic_fields flex w-full">
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
      <div class="basic_fields flex w-full">
        <div>
          <label>* Product name</label>
        </div>
        <div>
          <input type="text">
        </div>
      </div>
      <div class="basic_fields flex w-full">
        <div>
          <label>* Product descriptions</label>
        </div>
        <div>
          <textarea id="" name="prod_desc" rows="10" />
        </div>
      </div>
      <div class="basic_fields flex w-full">
        <div>
          <label>* Category</label>
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
    <div class="detail_infor p-7 my-5 bg-white shadow-md shadow-gray-300 rounded-xl">
      <div>
        <h5 class="font-medium text-lg">
          Basic information
        </h5>
        <p class="text-xs">
          Fill full information to grow level of the product display. <a href="" class="text-blue-600 font-medium">Guide view</a>
        </p>
      </div>
      <form method="post" class="detail_fields grid grid-cols-2 gap-5 mt-5">
        <div>
          <label>* Brand</label>
          <select name="brand">
            <option value="1">
              1
            </option>
          </select>
        </div>
        <div>
          <label>* Sex</label>
          <select name="sex">
            <option value="unisex">
              Unisex
            </option>
            <option value="men">
              Men
            </option>
            <option value="women">
              Women
            </option>
          </select>
        </div>
        <div>
          <label>Origin</label>
          <select name="origin">
            <option value="vn">
              VietNam
            </option>
          </select>
        </div>
        <div>
          <label>Materials</label>
          <select name="brand">
            <option value="1">
              1
            </option>
          </select>
        </div>
        <div>
          <label>Organization name</label>
          <select name="brand">
            <option value="1">
              1
            </option>
          </select>
        </div>
        <div>
          <label>Organization address</label>
          <select name="brand">
            <option value="1">
              1
            </option>
          </select>
        </div>
      </form>
      <div />
    </div>
    <div class="sale_infor p-7 my-5 bg-white shadow-md shadow-gray-300 rounded-xl">
      <div>
        <h5 class="font-medium text-lg">
          Sales information
        </h5>
      </div>
    </div>
    <div class="transport_infor p-7 my-5 bg-white shadow-md shadow-gray-300 rounded-xl">
      <div>
        <h5 class="font-medium text-lg">
          Transport
        </h5>
      </div>
      <form method="post">
        <div class="transport_fields">
          <label>Weight (After packing)</label>
          <div class="flex divide-x divide-solid divide-1 divide-[#e9e9e9]">
            <input type="text" name="weight">
            <p>gr</p>
          </div>
        </div>
        <div class="transport_fields">
          <label>Packing size (variable)</label>
          <div class="flex divide-x divide-solid divide-1 divide-[#e9e9e9]">
            <input type="text" name="width" placeholder="W">
            <p>cm</p>
          </div>
          <div class="flex divide-x divide-solid divide-1 divide-[#e9e9e9]">
            <input type="text" name="long" placeholder="L">
            <p>cm</p>
          </div>
          <div class="flex divide-x divide-solid divide-1 divide-[#e9e9e9]">
            <input type="text" name="height" placeholder="H">
            <p>cm</p>
          </div>
        </div>
        <div class="transport_fields">
          <label>Fee</label>
          <button class="px-5 py-2 rounded-md hover:bg-[#FFF5F1] border-1 border-solid border-[#EE4D2D] text-[#EE4D2D] text-sm">
            Activate the transport unit
          </button>
        </div>
      </form>
    </div>
    <div class="flex justify-end">
      <button class="inline rounded-md bg-[#EE4D2D] hover:bg-[#E54A2B] px-3 py-1.5 text-white text-md flex items-center gap-1">
        <ISave />Save & Display
      </button>
    </div>
  </div>
</template>

<style scoped>
label{
  font-size: 0.9em;
  font-weight: 500;
  color: gray;
}
select, option{
  padding: 0.3rem;
}
/* ********************* BASIC ************************ */
.basic_fields{
  margin-top: 1rem;
}
.basic_fields > div:nth-child(1){
  width: 20%;
  text-align: right;
  padding-right: 1rem;
  font-size: .8em;
}
.basic_fields > div:nth-child(2){
  width: 80%;
}
.basic_fields textarea, .basic_fields input{
  border: 1px solid #e9e9e9;
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  font-size: 0.8em;
  font-weight: 500;
}
/* **************** PRODUCT DETAILS ****************** */
.detail_fields > div {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: end;
}
.detail_fields label{
  margin-right: 1rem;
}
.detail_fields select{
  width: 50%;
  min-width: 50%;
  border: 1px solid #e9e9e9;
  border-radius: 0.3rem;
  height: min-content;
}
/*  ************* TRANSPORT **************************** */
.transport_fields{
  display: flex;
  text-align: right;
  align-items: ceter;
  margin-top: 1rem;
}
.transport_fields > div{
  display: flex;
  border: 1px solid #e9e9e9;
  padding: 0.2rem;
  border-radius: 0.3rem;
  margin-right: 1rem;
}
.transport_fields > div:hover, textarea:hover, select:hover{
  border: 1px solid #cccccc;
}

.transport_fields input,
.transport_fields p{
  padding: 0.25rem;
}
.transport_fields > label{
  width: 20%;
  padding-right: 1rem;
}
</style>
