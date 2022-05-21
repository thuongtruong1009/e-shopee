<script setup>
import { useRouter } from 'vue-router'
import AuthRequest from '~/services/auth-request'
import { useLoading } from '~/stores/loading'

const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const loading = useLoading()
const router = useRouter()

onMounted(() => {
  const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a')

  allSideMenu.forEach((item) => {
    const li = item.parentElement

    item.addEventListener('click', () => {
      allSideMenu.forEach((i) => {
        i.parentElement.classList.remove('active')
      })
      li.classList.add('active')
    })
  })

  // TOGGLE SIDEBAR
  const menuBar = document.querySelector('#content nav .bx.bx-menu')
  const sidebar = document.getElementById('sidebar')

  menuBar.addEventListener('click', () => {
    sidebar.classList.toggle('hide')
  })

  const searchButton = document.querySelector('#content nav form .form-input button')
  const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx')
  const searchForm = document.querySelector('#content nav form')

  searchButton.addEventListener('click', (e) => {
    if (window.innerWidth < 576) {
      e.preventDefault()
      searchForm.classList.toggle('show')
      if (searchForm.classList.contains('show'))
        searchButtonIcon.classList.replace('bx-search', 'bx-x')

      else
        searchButtonIcon.classList.replace('bx-x', 'bx-search')
    }
  })

  if (window.innerWidth < 768) {
    sidebar.classList.add('hide')
  }
  else if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace('bx-x', 'bx-search')
    searchForm.classList.remove('show')
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth > 576) {
      searchButtonIcon.classList.replace('bx-x', 'bx-search')
      searchForm.classList.remove('show')
    }
  })
})

const darkMode = () => {
  const switchMode = document.getElementById('switch-mode')
  const seller_dashboard_layout = document.querySelector('.seller_dashboard_layout')
  if (switchMode.checked)
    seller_dashboard_layout.classList.remove('dark')

  else
    seller_dashboard_layout.classList.add('dark')
}

onMounted(() => {
  if (!localStorage.getItem('token'))
    router.push({ path: '/buyer/login' })
})

const signOut = async() => {
  loading.isLoading = true
  await AuthRequest.logoutUser().then(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    loading.isLoading = true
    router.push({ path: '/buyer/login' })
  })
}

</script>

<template>
  <div class="seller_dashboard_layout">
    <!-- SIDEBAR -->
    <section id="sidebar">
      <div class="brand flex items-center px-5 py-10">
        <a href="/seller/home">
          <IBrand />
        </a>
      </div>
      <ul class="side-menu top">
        <li class="active">
          <a href="/seller/home">
            <i class="bx bxs-dashboard" />
            <span class="text">{{ t('menu.s-dashboard') }}</span>
          </a>
        </li>
        <li>
          <a href="/seller/orders/all">
            <i class="bx bxs-shopping-bag-alt" />
            <span class="text">{{ t('menu.s-all-orders') }}</span>
          </a>
        </li>
        <li>
          <a href="/seller/shop/register">
            <i class="bx bxs-doughnut-chart" />
            <span class="text">{{ t('menu.s-order-canceled') }}</span>
          </a>
        </li>
        <li>
          <a href="/seller/product/all">
            <i class="bx bxs-message-dots" />
            <span class="text">{{ t('menu.s-all-products') }}</span>
          </a>
        </li>
        <li>
          <a href="/seller/product/category">
            <i class="bx bxs-cart-add" />
            <span class="text">{{ t('menu.s-add-products') }}</span>
          </a>
        </li>
        <li>
          <a href="/seller/shop/preview">
            <i class="bx bxs-store-alt" />
            <span class="text">{{ t('menu.s-shop-preview') }}</span>
          </a>
        </li>
        <li>
          <a href="/seller/shop/profile">
            <i class="bx bxs-cog" />
            <span class="text">{{ t('menu.s-shop-edit-profile') }}</span>
          </a>
        </li>
        <li>
          <a href="/seller/shop/register">
            <i class="bx bxs-cog" />
            <span class="text">{{ t('menu.s-shop-new-register') }}</span>
          </a>
        </li>
      </ul>
      <ul class="side-menu">
        <li>
          <a href="/admin/login">
            <i class="bx bxs-group" />
            <span class="text">{{ t('menu.s-admin-channel') }}</span>
          </a>
        </li>
        <li @click="signOut">
          <a class="logout">
            <i class="bx bxs-log-out-circle" />
            <span class="text">{{ t('menu.s-sign-out') }}</span>
          </a>
        </li>
      </ul>
    </section>

    <!-- CONTENT -->
    <section id="content">
      <nav>
        <i class="bx bx-menu" />
        <a href="#" class="nav-link">Categories</a>
        <form action="#">
          <div class="form-input">
            <input type="search" placeholder="Search...">
            <button type="submit" class="search-btn">
              <i class="bx bx-search" />
            </button>
          </div>
        </form>
        <a class="icon-btn mx-2.25 hover:bg-[#e9e9e9] dark:hover:bg-gray-600 rounded-full p-1.75" :title="t('button.toggle_langs')" @click="toggleLocales">
          <carbon-language />
        </a>
        <input id="switch-mode" type="checkbox" hidden>
        <label for="switch-mode" class="switch-mode" @click="darkMode" />
        <a href="/seller/notifications" class="notification">
          <i class="bx bxs-bell" />
          <span class="num">8</span>
        </a>
        <a href="#" class="profile">
          <img src="/img/seller/people.png">
        </a>
      </nav>

      <div class="grid justify-center p-10">
        <div class="head-title mb-5">
          <div class="left">
            <ul class="breadcrumb">
              <li>
                <a href="#">{{ t('menu.s-seller') }}</a>
              </li>
              <li><i class="bx bx-chevron-right" /></li>
              <li>
                <a class="active" href="#">Dashboad</a>
              </li>
            </ul>
          </div>
          <a href="#" class="btn-download">
            <i class="bx bxs-cloud-download" />
            <span class="text">Download PDF</span>
          </a>
        </div>
        <router-view />
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Poppins:wght@400;500;600;700&display=swap');

