<route lang="yaml">
meta:
  layout: LDetails
</route>

<template>
  <div class="myaccount-content">
    <h3>Account Details</h3>

    <div class="account-details-form">
      <form action="#">
        <div class="row">
          <div class="col-lg-6 col-12 mb-30">
            <input id="first-name" placeholder="First Name" type="text">
          </div>

          <div class="col-lg-6 col-12 mb-30">
            <input id="last-name" placeholder="Last Name" type="text">
          </div>

          <div class="col-12 mb-30">
            <input id="display-name" placeholder="Display Name" type="text">
          </div>

          <div class="col-12 mb-30">
            <input id="email" placeholder="Email Address" type="email">
          </div>

          <div class="col-12 mb-30">
            <h4>Password change</h4>
          </div>

          <div class="col-12 mb-30">
            <input id="current-pwd" placeholder="Current Password" type="password">
          </div>

          <div class="col-lg-6 col-12 mb-30">
            <input id="new-pwd" placeholder="New Password" type="password">
          </div>

          <div class="col-lg-6 col-12 mb-30">
            <input id="confirm-pwd" placeholder="Confirm Password" type="password">
          </div>

          <div class="col-12">
            <button class="btn theme-btn--dark1 btn--md">
              Save
              Changes
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
