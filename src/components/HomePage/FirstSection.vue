<template>
  <div class="first-section">
    <b-container class="container-lg" lg>
      <header>
        <h2>Security and compliance at the core</h2>
      </header>
      <section class="about-us" id="main">
        <div>
          <article class="content">
            <h2 class="content-uppercaseTitle">Comprehensive security</h2>
            <p class="content-text">Data security is of utmost importance to Stripe. We invest heavily in securing our infrastructure in close partnership with world-class security experts.</p>
            <p class="content-a">
              <a href="#" class="content-link">Security at Stripe<i class="fas fa-arrow-right"></i></a>
            </p>
          </article>
          <figure>
            <ul>
              <li class='first-li'>All card numbers are encrypted on disk with AES-256. Decryption keys are stored on separate machines.</li>
              <li class='first-li'>Stripe’s infrastructure for storing, decrypting, and transmitting card numbers runs in separate hosting infrastructure, and doesn’t share any credentials with Stripe’s primary services.</li>
            </ul>
          </figure>
        </div>
      </section>

      <section class="about-us" id="services">
        <div>
          <article class="content">
            <h2 class="content-uppercaseTitle">Rigorous compliance</h2>
            <p class="content-text">Stripe is certified to the highest industry standards and has obtained regulatory licenses around the world.</p>
            <p class="content-a">
              <a href="#" class="content-link">More about compliance<i class="fas fa-arrow-right"></i></a>
            </p>
          </article>
          <figure>
            <ul>
              <li>
                <!-- <div class="img"></div> -->
                <i class="img-li fab fa-angrycreative"></i>
                <p>PCI DSS Level 1 certification</p>
              </li>
              <li>
                <!-- <img src="" alt=""> -->
                <i class="img-li fab fa-aws"></i>
                <p>SSAE18/SOC 1 type 1 and type 2 and SSAE18/SOC 2 type 1 and type 2 reports</p>
              </li>
              <li>
                <!-- <img src="" alt=""> -->
                <i class="img-li fas fa-bahai"></i>
                <p>Money Transmitter Licenses across the US</p>
              </li>
              <li>
                <!-- <img src="" alt=""> -->
                <i class="img-li fab fa-battle-net"></i>
                <p>AFSL in Australia, E-Money License in Europe, and registered MSB in Canada</p>
              </li>
              <li>
                <!-- <img src="" alt=""> -->
                <i class="img-li fas fa-burn"></i>
                <p>PSD2 and Strong Customer Authentication (SCA) compliant</p>
              </li>
            </ul>
          </figure>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  components: {},
  data() {
    return {

    };
  },
  methods: {
      
  },
  created() {
    //   setInterval(function(){ 
    //     console.log(1);
    // }, 1000);
  }
};
</script>

