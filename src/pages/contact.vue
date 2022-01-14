<route lang="yaml">
meta:
  layout: LContact
</route>

<template>
  <div class="contact-container grid grid-cols-2 gap-15 text-left p-15">
    <div class="left divide-light-700 divide-y">
      <div>
        <h3>
          Contact Us
        </h3>
        <p>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
      </div>
      <div class="single-contact-block">
        <h4><i class="fa fa-fax" /> Address</h4>
        <p>6 Linh Trung, Thu Duc, Ho Chi Minh city – VietNam</p>
      </div>
      <div class="single-contact-block">
        <h4><i class="fa fa-phone" /> Phone</h4>
        <p>
          <a href="tel:0917085937">Mobile: (+84) 917 085 937</a>
        </p>
        <p><a href="tel:0917085937">Hotline: 1009 678 456</a></p>
      </div>
      <div class="single-contact-block">
        <h4><i class="fas fa-envelope" /> Email</h4>
        <p>
          <a href="mailto:ititiu19228@student.hcmiu.edu.vn">ititiu19228@student.hcmiu.edu.vn</a>
        </p>
      </div>
    </div>
    <div class="right">
      <form action="src/php/mail.php" method="post">
        <h3>
          Tell Us Your Message
        </h3>
        <div>
          <label for="fname">Your name *</label><br>
          <input type="text" name="fname" required>
        </div>
        <div>
          <label for="fmail">Your Email *</label><br>
          <input type="text" name="fmail" required>
        </div>
        <div>
          <label for="fsubject">Subject</label><br>
          <input type="text" name="fsubject">
        </div>
        <div>
          <label for="fmessage">Your Message</label><br>
          <input type="text" name="fmessage">
        </div>
        <button type="submit" value="submit" class="bg-black text-white font-semibold py-2 px-7 rounded-md hover:bg-[#E14641] duration-200 uppercase tracking-widest cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
h3{
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 600;
}
h4{
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 500;
}
lable{
    display: inline-block;
}
input{
    border: 1px solid rgb(209, 209, 209);
    outline: none;
    border-radius: 0.25rem;
    width: 90%;
    padding: 0.5rem 1rem;
    transition: 0.2s;
    margin-top: 0.25rem;
}
input:focus{
    box-shadow: 1px 1px 3px rgb(59, 175, 252);
}
.left > div:not(:first-child){
    padding: 1.5rem 0;
}
.left > div > p {
    padding: 0.25rem 0;
}
form > div{
    padding: 0.75rem 0;
}
</style>
