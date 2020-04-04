<template>
    <div class="feature-dropdown">
      <div class="dropdown-wrap">
        <a href="#" class="dropdown-wrap__content type1" v-for="(item, index) in services" :key="index">
          <slideshow-svg />
          <a class="link" :href="item.link">
            {{ item.name }}
            <br>
            <span class="small-text">{{ item.small }}</span>
          </a>
        </a>
      </div>
      <!-- <div class="dropdown--section_title">Prototyping</div>
      <div class="dropdown-wrap">
        <a href="#" class="dropdown-wrap__content type1">
          <icon class="menu-icon" />
          <span>Prototype1</span>
        </a>
        <a href="#" class="dropdown-wrap__content type1">
          <icon class="menu-icon" />
          <span>Prototype2</span>
        </a>
      </div> -->
    </div>
</template>

<script>
//  import icon from '../../assets/adress.svg'

export default {
    components: {  },
    data() {
        return {
            services: [
                {
                    name: "СИДЕЛКА С ПРОЖИВАНИЕМ",
                    link: "/test",
                    small: "Качественное исполнение любых услуг"
                },
                {
                    name: "СИДЕЛКА В БОЛЬНИЦУ",
                    link: "/",
                    small: "Качественное исполнение любых услуг"
                },
                {
                    name: "СИДЕЛКА ДЛЯ ЛЕЖАЧЕГО БОЛЬНОГО",
                    link: "/",
                    small: "Качественное исполнение любых услуг"
                },
                {
                    name:  "МЕДСЕСТРА НА ДОМ",
                    link: "/",
                    small: "Качественное исполнение любых услуг"
                },
                {
                    name: "УХОД ЗА БОЛЬНЫМИ",
                    link: "/",
                    small: "Качественное исполнение любых услуг"
                },
                {
                    name: "УХОД ЗА ПРЕСТАРЕЛЫМИ",
                    link: "/",
                    small: "Качественное исполнение любых услуг"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-icon {
    width: 30px;
}
</style>
