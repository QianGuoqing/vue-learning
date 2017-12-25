<template>
  <div class="">
    关于我
    <hr>
    <ul class="nav">
      <!-- <router-link to="/about/" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link to="/about/work" tag="li">
        <a>work</a>
      </router-link>
      <router-link to="/about/hobby" tag="li">
        <a>hobby</a>
      </router-link> -->
      <router-link :to="{name: 'about'}" exact tag="li">
        <a>study</a>
      </router-link>
      <router-link :to="{name: 'work'}" tag="li">
        <a>work</a>
      </router-link>
      <router-link :to="{name: 'hobby'}" tag="li">
        <a>hobby</a>
      </router-link>
    </ul>
    <hr>
    测试数据：{{ test }}
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    beforeRouteEnter: (to, from, next) => {
      console.log('beforeRouteEnter') 
      next()
    },
    data () {
      return {
        test: '改变前'
      }
    }
  }
</script>

<style scoped>

</style>