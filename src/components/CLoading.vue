<template>
  <div class="loading_container">
    <div class="content">
      <div class="load-wrapp">
        <div class="load-3">
          <div class="line" />
          <div class="line" />
          <div class="line" />
        </div>
      </div>
    </div>
    <div class="clear" />
  </div>
</template>

<style scoped>
.loading_container {
    padding: 5rem;
    width: 100vw;
    height: 100vh;
}

.content {
    padding: 15px;
    overflow: hidden;
    background-color: #e7e7e7;
    background-color: rgba(0, 0, 0, 0.06);
}

.clear {
    clear: both;
}

.load-wrapp {
    float: left;
    width: 100px;
    height: 100px;
    margin: 0 10px 10px 0;
    padding: 20px 20px 20px;
    border-radius: 5px;
    text-align: center;
    background-color: #d8d8d8;
}

.load-wrapp:last-child {
    margin-right: 0;
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
