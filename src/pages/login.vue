<route lang="yaml">
meta:
  layout: LLogin
</route>

<script setup>
const userForms = document.getElementById('user_options-forms')

function signUp() {
  userForms.classList.remove('bounceRight')
  userForms.classList.add('bounceLeft')
}
function logIn() {
  userForms.classList.remove('bounceLeft')
  userForms.classList.add('bounceRight')
}
</script>

<template>
  
</template>
