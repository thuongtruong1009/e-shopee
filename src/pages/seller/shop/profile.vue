<route lang="yaml">
meta:
  layout: seller/LSDashBoard
</route>

<script setup>
import ShopRequest from '~/services/shop-request'
import { handleError } from '~/helpers/error'
import { useLoading } from '~/stores/loading'
import { useSeller } from '~/stores/seller'
import { handleDate } from '~/utils/date'
const numberShopName = ref('Lamborghini Aventador S')
const numberShopDescription = ref('')

useHead({
  title: 'seller | shop profile',
})
const { t } = useI18n()
const loading = useLoading()
const seller = useSeller()

const payload = reactive({
  slug: '',
  name: '',
  description: '',
  avatar_image: '',
  cover_image: '',
  banners: [],
})

watchOnce(async() => {
  loading.isLoading = true
  await ShopRequest.getShops().then((res) => {
    seller.payget = res.data[0]
    seller.statics = res.data[0].statistic
    loading.isLoading = false
  }).catch((error) => {
    return handleError(error)
  })
})

const handleUpdate = async() => {
  loading.isLoading = true
  await ShopRequest.updateShops(payload).then((res) => {
    loading.isLoading = false
  }).catch((error) => {
    return handleError(error)
  })
}

onMounted(() => {
  $(document).ready(() => {
    $('#fileInput').on('change', function() {
      const files = $(this)[0].files
      uploadFile(files, 0)
    })

    function uploadFile(files, index) {
      const length = files.length
      if (index === length)
        return

      const file = files[index]
      const fileReader = new FileReader()
      fileReader.onload = function() {
        const str = '<div>'
                + '<img class="img-thumbnail js-file-image w-30 max-h-40 rounded-md">'
                + '<span class="js-file-name"></span><br>'
                + '<span class="js-file-size"></span> (Byte)<br>'
                + '</div>'
        $('.js-file-list').append(str)

        const imageSrc = event.target.result
        const fileName = file.name
        const fileSize = file.size

        $('.js-file-name').last().text(fileName)
        $('.js-file-size').last().text(fileSize)
        $('.js-file-image').last().attr('src', imageSrc)

        uploadFile(files, index + 1)
      }
      fileReader.readAsDataURL(file)
    }
  })
})

</script>

