<route lang="yaml">
meta:
  layout: buyer/account/LBDetails
</route>

<template>
  <div class="myaccount-content border-1 border-solid border-light-700 rounded-md p-5 bg-[#EBF6FC]">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBAccount />
      <h3 class="text-2xl">
        Account details
      </h3>
    </div>

    <div class="account-details-form">
      <form action="">
        <div class="">
          <input id="full-name" placeholder="Full Name" type="text">
          <input id="user-name" placeholder="User Name" type="text" required>
        </div>

        <div class="">
          <input id="email" placeholder="Email Address" type="email" required>
        </div>

        <div class="text-md font-medium">
          <h4>Password change</h4>
        </div>

        <div class="">
          <input id="current-pwd" placeholder="Current Password" type="password" required>
        </div>

        <div class="">
          <input id="new-password" placeholder="New Password" type="password" required>
          <input id="confirm-password" placeholder="Confirm Password" type="password" required>
        </div>

        <div class="pt-5">
          <button class="btn bg-black hover:bg-[#F33535] duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium">
            <ISave />Save Changes
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
input{
  width: 100%;
  border: 1px solid rgba(233, 236, 239);
  border-radius: 0.3rem;
  padding: 0.3rem 1rem;
  transition: 0.2s linear;
  font-size: 0.9rem;
}
input:focus{
    box-shadow: 2px 2px 4px rgba(59, 175, 252, 0.8);
}
form > div{
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
</style>
