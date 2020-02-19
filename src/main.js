import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueNavigationBar from "vue-navigation-bar";
Vue.component("vue-navigation-bar", VueNavigationBar);

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import SmoothScrollbar from 'vue-smooth-scrollbar'
Vue.use(SmoothScrollbar)
// SmoothScrollbar.updatePluginOptions('overscroll', {
//   effect: 'glow',
// })


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
