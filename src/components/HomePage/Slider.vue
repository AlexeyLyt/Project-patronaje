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
          <div>
            <h2><span>Lorem ipsum dolor sit amet</span> consectetur adipiscing elit, sed do</h2>
            <h4>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</h4>
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
  height: 760px;
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
  // padding: 0 125px;

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
    height: 100%;
    padding-top: 70px;
    div {
      h2 {
        text-align: left;
        color: white;
        font-weight: 400;
        margin-bottom: 0;
        span {
          display: contents;
          font-weight: 900;
        }
      }
      h4 {
        text-align: left;
        color: white;
        font-size: 16px;
        font-weight: 900;
      }
    }
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
