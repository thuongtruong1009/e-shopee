<route lang="yaml">
meta:
  layout: buyer/account/LBPayment
</route>

<template>
  <div class="payment-container border-1 border-solid border-light-700 rounded-md p-5 bg-[#EBF6FC]">
    <div class="border-b-1 border-b-solid border-b-light-700 py-3 font-medium flex items-center gap-1">
      <IBPayment />
      <h3 class="text-2xl">
        Payment method
      </h3>
    </div>
    <p class="saved-message py-5 text-gray-400 text-sm font-medium">
      You not't saved your Payment method yet.
    </p>

    <form action="" method="post">
      <div>
        <label>Full name</label>
        <input type="text" name="accountholder_name" required>
      </div>
      <div>
        <label>Identification number</label>
        <input type="number" name="identification_number" required>
      </div>
      <div>
        <label>Bank name</label>
        <input type="text" name="bank_name" required>
      </div>
      <div>
        <label>Bank branch</label>
        <input type="text" name="bank_branch" required>
      </div>
      <div>
        <label>Card number</label>
        <input type="text" name="account_number" required>
      </div>

      <div class="pt-5 flex justify-end">
        <button type="submit" class="btn bg-black hover:bg-[#F33535] duration-200 flex items-center gap-1 shadow-md shadow-gray-300 font-medium">
          <ISave />Save Changes
        </button>
      </div>
    </form>
  </div>
</template>

<style scoped>
input{
  width: 80%;
  outline: none;
  border: 1px solid rgba(233, 236, 239);
  border-radius: 0.3rem;
  padding: 0.3rem 1rem;
  transition: 0.2s linear;
  font-size: 0.9rem;
}
input:focus{
    box-shadow: 2px 2px 4px rgba(59, 175, 252, 0.8);
}
form > div:not(:last-child){
  padding: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}
</style>
