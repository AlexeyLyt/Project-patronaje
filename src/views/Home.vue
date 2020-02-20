<template>
  <div id="scroll-area">
    <!-- <vue-scroll :ops="ops"> -->
    <!-- <div class="header-test"> -->
      <!-- <span></span>
      <span></span>
      <span></span>
      <span></span> -->
      <Navbar />
      <Slider />
    <!-- </div> -->
    <transition name="fade">
      <sidebar-menu
        v-if="this.scrolled"
        :menu="menu"
        :collapsed="true"
        :hideToggle="false"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
    </transition>
    <FirstSection />
    <!-- </vue-scroll> -->
  </div>
</template>

<script>
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`
}
import Slider from "@/components/Slider.vue";
import Navbar from "@/components/Navbar.vue";
import FirstSection from "@/components/FirstSection.vue";
/* eslint-disable no-console */
export default {
  name: "app",
  components: { Slider, Navbar, FirstSection },
  props: {
    // menu: {
    //   type: Array,
    //   required: true
    // }
  },
  data() {
    return {
      scrolled: false,
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {}
      },
      menu: [
        {
          header: true,
          title: 'Getting Started',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Installation',
          icon: 'fa fa-download'
        },
        {
          href: '/',
          title: 'Basic Usage',
          icon: 'fa fa-code'
        },
        {
          header: true,
          title: 'Usage',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Props',
          icon: 'fa fa-cogs'
        },
        {
          href: '/',
          title: 'Events',
          icon: 'fa fa-bell'
        },
        {
          href: '/',
          title: 'Styling',
          icon: 'fa fa-bell'
        },
        {
          component: separator
        },
        {
          header: true,
          title: 'Example',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Disabled page',
          icon: 'fa fa-lock',
          disabled: true
        },
        {
          title: 'Badge',
          icon: 'fa fa-cog',
          badge: {
            text: 'Новое',
            class: 'vsm--badge_default'
          }
        },
        {
          href: '/',
          title: 'Dropdown Page',
          icon: 'fa fa-list-ul',
          child: [
            {
              href: '/page/sub-page-1',
              title: 'Sub Page 01',
              icon: 'fa fa-list-ul'
            },
            {
              href: '/page/sub-page-2',
              title: 'Sub Page 02',
              icon: 'fa fa-file-alt'
            }
          ]
        },
        {
          href: '/',
          title: 'Multiple Level',
          icon: 'fa fa-list-alt',
          child: [
            {
              title: 'page'
            },
            {
              title: 'Level 2 ',
              child: [
                {
                  title: 'page'
                },
                {
                  title: 'Page'
                }
              ]
            },
            {
              title: 'Page'
            },
            {
              title: 'Another Level 2',
              child: [
                {
                  title: 'Level 3',
                  child: [
                    {
                      title: 'Page'
                    },
                    {
                      title: 'Page'
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      collapsed: false,
      themes: [
        {
          name: 'Default theme',
          input: ''
        },
        {
          name: 'White theme',
          input: 'white-theme'
        }
      ]
    };
  },
  created() {
    document.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll () {
      if (window.scrollY > window.innerHeight) {
        // console.log(true)
        this.scrolled = true
        // let sideBar = document.querySelector('.v-sidebar-menu')
        // console.log(sideBar)
        // sideBar.setAttribute("style", "transform: translateX(100px);");
      } else {
        this.scrolled = false
        // let sideBar = document.querySelector('.v-sidebar-menu')
        // sideBar.setAttribute("style", "transform: translateX(-50px);");
      }
      // this.scrolled = window.scrollY > window.innerHeight
      // console.log(window.scrollY)
      // console.log(window.innerHeight)
    },
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item) {
      console.log('onItemClick')
      console.log(event)
      console.log(item)
    }
    // elementInViewport(el) {
    //   var top = el.offsetTop;
    //   var height = el.offsetHeight;

    //   while (el.offsetParent) {
    //     el = el.offsetParent;
    //     top += el.offsetTop;
    //   }

    //   return (
    //     top >= window.pageYOffset &&
    //     top + height <= window.pageYOffset + window.innerHeight
    //   );
    // },
    // handleScroll() {
    //   this.idBlocks.find(number => {
    //     const el = document.getElementById(number);
    //     if (this.elementInViewport(el)) {
    //       this.activeBlock = number;
    //       console.log(1)
    //     }
    //   });
    // }
  }
};
</script>

<style lang="scss">

// background-header-test

// .header-test {
//   position: relative;
//   span {
//     position: absolute;
//   }
// }

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s !important;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0 !important;
}
.v-sidebar-menu {
  transition: all 2s;
  height: 65vh !important;
  margin-top: 6.6vh;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  .vsm--toggle-btn {
    border-bottom-right-radius: 20px;
  }
}
#scroll-area {
  width: 100%;
  height: 3000px;
}

#example-content {
  width: 2000px;
  height: 2000px;
}
.container-nav {
  position: fixed;
  height: 6.6vh;
  z-index: 200;
  // background: black;
  top: 0;
}
</style>