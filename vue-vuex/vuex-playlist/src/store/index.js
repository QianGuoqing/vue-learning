import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    products: [
      {
        name: '马云',
        price: 200
      },
      {
        name: '马化腾',
        price: 140
      },
      {
        name: '马冬梅',
        price: 20
      },
      {
        name: '马蓉',
        price: 10
      }
    ]
  },
  mutations: {
    reducePrice(state) {
      state.products.map(product => {
        product.price -= 1
      })
    }
  },
  getters: {
    saleProducts(state) {
      return state.products.map(product => {
        return {
          name: `**${product.name}**`,
          price: product.price / 2
        }
      })
    }
  },
  actions: {
    reducePriceActions(context) {
      setTimeout(() => { 
        context.commit('reducePrice')
      }, 1000);
    }
  }
})

export default store