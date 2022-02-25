<route lang="yaml">
meta:
  layout: LCheckout
</route>

<script setup>
useHead({
  title: 'e-shopee | checkout',
})
const isPersonal = ref(true)
const isAddress = ref(false)
const isShipping = ref(false)
const isPayment = ref(false)

const showPersonal = () => {
  isPersonal.value = !isPersonal.value
}
const showAddress = () => {
  isAddress.value = !isAddress.value
}
const showShipping = () => {
  isShipping.value = !isShipping.value
}
const showPayment = () => {
  isPayment.value = !isPayment.value
}
const showPass = () => {
  const x = document.getElementById('Password')
  if (x.type === 'password')
    x.type = 'text'
  else
    x.type = 'password'
}
</script>

<template>
  <div class="checkout-container grid grid-cols-3 gap-5 p-15 dark:text-white">
    <div class="left col-span-2 text-left">
      <div class="personal">
        <h5 @click="showPersonal">
          <i class="fas fa-user-shield" /> Personal Information
        </h5>
        <div v-if="isPersonal === true" class="hide-content">
          <form action="src/php/mail.php">
            <div class="order-asguest mt-2 mb-4">
              <p>Order as a guest &thinsp; &verbar; &thinsp;</p>
              <router-link to="/login" class="hover:text-red-500 hover:opacity-100 opacity-60 duration-200">
                Login
              </router-link>
            </div>
            <div>
              <label>
                Pronoun
              </label>
              <div class="flex">
                <div class="custom-radio mr-10">
                  <input id="test1" type="radio" name="pronoun-radio">
                  <label for="test1">Mr</label>
                </div>
                <div class="custom-radio">
                  <input id="test2" type="radio" name="pronoun-radio">
                  <label for="test2">Mrs</label>
                </div>
              </div>
            </div>

            <div>
              <label for="name">Name *</label>
              <input id="name" type="text" required>
            </div>
            <div>
              <label for="email">Email *</label>
              <input id="email" type="email" required>
            </div>

            <div class="password-personal">
              <label for="Password">Password</label>
              <div class="flex items-center w-76 <xl:w-61 <lg:w-46">
                <input id="Password" type="password" class="w-10/12 outline-none rounded-sm border-1 border-solid border-gray-300 py-1 px-4 duration-200 ease-linear">
                <div class="cursor-pointer px-2 mt-1 ml-0.5 text-white bg-black h-8 rounded-sm" @click="showPass">
                  show
                </div>
              </div>
            </div>

            <div>
              <label for="birthdate">Birthdate</label>
              <input type="date" placeholder="MM/DD/YYYY">
            </div>

            <div class="check-personal">
              <div class="mr-5">
                <input id="20820" type="checkbox">
                <label for="20820">Receive offers from our partners</label>
              </div>
              <div>
                <input id="20821" type="checkbox">
                <label for="20821">Sign up for our newsletter</label>
              </div>
            </div>

            <div class="justify-end">
              <a href="#" class="btn">Continue</a>
            </div>
          </form>
        </div>
      </div>
      <div class="address">
        <h5 @click="showAddress">
          <i class="fas fa-map-marker-alt" /> Address
        </h5>
        <div v-if="isAddress === true" class="hide-content">
          <form action="src/php/mail.php">
            <div class="order-asguest mt-2 mb-4">
              <p>The selected address will be help we to delivery for you more easlier and faster.</p>
            </div>

            <div>
              <label for="address">Address *</label>
              <input id="address" type="text" required>
            </div>

            <div>
              <label for="city">City *</label>
              <input id="city" type="text" required>
            </div>

            <div>
              <label for="birthdate">Zip/Postal Code</label>
              <input type="text">
            </div>

            <div>
              <label for="country">Country</label>
              <select id="country" type="text" name="country" placeholder="--country--">
                <option value="vn">
                  VietNam
                </option>
                <option value="en">
                  England
                </option>
                <option value="us">
                  United-Stated
                </option>
                <option value="fr">
                  France
                </option>
                <option class="italic font-thin text-xs">
                  Don't to find my country.
                </option>
              </select>
            </div>

            <div>
              <label for="phone">Phone</label>
              <input id="phone" type="text">
            </div>

            <div class="justify-end">
              <a href="#" class="btn">Continue</a>
            </div>
          </form>
        </div>
      </div>
      <div class="shipping">
        <h5 @click="showShipping">
          <i class="fas fa-shipping-fast" /> Shipping method
        </h5>
        <div v-if="isShipping === true" class="hide-content">
          <form action="src/php/mail.php">
            <div class="bg-[#F6F6F6] justify-around mt-3 grid grid-cols-3">
              <div class="flex justify-center items-center">
                <input id="delivery" type="radio" name="delivery-radio" required>
              </div>
              <div class="flex justify-around items-center">
                <img src="/img/icon/10.jpg" alt="My carrier">
                <span>Ninja J&T</span>
              </div>
              <div class="flex justify-center items-center">
                <span class="carrier-delay">Delivery next
                  day!</span>
              </div>
              <div class="flex justify-center items-center">
                <span class="carrier-price">$7.00 tax excl.</span>
              </div>
            </div>

            <div class="order-asguest mt-2 mb-4">
              <p>If you would like to add a note about your order, please write it in the field below..</p>
            </div>

            <div>
              <textarea v-model="message" placeholder="write your note..." class="h-20 min-w-full" />
            </div>

            <div class="justify-end">
              <a href="#" class="btn">Continue</a>
            </div>
          </form>
        </div>
      </div>
      <div class="payment">
        <h5 @click="showPayment">
          <i class="far fa-credit-card" /> Payment
        </h5>
        <div v-if="isPayment === true" class="hide-content">
          <form action="src/php/mail.php">
            <div>
              <input id="payment-check" type="radio" name="payment-radio">
              <label for="payment-check">Pay by check</label>
            </div>
            <div>
              <input id="payment-wire" type="radio" name="payment-radio">
              <label for="payment-wire">Pay by bank wire</label>
            </div>
            <div>
              <input id="payment-cash" type="radio" name="payment-radio" checked>
              <label for="payment-cash">Pay by Cash on delivery</label>
            </div>
            <div class="justify-center">
              <a href="#" class="btn">Continue</a>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div class="right col-span-1">
      <div class="table-checkout row-span-1 grid grid-rows-3 divide-light-700 divide-y">
        <div class="items-checkout row-span-1 grid grid-rows-2 py-3">
          <div class="item row-span-1 flex justify-between items-center">
            <p>1 item</p>
            <p class="font-bold tracking-tighter">
              $11.90
            </p>
          </div>
          <div class="shipping row-span-1 flex justify-between items-center">
            <p>Shipping</p>
            <p class="font-bold tracking-tighter">
              $7.00
            </p>
          </div>
        </div>

        <div class="total-checkout row-span-1 grid grid-rows-2 py-3">
          <div class="item row-span-1 flex justify-between items-center">
            <p>Total (Tax Excl.)</p>
            <p class="font-bold tracking-tighter">
              $18.90
            </p>
          </div>
          <div class="shipping row-span-1 flex justify-between items-center">
            <p>Taxes</p>
            <p class="font-bold tracking-tighter">
              $0
            </p>
          </div>
        </div>

        <div class="process flex justify-center items-center">
          <button type="submit" value="submit" class="bg-black text-white font-semibold py-2 px-7 rounded-md hover:bg-[#E14641] duration-200 uppercase tracking-normal cursor-pointer">
            Proceed to checkout
          </button>
        </div>
      </div>
      <div class="commit-checkout row-span-1">
        <div class="flex justify-around items-center tracking-tight py-2 text-sm">
          <i class="fas fa-shield-alt" />
          <p>Security Policy (commit by Reassurance)</p>
        </div>
        <div class="flex justify-around items-center tracking-tight py-2 text-sm">
          <i class="fas fa-truck" />
          <p>Delivery Policy (commit by Reassurance)</p>
        </div>
        <div class="flex justify-around items-center tracking-tight py-2 text-sm">
          <i class="fas fa-exchange-alt" />
          <p>Return Policy (commit by Reassurance)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#more {display: none;}
