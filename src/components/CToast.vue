<script setup>
const toast = ref(true)

</script>

<template>
  <!-- <button @click="toast = !toast">
    Toggle
  </button> -->
  <div class="toast_container">
    <Transition duration="550" name="nested">
      <div v-if="toast">
        <!-- class outer: vertical transition , class inner:horizon transition-->
        <div class="toast-wrapper">
          <div class="toast inner">
            You must enter a value for the todo
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.toast_container {
    position: fixed;
    right: 0;
    top: 50%;
    z-index: 999;
}
.toast {
    padding: 20px;
    color: white;
    background: #ff0062;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    max-width: 400px;
}

.nested-enter-active, .nested-leave-active {
    transition: all 0.3s ease-in-out;
}
.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(3rem);
    opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner {
    transition: all 0.3s ease-in-out;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
    transform: translateX(10rem);
    opacity: 0.001;
}
</style>
