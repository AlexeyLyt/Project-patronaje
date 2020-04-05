<template>
  <div id="prices">
    <Header />
    <Navbar />
    <!-- <div id="covid19-animation">
        <div class="back--1"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/1b.svg" alt=""></div>
        <div class="back--2"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/2b.svg" alt=""></div>
        <div class="back--3"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/3b.svg" alt=""></div>
        <div class="back--4"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/4b.svg" alt=""></div>
        <div class="back--5"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/5b.svg" alt=""></div>
        <div class="back--6"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/6b.svg" alt=""></div>
        <div class="back--7"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/7b.svg" alt=""></div>
        <div class="back--8"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/8b.svg" alt=""></div>
        <div class="forg--1"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/1f.svg" alt=""></div>
        <div class="forg--2"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/2f.svg" alt=""></div>
        <div class="forg--3"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/3f.svg" alt=""></div>
        <div class="forg--4"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/4f.svg" alt=""></div>
        <div class="forg--5"><img src="https://freepik.cdnpk.net/img/campaigns/covid19/5f.svg" alt=""></div>
    </div> -->
    <MapSection />
  </div>
</template>

<script>
import Header from "@/components/Header/HeaderContent"
import Navbar from "@/components/NavBar/Navbar.vue";
import MapSection from "@/components/Footer/MapSection.vue"

export default {
  name: "app",
  components: { Header, Navbar, MapSection },
  props: {},
  data() {
    return {};
  },
  methods: {
  }
};
</script>

<style lang="scss">
@import '../styles/anim.scss';

#prices {
    .container-menu {
        .vsm-menu {
            background: linear-gradient(90deg, #27a2cbd9 0%, #92CDFA 100%) !important;;
            nav {
                .vsm-root {
                    display: flex;
                    flex-wrap: wrap;
                    .vsm-section {
                        .vsm-link {
                            // color: #0000009e;
                        }
                    }
                    .breadcrumbs {
                        width: 100%;
                    }
                }
            }
        }
    }
}

</style>