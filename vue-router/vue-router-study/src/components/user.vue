<template>
  <div>
    我是user
    <div class="user-list">
      <router-link style="padding: 0 20px;" :to="'/user/' + item.id" v-for="item in userList" :key="item.id">
        {{ item.userName }}
      </router-link>
    </div>
  </div>
</template>

<script>
  let data = [
        {
            id:1,
            userName:"leo1",
            sex:'男',
            hobby:'写代码'
        },
        {
            id:2,
            userName:"leo2",
            sex:'男',
            hobby:'唱歌'
        },
        {
            id:3,
            userName:"leo3",
            sex:'男',
            hobby:'读书'
        }
    ]
  export default {
    data () {
      return {
        userList: data
      }
    },
    created() {
      console.log(this.$route.params.userId)
    }
  }
</script>

<style scoped>

</style>