<template>
  <div class="bg-white grid shadow-sm shadow-gray-500/50 rounded-2xl">
    <div class="head-profile items-center px-5">
      <div>
        <h1 class="font-bold text-2xl">
          {{ t('shop.profile-information') }}
        </h1>
        <p class="opacity-70 text-sm">
          {{ t('shop.view-update-shop') }}
        </p>
      </div>
    </div>

    <div>
      <div class="head-address flex justify-between px-5 py-3">
        <div>
          <div class="flex gap-5 items-center">
            <h1 class="font-bold text-xl">
              {{ t('shop.address') }}
            </h1>
            <p class="text-green-600 bg-green-100 px-1 text-xs rounded-sm h-min">
              {{ t('shop.default-address') }}
            </p>
          </div>
          <p class="opacity-70 text-sm">
            {{ t('shop.manage-shipping') }}
          </p>
        </div>
        <p class="flex items-center gap-2 bg-red-500 rounded-md text-white h-9 px-3 cursor-pointer hover:bg-red-600 shadow-md shadow-gray-300">
          <IPlus class="text-xs" />{{ t('shop.add-new-address') }}
        </p>
      </div>
      <div class="grid grid-cols-5 p-3">
        <div class="col-span-3 grid grid-cols-5">
          <div class="text-[#00C689] flex justify-center pt-2">
            <ILocation />
          </div>
          <div class="text-sm grid capitalize">
            <p>{{ t('shop.name') }}</p>
            <p>{{ t('shop.phone-number') }}</p>
            <p>{{ t('shop.address') }}</p>
          </div>
          <div class="col-span-3 text-md font-medium grid">
            <p>{{ seller.payget.name }}</p>
            <p>Linh Trung ward, Thu Duc district, Ho Chi Minh city, VietNam</p>
          </div>
        </div>
        <div class="col-span-2 flex justify-between items-start">
          <img v-for="(banner, i) in seller.payget.banners" :key="i" :src="`https://tp-o.tk/api/v2/resources/images/${banner}.jpg`" alt="">
        </div>
      </div>
    </div>

    <form class="grid grid-cols-5 p-5 gap-8">
      <div class="profile-left col-span-2">
        <div>
          <div class="profile-cover h-40 grid grid-cols-3 bg-gray-300 text-white p-4 rounded-t-xl">
            <div class="col-span-1 flex justify-center items-center">
              <img src="/img/seller/shop/sample_avatar.png" alt="sample_avatar" class="max-w-25 max-h-25 rounded-full">
            <!-- <img :src="`https://tp-o.tk/api/v2/resources/images/${seller.payget.avatar_image}.jpg`" alt="sample_avatar" class="max-w-25 max-h-25 rounded-full"> -->
            </div>
            <div class="col-span-2 grid justify-center p-5">
              <p class="text-lg font-medium">
                {{ seller.payget.name }}
              </p>
              <p class="text-sm">
                {{ t('shop.join-at') }} {{ handleDate(seller.payget.created_at) }}
              </p>
              <p class="text-sm capitalize">
                {{ t('shop.id') }}: {{ seller.payget.slug }}
              </p>
            </div>
          </div>
          <div class="bg-[#6B6361] text-center text-white cursor-pointer rounded-b-xl">
            <p>
              {{ t('shop.edit-cover-photo') }}
            </p>
          </div>
        </div>
        <div class="profile-field grid grid-rows-5 divide-1 divide-solid divide-y rounded-xl divide-light-800 border-1 border-solid border-gray-300">
          <div class="flex justify-between items-center p-3">
            <div class="flex items-center capitalize">
              <ICake />
              <p>{{ t('shop.products') }}</p>
            </div>
            <div class="flex items-center">
              <p>{{ seller.statics.all_product_count }}</p>
              <ICaretRight />
            </div>
          </div>
          <div class="flex justify-between items-center p-3">
            <div class="flex items-center">
              <IChat />
              <p>{{ t('shop.response-rate') }}</p>
            </div>
            <div class="flex items-center">
              <p>57%</p>
            </div>
          </div>
          <div class="flex justify-between items-center p-3">
            <div class="flex items-center">
              <ITime />
              <p>{{ t('shop.response-time') }}</p>
            </div>
            <div class="flex items-center">
              <p>{{ t('shop.within-a-few-hours') }}</p>
            </div>
          </div>
          <div class="flex justify-between items-center p-3">
            <div class="flex items-center">
              <IStar />
              <p>{{ t('shop.shop-reviews') }}</p>
            </div>
            <div class="flex items-center">
              <p>{{ seller.statics.average_raiting }}</p>
            </div>
          </div>
          <div class="flex justify-between items-center p-3">
            <div class="flex items-center">
              <INote />
              <p>{{ t('shop.unsuccessful-rate') }}</p>
            </div>
            <div class="flex items-center">
              <p>{{ seller.statics.nonfulfilment_rate }}%</p>
              <ICaretRight />
            </div>
          </div>
        </div>
      </div>
      <div class="profile-right col-span-3">
        <div class="flex gap-3">
          <div class="w-1/3">
            <label for="shop-name">{{ t('shop.shop-id') }}</label>
            <div class="w-full border-1 border-solid border-gray-300 flex items-center my-2 py-1 rounded-md divide-x divide-solid divide-3 divide-gray-300">
              <input id="shop-name" v-model="payload.slug" type="text" name="shop-name" class="w-full outline-none px-2 text-sm text-gray-500" placeholder="Input shop name..." pattern="[A-Za-z0-9]{120}" required>
              <p class="flex justify-around opacity-60 text-xs px-2">
                {{ payload.slug.length }}/10
              </p>
            </div>
          </div>
          <div class="w-2/3">
            <label for="shop-name">{{ t('shop.shop-name') }}</label>
            <div class="w-4/5 border-1 border-solid border-gray-300 flex items-center my-2 py-1 rounded-md divide-x divide-solid divide-3 divide-gray-300">
              <input id="shop-name" v-model="payload.name" type="text" name="shop-name" class="w-full outline-none px-2 text-sm text-gray-500" placeholder="Input shop name..." pattern="[A-Za-z0-9]{120}" required>
              <p class="flex justify-around opacity-60 text-xs px-2">
                {{ payload.name.length }}/30
              </p>
            </div>
          </div>
        </div>

        <!-- <div>
          <label for="shop-preview" class="flex items-center gap-2">{{ t('shop.some-preview') }}<IQuestion /></label>
          <div class="flex justify-between">
            <div
              v-for="i in 4" :key="i" class="imagePreviewWrapper grid justify-center text-center items-center border-1 border-solid border-gray-300 outline-none rounded-md w-30 h-30 opacity-60 my-2 p-5 relative"
            >
              <IPlus class="justify-self-center" />
              <p class="text-xs">
                {{ t('shop.add-photos-videos') }} (0/5)
              </p>
              <input type="file" class="opacity-0 absolute top-1/4 left-0 cursor-pointer" accept="image/jpg, image/jpeg, image/png">
            </div>
          </div>
        </div> -->

        <div>
          <div class="container w-7 max-w-7">
            <input id="fileInput" type="file" class="form-control" multiple>
          </div>
          <div class="container js-file-list grid grid-cols-6 break-words gap-2 text-xs text-gray-500 text-center" />
        </div>

        <div>
          <label for="shop-disciption">{{ t('shop.shop-description') }}</label>
          <textarea id="shop-disciption" v-model="payload.description" name="shop-disciption" class="w-[85%] h-25 border-1 border-solid border-gray-300 outline-none rounded-md my-2 py-1 px-3 text-sm" placeholder="Enter description or information about your shop here...">dd3</textarea>
          <p class="text-right text-xs px-2 text-gray-400">
            {{ payload.description.length }}/500
          </p>
        </div>
      </div>
      <div class="col-span-5 flex justify-center items-center">
        <button type="submit" class="bg-[#E54A2B] text-white rounded-md px-10 py-1.5 my-5 shadow-md shadow-gray-300 flex items-center gap-1" @click="handleUpdate">
          <ISave />Save
        </button>
      </div>
    </form>
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
  cursor: pointer;
}
label{
  font-weight: 500;
}
.imagePreviewWrapper {
  background-size: cover;
    background-position: center center;
}
</style>
