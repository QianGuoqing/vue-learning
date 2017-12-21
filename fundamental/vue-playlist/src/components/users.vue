<template>
  <div class="users">
    <h1>hello users</h1>
    <ul>
      <li v-for="(user, index) in users" :key="index" @click="user.show = !user.show">
        <h2>{{ user.name }}</h2>
        <h3 v-show="user.show">{{ user.position }}</h3>
      </li>
    </ul>

    <button @click="deleteUser">删除</button>
  </div>
</template>

<script>
  export default {
    name: 'users',
    props: {
      users: {
        type: Array,
        default: []
      },
    },
    data() {
      return {
        
      }
    },
    methods: {
      deleteUser() {
        
      }
    },
  }
</script>

<style scoped>
.users {
  width: 100%;
  max-width: 1200px;
  margin: 0 20px;
  box-sizing: border-box;
}

ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
}
</style>