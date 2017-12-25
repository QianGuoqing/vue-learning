<template>
  <div id="app">
    <div class="nav-box">
      <ul class="nav">
        <router-link to="/" exact tag="li" event="mouseover">
          <i class="fa fa-home"></i>
          <span>home</span>
        </router-link>
        <li>
          <router-link :to="{path: '/document'}">Document</router-link>
        </li>
        <li>
          <router-link to="about">About</router-link>
        </li>
        <li>
          <router-link to="/user">User</router-link>
        </li>
      </ul>
    </div>
    <transition name="left">
      <router-view class="center"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      index: '/home'
    }
  }
}
</script>

<style>
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: all 1s;
}
.v-enter-to {
  opacity: 1;
}

.v-leave {
  opacity: 1;
}
.v-leave-active {
  transition: all 1s;
}
.v-leave-to {
  opacity: 0;
}
.left-enter {
  transform: translateX(100%);
}
.left-enter-to {
  transform: translateX(0);
}
.left-enter-active {
  transition: all 1s;
}

.left-leave {
  transform: translateX(0);
}
.left-leave-to {
  transform: translateX(-100%);
}
.left-leave-active {
  transition: all 1s;
}
</style>