.seller_dashboard_layout.dark {
	--light: #0C0C1E;
	--grey: #060714;
	--dark: #FBFBFB;
}

.seller_dashboard_layout {
	background: var(--grey);
	overflow-x: hidden;
}

/* SIDEBAR */
#sidebar {
	position: fixed;
	top: 0;
	left: 0;
	width: 280px;
	height: 100%;
	background: var(--light);
	z-index: 2000;
	font-family: var(--lato);
	transition: .3s ease;
	overflow-x: hidden;
	scrollbar-width: none;
}
::-webkit-scrollbar-thumb {
  background: transparent;
}
#sidebar.hide {
	width: 60px;
}

#sidebar .side-menu {
	width: 100%;
}
#sidebar .side-menu li {
	height: 48px;
	background: transparent;
	margin-left: 6px;
	border-radius: 48px 0 0 48px;
	padding: 4px;
}
#sidebar .side-menu li.active {
	background: var(--grey);
	position: relative;
}
#sidebar .side-menu li.active::before {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	top: -40px;
	right: 0;
	box-shadow: 20px 20px 0 var(--grey);
	z-index: -1;
}
#sidebar .side-menu li.active::after {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	bottom: -40px;
	right: 0;
	box-shadow: 20px -20px 0 var(--grey);
	z-index: -1;
}
#sidebar .side-menu li a {
	width: 100%;
	height: 100%;
	background: var(--light);
	display: flex;
	align-items: center;
	border-radius: 48px;
	font-size: 16px;
	color: var(--dark);
	white-space: nowrap;
	overflow-x: hidden;
}
#sidebar .side-menu.top li.active a {
	color: var(--blue);
}
#sidebar.hide .side-menu li a {
	width: calc(48px - (4px * 2));
	transition: width .3s ease;
}
#sidebar .side-menu li a.logout {
	color: var(--red);
}
#sidebar .side-menu.top li a:hover {
	color: var(--blue);
}
#sidebar .side-menu li a .bx {
	min-width: calc(60px  - ((4px + 6px) * 2));
	display: flex;
	justify-content: center;
}

/* CONTENT */
#content {
	position: relative;
	width: calc(100% - 280px);
	left: 280px;
	transition: .3s ease;
}
#sidebar.hide ~ #content {
	width: calc(100% - 60px);
	left: 60px;
}