.left > div,
.right > div{
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid rgb(212, 212, 212);
  border-radius: 8px;
}
h5{
  cursor: pointer;
  text-decoration: underline;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: capitalize;
}
form > div {
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
}
label{
  width: 30%;
}
input[type="radio"],
input[type="checkbox"]{
  margin-right: 0.3rem;
}
input[type="text"],
input[type="email"],
input[type="date"],
select[type="text"],
textarea{
    border: 1px solid rgb(209, 209, 209);
    outline: none;
    border-radius: 0.25rem;
    width: 35%;
    padding: 0.25rem 1rem;
    transition: 0.2s linear;
    margin-top: 0.25rem;
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="date"]:focus,
select[type="text"]:focus,
textarea:focus{
    box-shadow: 1px 1px 3px rgb(59, 175, 252);
}
@media (max-width: 991px){
  .checkout-container{
    grid-template-columns: 100%;
    padding: 4rem 2rem;
  }
  .commit-checkout > div{
    justify-content: space-evenly;
  }
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="date"],
  select[type="text"],
  textarea{
    width: 50%;
  }
  .password-personal > div > input{
    width: 100rem;
  }
}
@media (max-width: 640px){
  .checkout-container{
    padding: 4rem 0.5rem;
  }
  .left{
    margin-right: 1rem;
  }
  .check-personal{
    display: grid;
  }
  .password-personal > div > input{
    max-width: 100%;
  }
}
@media (max-width: 537px){
  .personal > div > form > div:nth-child(2),
  .personal > div > form > div:nth-child(3),
  .personal > div > form > div:nth-child(4),
  .personal > div > form > div:nth-child(5),
  .personal > div > form > div:nth-child(6){
    display: grid;
  }
  .checkout-container{
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
@media (max-width: 379px){
  .password-personal > div > input{
    max-width: 100%;
  }
  input[type="text"],
  input[type="email"],
  input[type="password"],
  input[type="date"],
  select[type="text"],
  textarea{
    width: 62%;
  }
}
</style>
