<script setup>
const { t } = useI18n()
</script>

<template>
  <div class="loading_container">
    <div class="mb-5 flex justify-center items-center gap-5">
      <h1 class="text-2xl animate-pulse duration-500 text-gray-500 ">
        {{ t('cloading.loading') }}...
      </h1>
      <div class="wrapper">
        <div class="spinner spinner5" />
      </div>
    </div>
    <div class="wrap">
      <div class="grid slide">
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
        <div class="cell" />
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  function draw() {
    const cellClass = Array.from({ length: 20 }, (x, i) => `class${i}`)
    $('.wrap .grid').addClass('slide')
    setTimeout(() => {
      $('.grid .cell').removeClass(cellClass)
      $('.wrap .grid').removeClass('slide')
      $('.grid .cell').each(function() {
        $(this).addClass(`class${Math.floor(Math.random() * 11 + 1)}`)
      })
      $('.grid .cell').each(function() {
        $(this)
          .get(0)
          .style.setProperty('--size', Math.floor(Math.random() * 2 + 1))

        $(this)
          .get(0)
          .style.setProperty(
            '--height',
            `${Math.floor(Math.random() * 50) * 5}px`,
          )

        $(this)
          .get(0)
          .style.setProperty(
            '--angle',
            `${Math.floor(Math.random() * 4) * 90}deg`,
          )

        $(this)
          .get(0)
          .style.setProperty(
            '--shift',
            `${(Math.floor(Math.random() * 150) - 50) * 2.5}px`,
          )
      })
    }, 1600)
  }

  $(() => {
    draw()
    $('').on('click', () => {
      draw()
    })
  })

  setInterval(draw, 5000)
})
</script>

<style scoped>
/* ************** HORINZON *********** */

.wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  height: 10rem;
  /* margin: 1rem 1rem 0; */
  padding-top: 2.8rem;
  background: rgba(255, 255, 255, 0.2);
}

