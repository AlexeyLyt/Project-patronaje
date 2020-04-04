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
        <div class="item-content">
          <!-- <tabs :show.sync="show" class="my-tabs">
            <template v-slot:nav="{ items }">
              <div class="my-items">
                <a
                  v-for="(item, index) in items" :key="index"
                  href="#" :class="{ 'my-item': true, 'active': show === index }"
                  @click.prevent="show = index"
                >{{ item.title }}</a>
              </div>
            </template>
            <tab title="First">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna.
            </tab>

            <tab title="Second">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </tab>

            <tab title="Third">
              Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur.
            </tab>
          </tabs> -->
          <!-- <b-card no-body>
            <b-tabs pills card vertical>
              <b-tab title="Tab 1" active><b-card-text>Tab contents 1</b-card-text></b-tab>
              <b-tab title="Tab 2"><b-card-text>Tab contents 2</b-card-text></b-tab>
              <b-tab title="Tab 3"><b-card-text>Tab contents 3</b-card-text></b-tab>
            </b-tabs>
          </b-card> -->
        </div>
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
          <!-- Slide 2
          <svg viewBox="0 0 130 130">
            <path class="hover-fillLight" fill="#69D5F8" d="M65 10c30.376 0 55 24.624 55 55s-24.624 55-55 55-55-24.624-55-55 24.624-55 55-55z"></path>
            <path fill="#FFF" d="M48 79.552V47.998H34.73c-.65 0-1.275.26-1.735.72L13.765 68.07a3.7 3.7 0 0 0-1.053 3.068c2.92 23.81 22.293 43.188 46.103 46.114a3.7 3.7 0 0 0 3.067-1.052L81.29 97.05c.46-.46.717-1.084.717-1.735L82 82l-31.545.005A2.454 2.454 0 0 1 48 79.552z"></path>
            <path class="hover-fillDark" fill="#217AB7" d="M119.55 58.073L96.344 81.28c-.46.46-1.085.72-1.736.72H81.993V50.462a2.454 2.454 0 0 0-2.453-2.455H48l.002-12.613c0-.65.258-1.276.718-1.736L71.93 10.45c24.83 3.123 44.497 22.79 47.62 47.623z"></path>
          </svg> -->
          <!-- <svg viewBox="0 0 130 130">
            <path class="hover-fillLight" fill="#76E5A2" d="M65 10c30.376 0 55 24.624 55 55s-24.624 55-55 55-55-24.624-55-55 24.624-55 55-55z"></path>
            <path fill="#FFF" d="M102.274 27.78v-.002c-9.628-9.615-22.968-15.526-37.69-15.408-28.292.228-51.557 23.072-52.238 51.32-.22 9.175 1.915 17.832 5.84 25.416.1.192.317.29.526.24.003 0 .006 0 .01-.002a.462.462 0 0 0 .324-.616c-5.15-13.598-2.25-29.54 8.713-40.488 14.915-14.898 39.102-14.898 54.02 0L48.25 81.725c14.917 14.897 39.104 14.897 54.022 0 14.916-14.897 14.917-39.048.002-53.945z"></path>
            <path class="hover-fillDark" fill="#159570" d="M88.198 58.794c3.435 12.802-4.173 25.96-16.992 29.39-12.82 3.43-25.997-4.166-29.43-16.968-3.436-12.802 4.17-25.96 16.99-29.39 12.82-3.43 25.997 4.166 29.43 16.968z"></path>
          </svg> -->
          <!-- <a href="https://github.com/vuejs/vue"> -->
            <icon style="width: 100px;"/>
          <!-- </a> -->
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
import icon from '../../assets/adress.svg'
import { swiper, swiperSlide } from "vue-awesome-swiper";

// import { Tabs, Tab } from '@hiendv/vue-tabs'

export default {
  components: {
    swiper,
    swiperSlide,
    icon
    // Tabs, 
    // Tab 
  },
  data() {
    return {
      show: 1,
      swiperOption: {
        // initialSlide: 0,
        // slidesPerView: 1,
        // loop: true,
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
      }
    };
  }
};
</script>

