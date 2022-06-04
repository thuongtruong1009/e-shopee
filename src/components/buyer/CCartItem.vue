<script setup>
import { useCart } from '~/stores/cart'
import { toast } from '~/stores/toast'
import { getResources } from '~/utils/resources'
import CartRequest from '~/services/cart-request'

const { t } = useI18n()
const cart = useCart()
const useToast = toast()

defineProps({
  item: Object,
})

defineEmits(['decrease-quantity', 'change-quantity', 'remove-item'])

const handleUpdate = async() => {
  await CartRequest.updateCart(cart.payload[0])
  useToast.updateToast('success', 'You cart items has been updated!', true)
  await location.reload()
}
const decrease = async(model_id, model_quantity) => {
  await cart.payload.push({
    product_model_id: model_id,
    quantity: model_quantity - 1,
  })
  handleUpdate()
}
const increase = async(model_id, model_quantity) => {
  await cart.payload.push({
    product_model_id: model_id,
    quantity: model_quantity + 1,
  })
  handleUpdate()
}

</script>

<template>
  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
    <td class="p-2">
      <div class="flex items-center">
        <img v-if="item.product.images[0]" :src="getResources(item.product.images[0])" alt="img_preview" class="max-w-35 max-h-35 rounded-md">
        <img v-else src="/img/product/shoes/8.webp" alt="img_preview" class="max-w-40 max-h-40 rounded-md">
      </div>
    </td>
    <th class="p-2 font-medium text-gray-900 dark:text-white max-w-80">
      <span class="whish-title font-semibold">{{ item.product.name }}</span>
    </th>
    <td class="p-2 text-xs text-gray-500">
      <div v-for="(desc, i) in item.product.variations" :key="i">
        <p v-if="i === item.product_model.variation_index[0]">
          {{ desc.options[item.product_model.variation_index[1]] }}
        </p>
      </div>
    </td>
    <th class="p-2 font-medium text-gray-900 dark:text-white max-w-80">
      <span class="whish-list-price font-semibold">
        ${{ item.product_model.price }}
      </span>
    </th>
    <td class="p-2">
      <div class="uppercase flex items-center rounded-md border-1 border-solid border-gray-300 dark:border-gray-500 text-xs w-min">
        <p class="p-1.25 cursor-pointer hover:bg-[#FAFAFA]" :class="{'pointer-events-none': item.quantity<2}" @click="decrease(item.product_model_id, item.quantity)">
          <IBMinus />
        </p>

        <input :value="item.quantity" type="number" min="1" max="50" step="1" class="dark:bg-transparent appearance-none text-center  pointer-events-none border-l-1 border-l-solid border-l-gray-300 border-r-1 border-r-solid border-r-gray-300 font-medium py-1.25 text-black dark:(text-gray-200 border-gray-500)">
        <p class="p-1.25 cursor-pointer hover:bg-[#FAFAFA]" :class="{'pointer-events-none': item.quantity>=item.product_model.stock}" @click="increase(item.product_model_id, item.quantity)">
          <IBPlus />
        </p>
      </div>
    </td>
    <th class="p-2 font-medium text-red-500 dark:text-white max-w-80">
      <span class="whish-title font-semibold">= ${{ item.total_price }}</span>
    </th>
    <td class="p-2">
      <div class="flex justify-center items-center">
        <a href="#" @click="$emit('remove-item', item.product_model_id)"><span class="trash flex justify-center"><ITrash /></span></a>
      </div>
    </td>
  </tr>
</template>