.spinner {
  width: 4rem;
  height: 4rem;
}
.spinner.spinner5 {
  margin-top: 2rem;
  overflow: hidden;
  position: relative;
  height: 0.5rem;
  background: rgba(255, 255, 255, 0.25);
}
.spinner.spinner5::before {
  content: "";
  position: absolute;
  left: -130%;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.5);
  -webkit-animation: progress 1s linear infinite;
          animation: progress 1s linear infinite;
}
@-webkit-keyframes progress {
  0% {
    left: -130%;
    background: rgba(0, 0, 0, 0.5);
  }
  50% {
    left: 130%;
    background: rgba(0, 0, 0, 0.5);
  }
  51% {
    background: rgba(255, 255, 255, 0.5);
  }
  100% {
    background: rgba(255, 255, 255, 0.5);
  }
}
@keyframes progress {
  0% {
    left: -130%;
    background: rgba(0, 0, 0, 0.5);
  }
  50% {
    left: 130%;
    background: rgba(0, 0, 0, 0.5);
  }
  51% {
    background: rgba(255, 255, 255, 0.5);
  }
  100% {
    background: rgba(255, 255, 255, 0.5);
  }
}
/* *************** CITY *************** */
.loading_container {
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  --height: 20px;
  --color1: #fff;
  --color2:#fff;
  --delay:0s;
  perspective: 2000px;
  padding-top: 5rem;
}
.loading_container * {
  transform-style: preserve-3d;
}
.loading_container *:before, .loading_container *:after {
  transform-style: preserve-3d;
}
.loading_container .wrap {
  width: 600px;
  min-width: 600px;
  height: 600px;
  position: relative;
  transform: translateY(75px) translateX(-25px) rotateX(75deg);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
 .wrap .grid {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  display: grid;
  grid-template-columns: repeat(8, 10%);
  grid-template-rows: repeat(8, 10%);
  transform: rotate(-135deg);
  box-shadow: 0 0 0 100vw #fff, inset 0 0 0 100vw #fff;
}
 .wrap .grid:before {
  content: "";
  position: absolute;
  width: 100vw;
  height: 50vw;
  background: #fff;
  top: 100%;
  right: 0;
  transform-origin: top;
  transform: rotateX(90.005deg);
  display: none;
}
 .wrap .grid.slide .cell {
  transform: translateZ(0) !important;
  transition-delay: 0s;
  background: #fff;
  box-shadow: inset 0 0 0 1px #fff;
}
 .wrap .grid .cell {
  box-shadow: inherit;
  transform: scale(0.75) translateY(calc(-100% - var(--shift))) translateX(calc(-100% + var(--shift))) translateZ(var(--height));
  background: #f1f1f1;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  transition: 0.6s ease-in-out;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
  grid-row-end: span var(--size);
  grid-column-end: span var(--size);
  will-change: transform;
  min-height: 75px;
}
 .wrap .grid .cell:nth-of-type(1) {
  transition-delay: 0.0166666667s;
}
 .wrap .grid .cell:nth-of-type(2) {
  transition-delay: 0.0333333333s;
}
 .wrap .grid .cell:nth-of-type(3) {
  transition-delay: 0.05s;
}
 .wrap .grid .cell:nth-of-type(4) {
  transition-delay: 0.0666666667s;
}
 .wrap .grid .cell:nth-of-type(5) {
  transition-delay: 0.0833333333s;
}
 .wrap .grid .cell:nth-of-type(6) {
  transition-delay: 0.1s;
}
 .wrap .grid .cell:nth-of-type(7) {
  transition-delay: 0.1166666667s;
}
 .wrap .grid .cell:nth-of-type(8) {
  transition-delay: 0.1333333333s;
}
 .wrap .grid .cell:nth-of-type(9) {
  transition-delay: 0.15s;
}
 .wrap .grid .cell:nth-of-type(10) {
  transition-delay: 0.1666666667s;
}
 .wrap .grid .cell:nth-of-type(11) {
  transition-delay: 0.1833333333s;
}
 .wrap .grid .cell:nth-of-type(12) {
  transition-delay: 0.2s;
}
 .wrap .grid .cell:nth-of-type(13) {
  transition-delay: 0.2166666667s;
}
 .wrap .grid .cell:nth-of-type(14) {
  transition-delay: 0.2333333333s;
}
 .wrap .grid .cell:nth-of-type(15) {
  transition-delay: 0.25s;
}
 .wrap .grid .cell:nth-of-type(16) {
  transition-delay: 0.2666666667s;
}
 .wrap .grid .cell:nth-of-type(17) {
  transition-delay: 0.2833333333s;
}
 .wrap .grid .cell:nth-of-type(18) {
  transition-delay: 0.3s;
}
 .wrap .grid .cell:nth-of-type(19) {
  transition-delay: 0.3166666667s;
}
 .wrap .grid .cell:nth-of-type(20) {
  transition-delay: 0.3333333333s;
}
 .wrap .grid .cell:nth-of-type(21) {
  transition-delay: 0.35s;
}
 .wrap .grid .cell:nth-of-type(22) {
  transition-delay: 0.3666666667s;
}
 .wrap .grid .cell:nth-of-type(23) {
  transition-delay: 0.3833333333s;
}
 .wrap .grid .cell:nth-of-type(24) {
  transition-delay: 0.4s;
}
 .wrap .grid .cell:nth-of-type(25) {
  transition-delay: 0.4166666667s;
}
 .wrap .grid .cell:nth-of-type(26) {
  transition-delay: 0.4333333333s;
}
 .wrap .grid .cell:nth-of-type(27) {
  transition-delay: 0.45s;
}
 .wrap .grid .cell:nth-of-type(28) {
  transition-delay: 0.4666666667s;
}
 .wrap .grid .cell:nth-of-type(29) {
  transition-delay: 0.4833333333s;
}
 .wrap .grid .cell:nth-of-type(30) {
  transition-delay: 0.5s;
}
 .wrap .grid .cell:nth-of-type(31) {
  transition-delay: 0.5166666667s;
}
 .wrap .grid .cell:nth-of-type(32) {
  transition-delay: 0.5333333333s;
}
 .wrap .grid .cell:nth-of-type(33) {
  transition-delay: 0.55s;
}
 .wrap .grid .cell:nth-of-type(34) {
  transition-delay: 0.5666666667s;
}
 .wrap .grid .cell:nth-of-type(35) {
  transition-delay: 0.5833333333s;
}
 .wrap .grid .cell:nth-of-type(36) {
  transition-delay: 0.6s;
}
 .wrap .grid .cell:nth-of-type(37) {
  transition-delay: 0.6166666667s;
}
 .wrap .grid .cell:nth-of-type(38) {
  transition-delay: 0.6333333333s;
}
 .wrap .grid .cell:nth-of-type(39) {
  transition-delay: 0.65s;
}
 .wrap .grid .cell:nth-of-type(40) {
  transition-delay: 0.6666666667s;
}
 .wrap .grid .cell:nth-of-type(41) {
  transition-delay: 0.6833333333s;
}
 .wrap .grid .cell:nth-of-type(42) {
  transition-delay: 0.7s;
}
 .wrap .grid .cell:nth-of-type(43) {
  transition-delay: 0.7166666667s;
}
 .wrap .grid .cell:nth-of-type(44) {
  transition-delay: 0.7333333333s;
}
 .wrap .grid .cell:nth-of-type(45) {
  transition-delay: 0.75s;
}
 .wrap .grid .cell:nth-of-type(46) {
  transition-delay: 0.7666666667s;
}
 .wrap .grid .cell:nth-of-type(47) {
  transition-delay: 0.7833333333s;
}
 .wrap .grid .cell:nth-of-type(48) {
  transition-delay: 0.8s;
}
 .wrap .grid .cell:nth-of-type(49) {
  transition-delay: 0.8166666667s;
}
 .wrap .grid .cell:nth-of-type(50) {
  transition-delay: 0.8333333333s;
}
 .wrap .grid .cell:nth-of-type(51) {
  transition-delay: 0.85s;
}
 .wrap .grid .cell:nth-of-type(52) {
  transition-delay: 0.8666666667s;
}
 .wrap .grid .cell:nth-of-type(53) {
  transition-delay: 0.8833333333s;
}
 .wrap .grid .cell:nth-of-type(54) {
  transition-delay: 0.9s;
}
 .wrap .grid .cell:nth-of-type(55) {
  transition-delay: 0.9166666667s;
}
 .wrap .grid .cell:nth-of-type(56) {
  transition-delay: 0.9333333333s;
}
 .wrap .grid .cell:nth-of-type(57) {
  transition-delay: 0.95s;
}
 .wrap .grid .cell:nth-of-type(58) {
  transition-delay: 0.9666666667s;
}
 .wrap .grid .cell:nth-of-type(59) {
  transition-delay: 0.9833333333s;
}
 .wrap .grid .cell:nth-of-type(60) {
  transition-delay: 1s;
}
 .wrap .grid .cell:nth-of-type(61) {
  transition-delay: 1.0166666667s;
}
 .wrap .grid .cell:nth-of-type(62) {
  transition-delay: 1.0333333333s;
}
 .wrap .grid .cell:nth-of-type(63) {
  transition-delay: 1.05s;
}
 .wrap .grid .cell:nth-of-type(64) {
  transition-delay: 1.0666666667s;
}
 .wrap .grid .cell.class11 {
  transform: scale(0.75) translateY(calc(-100% - var(--shift))) translateX(calc(-100% + var(--shift))) translateZ(calc(var(--height) * 2));
}
 .wrap .grid .cell.class11:before {
  height: calc(var(--height) * 2);
}
 .wrap .grid .cell.class11:after {
  width: calc(var(--height) * 2);
  left: calc(var(--height) * -2);
}
 .wrap .grid .cell.class1:before,  .wrap .grid .cell.class4:before,  .wrap .grid .cell.class8:before {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15), inset 0 0 0 15px #efefef;
  background: repeating-linear-gradient(to bottom, #efefef, #efefef 5px, rgba(255, 255, 255, 0.0001) 5px, rgba(255, 255, 255, 0.0001) 15px, #efefef 15px, #efefef 20px), repeating-linear-gradient(to right, #efefef, #efefef 5px, rgba(255, 255, 255, 0.0001) 5px, rgba(255, 255, 255, 0.0001) 15px, #efefef 15px, #efefef 20px), #ccc;
  background-position: 50% 10px;
}
 .wrap .grid .cell.class1:after,  .wrap .grid .cell.class4:after,  .wrap .grid .cell.class8:after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15), inset 0 0 0 15px #fff;
  background: repeating-linear-gradient(to bottom, #fff, #fff 5px, rgba(255, 255, 255, 0.0001) 5px, rgba(255, 255, 255, 0.0001) 15px, #fff 15px, #fff 20px), repeating-linear-gradient(to left, #fff, #fff 5px, rgba(255, 255, 255, 0.0001) 5px, rgba(255, 255, 255, 0.0001) 15px, #fff 15px, #fff 20px), #cecece;
  background-position: 20px 50%;
}
 .wrap .grid .cell.class2:before,  .wrap .grid .cell.class5:before,  .wrap .grid .cell.class7:before {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15), inset 0 0 0 15px #efefef;
  background: repeating-linear-gradient(to bottom, #efefef, #efefef 2px, rgba(255, 255, 255, 0.0001) 2px, rgba(255, 255, 255, 0.0001) 4px, #efefef 4px, #efefef 6px), #ccc;
}
 .wrap .grid .cell.class2:after,  .wrap .grid .cell.class5:after,  .wrap .grid .cell.class7:after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15), inset 0 0 0 15px #fff;
  background: repeating-linear-gradient(to right, #fff, #fff 2px, rgba(255, 255, 255, 0.0001) 2px, rgba(255, 255, 255, 0.0001) 4px, #fff 4px, #fff 6px), #cecece;
}
 .wrap .grid .cell.class9:before,  .wrap .grid .cell.class6:before {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15), inset 0 0 0 15px #efefef;
  background: repeating-linear-gradient(to right, #efefef, #efefef 2px, rgba(255, 255, 255, 0.0001) 2px, rgba(255, 255, 255, 0.0001) 8px, #efefef 8px, #efefef 10px), #ccc;
}
 .wrap .grid .cell.class9:after,  .wrap .grid .cell.class6:after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15), inset 0 0 0 15px #fff;
  background: repeating-linear-gradient(to bottom, #fff, #fff 2px, rgba(255, 255, 255, 0.0001) 2px, rgba(255, 255, 255, 0.0001) 8px, #fff 8px, #fff 10px), #cecece;
}
 .wrap .grid .cell.class10:after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
  background: radial-gradient(circle at left, #ccc, #ccc 10px, rgba(255, 255, 255, 0.0001) 10px), linear-gradient(to bottom, #fff calc(50% - 10px), #ccc calc(50% - 10px), #ccc calc(50% + 10px), #fff calc(50% + 10px)), #fff;
  background-position: 15px 50%, 0% 0%, 50%;
  background-size: 100% 100%, 15px 100%, 100%;
  background-repeat: no-repeat;
}
 .wrap .grid .cell.class3:before {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15), inset 0 0 0 15px #efefef;
  background: repeating-linear-gradient(to bottom, #efefef, #efefef 5px, rgba(255, 255, 255, 0.0001) 5px, rgba(255, 255, 255, 0.0001) 20px, #efefef 20px, #efefef 30px), repeating-linear-gradient(to right, #efefef, #efefef 5px, rgba(255, 255, 255, 0.0001) 5px, rgba(255, 255, 255, 0.0001) 15px, #efefef 15px, #efefef 20px), #ccc;
  background-position: 50% 10px;
}
 .wrap .grid .cell.class3:after {
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15), inset 0 0 0 15px #fff;
  background: repeating-linear-gradient(to bottom, #fff, #fff 5px, rgba(255, 255, 255, 0.0001) 5px, rgba(255, 255, 255, 0.0001) 15px, #fff 15px, #fff 20px), repeating-linear-gradient(to left, #fff, #fff 5px, rgba(255, 255, 255, 0.0001) 5px, rgba(255, 255, 255, 0.0001) 15px, #fff 15px, #fff 20px), #cecece;
  background-position: 20px 50%;
}
 .wrap .grid .cell:before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 0;
  width: 100%;
  height: var(--height);
  background: #efefef;
  box-shadow: inherit;
  transform-origin: bottom;
  transform: rotateX(90deg);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
 .wrap .grid .cell:after {
  content: "";
  position: absolute;
  bottom: 0%;
  left: calc(var(--height) * -1);
  height: 100%;
  width: var(--height);
  background: #fff;
  box-shadow: inherit;
  transform-origin: right;
  transform: rotateY(-90deg);
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}
</style>
