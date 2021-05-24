<template>
  <div class="detail">
    <h1>{{blog.title}}</h1>
    <section>

      {{blog.contents}}
      <!-- {{blog.contents}} -->
    </section>
    <router-link :to="{ name: 'blogHome', params: { id: blog._id }}" class="link">돌아가기</router-link>
  </div>
</template>
<script>
export default {
  created: function () {
    var id = this.$route.params.id;
    this.whatisid = id
    this.$http.get(`/api/blog/${id}`, {id: this.id})
        .then((response) => {
            this.blog = response.data.detailPost
        })
  },
  data: function () {
    return {
      whatisid:'',
      blog: []
    }
  }
}
</script>