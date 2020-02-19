<template>
  <div id="scroll-area">
    <!-- <vue-scroll :ops="ops"> -->
    <b-container fluid>
      <Navbar />
    </b-container>
    <Slider />
    <FirstSection />
    <!-- </vue-scroll> -->
  </div>
</template>

<script>
import Slider from "@/components/Slider.vue";
import Navbar from "@/components/Navbar.vue";
import FirstSection from "@/components/FirstSection.vue";
/* eslint-disable no-console */
export default {
  name: "app",
  components: { Slider, Navbar, FirstSection },
  data() {
    return {
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {}
      }
    };
  },
  created() {
    document.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    elementInViewport(el) {
      var top = el.offsetTop;
      var height = el.offsetHeight;

      while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
      }

      return (
        top >= window.pageYOffset &&
        top + height <= window.pageYOffset + window.innerHeight
      );
    },
    handleScroll() {
      this.idBlocks.find(number => {
        const el = document.getElementById(number);
        if (this.elementInViewport(el)) {
          this.activeBlock = number;
          console.log(1)
        }
      });
    }
  }
};
</script>

<style lang="scss">
#scroll-area {
  width: 100%;
  height: 3000px;
}

#example-content {
  width: 2000px;
  height: 2000px;
}
</style>