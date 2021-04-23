<template>
  <div class="wrap">
    <h1>BLOG</h1>
    <router-link :to="{ name: 'create'}" class="link">글쓰기</router-link>

    <ul class="blogs">
      <li v-for="post in posts" class="item" :key="post.id">
        <p>{{post.title}}</p>
        <p>{{post.contents}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created () {
    // 컴포넌트가 생성될 때, /api/blog에 요청을 보냅니다.          
    this.$http.get('/api/blog')
        .then((response) => {
          this.posts = response.data.allPosts
        })
  },
  data () {
    return {
      posts: []
    }
  }
}
</script>