<style lang="scss">
ul, ol {
  list-style: none;
}
.first-section {
  font-family: 'Nunito', sans-serif;
  position: relative;
  padding-top: 10px;
  background: #f6f9fc;
  z-index: 1;
  overflow: hidden;
  .container-lg {
    // max-width: 1040px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
    header {
      max-width: 450px;
      text-align: left;
      @media (min-width: 670px) {
        padding-bottom: 60px;
      }
      h2 {
        font-size: 42px;
        line-height: 52px;
      }
    }
    .about-us div {
      display: flex;
      flex-direction: column;
      @media (min-width: 670px) {
        flex-direction: row;
      }
      .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 60px 0;
        text-align: left;
        h2 {
          font-size: 20px;
          line-height: 32px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: .025em;
          @media (min-width: 670px) {
            font-size: 21px;
            line-height: 32px;
          }
        }
        .content-text {
          font-weight: 300;
          font-size: 21px;
          line-height: 32px;
          color: #424770;
          @media (min-width: 670px) {
            font-size: 24px;
            line-height: 36px;
          }
        }
        .content-a {
          font-weight: 400;
          font-size: 19px;
          line-height: 32px;
          color: #525f7f;
          .content-link {
            color: #6772e5;
            font-weight: 500;
            -webkit-transition: color .1s ease;
            transition: color .1s ease;
            cursor: pointer;
            font-weight: bold;
            text-decoration: none;
            i {
              font-size: 12px;
              padding-left: 5px;
              // font-weight: bold;
            }
            &:hover {
              color: #32325d;
            }
            // &::after {
            //   font: normal 16px StripeIcons;
            //   content: "\f061";
            //   padding-left: 5px;
            // }
          }
        }
        @media (min-width: 670px) {
          width: 50%;
          padding: 20px 40px 60px 0;
        }
        @media (min-width: 880px) {
          padding-right: 60px;
        }
        @media (min-width: 1040px) {
          padding-right: 80px;
        }
      }
      figure {
        position: relative;
        margin: 0;
        @media (min-width: 670px) {
          width: 50%;
          padding: 60px 0 120px 40px;
        }
        @media (min-width: 880px) {
          padding-left: 60px;
        }
        @media (min-width: 1040px) {
          padding-left: 80px;
        }
        &:before {
          content: "";
          position: absolute;
          z-index: -1;
          top: 0;
          bottom: 0;
          left: -20px;
          right: -20px;
          background: #fff;
          @media (min-width: 670px) {
            left: 0!important;
            transform: skewY(-12deg);
            transform-origin: 0 100%;
            left: unset;
            right: unset;
            width: 50vw;
          }
        }
        ul {
          .first-li:not(:last-child) {
            margin-bottom: 20px;
          }
          .first-li {
            font-size: 15px;
            line-height: 24px;
            color: #525f7f;
            display: flex;
            align-items: center;
            text-align: left;
            &:before {
              content: "";
              display: block;
              width: 36px;
              height: 36px;
              flex-shrink: 0;
              margin: 0 20px 0 -5px;
              // background: url('../assets/lightbulb-regular.svg') center center / contain no-repeat;
              background: #6772e5;
              border-radius: 50%;
              box-shadow: 0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3);
            }
          }
        }
      }
    }
  }
  #services .content {
    padding: 60px 0 10px;
    @media (min-width: 670px) {
      padding: 40px 0 150px 40px;
    }
    @media (min-width: 880px) {
      padding-left: 60px;
    }
    @media (min-width: 1040px) {
      padding-left: 80px;
    }
  }
  #services figure {
    &::before {
      transform: skewY(-12deg);
      transform-origin: 100% 0;
      @media (min-width: 670px) {
        right: 0!important;
        left: unset !important;
      }
    }
    @media (min-width: 670px) {
      order: -1;
      padding: 0;
    }
    ul {
      margin: 40px 0 0 0;
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: 440px;
      li {
        text-align: center;
        padding: 0 10px 10px;
        font-size: 15px;
        line-height: 24px;
        font-weight: 500;
        color: #32325d;
        @media (min-width: 880px) {
          padding: 0 20px 20px;
        }
        .img-li {
          margin: 0 auto 5px;
          // width: 64px;
          // height: 64px;
          font-size: 60px;
          // color: white;
          // border-radius: 50%;
          // background: url('../assets/temporary-trash/address-card-solid.svg') center center / contain no-repeat;
          // box-shadow: 0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3);
          @media (min-width: 880px) {
            // width: 72px;
            // height: 72px;
            font-size: 80px;
          }
        }
      }
      li:nth-child(2n) {
        transform: translateY(60px);
      }
    }
  }
  // &:before {
  //   content: "";
  //   position: absolute;
  //   z-index: -1;
  //   left: 0;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   background: #f6f9fc;
  //   transform: skewY(-12deg);
  // }
}

.about-us > div {
  display: flex;
  flex-direction: column;
  @media (min-width: 670px) {
    flex-direction: row;
  }
}
</style>
