import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'

import router from './router'
import store from './store'
import './assets/css/app.css'

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router,
  store
})