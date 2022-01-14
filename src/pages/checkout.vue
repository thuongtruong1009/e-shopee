<route lang="yaml">
meta:
  layout: LCheckout
</route>

<script>
export default {
  data() {
    return {
      isShowing: false,
    }
  },
  methods: {
    showMore() {
      if (this.isShowing === false) this.isShowing = true
      else if (this.isShowing === true) this.isShowing = false
    },
    showPass() {
      const x = document.getElementById('Password')
      if (x.type === 'password')
        x.type = 'text'

      else
        x.type = 'password'
    },
  },
}
</script>

<template>
  <div class="checkout-container grid grid-cols-3 gap-5 p-15 dark:text-white">
    <div class="left col-span-2 text-left">
      <div class="address">
        <h5 @click="showMore">
          1 Personal Information
        </h5>
        <div v-if="isShowing === true" class="hide-content">
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
              <label for="lastname">Name *</label>
              <input id="lastname" type="text" required>
            </div>
            <div>
              <label for="email">Email *</label>
              <input id="email" type="email" required>
            </div>

            <div>
              <label for="Password">Password</label>
              <input id="Password" type="password" class="max-w-7/24">
              <div class="cursor-pointer flex items-center px-2 mt-1 ml-0.5 text-white bg-black h-8 rounded-sm" @click="showPass">
                show
              </div>
            </div>

            <div>
              <label for="birthdate">Birthdate</label>
              <input id="birthdate" type="text" placeholder="MM/DD/YYYY">
            </div>

            <div>
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
        <h5>2 Address</h5>
      </div>
      <div class="shipping">
        <h5>3 Shipping method</h5>
      </div>
      <div class="payment">
        <h5>4 Payment</h5>
      </div>
    </div>
    <div class="right col-span-1">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scel<span id="dots">...</span><span id="more">erisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span></p>
      <button id="myBtn" @click="myFunction">
        Read more
      </button>
    </div>
  </div>
</template>

<style scoped>
#more {display: none;}
.left > div{
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
  padding: 0.5rem 0;
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
input[type="password"]{
    border: 1px solid rgb(209, 209, 209);
    outline: none;
    border-radius: 0.25rem;
    width: 35%;
    padding: 0.25rem 1rem;
    transition: 0.2s;
    margin-top: 0.25rem;
}
input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus{
    box-shadow: 1px 1px 3px rgb(59, 175, 252);
}
</style>
