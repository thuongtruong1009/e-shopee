<route lang="yaml">
meta:
  layout: LCart
</route>

<script setup>
useHead({
  title: 'e-shopee | cart',
})
</script>

<template>
  <div class="cart-container text-center">
    <table class="table w-full">
      <thead class="bg-[#F33535] text-white">
        <tr>
          <th>
            Preview
          </th>
          <th>
            Name
          </th>
          <th>
            Status
          </th>
          <th>
            Quantily
          </th>
          <th>
            Price
          </th>
          <th>
            Action
          </th>
          <th>
            Checkout
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(index, i) in 3" :key="i">
          <td>
            <img src="/img/product/2.jpg" alt="img_preview" class="max-w-50 max-h-50">
          </td>
          <td>
            <span class="whish-title">Water and Wind Resistant</span>
          </td>
          <td>
            <span class="badge text-sm bg-red-600 text-white rounded-3xl px-1.5 py-0.5 font-semibold whitespace-nowrap">In Stock</span>
          </td>
          <td>
            <div class="count flex justify-center">
              <input type="number" min="1" max="10" step="1" value="1" class="dark:bg-black">
              <!-- <div class="button-group none lg:block">
                <button class="count-btn increment">
                  <i
                    class="fas fa-chevron-up"
                  />
                </button>
                <button class="count-btn decrement">
                  <i
                    class="fas fa-chevron-down"
                  />
                </button>
              </div> -->
            </div>
          </td>
          <td>
            <span class="whish-list-price">
              $38.24
            </span>
          </td>
          <td>
            <a href="#"><span class="trash"><i class="fas fa-trash-alt" /></span></a>
          </td>
          <td>
            <a href="#" class="btn px-4 py-2 font-semibold">Buy now</a>
          </td>
        </tr>
      </tbody>
    </table>
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
  border-radius: 1em;
  overflow: hidden;
}
th, td {
  padding: 0.5em;
  border-bottom: 1px solid rgb(209, 209, 209);
}
</style>
