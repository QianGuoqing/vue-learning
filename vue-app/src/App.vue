<template>
  <div id="app">
    <router-link to="/" exact>home</router-link>
    <router-link to="/test">test</router-link>
    <router-view></router-view>
  </div>
</template>

<script>

import test from './components/test'
import users from './components/users'

export default {
  name: 'app',
  components: {
    test,
    users
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
