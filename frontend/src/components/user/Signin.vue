<template>
  <div id="login">
    <div> Login </div>
    <input v-model="user.id" placeholder="id"> <br/>
    <input v-model="user.password" type="password"  placeholder="password"> <br/>
    <button v-on:click="login" >로그인</button> <br/>
    <a v-bind:href="url.signUpUrl" >회원가입으로 가기 </a>
  </div>
</template>

<script>
export default {
    data () {
        return {
            user: {
                id: '',
                password: ''
            },
            url: {
                signUpUrl: '/user/signUp'
            }
        }
    },
    methods: {
        login: function (event) {
            this.$http.post('/api/login/checkLogin', {
                user: this.user
            })
            .then(
                (response) => {
                    alert('succes login')

                    // routing - 페이지 이동
                    this.$router.push('/user')
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
