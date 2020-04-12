<template>
  <!-- swiper -->
  <swiper :options="swiperOption">

    <swiper-slide>
      <div class="item-wrapper">
        <div class="item-background">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <b-container class="item-content container-lg">

          <div class="item-content-top">
            <h2 class="item-content-top-title"><span>Lorem ipsum dolor sit amet</span> consectetur adipiscing elit, sed do</h2>
            <h4 class="item-content-top-small">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h4>
          </div>

          <div class="item-content-center-flexbox">
            <div class="slider-item-left">
              <div class="slider-item-left-first">
                <p class="slider-item-left-first-text">
                  <span>Lorem ipsum dolor sit amet</span> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
              </div>
              <div class="slider-item-left-second">
                <a href="#" class="slider-item-left-second-btn">Сиделки</a>
                <a href="#" class="slider-item-left-second-btn">Цены</a>
              </div>
            </div>
            
            <!-- Главная форма заявки -->
            <MainForm />

          </div>

        </b-container>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper-slide>

    <swiper-slide>
      <div class="item-wrapper">
        <div class="item-background item-background-second">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="item-content">
            <icon style="width: 100px;"/>
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </swiper-slide>

    <!-- <swiper-slide>Slide 3</swiper-slide> -->
    <div class="swiper-pagination" slot="pagination"></div>

  </swiper>
</template>

<script>
import "swiper/css/swiper.css";
import MainForm from './mainForm'
import icon from '../../assets/adress.svg'
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default {
  components: {
    swiper,
    swiperSlide,
    MainForm,
    icon
  },
  data() {
    return {
      swiperOption: {
        touchAngle: 100,
        shortSwipes: false,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows : false,
        },
        pagination: {
          el: ".swiper-pagination",
          // dynamicBullets: true,
          // type: 'progressbar',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: true,
        // },
        // initialSlide: 0,
        // slidesPerView: 1,
        // loop: true,
      }
    };
  },
  methods: {

  }
};
</script>

<style lang="scss">
@import "@/styles/components/Slider.scss";
</style>
