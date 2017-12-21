<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ user.firstName }}</p>
    <p v-text="user.lastName"></p>

    <!-- v-if -->
    <p v-if="showName">{{ user.firstName }}</p>
    <!-- v-else -->
    <p v-else>Nobody</p>

    <!-- v-for -->
    <ul>
      <li v-for="item in items" :key="item.title">{{ item.title }}</li>
    </ul>

    <!-- v-on -->
    <button @click="greet('hello everyone')">Say Greeting</button>

    <!-- 键盘事件 -->
    <input type="text" @keyup.enter="pressKey($event)">
    
    <hr>

    <!-- computed 计算属性 -->
    <label for="">First Name: </label>
    <input type="text" v-model="user.firstName">
    <label for="">Last Name: </label>
    <input type="text" v-model="user.lastName">
    <p>
      {{ fullName }}
    </p>

    <!-- props 属性 -->
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
  export default {
    name: 'test',
    props: {
      msg: {
        type: String,
        default: '默认就是当前这些文字'
      },
    },
    data () {
      return {
        title: 'Hello Vue.js',
        user: {
          firstName: 'Hemiah',
          lastName: 'Wu'
        },
        showName: false,
        items: [
          { title: 'item 1' },
          { title: 'item 2' },
          { title: 'item 3' },
        ]
      }
    },
    methods: {
      greet(message) {
        alert(message)
      },
      pressKey(event) {
        console.log(event.target.value);
      }
    },
    computed: {
      fullName() {
        return this.user.firstName + ' ' + this.user.lastName
      }
    },
  }
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
</style>