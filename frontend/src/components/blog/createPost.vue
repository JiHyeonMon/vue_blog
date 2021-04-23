<template>
  <div id="blog">
    <div> 글쓰기 </div>
    title: <input v-model="post.title" placeholder="title"> <br/>
    contents: <input v-model="post.contents" placeholder="contents"> <br/>
    <button v-on:click="createPost" >글 쓰기</button> <br/>
    <a v-bind:href="url.blogHome" >돌아가기 </a>
  </div>
</template>

<script>
export default {
    data () {
        return {
            post: {
                title: '',
                contents: ''
            },
            url: {
                blogHome: '/blog'
            }
        }
    },
    methods: {
        createPost: function (event) {
            this.$http.post('/api/blog/create', {
                post: this.post
            })
            .then(
                (response) => {
                    if (response.data.result === 0) {
                        alert('Error, please, try again')
                    }
                    if (response.data.result === 1) {
                        alert('succes posting')

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
        }
    }
}
</script>
