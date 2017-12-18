// 实例化Vue对象
new Vue({
  el: '#root',
  data: {
    
  },
  methods: {
    logName(event) {
      console.log(event.target.value)
    },
    logAge(event) {
      console.log(event.target.value)
    }
  }
})
