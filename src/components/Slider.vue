<template>
  <!-- swiper -->
  <swiper :options="swiperOption">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import "swiper/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      swiperOption: {
        initialSlide: 0,
        slidesPerView: 1,
        pagination: {
          el: ".swiper-pagination",
          // dynamicBullets: true,
          clickable: true
        }
      }
    };
  }
};
</script>

<style lang="scss">
// @import "~/swiper/css/swiper.min.css";

.swiper-container {
  width: 100%;
  height: 90vh;
  // background-color: aqua;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

</style>
