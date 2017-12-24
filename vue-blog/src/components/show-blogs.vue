<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div class="single-blog" v-for="blog in filteredBlog" :key="blog.id">
      <router-link :to="'/blog/' + blog.id">
        <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
      </router-link>
      <article>
        {{ blog.body | snippet }}
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        blogs: [],
        search: ''
      }
    },
    computed: {
      filteredBlog() {
        return this.blogs.filter(blog => {
          return blog.title.match(this.search)
        })
      }
    },
    created() {
      this.$http.get('../../static/posts.json').then(function(data) {
        this.blogs = data.body.slice(0, 10)
      })
    }
  }
</script>

<style scoped>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background-color: #eee;
  border: 1px dotted #aaa;
}

#show-blogs a {
  color: #444;
  text-decoration: none;
}

input[type="text"] {
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

</style>