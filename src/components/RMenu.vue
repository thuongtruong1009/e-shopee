<script setup>
// window.addEventListener('load', () => {
//   const menuToggle = document.querySelector('.menu-toggle')
//   const menuChild = document.querySelectorAll('.has-child > a')
//   menuChild?.forEach(el =>
//     el.addEventListener('click', (e) => {
//       e.preventDefault()
//       const subMenu = e.target?.nextElementSibling?.classList.toggle(
//         'show',
//       )
//     }),
//   )
//   menuToggle?.addEventListener('click', () => {
//     const menu = document.querySelector('.menu')
//     menu.classList.toggle('show')
//   })
// })
import ISetting from '~/components/icons/ISetting.vue'
import IDollar from '~/components/icons/IDollar.vue'
import IAccount from '~/components/icons/IAccount.vue'
import ICheckout from '~/components/icons/ICheckout.vue'
import ILogout from '~/components/icons/ILogout.vue'
const { t } = useI18n()
</script>

<template>
  <nav class="nav">
    <i class="fal fa-bars menu-toggle" />
    <ul class="menu">
      <li class="menu-item has-child flex item-center gap-1">
        <INotify class="mt-0.5" />
        <a href="#" class="menu-link">
          notifications
        </a>
        <ul class="menu-child">
          <li class="menu-child-item has-child p-10 grid justify-center">
            <img src="/img/home/notify_notfound.png" alt="no_notifications" class="w-25 h-25">
            <p class="text-xs text-opacity-60 text-gray-500">Login to see your notifications</p>
          </li>
          <li class="menu-child-item flex justify-center text-white rounded-b-md">
            <a href="/login" class="menu-child-link rounded-b-md bg-gray-100 hover:bg-gray-200">
              Register
            </a>
            <a href="/login" class="menu-child-link rounded-b-md bg-gray-100 hover:bg-gray-200">
              Login
            </a>
          </li>
        </ul>
      </li>
      <li class="menu-item has-child flex item-center gap-1">
        <ISetting />
        <a href="#" class="menu-link">
          {{ t('header.setting') }} <i class="fas fa-chevron-down" />
        </a>
        <ul class="menu-child">
          <li class="menu-child-item has-child">
            <a href="/account" class="menu-child-link">
              {{ t('header.my ccount') }} <IAccount />
            </a>
          </li>
          <li class="menu-child-item">
            <a href="/checkout" class="menu-child-link">
              {{ t('header.checkout') }} <ICheckout />
            </a>
          </li>
          <li class="menu-child-item">
            <a href="/login" class="menu-child-link">
              {{ t('header.sign out') }} <ILogout />
            </a>
          </li>
        </ul>
      </li>
      <li class="menu-item has-child flex items-center gap-1">
        <IDollar />
        <a href="#" class="menu-link">
          {{ t('header.usd') }} <i class="fas fa-chevron-down" />
        </a>
        <ul class="menu-child">
          <li class="menu-child-item has-child">
            <a href="#" class="menu-child-link">
              {{ t('header.euro') }} €
            </a>
          </li>
          <li class="menu-child-item">
            <a href="#" class="menu-child-link">
              {{ t('header.usd') }} $
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* You can remove these code below*/
  :root {
    --primary: #08aeea;
    --secondary: #13D2B8;
    --purple: #bd93f9;
    --pink: #ff6bcb;
    --blue: #8be9fd;
    --gray: #333;
    --font: "Poppins", sans-serif;
    --gradient: linear-gradient(40deg, #ff6ec4, #7873f5);
    --shadow: 0 0 15px 0 rgba(0,0,0,0.05);
  }*{box-sizing:border-box;}input,button,textarea{border:0;outline:none;}

          .menu {
            display: flex;
          }
          .menu-link {
            font-size: 0.9rem;
            /* color: white; */
            display: block;
            transition: 0.2s linear;
          }
          /* .menu-link:hover {
            color: orange;
          } */
          .menu-item {
            position: relative;
          }
          .menu-item:hover{
            color: orange;
            cursor: pointer;
          }
          .menu-link:hover i{
          transform: rotate(180deg);
          }

          .menu-child-link {
            display: flex;
            width: 10rem;
            align-items: center;
            justify-content: space-between;
            padding: 0.5rem 0.75rem;
            color: #918eae;
            border-bottom: 1px dotted rgba(179, 179, 179, 0.3);
          }
          .menu-child-item {
            position: relative;
          }
          .menu-child-link:hover {
            color: #EE4D2D;
          }

          .menu-toggle {
            display: none;
          }
          .nav {
            position: relative;
          }
          .arrow-right {
            display: none;
          }
          @media screen and (min-width: 1024px) {
            .arrow-down {
              display: none;
            }
            .arrow-right {
              display: block;
            }
            .menu-item:not(:first-child) {
              margin-left: 2rem;
            }
            .menu-child {
              position: absolute;
              top: 100%;
              left: 0;
              margin-top: 1rem;
              min-width: 8rem;
              background: white;
              box-shadow: var(--shadow);
              display: none;
              border-radius: 0.5rem;
            }
            .menu-child:before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 1rem;
              background-color: transparent;
              transform: translateY(-100%);
            }
            .menu-item.has-child:hover > .menu-child {
              display: block;
              animation: popdown-animate 0.3s linear;
              z-index: 2;
            }
            @keyframes popdown-animate{
              0%{
                opacity: 0;
                margin-top: 1.5rem;
              }
              100%{
                opacity: 1;
              }
            }
          }
          @media screen and (max-width: 1023px) {
            .menu {
              position: absolute;
              right: 0;
              top: 100%;
              min-width: 20rem;
              background-color: white;
              box-shadow: var(--shadow);
              flex-direction: column;
              display: none;
              z-index: 100;
            }
            .menu.show,
            .menu-child.show {
              display: block;
            }
            .menu-item:not(:last-child) {
              border-bottom: 1px solid #eee;
            }
            .menu-link {
              padding: 1.5rem;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .menu-child {
              display: none;
              background-color: #f6f6f6;
            }
            .menu-child1 {
              background-color: #eee;
            }
            .menu-toggle {
              width: max-content;
              font-size: 2rem;
              display: block;
              margin-left: auto;
              cursor: pointer;
            }
          }
</style>
