<route lang="yaml">
meta:
  layout: buyer/LBOrder
</route>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useOrder } from '~/stores/order'
import OrderRequest from '~/services/order-request'

const router = useRouter()
const order = useOrder()
useHead({
  title: `order | ${order.savedOrder}`,
})

onMounted(async() => {
  const { data: orderData } = await OrderRequest.getOrdersById(order.savedOrder)
  order.resultOrder = orderData
})
watchEffect(() => {
  order.setNewOrder(order.savedOrder)
})

</script>

<template>
  <div class="order_detail_view flex p-10">
    <div class="container bg-white rounded-2xl shadow-md shadow-gray-300 w-300 max-w-300 grid grid-cols-2 m-auto p-10 h-max">
      <div>
        <div class="hero-img-container flex justify-center items-center relative">
          <div class="triangle1" />
          <div class="arc inline-block border-1 border-solid border-[#000] rounded-full border-t-transparent border-l-transparent border-b-transparent opacity-40 absolute min-w-50 min-h-50 left-2" style="transform: rotate(40deg);" />
          <div class="pattern" />
          <img src="https://drive.google.com/uc?id=15iXUI6DkRr5Zcp0yH5uF2U47ycr-WzUY" class="hero-img w-1/2">
        </div>
        <div class="text-lg font-medium">
          <h1>Order Page Detail</h1>
        </div>
      </div>

      <div class="grid">
        <div class="order-status-container flex justify-between items-center relative text-sm font-medium">
          <div class="status-item first">
            <div class="status-circle" />
            <p>Processing</p>
          </div>
          <div class="status-item second">
            <div class="status-circle" />
            <p>Ready</p>
          </div>
          <div class="status-item third">
            <div class="status-circle" />
            <p>Shipping</p>
          </div>
          <div class="status-item fourth">
            <div class="status-circle" />
            <p>Delivered</p>
          </div>
          <div class="status-item">
            <div class="status-circle" />
            <p>Cancelled</p>
          </div>
        </div>

        <div class="w-20 h-1 rounded-md bg-[#EAEBFF]" />
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');
.order_detail_view {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    background-color: #CFDBEA;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.hero-img-container::before {
    height: 1.5rem;
    width: 1.5rem;
    background-color: #0268EE;
    position: absolute;
    top: 5%;
    right: 35%;
    content: '';
    border-radius: 50%;
}

.pattern {
  width: 50px;
  height: 50px;
 background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd3aGl0ZScgLz4KICA8Y2lyY2xlIGN4PSc0JyBjeT0nNCcgcj0nNCcgZmlsbD0nYmxhY2snLz4KPC9zdmc+");
  opacity: 0.1;
  position: absolute;
  right: 30px;
  top: 30px;
  transform: scale(1.2);
}

.triangle1 {
  width: 0;
height: 0;
border-style: solid;
border-width: 0 10px 20px 10px;
border-color: transparent transparent #767EEF transparent;
  position: absolute;
  top: 50px;
  left: 5rem;
  transform:rotate(-45deg);
}
.order-status {
  color: #338A9A;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.status-item {
  display:flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: center;
  height: 150px;
  padding-top: 20px;
}

.status-circle {
  height: 1.5rem;
  width: 1.5rem;
  background-color: #665CF5;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  z-index: 5;
  transition: all 0.2s;
  cursor: pointer;
}

.status-circle:hover {
  transform: scale(1.2);
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.first::before {
    content:'';
    height: 4px;
    width: 70px;
    background-color: #5858EF;
    position:absolute;
    z-index:4;
    top: 83px;
    left: 60px;
}

.second::before {
    content:'';
    height: 4px;
    width: 210px;
    background-color: #5858EF;
    position:absolute;
    z-index:4;
    top: 83px;
    left: 100px;
    opacity:0.2;
}
.third::before{
    content:'';
    height: 4px;
    width: 70px;
    background-color: #5858EF;
    position:absolute;
    z-index:4;
    top: 83px;
    left: 260px;
}
</style>
