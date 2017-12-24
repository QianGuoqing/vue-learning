<template>
  <nav>
    <ul>
      <router-link to="/" :exact="true">博客</router-link>
      <router-link to="/add">写博客</router-link>
    </ul>
  </nav>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
ul {
  list-style: none;
  text-align: center;
  margin: 0;
}

li {
  display: inline-block;
}

a {
  color: #fff;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}

nav {
  background: crimson;
  padding: 30px 0;
  margin-bottom: 40px;
}

.router-link-active {
  background: rgba(255, 255, 255, .8);
  color: #444;
}
</style>