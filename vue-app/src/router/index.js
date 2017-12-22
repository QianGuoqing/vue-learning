import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import users from '../components/users.vue'
import test from '../components/test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: users
    },
    {
      path: '/test',
      component: test
    }
  ]
})
