<template>
  <div class="loading_container">
    <div class="load-wrapp">
      <div class="load-3">
        <div class="line" />
        <div class="line" />
        <div class="line" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.loading_container {
    padding: 5rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    overflow: hidden;
    /* background: #7a7a7a59 10%; */
    background: white;
}
.load-wrapp {
    width: 100px;
    height: 100px;
    padding: 20px 20px 20px;
    border-radius: 1.5rem;
    text-align: center;
    background-color: #d8d8d8;
}
.line {
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: #4b9cdb;
}
.load-3 .line:nth-last-child(1) {
    animation: loadingC 0.6s 0.1s linear infinite;
}
.load-3 .line:nth-last-child(2) {
    animation: loadingC 0.6s 0.2s linear infinite;
}
.load-3 .line:nth-last-child(3) {
    animation: loadingC 0.6s 0.3s linear infinite;
}
@keyframes loadingC {
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(0, 15px);
    }
    100% {
        transform: translate(0, 0);
    }
}
</style>
