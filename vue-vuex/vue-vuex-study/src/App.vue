<template>
  <div id="app">
    <h1>简易加法计算器</h1>
    <button @click="incrementHandler">+</button>
    <span>{{ count }}</span>
    <button @click="decrementHandler">-</button>
    <p>
      {{ filterCount }}
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      index: '/home'
    }
  },
  computed: {
    ...mapState([
      'count'
    ]),
    ...mapGetters([
      'filterCount'
    ]),
    count() {
      return this.$store.state.count 
    },
    filterCount() {
      return this.$store.getters.filterCount
    }
  },
  methods: {
    ...mapMutations([
      'increment'
    ]),
    ...mapActions([
      'incrementAction'
    ]),
    incrementHandler() {
      // 这是提交mutations
      // this.$store.commit('increment', {
      //   n: 10
      // })

      // 现在要触发一个action
      this.$store.dispatch('incrementAction')
    },
    decrementHandler() {
      // this.$store.commit('decrement')
      this.$store.commit({
        type: 'decrement',
        de: 5
      })
    }
  },
}
</script>

<style>

</style>
