<route lang="yaml">
meta:
  layout: buyer/account/LBDashboard
</route>

<template>
  <div class="myaccount-content border-1 border-solid border-light-700 p-6 text-left rounded-lg bg-[#EBF6FC]">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBDashboard />
      <h3 class="text-2xl">
        Dashboard
      </h3>
    </div>
    <div class="welcome py-5">
      <p>
        Hello, <strong>Thuong Truong</strong> (If not <strong>you !</strong><a
          href="/login" class="logout text-red-400"
        > Logout</a>)
      </p>
    </div>
    <p class="text-md font-light">
      From your account dashboard. you can easily check &amp; view your
      recent orders, manage your shipping and billing addresses and edit your
      password and account details.
    </p>

    <form id="app-form" action="">
      <fieldset id="basic-details" class="sub-container">
        <label for="dropdown" class="standard-label">
          Title<span class="required">*</span>
          <br>
          <select id="dropdown" class="standard-select" required>
            <option value="select" disabled selected>Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Miss">Miss</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
            <option value="Prof">Prof</option>
          </select>
        </label>
        <label for="firstname" class="standard-label">
          First Name<span class="required">*</span>
          <input id="firstname" class="standard-input" name="firstname" type="text" placeholder="First name..." required>
        </label>
        <label for="lastname" class="standard-label">
          Last Name<span class="required">*</span>
          <input id="lastname" class="standard-input" name="lastname" type="text" placeholder="Last name..." required>
        </label>
        <label for="phone-number" class="standard-label">
          Phone Number<span class="required">*</span>
          <input id="phone" class="standard-input" type="tel" name="phone" pattern="^\+?\d{10,12}" placeholder="Example: 01925999111" required>
        </label>
        <label for="email-address" class="standard-label">
          Email<span class="required">*</span>
          <input id="email-address" class="standard-input" type="email" placeholder="Your email address..." required>
        </label>
        <label for="DOB" class="standard-label">
          Date of Birth<span class="required">*</span>
          <input id="DOB" class="standard-input" type="date" name="DOB" required>
        </label>
        <label for="accounttype" class="standard-label">
          What type of account are you applying for?<span class="required">*</span>
          <br>
          <select id="account-select" class="standard-select" required>
            <option value="select" disabled selected>Choose Account</option>
            <option value="basic-current">Basic Current Account</option>
            <option value="premium-current">Premium Current Account</option>
            <option value="instant-saver">Instant Access Savings Account</option>
            <option value="lifetime-isa">Lifetime ISA</option>
            <option value="help-to-buy">Help to Buy ISA</option>
          </select>
        </label>
      </fieldset>

      <fieldset id="address-history" class="sub-container">
        <div id="current-address">
          <label for="line1" class="standard-label">
            Address line 1<span class="required">*</span>
            <input class="standard-input" type="text" required>
          </label>
          <label for="line2" class="standard-label">
            Address line 2
            <input class="standard-input" type="text">
          </label>
          <label for="town-city" class="standard-label">
            Town/City<span class="required">*</span>
            <input class="standard-input" type="text" required>
          </label>
          <label for="county" class="standard-label">
            County
            <input class="standard-input" type="text">
          </label>
          <label for="postcode" class="standard-label">
            Post Code<span class="required">*</span>
            <input class="standard-input" type="text" maxlength="8" required>
          </label>
        </div>
      </fieldset>

      <fieldset id="your-consent" class="sub-container">
        <label id="credit-search" class="standard-label" for="credit-search">
          Tick the box below to allow the bank to use the details you have provided to conduct a credit search if necessary.
          <br>
          <input id="credit-click" type="checkbox" name="credit-search"><br>
        </label>
        <label id="info-request" class="standard-label" for="info-request">
          Tick the box below to allow the bank to contact you via email if further information is needed to progress your application.
          <br>
          <input id="info-click" type="checkbox" name="info-request"><br>
        </label>
        <input id="submit-app" type="submit" name="submit" value="Submit Application">
      </fieldset>
    </form>
  </div>
</template>

<style scoped>
.standard-label, .standard-input {
    display: block;
}
.standard-label {
  margin-bottom: 20px;
}
.standard-input, .standard-select{
  outline: none;
}
.standard-input, .standard-select {
  margin-top: 10px;
  border: 3px lightsteelblue solid;
  border-radius: 5px;
  padding: 2px;
}

.standard-input {
  height: 25px;
  width: 250px;
  font-size: 1em;
}

.standard-select {
  height: 32px;
  width: 150px;
  font-size: 1em;
}

#account-select {
  width: 260px;
}

.container {
  width: 70%;
  max-width: 800px;
  margin: 0 auto;
  border: 1px black solid;
  padding: 10px;
  background-color: lightsteelblue;
}

.sub-container {
  padding-left: 10px;
  background-color: white;
  margin: 10px auto;
}

.required {
  font-size: 1em;
  color: red;
}

.small-heading {
  font-size: 18px;
}

.radio-label {
  font-size: 20px;
  margin: 0 40px;
}

.radio-input {
  margin-bottom: 25px;
}

button {
  border: 2px black solid;
  background-color: lightsteelblue;
  border-radius: 5px;
  margin: 0 auto;
  height: 35px;
  width: 150px;
  font-size: 20px;
}
input[type="date"]::-webkit-calendar-picker-indicator {
    color: rgba(0, 0, 0, 0);
    opacity: 1;
    display: block;
    background: url(https://mywildalberta.ca/images/GFX-MWA-Parks-Reservations.png) no-repeat;
    width: 20px;
    height: 20px;
    border-width: thin;
}

#show-address {
  float: right;
}
#non-uk {
  text-align: center;
  font-size: 25px;
  color: red;
}
#get-consent {
  float: right;
}
#submit-app {
  border: 2px black solid;
  background-color: lightsteelblue;
  border-radius: 5px;
  margin: 15px auto;
  height: 35px;
  width: 180px;
  font-size: 20px;
  float: right;
}

input[type="checkbox"] {
  height: 50px;
  width: 30px;
  margin-top: 20px;
  margin-left: 45px;
}

@media screen and (max-width: 1100px) {
  h1 {
    font-size: 24px;
  }

  h2 {
    font-size: 24px;
  }
  .container {
    width: 95%;
  }
}
</style>
