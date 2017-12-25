import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 100
  },
  mutations: {
    // 同步操作
    increment(state, payload) {
      this.state.count += payload.n
    },
    decrement(state, payload) {
      this.state.count -= payload.de
    }
  },
  getters: {
    filterCount(state) {
      return state.count >= 120 ? 120 : state.count
    }
  },
  actions: {
    // 异步操作
    incrementAction(context) {
      setTimeout(() => {
        // 改变状态，必须要提交一个mutations
        context.commit('increment', {
          n: 20
        })
        context.dispatch('textAction', {
          test: '测试'
        })
      }, 1000);
    },
    textAction(context, obj) {
      console.log(obj)
    }
  }
})

export default store