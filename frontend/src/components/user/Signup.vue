<template>
    <div id='SignUp'>
        <div>Sign Up</div>
        id: <input v-model="user.id" placeholder="id"> <br/>
        password:<input v-model="user.password" placeholder="password"> <br/>
        name: <input v-model="user.name" placeholder="name"> <br/>
        <button v-on:click="signUp">회원가입</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            user: {
                id: '',
                password: '',
                name: ''
            }
        }
    },
    methods: {
        signUp: function (event) {
            //axios 사용
            this.$http.post('/api/login/signUp', {
                user: this.user
            })
            .then((response) => {
                if (response.data.result === 0) {
                    alert('Error, please, try again')
                }
                if (response.data.result === 1) {
                    alert('success')
                    this.$router.push('/user')
                }
            }).catch(function (error) {
                alert('error')
            })
        }
    }
}
</script>