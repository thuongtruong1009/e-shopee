<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="container dark:text-white flex justify-center items-center gap-3 pl-5">
    <div class="dropdown">
      <div class="dropdown__select">
        <a href="/buyer/home"><span class="dropdown__selected flex items-center gap-1"><IHome />{{ t('header.home') }}</span></a>
      </div>
    </div>
    <div class="dropdown dark:bg-black">
      <div class="dropdown__select">
        <span class="dropdown__selected flex items-center gap-1"><IPage />{{ t('header.pages') }} <i class="fas fa-chevron-down" /></span>
      </div>
      <ul class="dropdown__list">
        <li class="dropdown__item">
          <a href="/about">
            <span class="dropdown__text">{{ t('menu.about-page') }} <IAbout /></span>
          </a>
        </li>
        <li class="dropdown__item">
          <router-link to="/buyer/cart">
            <span class="dropdown__text">{{ t('menu.b-cart-page') }} <ICart /></span>
          </router-link>
        </li>
        <li class="dropdown__item">
          <router-link to="/buyer/account/orders">
            <span class="dropdown__text">{{ t('menu.b-order-page') }} <IBOrder /></span>
          </router-link>
        </li>
        <li class="dropdown__item">
          <router-link to="/buyer/filter">
            <span class="dropdown__text">{{ t('menu.b-filter-page') }} <IBFilter /></span>
          </router-link>
        </li>
        <li class="dropdown__item">
          <router-link to="/buyer/login">
            <span class="dropdown__text">{{ t('menu.b-login-page') }} <ILogin /></span>
          </router-link>
        </li>
        <li class="dropdown__item">
          <router-link to="/buyer/account/dashboard">
            <span class="dropdown__text">{{ t('menu.b-account-page') }} <IAccount /></span>
          </router-link>
        </li>
        <li class="dropdown__item">
          <router-link to="/buyer/wishlist">
            <span class="dropdown__text">{{ t('menu.b-wishlist-page') }} <IWishList /></span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="dropdown dark:bg-black">
      <div class="dropdown__select">
        <router-link to="/contact">
          <span class="dropdown__selected flex items-center gap-1"><IContact />{{ t('header.contact') }} </span>
        </router-link>
      </div>
    </div>
    <div class="dropdown dark:bg-black">
      <div class="dropdown__select">
        <router-link to="/seller/home">
          <span class="dropdown__selected flex items-center gap-1"><ISell />{{ t('menu.become-seller') }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown__select:hover i{
transform: rotate(180deg);
}
  .dropdown {
    width: fit-content;
    position: relative;
    color: white;
    font-size: 0.75rem;
    font-weight: bold;
    text-transform: uppercase;
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
    border-radius: 0.75rem;
    z-index: 2;
    box-shadow: rgba(128, 128, 128, 0.822) 0px 0px 5px 0.4px;
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
    animation: drop-animate 0.3s ease-in-out;
    transform-origin: top;
  }
  .dropdown__text{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @keyframes drop-animate{
    0%{
      opacity: 0;
      transform: scaleY(0) skew(20deg);
    }100%{
      opacity: 1;
      transform: scaleY(1) skew(0);
    }
  }
  .dropdown__select,
  .dropdown__item {
    width: 100%;
    padding: 0.75rem;
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
    color: #EE4D2D;
    padding-left: 1.5rem;
    padding-right: 0.5rem;
  }
  .dropdown__item:first-child {
    border-radius: 0.75rem 0.75rem 0 0;
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
    border-radius: 0 0 0.75rem 0.75rem;
  }
</style>
