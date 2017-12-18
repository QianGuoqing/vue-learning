// 实例化Vue对象
new Vue({
  el: '#root',
  data: {
    name: 'vue instance',
    job: 'web development',
    website: 'http://www.baidu.com',
    websiteTag: '<a href="http:www.baidu.com">baidu</a>'
  },
  methods: {
    greet(time) {
      return `Hello Vue ${time} ${this.name}`
    }
  }
})

/**
 * el: element 需要将试图挂载的元素，一定是HTML中的根容器元素
 * data: 用于当前数据的存储，以键值对的形式存储，在HTML中可以直接使用 {{ key }}的方式获取值
 * methods: 用于存储各种方法
 */