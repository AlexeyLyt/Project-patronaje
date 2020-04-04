<template>
  <b-container fluid>

    <!-- <template >
      <div class="feature-dropdown">
        <div class="dropdown--section_title">Design</div>
        <div class="dropdown-wrap">
          <a href="#" class="dropdown-wrap__content type1">
            <slideshow-svg />
            <span>Design1</span>
          </a>
          <a href="#" class="dropdown-wrap__content type1">
            <slideshow-svg />
            <span>Design2</span>
          </a>
        </div>
        <div class="dropdown--section_title">Prototyping</div>
        <div class="dropdown-wrap">
          <a href="#" class="dropdown-wrap__content type1">
            <file-svg />
            <span>Prototype1</span>
          </a>
          <a href="#" class="dropdown-wrap__content type1">
            <file-svg />
            <span>Prototype2</span>
          </a>
        </div>
      </div>
    </template>

    <div class="enterprise-dropdown">
      <div class="dropdown-wrap">
        <a href="#" class="dropdown-wrap__content type2">
          <dollar-svg style="min-width: 24px" />
          <div>
            <div class="content--top">Enterprise</div>
            <div class="content--bottom">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          </div>
        </a>
      </div>
    </div>

    <div class="enterprise-dropdown">
      <div class="dropdown-wrap">
        <a href="#" class="dropdown-wrap__content type1">
          <dollar-svg />
          <span>Price1</span>
        </a>
        <a href="#" class="dropdown-wrap__content type1">
          <dollar-svg />
          <span>Price2</span>
        </a>
      </div>
    </div>

    <div class="mobile-content">
      Mobile Content
    </div> -->

    <vsm-menu :menu="menu">
      <template #default="data">
        <component
          :is="data.item.content"
          class="content"
        />
        <component
          :is="data.item.secondaryContent"
          class="content--secondary"
        />
      </template>
      <li
        slot="before-nav"
        class="logo vsm-section vsm-mob-full"
      >
        <a href="#">
          <figma-logo />
        </a>
      </li>
      <template slot="after-nav">
        <li class="vsm-section vsm-mob-hide">
          <!--router-link, etc-->
          <a href="#" class="vsm-link signup">
            Sign In
          </a>
        </li>
        <!--Display mobile menu-->
        <vsm-mob>
          <mobile-content />
        </vsm-mob>
      </template>
    </vsm-menu>

    <!-- <div class="header">
      <div class="logo header-item">
        <a>
          <img src="../assets/lockup-color.png" alt="">
        </a>
      </div>
      <div class="adress header-item">
        <div class="icon"></div>
        <div class="text"></div>
      </div>
      <div class="mail header-item"></div>
      <div class="phone header-item"></div>
      <div class="callback header-item"></div>
    </div> -->
    <!-- <vue-navigation-bar :options="navbarOptions" @vnb-item-clicked="vnbItemClicked"></vue-navigation-bar> -->
  </b-container>
</template>

<script>
  // import "vue-navigation-bar/dist/vue-navigation-bar.css";
  import Features from './Feature-dropdown'
export default {
  components: { Features },
  data() {
    return {
      menu: [
        { title: 'УСЛУГИ', dropdown: 'features', content: Features },
        { title: 'Enterprise', dropdown: 'enterprise', content: 'enterpriseDropdownTop', secondaryContent: 'enterpriseDropdownBottom' },
        { title: 'Customers', attributes: { href: '#' } },
        { title: 'Github', attributes: { href: 'https://github.com/Alexeykhr/vue-stripe-menu', target: '_blank' } },
        { title: 'Login', attributes: { href: '#' } }
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,500,700");
@import '~/vue-stripe-menu/dist/vue-stripe-menu.css';
html {
  width: 100%;
  font-size: 18px;
  color: #333;
}
body {
  margin: 0;
  height: 100%;
  height: 100vh;
  width: 100%;
  font-family: "Montserrat", sans-serif;
}
#app {
  height: 100%;
  height: 100vh;
  width: 100%;
  line-height: 1.5;
}

.vsm-menu {
  margin: 10px;
  position: relative;
  z-index: 999999;
  ul {
    max-width: 1024px;
    margin: 0 auto;
  }
}

.vsm-root {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo {
  flex: 1 1 auto;
}

.vsm-section_menu {
  > * {
    padding: 0 25px;
    font-weight: 500;
    font-family: inherit;
  }
}

.vsm-link {
  position: relative;
  color: #000000a8 !important;
  font-weight: 900 !important;
  text-decoration: none;
  &:hover {
    color: var(--link);
  }
}

.signup {
  color: #fff;
  background: #333;
  font-weight: bold;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 10px;
  transition: transform .1s;
  &:hover {
    color: #fff;
    transform: translateY(-3px);
  }
}

.content,
.content--secondary,
.mobile-content {
  // padding: 30px;
}

.content--secondary {
  padding-top: 10px;
  padding-bottom: 10px;
}

.dropdown--section_title {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 20px;
  &:not(:first-child) {
    margin-top: 20px;
  }
}

.dropdown-wrap__content {
  display: flex;
  // width: fit-content;
  align-items: center;
  text-align: left;
  // flex-wrap: wrap;
  color: black;
  text-decoration: none;
  padding: 10px 20px;
  transition: background .3s;
  .link {
    font-size: 15px;
    font-weight: 700;
  }
  .small-text {
    // width: 100%;
    font-size: 13px;
    font-weight: 700;
  }
  &:hover {
    background: #2497ff;
    transition: background .3s;
  }
  &:not(:last-child) {
    // margin-bottom: 5px;
  }
  &.type1 {
    span {
      // margin-left: 10px;
    }
  }
  &.type2 {
    align-items: flex-start;
    > div {
      margin-left: 10px;
    }
    .content--bottom {
      color: var(--secondary);
    }
  }
}

.feature-dropdown {
  min-width: 300px;
  padding: 10px 0;
}

.enterprise-dropdown {
  width: 400px;
}

</style>
