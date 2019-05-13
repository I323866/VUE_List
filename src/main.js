// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import FundamentalVue from 'fundamental-vue'
import $ from 'jquery'

Vue.use(FundamentalVue);
// Vue.use($);
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000/api/';
Vue.prototype.$axios = axios
Vue.prototype.$jquery = $

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'

})
