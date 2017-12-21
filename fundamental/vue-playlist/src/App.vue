<template>
  <div id="app">
    <app-header :title="title"></app-header>
    <users :users="users"></users>
    <app-footer></app-footer>
  </div>
</template>

<script>
import users from './components/users'
import header from './components/header'
import footer from './components/footer'
export default {
  name: 'app',
  components: {
    users,
    'app-header': header,
    'app-footer': footer
  },
  data() {
    return {
      title: '传递的是一个值(number, string, boolean)',
      users: [
          {
            name: 'Henry',
            position: 'Web开发',
            show: false
          },
          {
            name: 'Henry',
            position: 'Web开发',
            show: false
          },
          {
            name: 'Henry',
            position: 'Web开发',
            show: false
          },
          {
            name: 'Henry',
            position: 'Web开发',
            show: false
          },
          {
            name: 'Henry',
            position: 'Web开发',
            show: false
          },
          {
            name: 'Henry',
            position: 'Web开发',
            show: false
          },
          {
            name: 'Henry',
            position: 'Web开发',
            show: false
          },
          {
            name: 'Henry',
            position: 'Web开发',
            show: false
          }
        ]
    }
  },
}
</script>

<style>
h1 {
  color: purple;
}
</style>
