<template>
  <div id="home">
    <Header />
    <Navbar />
    <Slider />
    <FirstSection />
    <SecondSection />
    <MapSection />
  </div>
</template>

<script>
import Header from "@/components/Header/HeaderContent"
import Navbar from "@/components/NavBar/Navbar.vue";
import Slider from "@/components/HomePage/Slider.vue";
import FirstSection from "@/components/HomePage/FirstSection.vue";
import SecondSection from "@/components/HomePage/SecondSection.vue"
import MapSection from "@/components/MapSection.vue"
/* eslint-disable no-console */

export default {
  name: "app",
  components: { Header, Slider, Navbar, FirstSection, SecondSection, MapSection },
  props: {},
  data() {
    return {};
  },
  created() {
    document.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
  }
};
</script>

<style lang="scss">

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

#example-content {
  width: 2000px;
  height: 2000px;
}

.vsm--link_hover,
.vs--mobile-item,
.vsm--item,
.vsm--mobile-bg,
.router-link-exact-active {
  border-top-right-radius: 15px;
  // border-bottom-right-radius: 15px;
}
</style>