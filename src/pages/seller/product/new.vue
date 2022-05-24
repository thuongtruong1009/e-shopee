<route lang="yaml">
meta:
  layout: seller/LSDashBoard
</route>

<script setup>
import ProductRequest from '~/services/product-request'
import { useProduct } from '~/stores/product'
import { useLoading } from '~/stores/loading'
import { toast } from '~/stores/toast'
import { removeItemByIndex } from '~/utils/arrayHandle'
import countries from '~/shared/countries'

useHead({
  title: 'seller | new product',
})

const product = useProduct()
const loading = useLoading()
const useToast = toast()

const goBack = () => {
  history.back()
}

const categoryList1 = ref([1, 2])
const categoryList2 = ref([1, 2])
const discountList = ref([1])

const payload = reactive({
  brand_id: '',
  is_published: true,
  name: product.productName,
  description: '',
  weight: '',
  images: '',
  videos: '',
  attributes: '',
  variations: '',
  category_path: '',
  wholesale_prices: '',
  models: '',
})

const handleCreate = async() => {
  loading.isLoading = true
  await ProductRequest.createProducts(payload)
  loading.isLoading = false
  useToast.updateToast('success', 'You has been created product successfully!', true)
}

</script>

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
          <input v-model="payload.name" type="text">
        </div>
      </div>
      <div class="basic_fields flex w-full">
        <div>
          <label>* Product descriptions</label>
        </div>
        <div>
          <textarea v-model="payload.description" name="prod_desc" rows="10" />
        </div>
      </div>
      <div class="basic_fields flex w-full">
        <div>
          <label>* Category</label>
        </div>
        <div class="flex items-center gap-2 text-xs text-gray-500 font-medium">
          <p class="cursor-pointer text-red-500">
            {{ product.choicedList[0].name }} <span v-if="product.choicedList[1].name ">></span> {{ product.choicedList[1].name }} <span v-if="product.choicedList[2].name ">></span> {{ product.choicedList[2].name }}
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
            <option v-for="(country, i) in countries" :key="i" :value="country">
              {{ country }}
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
      <form method="post">
        <div class="grid grid-cols-2 gap-5 my-5">
          <div>
            <div class="text-center">
              <label>Group catergory 1</label>
            </div>
            <div class="rounded-md bg-[#F6F6F6] p-3">
              <div class="grid grid-cols-9 justify-between items-center mb-7">
                <div class="col-span-3">
                  <label>Name group</label>
                </div>
                <div class="border-1 border-[#e9e9e9] rounded-md divide-x divide-1 divide-solid divide-[#e9e9e9] flex bg-white p-1 text-sm col-span-5">
                  <input type="text" class="border-none p-1 w-full">
                  <p class="p-1 opacity-70">
                    0/14
                  </p>
                </div>
                <div class="col-span-1" />
              </div>
              <div class="grid grid-cols-9 justify-between items-start my-2">
                <div class="col-span-3">
                  <label>Category types</label>
                </div>
                <div class="col-span-6">
                  <div v-for="i in categoryList1" :key="i" class="grid grid-cols-6">
                    <div class="border-1 border-[#e9e9e9] rounded-md divide-x divide-1 divide-solid divide-[#e9e9e9] flex bg-white p-1 text-sm col-span-5 my-1">
                      <input type="text" class="border-none p-1 w-full">
                      <p class="p-1 opacity-70">
                        0/14
                      </p>
                    </div>
                    <div class="col-span-1 opacity-60 flex justify-center items-center cursor-pointer">
                      <IARemove @click="removeItemByIndex(categoryList1, i, 1)" />
                    </div>
                  </div>

                  <div class="grid grid-cols-6">
                    <div class="border-1 border-[#e9e9e9] rounded-md border-2 border-dotted border-blue-500 text-blue-400 flex justify-center items-center gap-2 p-1 text-sm col-span-5 my-1 cursor-pointer" @click="categoryList1.push(categoryList1.length+1)">
                      <ISNew />
                      <p>Add category type</p>
                    </div>
                    <div class="col-span-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div class="text-center">
              <label>Group catergory 2</label>
            </div>
            <div class="rounded-md bg-[#F6F6F6] p-3">
              <div class="grid grid-cols-9 justify-between items-center mb-7">
                <div class="col-span-3">
                  <label>Name group</label>
                </div>
                <div class="border-1 border-[#e9e9e9] rounded-md divide-x divide-1 divide-solid divide-[#e9e9e9] flex bg-white p-1 text-sm col-span-5">
                  <input type="text" class="border-none p-1 w-full">
                  <p class="p-1 opacity-70">
                    0/14
                  </p>
                </div>
                <div class="col-span-1" />
              </div>
              <div class="grid grid-cols-9 justify-between items-start my-2">
                <div class="col-span-3">
                  <label>Category types</label>
                </div>
                <div class="col-span-6">
                  <div v-for="i in categoryList2" :key="i" class="grid grid-cols-6">
                    <div class="border-1 border-[#e9e9e9] rounded-md divide-x divide-1 divide-solid divide-[#e9e9e9] flex bg-white p-1 text-sm col-span-5 my-1">
                      <input type="text" class="border-none p-1 w-full">
                      <p class="p-1 opacity-70">
                        0/14
                      </p>
                    </div>
                    <div class="col-span-1 opacity-60 flex justify-center items-center cursor-pointer">
                      <IARemove @click="removeItemByIndex(categoryList2, i, 1)" />
                    </div>
                  </div>

                  <div class="grid grid-cols-6">
                    <div class="border-1 border-[#e9e9e9] rounded-md border-2 border-dotted border-blue-500 text-blue-400 flex justify-center items-center gap-2 p-1 text-sm col-span-5 my-1 cursor-pointer" @click="categoryList2.push(categoryList2.length+1)">
                      <ISNew />
                      <p>Add category type</p>
                    </div>
                    <div class="col-span-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sale_tips flex justify-between text-sm my-5">
          <label>Tips for setting up item categories</label>
          <div class="border-1 border-[#e9e9e9] rounded-md divide-x divide-1 divide-solid divide-[#e9e9e9] flex items-center bg-white">
            <p class="px-2 opacity-70">
              $
            </p>
            <input type="number" placeholder="price" class="px-1">
            <input type="number" placeholder="warehouse" class="px-1">
            <input type="text" placeholder="SKU type" class="px-1">
          </div>
          <button class="rounded-md bg-[#EE4D2D] hover:bg-[#E54A2B] px-3 py-1 text-white border-1 border-[#e9e9e9]">
            Appy for all type
          </button>
        </div>
        <div class="sale_discounts flex justify-between my-5 text-sm">
          <div class="w-1/5">
            <label>Buy more for discount</label>
          </div>
          <div class="rounded-md bg-[#F6F6F6] p-3 w-4/5 text-gray-500">
            <div class="flex justify-between items-center">
              <div class="grid grid-cols-4 w-full">
                <div />
                <div>
                  <p>From (product)</p>
                </div>
                <div>
                  <p>To (product)</p>
                </div>
                <div>
                  <p>Price</p>
                </div>
                <div />
              </div>
              <div class="opacity-0">
                <IARemove />
              </div>
            </div>
            <div v-for="i in discountList" :key="i" class="flex justify-between items-center my-2">
              <div class="grid grid-cols-4 w-full">
                <div class="text-center">
                  <p>{{ i }}. Price range {{ i }}</p>
                </div>
                <div>
                  <input type="number" :name="`from${i}`">
                </div>
                <div>
                  <input type="number" :name="`to${i}`">
                </div>
                <div>
                  <input type="number" :name="`price${i}`">
                </div>
                <div />
              </div>
              <div class="opacity-70 cursor-pointer">
                <IARemove @click="removeItemByIndex(discountList, i, 1)" />
              </div>
            </div>
            <div class="grid justify-end my-2 px-[4%]">
              <div class="border-1 border-[#e9e9e9] rounded-md border-2 border-dotted border-blue-500 text-blue-400 flex justify-center items-center gap-2 p-1 text-sm col-span-5 my-1 cursor-pointer" @click="discountList.push(discountList.length+1)">
                <ISNew />
                <p>Add price range</p>
              </div>
              <div class="text-xs">
                <p>Buy multiple discounts will be hidden when the product is participating in Shock Deal or Promotion Combo</p>
              </div>
            </div>
          </div>
        </div>
        <div class="sale_size_chart flex my-5 text-sm">
          <label>Size Chart image</label>
          <div class="cover_img border-1 border-dashed border-blue-400 rounded-md max-w-19 h-19 flex justify-center items-center hover:bg-blue-50  cursor-pointer" style="background-image:url('/img/product/new.svg');background-repeat:no-repeat; background-position:center">
            <input type="file" name="cover_img" accept="image/png, image/jpeg, image/jpg" class="opacity-0">
          </div>
        </div>
      </form>
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
    <div class="flex justify-end text-md gap-5">
      <button class="inline rounded-md bg-white hover:bg-[#F6F6F6] px-3 py-1.5 text-gray-600 border-1 border-[#e9e9e9] flex items-center gap-1" @click="goBack">
        <IARemove />Cancel
      </button>
      <button class="inline rounded-md bg-[#EE4D2D] hover:bg-[#E54A2B] px-3 py-1.25 text-white border-1 border-[#e9e9e9] flex items-center gap-1">
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
.transport_fields > div:hover, textarea:hover, select:hover, .sale_discounts input:hover{
  border: 1px solid #cccccc;
}

.transport_fields input,
.transport_fields p,
.sale_discounts input{
  padding: 0.25rem;
}
.transport_fields > label,
.sale_infor label{
  width: 20%;
  padding-right: 1rem;
}
/* ******************* SALE ************************ */
.sale_discounts input{
  border: 1px solid #e9e9e9;
  border-radius: 0.3rem;
}
</style>
