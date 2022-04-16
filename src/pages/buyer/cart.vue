<route lang="yaml">
meta:
  layout: buyer/LBCart
</route>

<script setup>
useHead({
  title: 'e-shopee | buyer cart',
})
const { t } = useI18n()

const cartList = reactive([{
  img: '/img/product/shoes/1.webp',
  name: 'Water and Wind Resistant',
  inStock: true,
  price: 15,
},
{
  img: '/img/product/shoes/2.webp',
  name: 'Water and Wind Resistant',
  inStock: true,
  price: 15,
},
{
  img: '/img/product/shoes/3.webp',
  name: 'Water and Wind Resistant',
  inStock: false,
  price: 15,
},
{
  img: '/img/product/shoes/4.webp',
  name: 'Water and Wind Resistant',
  inStock: true,
  price: 15,
},
{
  img: '/img/product/shoes/5.webp',
  name: 'Water and Wind Resistant',
  inStock: true,
  price: 15,
},
{
  img: '/img/product/shoes/6.webp',
  name: 'Water and Wind Resistant',
  inStock: true,
  price: 15,
},
{
  img: '/img/product/shoes/7.webp',
  name: 'Water and Wind Resistant',
  inStock: true,
  price: 15,
},
{
  img: '/img/product/shoes/8.webp',
  name: 'Water and Wind Resistant',
  inStock: false,
  price: 38.24,
},
{
  img: '/img/product/shoes/9.webp',
  name: 'Water and Wind Resistant',
  inStock: true,
  price: 15,
},
{
  img: '/img/product/shoes/12.webp',
  name: 'Water and Wind Resistant',
  inStock: true,
  price: 15,
}])
</script>

<template>
  <div class="cart-container text-center">
    <table class="table w-full">
      <thead class="bg-[#F33535] text-white">
        <tr>
          <th class="flex justify-center items-center gap-1">
            👁 {{ t('cart.preview') }}
          </th>
          <th>
            🏷 {{ t('cart.name') }}
          </th>
          <th class="flex justify-center items-center gap-1">
            🎀{{ t('cart.status') }}
          </th>
          <th>
            ⏳ {{ t('cart.quantity') }}
          </th>
          <th>
            📈 {{ t('cart.price') }}
          </th>
          <th>
            🚀 {{ t('cart.action') }}
          </th>
          <th class="flex justify-center items-center gap-1">
            🛒 {{ t('cart.checkout') }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in cartList" :key="i" class="odd:bg-light-50 dark:odd:bg-[#121212]">
          <td>
            <img :src="item.img" alt="img_preview" class="max-w-50 max-h-50">
          </td>
          <td>
            <span class="whish-title">{{ item.name }}</span>
          </td>
          <td>
            <span class="badge text-xs text-white rounded-3xl px-1.5 py-0.5 font-medium whitespace-nowrap" :style="[item.inStock ? {background: '#82CA9C'} : {background: 'red'}]">{{ item.inStock == true ? 'In Stock' : 'Out of Stock' }}</span>
          </td>
          <td>
            <div class="count flex justify-center">
              <input type="number" min="1" max="10" step="1" value="1" class="dark:bg-black">
            </div>
          </td>
          <td>
            x
            <span class="whish-list-price font-semibold">
              ${{ item.price }}
            </span>
          </td>
          <td>
            <a href="#"><span class="trash flex justify-center"><ITrash /></span></a>
          </td>
          <td>
            <a href="#" class="btn bg-black dark:bg-[#0F766E] focus:ring focus:ring-violet-300 px-4 py-2 font-semibold">{{ t('cart.update') }}</a>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-evenly pt-2">
      <div class="promoCode">
        <label for="promo">{{ t('cart.promo-code') }}?</label><input type="text" name="promo" placholder="Enter Code">
        <a href="#" class="btn flex justify-center font-semibold"><ICaretRight /></a>
      </div>
      <div class="subtotal">
        <ul>
          <li class="totalRow">
            <span class="label">{{ t('cart.subtotal') }}</span><span class="value">$35.00</span>
          </li>

          <li class="totalRow">
            <span class="label">{{ t('cart.shipping') }}</span><span class="value">$5.00</span>
          </li>

          <li class="totalRow">
            <span class="label">{{ t('cart.tax') }}</span><span class="value">$4.00</span>
          </li>
          <li class="totalRow final">
            <span class="label">{{ t('cart.total') }}</span><span class="value">$44.00</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center pt-10">
      <router-link to="/buyer/checkout">
        <button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 rounded-3xl text-white py-2 shadow-md shadow-gray-300 px-5 flex justify-end items-center gap-1">
          <ISave />{{ t('cart.checkout') }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
input[type="number"]{
    border: 1px solid rgb(210, 210, 210);
    outline: none;
    border-radius: 0.25rem;
    width: 35%;
    padding: 0.25rem;
    transition: 0.2s linear;
    margin-top: 0.25rem;
}
input[type="number"]:focus{
    box-shadow: 1px 1px 3px rgb(59, 175, 252);
}
table {
  border-collapse: collapse;
  border-radius: 0.6em;
  overflow: hidden;
}
th{
  padding: 0.5em 0;
}
td {
  padding: 0.5em;
  border-bottom: 1px solid rgb(212, 212, 212);
}
/* ********************** BOTTOM CHECKOUT ********************/
.promoCode {
  border: 2px solid #efefef;
  width: 30%;
  padding: 2%;
  border-radius: 0.5rem;
}
.promoCode label {
  display: block;
  width: 100%;
  font-style: italic;
  font-size: 1.15em;
  margin-bottom: 0.5em;
  letter-spacing: -0.025em;
}
.promoCode input {
  width: 85%;
  font-size: 1em;
  padding: 0.5em;
  float: left;
  border: 1px solid #dadada;
}
.promoCode input:active, .promoCode input:focus {
  outline: 0;
}
.promoCode a.btn {
  width: 15%;
  padding: 0.75em 0;
  border-radius: 0 2em 2em 0;
  text-align: center;
  border: 1px solid #82ca9c;
  background: #82CA9C;
}
.promoCode a.btn:hover {
  border: 1px solid #f69679;
  background: #f69679;
}
.subtotal {
  width: 25%;
  border: 2px solid #efefef;
  border-radius: 0.5rem;
}
.subtotal .totalRow {
  padding: 0.5em;
  text-align: right;
}
.subtotal .totalRow.final {
  font-size: 1.25em;
  font-weight: bold;
  text-align: right;
}
.subtotal .totalRow span {
  display: inline-block;
  text-align: right;
}
.subtotal .totalRow .label {
  font-size: 0.85em;
  text-transform: uppercase;
  color: #777;
}
.subtotal .totalRow .value {
  letter-spacing: -0.025em;
  width: 35%;
}
</style>
