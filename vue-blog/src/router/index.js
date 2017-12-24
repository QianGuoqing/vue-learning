import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ShowBlogs from '../components/show-blogs.vue'
import AddBlog from '../components/app-blog.vue'
import SingleBlog from '../components/single-blog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ShowBlogs',
      component: ShowBlogs
    }, 
    {
      path: '/add',
      name: 'AddBlog',
      component: AddBlog
    },
    {
      path: '/blog/:id',
      component: SingleBlog
    }
  ]
})
