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
import MapSection from "@/components/Footer/MapSection.vue"

export default {
  name: "app",
  components: { Header, Slider, Navbar, FirstSection, SecondSection, MapSection },
  props: {},
  data() {
    return {};
  },
  methods: {
  }
};
</script>

<style lang="scss">

</style>