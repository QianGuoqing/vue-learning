<template>
  <div class="users">
    <h1>users</h1>
    
    <!-- 添加用户信息 -->
    <form action="" @submit.prevent="addUser">
      <input type="text" v-model="newUser.name" placeholder="Enter name">
      <input type="text" v-model="newUser.email" placeholder="Enter email">
      <input type="submit" value="submit">
    </form>

    <!-- 展示用户信息 -->
    <ul>
      <li v-for="user in users" :key="user.name">
        <input type="checkbox" name="" id="" class="toggle" v-model="user.contacted">
        <span :class="{contacted: user.contacted}">
          {{ user.name }}: {{ user.email }}
          <button @click="deleteUser(user)">x</button>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'users',
    data () {
      return {
        newUser: {
          name: '',
          email: ''
        },
        users: [
          {
            name: 'Hemiah Wu',
            email: 'hemiah@gmail.com',
            contacted: false
          },
          {
            name: 'Henry Wu',
            email: 'henry@gmail.com',
            contacted: false
          },
          {
            name: 'Emily Wu',
            email: 'emily@gmail.com',
            contacted: false
          }
        ]
      }
    },
    methods: {
      addUser() {
        this.users.push({
          name: this.newUser.name,
          email: this.newUser.email,
          contacted: false
        })
        this.newUser.name = ''
        this.newUser.email = ''
      },
      deleteUser(user) {
        this.users.splice(this.users.indexOf(user), 1)
      }
    },
  }
</script>

<style scoped>
.contacted {
  text-decoration: line-through;
}
</style>