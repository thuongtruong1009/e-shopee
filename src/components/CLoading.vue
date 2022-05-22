<template>
  <div class="loading_container">
    <section class="animate-pulse">
      <span class="loader-17" />
    </section>
    <!-- <section class="animate-pulse">loading<span class="loader-71" /></section> -->
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Updock&display=swap');
.loading_container {
    padding: 1rem;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    background: #f6f6ff;
}
section {
  width: 20rem;
  height: 20rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ccc;
  cursor: pointer;
}
section:nth-child(1):before{
    content: "e";
    font-family: 'Updock', cursive;
    font-size: 15rem;
    position: absolute;
    top: -10%;
    height: 20%;
    color: orangered;
}
/* section:nth-child(2){
    flex-direction: column;
    gap: 2rem;
} */

.loader-17 {
  width: 17rem;
  height: 17rem;
  border-radius: 50%;
  display: inline-block;
  border-top: 0.5rem solid orangered;
  border-right: 3px solid transparent;
  -webkit-animation: rotation 1s linear infinite;
          animation: rotation 1s linear infinite;
}

@-webkit-keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/* .loader-71 {
  width: 100%;
  height: 4.8px;
  display: inline-block;
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  overflow: hidden;
}
.loader-71::after {
  content: "";
  width: 192px;
  height: 4.8px;
  background: orangered;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: animloader71 2s linear infinite;
          animation: animloader71 2s linear infinite;
}
@-webkit-keyframes animloader71 {
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
}
@keyframes animloader71 {
  0% {
    left: 0;
    transform: translateX(-100%);
  }
  100% {
    left: 100%;
    transform: translateX(0%);
  }
} */
</style>
