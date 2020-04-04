import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueNavigationBar from "vue-navigation-bar";
Vue.component("vue-navigation-bar", VueNavigationBar);

import VueStripeMenu from 'vue-stripe-menu'
Vue.use(VueStripeMenu)
import 'vue-stripe-menu/dist/vue-stripe-menu.css'

import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Slider
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

// Сайдбар
// import VueSidebarMenu from 'vue-sidebar-menu'
// import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
// Vue.use(VueSidebarMenu)

// Яндекс Карты
import YmapPlugin from 'vue-yandex-maps'
Vue.use(YmapPlugin, settings)
const settings = {
  apiKey: '8944b466-0be1-4b52-9ee1-fd220c7cd137',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