/* NAVBAR */
#content nav {
	height: 56px;
	background: var(--light);
	padding: 0 24px;
	display: flex;
	align-items: center;
	grid-gap: 24px;
	font-family: var(--lato);
	position: sticky;
	top: 0;
	left: 0;
	z-index: 1000;
}
#content nav::before {
	content: '';
	position: absolute;
	width: 40px;
	height: 40px;
	bottom: -40px;
	left: 0;
	border-radius: 50%;
	box-shadow: -20px -20px 0 var(--light);
}
#content nav a {
	color: var(--dark);
}
#content nav .bx.bx-menu {
	cursor: pointer;
	color: var(--dark);
}
#content nav .nav-link {
	font-size: 16px;
	transition: .3s ease;
}
#content nav .nav-link:hover {
	color: var(--blue);
}
#content nav form {
	max-width: 400px;
	width: 100%;
	margin-right: auto;
}
#content nav form .form-input {
	display: flex;
	align-items: center;
	height: 36px;
}
#content nav form .form-input input {
	flex-grow: 1;
	padding: 0 16px;
	height: 100%;
	border: none;
	background: var(--grey);
	border-radius: 36px 0 0 36px;
	outline: none;
	width: 100%;
	color: var(--dark);
}
#content nav form .form-input button {
	width: 36px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: var(--blue);
	color: var(--light);
	font-size: 18px;
	border: none;
	outline: none;
	border-radius: 0 36px 36px 0;
	cursor: pointer;
}
#content nav .notification {
	font-size: 20px;
	position: relative;
}
#content nav .notification .num {
	position: absolute;
	top: -6px;
	right: -6px;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 2px solid var(--light);
	background: var(--red);
	color: var(--light);
	font-weight: 700;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
}
#content nav .profile img {
	width: 36px;
	height: 36px;
	object-fit: cover;
	border-radius: 50%;
}
#content nav .switch-mode {
	display: block;
	min-width: 50px;
	height: 25px;
	border-radius: 25px;
	background: var(--grey);
	cursor: pointer;
	position: relative;
}
#content nav .switch-mode::before {
	content: '';
	position: absolute;
	top: 2px;
	left: 2px;
	bottom: 2px;
	width: calc(25px - 4px);
	background: var(--blue);
	border-radius: 50%;
	transition: all .3s ease;
}
#content nav #switch-mode:checked + .switch-mode::before {
	left: calc(100% - (25px - 4px) - 2px);
}
 .head-title {
display: flex;
align-items: center;
justify-content: space-between;
grid-gap: 16px;
flex-wrap: wrap;
}
 .head-title .left h1 {
font-size: 36px;
font-weight: 600;
margin-bottom: 10px;
color: var(--dark);
}
 .head-title .left .breadcrumb {
display: flex;
align-items: center;
grid-gap: 16px;
}
 .head-title .left .breadcrumb li {
color: var(--dark);
}
 .head-title .left .breadcrumb li a {
color: var(--dark-grey);
pointer-events: none;
}
 .head-title .left .breadcrumb li a.active {
color: var(--blue);
pointer-events: unset;
}
 .head-title .btn-download {
height: 36px;
padding: 0 16px;
border-radius: 36px;
background: var(--blue);
color: var(--light);
display: flex;
justify-content: center;
align-items: center;
grid-gap: 10px;
font-weight: 500;
}

@media screen and (max-width: 768px) {
	#sidebar {
		width: 200px;
	}

	#content {
		width: calc(100% - 60px);
		left: 200px;
	}

	#content nav .nav-link {
		display: none;
	}
}

@media screen and (max-width: 576px) {
	#content nav form .form-input input {
		display: none;
	}

	#content nav form .form-input button {
		width: auto;
		height: auto;
		background: transparent;
		border-radius: none;
		color: var(--dark);
	}

	#content nav form.show .form-input input {
		display: block;
		width: 100%;
	}
	#content nav form.show .form-input button {
		width: 36px;
		height: 100%;
		border-radius: 0 36px 36px 0;
		color: var(--light);
		background: var(--red);
	}

	#content nav form.show ~ .notification,
	#content nav form.show ~ .profile {
		display: none;
	}
}
</style>