<style lang="scss">
// @import "~/swiper/css/swiper.min.css";

.swiper-container {
  width: 100%;
  height: 900px;
  background: #f6f9fc;
  // margin-top: 11.8vh;
  // background-color: aqua;
}

.swiper-slide {
  background: white;
  z-index: 100000;
  // border-radius: 50px;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper-button-next,
  .swiper-button-prev {
    color: black;
    margin-left: 15px;
    margin-right: 15px;
    &:after {
      font-size: 30px;
    }
  }
}

.swiper-pagination {
  bottom: 40px !important;
  outline: none;
}
.swiper-pagination-bullet {
  width: 10px;
  height: 10px;
}

// background-test

.swiper-wrapper {
  position: relative;
  span {
    position: absolute;
  }
}

.item-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f6f9fc;
  padding: 0 125px;

  .item-background {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-transform: skewY(-12deg);
    transform: skewY(-12deg);
    -webkit-transform-origin: 0;
    transform-origin: 0;
    background: linear-gradient(150deg,#53f 15%,#05d5ff 70%,#a6ffcb 94%);
    
    span {
      position: absolute;
      height: 40px;
      @media (min-width: 670px) {
        height: 150px;
      }
      @media (min-width: 880px) {
        height: 190px;
      }
    }
    span:first-child {
      width: 50%;
      left: 65%;
      top: 70px;
      background: #4c29ff;
      @media (min-width: 670px) {
        top: 0;
        background: #4750ff;
      }
      @media (min-width: 880px) {
        /* width: 33.33333%; */
        width: calc(100% / 3);
        /* left: -16.66666%; */
        left: calc(calc(calc(100% / 3) / 2) * -1);
        background: #53f;
      }
    }
    span:nth-child(2) {
      width: 14%;
      right: 0;
      bottom: 40px;
      background: #2be7ff;
      @media (min-width: 670px) {
        width: 16.66667%;
        width: calc(100% / 6);
        top: 300px;
        top: calc(150px * 2);
        bottom: auto;
        background: #0dcfff;
      }
      @media (min-width: 880px) {
        width: 33.33333%;
        width: calc(100% / 3);
        top: 0;
        left: 16.66666%;
        left: calc(calc(100% / 3) / 2);
        right: auto;
        background: #4553ff;
      }
    }
    span:nth-child(3) {
      width: 25%;
      bottom: 0;
      right: 0;
      background: #a1ffc8;
      @media (min-width: 670px) {
        width: 33.33333%;
        width: calc(100% / 3);
        right: auto;
        background: #11bdff;
      }
      @media (min-width: 880px) {
        width: 33.33333%;
        width: calc(100% / 2);
        left: 49.99999%;
        left: calc(calc(calc(100% / 3) / 2) + calc(100% / 3));
        bottom: auto;
        background: #4f40ff;
      }
    }
    span:nth-child(4) {
      @media (min-width: 880px) {
        width: calc(100% / 3);
        top: calc(190px * 2);
        right: calc(calc(calc(100% / 3) / 2) * -1);
        background: #25ddf5;
      }
    }
    span:nth-child(5) {
      @media (min-width: 880px) {
        width: calc(100% / 3);
        bottom: 0;
        left:0;
        background: #1fa2ff;
      }
    }
  }
  .item-background-second {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-transform: skewY(-12deg);
    transform: skewY(12deg);
    /* -webkit-transform-origin: 0; */
    transform-origin: 100%;
    background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #a6ffcb 94%);
  }
  .item-content {
    position: relative;
  }
}

.my-tabs {
  display: flex;
}
.my-items {
  width: 20%;
}
.my-item {
  display: inline-block;
  width: 100%;
  margin-bottom: .2rem;
  padding: 10px 0px;
  background-color: #3ecf8e;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  text-align: center;
  &.active {
    background-color: #5e65a8;
  }
}

</style>
