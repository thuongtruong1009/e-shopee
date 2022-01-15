<script setup lang="ts">
const { t } = useI18n()
</script>
<template>
  <div class="container dark:text-white">
    <div class="dropdown">
      <div class="dropdown__select">
        <span class="dropdown__selected">{{ t('header.home') }}</span>
      </div>
    </div>
    <div class="dropdown dark:bg-black">
      <div class="dropdown__select">
        <span class="dropdown__selected">{{ t('header.shop') }} <i class="fas fa-chevron-down" /></span>
      </div>
      <ul class="dropdown__list">
        <li class="dropdown__item">
          <span class="dropdown__text">About Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Checkout Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Compare Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Login  Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Account Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Wishlist Page</span>
        </li>
      </ul>
    </div>
    <div class="dropdown dark:bg-black">
      <div class="dropdown__select">
        <span class="dropdown__selected">{{ t('header.pages') }} <i class="fas fa-chevron-down" /></span>
      </div>
      <ul class="dropdown__list">
        <li class="dropdown__item">
          <span class="dropdown__text">About Page</span>
        </li>
        <li class="dropdown__item">
          <router-link to="/checkout">
            <span class="dropdown__text">Checkout Page</span>
          </router-link>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Compare Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Login  Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Account Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Wishlist Page</span>
        </li>
      </ul>
    </div>
    <div class="dropdown dark:bg-black">
      <div class="dropdown__select">
        <span class="dropdown__selected">{{ t('header.blog') }} <i class="fas fa-chevron-down" /></span>
      </div>
      <ul class="dropdown__list">
        <li class="dropdown__item">
          <span class="dropdown__text">About Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Checkout Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Compare Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Login  Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Account Page</span>
        </li>
        <li class="dropdown__item">
          <span class="dropdown__text">Wishlist Page</span>
        </li>
      </ul>
    </div>
    <div class="dropdown dark:bg-black">
      <div class="dropdown__select">
        <router-link to="/contact">
          <span class="dropdown__selected">{{ t('header.contact us') }} </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown__select{
  transition: 1s linear;
}
.dropdown__select:hover i{
transform: rotate(180deg);
}
.container{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
}
          .dropdown {
            width: 10%;
            position: relative;
            color: white;
            font-size: 0.75rem;
            font-weight: bold;
            text-transform: uppercase;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: 1.5rem;
          }
          .dropdown__list {
            margin-top: 1.2rem;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            display: none;
            width: fit-content;
            z-index: 2;
            box-shadow: rgba(128, 128, 128, 0.822) 0px 0px 5px 0.4px;
            /* height: 300%; */
          }
          .dropdown__list:before {
            content: "";
            height: 2.5rem;
            position: absolute;
            left: 0;
            right: 0;
            background-color: transparent;
            transform: translateY(-100%);
          }
          .dropdown:hover .dropdown__list {
            display: block;
            animation: drop-animate 0.3s linear;
            transform-origin: top;
          }
          @keyframes drop-animate{
            0%{
              opacity: 0;
              transform: scaleY(0);
            }100%{
              opacity: 1;
              transform: scaleY(1);
            }
          }
          .dropdown__select,
          .dropdown__item {
            width: 100%;
            padding: 0.75rem;
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: space-between;
            cursor: pointer;
            transition: 0.3s;
            white-space: nowrap;
          }
          .dropdown__item {
            transition: background-color 0.2s linear;
            display: inline-block;
            text-align: start;
            padding: 0.5rem 1rem;
            font-weight: lighter;
            color: black;
            background: white;
            border-bottom: 1px dotted rgba(179, 179, 179, 0.3);
            transition: 0.3s;
            margin-right: 3rem;
          }
          .dropdown__select:hover{
            color: orange;
          }
          .dropdown__item:hover{
            color: orange;
            padding-left: 1.5rem;
            padding-right: 0.5rem;
          }
          .dropdown__item:first-child {
            border-radius: 4px 4px 0 0;
            position: relative;
          }
          .dropdown__item:first-child:before {
            content: "";
            position: absolute;
            top: 0;
            left: 2rem;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            border-bottom: 10px solid white;
            transform: translateY(-100%);
            transition: border-color 0.2s linear;
          }
          .dropdown__item:first-child:hover:before {
            border-bottom-color: white;
          }
          .dropdown__item:last-child {
            border-radius: 0 0 4px 4px;
          }
</style>
