<template>
  <div class="detail">
    <template v-if="this.update">
        <h1><input v-model="body.title" placeholder="title"></h1>
    </template>
    <template v-else>
        <h1>{{blog.title}}</h1>
    </template>

    
    <section>
      <template v-if="this.update">
        <input v-model="body.contents" placeholder="contents">
      </template>
      <template v-else>
        {{blog.contents}}
      </template>
    </section>
    <button v-on:click="btnDelete">삭제하기</button>

    <template v-if="this.update">
      <button v-on:click="btnUpdateDone">수정완료</button>
    </template>
    <template v-else>
      <button v-on:click="btnUpdate">수정하기</button>
    </template>

    <router-link :to="{ name: 'blogHome', params: { id: blog._id }}" class="link">돌아가기</router-link>
  </div>
</template>
<script>
export default {
  created: function () {
    this.id = this.$route.params.id;
    this.$http.get(`/api/blog/${this.id}`, {id: this.id})
        .then((response) => {
            this.blog = response.data.detailPost
        })
  },
  data: function () {
    return {
      id: '',
      update: false,
      blog: [],
      body: {
        title: '',
        contents: ''
      }
    }
  },
  methods: {
    btnDelete: function (event) {
        this.$http.delete(
          `/api/blog/delete/${this.id}`, 
          {id: this.id}
          )
        .then(
            (response) => {
                if (response.data.result === 0) {
                    alert('Error, please, try again')
                }
                if (response.data.result === 1) {
                    alert('delete success')

                    // routing - 페이지 이동
                    this.$router.push('/blog')
                }
            },
            (error) =>{
                alert(error.response.data.error)
            }
        )
        .catch(error => {
            alert(error)
        })
    }, 
    btnUpdate: function(event) {
      this.update = true
    },
    btnUpdateDone: function(event) {
      console.log(this.id, this.body);
      this.$http.post(
        `/api/blog/update/${this.id}`, 
        {id: this.id, body: this.body}
      ).then(
        (response) => {
          if (response.data.result === 0) {
            alert('Error, please, try again')
          }
          if (response.data.result === 1) {
            alert('update success')

            this.$router.push(`/blog`)
          }
        },
        (error) => {
          alert(error.response.data.error)
        }
      )
      .catch(error => {
        alert(error)
      })
      this.update = false
    }
  }
}
</script>