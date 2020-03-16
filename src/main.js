import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueNavigationBar from "vue-navigation-bar";
Vue.component("vue-navigation-bar", VueNavigationBar);

import { BootstrapVue } from 'bootstrap-vue'
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
Vue.use(VueSidebarMenu)

import YmapPlugin from 'vue-yandex-maps'
Vue.use(YmapPlugin, settings)
const settings = {
  apiKey: '8944b466-0be1-4b52-9ee1-fd220c7cd137',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1'
}

// import { Tabs, Tab } from '@hiendv/vue-tabs'
// Vue.use(Tabs, Tab)

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// library.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon)

// import SmoothScrollbar from 'vue-smooth-scrollbar'
// Vue.use(SmoothScrollbar)

// SmoothScrollbar.updatePluginOptions('overscroll', {
//   effect: 'glow',
// })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
