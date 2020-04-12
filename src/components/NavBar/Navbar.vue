<template>
  <b-container class="container-menu" fluid>

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
      <!-- Лого(слева) -->
      <!-- <li slot="before-nav" class="logo vsm-section vsm-mob-full">
        <a href="#">
          <figma-logo />
        </a>
      </li> -->
      <template slot="after-nav">
        <!-- Кнопка(справа) -->
        <!-- <li class="vsm-section vsm-mob-hide">
          <a href="#" class="vsm-link signup">
            Sign In
          </a>
        </li> -->
        <!--Display mobile menu-->
        <vsm-mob>
          <!-- <mobile-content /> -->
        </vsm-mob>
      </template>
    </vsm-menu>
  </b-container>
</template>

<script>
  import Services from './ServicesDropdownContent'
  import Nurses_1 from './NursesDropdownContent_1'
  import Nurses_2 from './NursesDropdownContent_2'

export default {
  components: { 
    Services,
    Nurses_1,
    Nurses_2
  },
  data() {
    return {
      menu: [
        { title: 'УСЛУГИ', dropdown: 'features', content: Services },
        { title: 'СИДЕЛКИ', dropdown: 'enterprise', content: Nurses_1, secondaryContent: Nurses_2 },
        { title: 'СТОИМОСТЬ', attributes: { href: '#' } },
        { title: 'ОТЗЫВЫ', attributes: { href: 'https://github.com/Alexeykhr/vue-stripe-menu', target: '_blank' } },
        { title: 'О КОМПАНИИ', attributes: { href: '#' } },
        { title: 'ВАКАНСИИ', attributes: { href: '#' } },
        { title: 'КОНТАКТЫ', attributes: { href: '#' } },
        { title: 'СТАТЬИ', attributes: { href: '#' } }
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

.container-menu {
  padding: 0 !important;
  .vsm-menu {
    margin: 10px 0;
    width: 100%;
    position: absolute;
    z-index: 999999;
    ul {
      // max-width: 1024px;
      margin: 0 auto;
    }
  }
}

.vsm-root {
  display: flex;
  align-items: center;
  justify-content: center;
}

.vsm-section_menu {
  width: 100%;
  display: flex;
  justify-content: center;
  > * {
    padding: 0 25px;
    font-weight: 500;
    font-family: inherit;
  }
}

.vsm-link {
  position: relative;
  color: white !important;
  font-weight: 900 !important;
  font-size: 22px !important; // изменять размер шритфа при уменьшении разрешения
  text-decoration: none;
  padding: 0 11px !important; // изменять при уменьшении разрешения
  &:hover {
    color: hsla(0,0%,100%,.7) !important;
    text-decoration: none;
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
    line-height: 16px;
    &:hover {
      text-decoration: none;
      .small-text {
        text-decoration: none;
      }
    }
  }
  .small-text {
    // width: 100%;
    color: black;
    font-size: 13px;
    font-weight: 700;
  }
  &:hover {
    background: #2497ff;
    transition: background .3s;
    text-decoration: none;
    .link, .small-text {
      color: white;
    }
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

// .vsm--link_hover,
// .vs--mobile-item,
// .vsm--item,
// .vsm--mobile-bg,
// .router-link-exact-active {
//   border-top-right-radius: 15px;
//   // border-bottom-right-radius: 15px;
// }

</style>
