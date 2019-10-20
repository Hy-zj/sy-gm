import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from "axios"

Vue.config.productionTip = false
Vue.prototype.$axios = axios //添加axios至原型链

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
