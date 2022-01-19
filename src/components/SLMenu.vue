<script>
export default {
  data() {
    return {
      isOrderSpaning: true,
      isProdSpaning: true,
    }
  },
  methods: {
    onOpenOrder() {
      if (this.isOrderSpaning === false) this.isOrderSpaning = true
      else if (this.isOrderSpaning === true) this.isOrderSpaning = false
    },
    onOpenProd() {
      if (this.isProdSpaning === false) this.isProdSpaning = true
      else if (this.isProdSpaning === true) this.isProdSpaning = false
    },
  },
}
</script>

<template>
  <div class="seller-lmenu-container">
    <div class="sidenav h-full bg-white dark:bg-black overflow-x-hidden w-52 pt-5">
      <button class="dropdown-btn" @click="onOpenOrder">
        Order Management
        <i class="fa fa-caret-down" :class="{active: isOrderSpaning}" />
      </button>
      <div v-if="isOrderSpaning === true" class="dropdown-container pl-2">
        <a href="seller/order/all">All order</a>
        <a href="#">Order cancel</a>
      </div>
      <button class="dropdown-btn" @click="onOpenProd">
        Production Management
        <i class="fa fa-caret-down" :class="{active: isProdSpaning}" />
      </button>
      <div v-if="isProdSpaning === true" class="dropdown-container pl-2">
        <a href="#">All products</a>
        <a href="#">Add products</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sidenav {
  font-family: "Lato", sans-serif;
}

.sidenav a, .dropdown-btn {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 12px;
  color: #111;
  display: block;
  border: none;
  background: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  outline: none;
}

.fa-caret-down {
  float: right;
  padding-right: 8px;
  transform: rotate(90deg);
  transition: 0.2s;
  transform-style:preserve-3d;
}
.fa-caret-down.active{
    transform: rotate(0deg) translateY(-5px) translateX(5px);
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
