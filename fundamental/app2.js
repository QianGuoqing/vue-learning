// 实例化Vue对象
new Vue({
  el: '#root',
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    add(increment) {
      this.age = this.age + increment
    },
    subtract(decrement) {
      this.age = this.age - decrement
    },
    updateXY(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    }
  }
})
