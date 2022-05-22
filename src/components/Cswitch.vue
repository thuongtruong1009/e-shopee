<script setup>
import { isDark, toggleDark } from '~/composables'

</script>

<template>
  <div class="switch_container" @click="toggleDark()">
    <input type="checkbox" class="text-[#7a7a7a] checked:text-red-500">
  </div>
</template>

<style scoped>

input[type="checkbox"] {
  width: 2rem;
  height: 2rem;
  -webkit-appearance: none;
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
              10px 10px 15px rgba(70, 70, 70, 0.12);
  border-radius: 50%;
  border: 3px solid #ececec;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
input[type="checkbox"]::after {
  content: url('data:image/svg+xml,%3Csvg xmlns="http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"%3E%3Cpath fill="currentColor" d="M352 159.872V230.4a352 352 0 1 0 320 0v-70.528A416.128 416.128 0 0 1 512 960a416 416 0 0 1-160-800.128z"%2F%3E%3Cpath fill="currentColor" d="M512 64q32 0 32 32v320q0 32-32 32t-32-32V96q0-32 32-32z"%2F%3E%3C%2Fsvg%3E');
  transition: all 50ms ease;
}
input[type="checkbox"]:checked {
  box-shadow: -10px -10px 15px rgba(255, 255, 255, 0.5),
              10px 10px 15px rgba(70, 70, 70, 0.12),
             inset -10px -10px 15px rgba(255, 255, 255, 0.5),
             inset 10px 10px 15px rgba(70, 70, 70, 0.12);
}
input[type="checkbox"]:checked::after {
  color: red;
  filter: drop-shadow(0 0 15px red);
}
</style>
