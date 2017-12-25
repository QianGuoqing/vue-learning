import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home.vue'
import About from '../components/about.vue'
import Document from '../components/document.vue'
import NotFound from '../components/404.vue'
import Study from '../views/study.vue'
import Work from '../views/work.vue'
import Hobby from '../views/hobby.vue'
import Slider from '../views/slider.vue'
import User from '../components/user.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  scrollBehavior(to, from, savePosition) {
    console.log(to) // 要进入的目标路由对象
    console.log(from) // 离开的路由对象
    console.log(savePosition) // 记录的滚动条的目标

    if (savePosition) {
      return savePosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          path: '', // 默认的子路由
          name: 'study',
          component: Study
        },
        {
          path: 'work',
          name: 'work',
          component: Work
        },
        {
          path: 'hobby',
          name: 'hobby',
          component: Hobby
        }
      ]
    },
    {
      path: '/document',
      name: 'document',
      components: {
        default: Document,
        slider: Slider
      }
    },
    {
      path: '/user/:userId?',
      name: 'user',
      component: User
    },
    {
      path: '*',
      // component: NotFound
      // 重定向
      // redirect: '/home',
      // redirect: { path: '/home' }
      // redirect: { name: 'home' }
      redirect: (to) => { // 动态设置重定向的目标
        // 目标路有对象，就是访问的路径的路由信息
        if (to.path === '/123') {
          return '/home'
        } else if (to.path === '/456') {
          return { path: '/document' }
        } else {
          return { name: 'about' }
        }
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  next() // 要进入导航，必须加上这个函数
})

export default router