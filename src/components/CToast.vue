<script setup>
import { toast } from '~/stores/toast'

const useToast = toast()

const icons = reactive({
  success: 'fas fa-check-circle text-[#47D864]',
  info: 'fas fa-info-circle text-[#FF623D]',
})

watchEffect(() => {
  if (useToast.status === true) {
    setTimeout(() => {
      useToast.status = false
    }, 3000)
  }
})
</script>

<template>
  <!-- <button @click="toast = !toast">
    Toggle
  </button> -->
  <div class="toast_container">
    <Transition duration="550" name="nested">
      <div v-if="useToast.status">
        <!-- class outer: vertical transition , class inner:horizon transition-->
        <div class="toast-wrapper">
          <div class="toast inner relative text-lg flex items-center gap-3 text-left" :class="useToast.type === 'success' ? 'border-l-[#47D864]' : 'border-l-[#FF623D]'">
            <i :class="useToast.type === 'success' ? icons.success : icons.info" />
            <div>
              <h6 class="capitalize font-medium">
                {{ useToast.type }}!
              </h6>
              <p class="text-xs">
                {{ useToast.msg }}
              </p>
            </div>
            <i class="fas fa-times opacity-50 cursor-pointer" @click="useToast.status = false" />
            <div class="time_out absolute bottom-0 left-0 w-full h-0.5 rounded-t-md bg-green-400" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.toast_container {
    position: fixed;
    right: 0.5rem;
    top: 20%;
    /* top: 10%;
    left: 40%; */
    z-index: 9999;
}
.toast {
    padding: 1rem 1.5rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    max-width: 25rem;
    border-left-width: 0.25rem;
    border-left-style: solid;
}
.time_out{
  animation: toast-animate 3.2s linear;
}
@keyframes toast-animate{
  0% {
    width: 100%;
  }
  100%{
    width: 0%;
  }
}

.nested-enter-active, .nested-leave-active {
    transition: all 0.3s ease-in-out;
}
.nested-leave-active {
    transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
    transform: translateY(-3rem);
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
